// Service worker del sistema del Consejo Local.
// Estrategia: SIEMPRE intenta la red primero (así nunca ves una versión vieja al publicar cambios);
// solo si no hay conexión usa la copia guardada. No toca Firebase ni ningún sitio externo.
const CACHE = 'consejo-local-v1';
const BASE = ['./', 'index.html', 'MinutasConsejoLocal.html', 'DisciplinaConsejoLocal.html', 'MinisteriosConsejoLocal.html', 'PersonasConsejoLocal.html',
  'salem.css', 'salem-ui.js', 'logo.png', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(BASE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if(r.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(r).then(res => {
    if(res && res.ok){ const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); }
    return res;
  }).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
