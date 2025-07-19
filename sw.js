self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('preisschild-v1').then(cache =>
      cache.addAll([
        './',
        './index.html',
        './form-style.css',
        './preisschild.css',
        './manifest.json'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
