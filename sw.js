const CACHE='anan-kline-v241-live';
const STATIC_ASSETS=[
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;

  const url = new URL(req.url);
  const isNavigation =
    req.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('/index.html');

  // Always try GitHub first for the page itself.
  if(isNavigation){
    event.respondWith(
      fetch(req, {cache:'no-store'})
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put('./index.html', copy));
          return res;
        })
        .catch(() =>
          caches.match('./index.html').then(cached =>
            cached || new Response('Offline', {
              status:503,
              headers:{'Content-Type':'text/plain; charset=utf-8'}
            })
          )
        )
    );
    return;
  }

  // Cache-first only for static files.
  event.respondWith(
    caches.match(req).then(cached =>
      cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(req, copy));
        return res;
      })
    )
  );
});
