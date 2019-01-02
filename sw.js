const version = "0.6.11";
const cacheName = `ajilspace-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/assets/css/main.css`,
        `/assets/js/functions.js`,
        `/assets/js/jquery-2.1.4.min.js`,
        `/assets/img/bulb-g.svg`,
        `/assets/img/bulb-r.svg`,
        `/assets/img/bulb-y.svg`,
        `/assets/img/icon-link.svg`,
        `/assets/img/icon-location.svg`,
        `/assets/img/icon-outlet.svg`,
        `/assets/img/icon-sched.svg`,
        `/assets/img/icon-tel.svg`,
        `/assets/img/icon-w3w.svg`,
        `/assets/img/icon-wifi.svg`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});