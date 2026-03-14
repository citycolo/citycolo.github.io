/**
 * CitIcolo — Serveur de sauvegarde automatique
 * =============================================
 * node server.js
 * Jeu → http://localhost:3000
 *
 * Sauvegarde auto dans ./saves/PSEUDO.txt
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');
const url  = require('url');

const PORT      = 3000;
const SAVES_DIR = path.join(__dirname, 'saves');

if (!fs.existsSync(SAVES_DIR)) fs.mkdirSync(SAVES_DIR, {recursive: true});

// ── Utilitaires ────────────────────────────────────────────
function safeName(u) { return String(u).replace(/[^a-zA-Z0-9_\-]/g, '_'); }
function saveTxtPath(u) { return path.join(SAVES_DIR, safeName(u) + '.txt'); }
function profilesJsonPath() { return path.join(SAVES_DIR, 'profiles.json'); }
function profilesTxtPath()  { return path.join(SAVES_DIR, 'profiles.txt'); }

function readJSON(p, fb = null) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fb; }
}
function writeJSON(p, d) { fs.writeFileSync(p, JSON.stringify(d, null, 2), 'utf8'); }

// Encode / decode  (même algo que le navigateur : Base64 UTF-8)
function encode(data) { return Buffer.from(JSON.stringify(data), 'utf8').toString('base64'); }
function decode(code) {
  try { return JSON.parse(Buffer.from(code.replace(/[\n\r\s]/g,''), 'base64').toString('utf8')); }
  catch { return null; }
}

function writeSaveTxt(username, data) {
  const now  = new Date().toLocaleString('fr-FR');
  const pop  = (data.pop   || 0).toLocaleString('fr-FR');
  const money= Math.floor(data.money || 0).toLocaleString('fr-FR');
  const eco  = Math.floor(data.eco   || 0);
  const bldg = (data.buildings || []).length;
  fs.writeFileSync(saveTxtPath(username),
`CitIcolo — Sauvegarde automatique
===================================
Joueur     : ${username}
Sauvé le   : ${now}
Population : ${pop} habitants
Budget     : ${money}€
Écologie   : ${eco}%
Bâtiments  : ${bldg}
===================================
${encode(data)}
`, 'utf8');
}

function readSaveTxt(username) {
  const p = saveTxtPath(username);
  if (!fs.existsSync(p)) return null;
  const lines = fs.readFileSync(p,'utf8').split('\n').map(l=>l.trim()).filter(Boolean);
  const sep = lines.lastIndexOf('===================================');
  return (sep >= 0 && sep+1 < lines.length) ? decode(lines[sep+1]) : null;
}

function rebuildProfilesTxt(profiles) {
  const now = new Date().toLocaleString('fr-FR');
  let txt = `CitIcolo — Profils joueurs\nServeur : http://localhost:${PORT}\nGénéré  : ${now}\nJoueurs : ${profiles.length}\n${'='.repeat(40)}\n\n`;
  profiles.forEach((p,i) => {
    txt += `${i+1}. ${p.user}\n   Dernière save : ${p.lastSave ? new Date(p.lastSave).toLocaleString('fr-FR') : 'jamais'}\n   Pop : ${(p.pop||0).toLocaleString('fr-FR')} | Budget : ${Math.floor(p.money||0).toLocaleString('fr-FR')}€ | Bâtiments : ${p.buildings||0}\n   Fichier : saves/${safeName(p.user)}.txt\n\n`;
  });
  fs.writeFileSync(profilesTxtPath(), txt, 'utf8');
}

// ── CORS : accepte TOUT, y compris file:// (origin: null) ──
function corsHeaders(req) {
  const origin = req.headers.origin || '*';
  return {
    'Access-Control-Allow-Origin' : origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin',
  };
}

function parseBody(req) {
  return new Promise((res,rej) => {
    let s = '';
    req.on('data', c => s += c);
    req.on('end',  () => { try { res(JSON.parse(s)); } catch { res({}); }});
    req.on('error', rej);
  });
}

// ── Serveur HTTP ──────────────────────────────────────────
http.createServer(async (req, res) => {
  const {pathname, query} = url.parse(req.url, true);
  const cors = corsHeaders(req);

  // Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, cors); res.end(); return;
  }

  const json = (code, data) => {
    res.writeHead(code, {...cors, 'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  };

  // ── Servir CitIcolo.html ────────────────────────────────
  if (req.method === 'GET' && pathname === '/') {
    const f = path.join(__dirname, 'CitIcolo.html');
    if (!fs.existsSync(f)) return json(404, {error: 'CitIcolo.html introuvable.'});
    res.writeHead(200, {...cors, 'Content-Type': 'text/html;charset=utf-8'});
    return res.end(fs.readFileSync(f));
  }

  // ── /ping ───────────────────────────────────────────────
  if (req.method === 'GET' && pathname === '/ping') {
    return json(200, {ok: true, server: 'CitIcolo', version: '5.1'});
  }

  // ── POST /save ──────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/save') {
    const b = await parseBody(req);
    if (!b.user || !b.data) return json(400, {error: 'user + data requis'});

    const saveData = {...b.data, savedAt: new Date().toISOString(), user: b.user};
    writeSaveTxt(b.user, saveData);

    const profiles = readJSON(profilesJsonPath(), []);
    const idx = profiles.findIndex(p => p.user === b.user);
    const profile = {
      user:      b.user,
      createdAt: idx >= 0 ? profiles[idx].createdAt : new Date().toISOString(),
      lastSave:  new Date().toISOString(),
      pop:       b.data.pop       || 0,
      money:     Math.floor(b.data.money || 0),
      eco:       Math.floor(b.data.eco   || 0),
      buildings: (b.data.buildings || []).length,
    };
    if (idx >= 0) profiles[idx] = profile; else profiles.push(profile);
    writeJSON(profilesJsonPath(), profiles);
    rebuildProfilesTxt(profiles);

    console.log(`  💾 [${new Date().toLocaleTimeString()}] ${b.user} | pop:${profile.pop.toLocaleString()} | ${profile.buildings} bâtiments`);
    return json(200, {ok: true, savedAt: profile.lastSave});
  }

  // ── GET /load?user=X ─────────────────────────────────────
  if (req.method === 'GET' && pathname === '/load') {
    const u = query.user;
    if (!u) return json(400, {error: 'user requis'});
    const data = readSaveTxt(u);
    if (!data) return json(404, {error: 'Aucune sauvegarde pour ' + u});
    return json(200, {ok: true, data});
  }

  // ── GET /profiles ─────────────────────────────────────────
  if (req.method === 'GET' && pathname === '/profiles') {
    return json(200, {ok: true, profiles: readJSON(profilesJsonPath(), [])});
  }

  json(404, {error: 'Route inconnue: ' + pathname});

}).listen(PORT, '0.0.0.0', () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║  🏙️  CitIcolo — Serveur de sauvegarde             ║
╠═══════════════════════════════════════════════════╣
║  Jeu     →  http://localhost:${PORT}                 ║
║  Saves   →  ./saves/PSEUDO.txt  (auto, invisible)  ║
║  Profils →  ./saves/profiles.txt                  ║
╚═══════════════════════════════════════════════════╝

  Laisse cette fenêtre ouverte. Sauvegarde auto.
`);
  rebuildProfilesTxt(readJSON(profilesJsonPath(), []));
});
