self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('preisschild-v1').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/form-style.css',
        '/preisschild.css',
        '/manifest.json',
        '/sw.js',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        '/favicon.ico'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
