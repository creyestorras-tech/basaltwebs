// ============================================================
// CONFIGURACIÓN — credenciales via variables de entorno Vercel
// ============================================================
const ODOO_URL  = process.env.ODOO_URL  || "https://reignreagents.odoo.com";
const ODOO_DB   = process.env.ODOO_DB   || "danirrm-reignreagents-main-11433927";
const ODOO_USER = process.env.ODOO_USER || "info@reignreagents.com";
const API_KEY   = process.env.ODOO_KEY  || "1234";
// ============================================================

const https = require("https");
const http  = require("http");

function jsonRequest(url, body, cookies) {
  return new Promise((resolve, reject) => {
    const parsed  = new URL(url);
    const bodyStr = JSON.stringify(body);
    const lib     = parsed.protocol === "https:" ? https : http;
    const headers = {
      "Content-Type":   "application/json",
      "Content-Length": Buffer.byteLength(bodyStr),
    };
    if (cookies) headers["Cookie"] = cookies;

    const opts = {
      hostname: parsed.hostname,
      port:     parsed.port || (parsed.protocol === "https:" ? 443 : 80),
      path:     parsed.pathname,
      method:   "POST",
      headers
    };
    const req = lib.request(opts, res => {
      let data = "";
      const setCookie = res.headers["set-cookie"];
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          json._cookies = setCookie
            ? setCookie.map(c => c.split(";")[0]).join("; ")
            : cookies || "";
          resolve(json);
        } catch(e) {
          reject(new Error("Invalid JSON: " + data.substring(0, 200)));
        }
      });
    });
    req.on("error", reject);
    req.write(bodyStr);
    req.end();
  });
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin",  "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")    return res.status(405).json({error:"Method not allowed"});

  try {
    const { action, params } = req.body || {};

    if (action === "authenticate") {
      const r = await jsonRequest(`${ODOO_URL}/web/session/authenticate`, {
        jsonrpc:"2.0", method:"call", id:1,
        params:{ db:ODOO_DB, login:ODOO_USER, password:API_KEY }
      });
      if (r.error) throw new Error(r.error.data?.message || JSON.stringify(r.error));
      if (!r.result?.uid) throw new Error("Autenticación fallida");
      return res.status(200).json({ uid:r.result.uid, session:r._cookies });
    }

    if (action === "search_read") {
      const { session, model, domain, fields, limit, order } = params;
      const r = await jsonRequest(`${ODOO_URL}/web/dataset/call_kw`, {
        jsonrpc:"2.0", method:"call", id:Date.now(),
        params:{
          model, method:"search_read",
          args:[domain],
          kwargs:{ fields, limit:limit||10000, order:order||"" }
        }
      }, session);
      if (r.error) throw new Error(r.error.data?.message || JSON.stringify(r.error));
      return res.status(200).json({ result:r.result||[] });
    }

    return res.status(400).json({error:"Unknown action"});

  } catch(err) {
    return res.status(500).json({error: err.message || "Server error"});
  }
};
