
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ceisa-files-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/service-worker.js',
        '/manifest.json',
        '/public/files/data.xlsx',
        '/public/files/dokumen1.pdf'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
