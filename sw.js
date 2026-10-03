const CACHE_NAME = 'v1_campus_virtual';

self.addEventListener('install', e => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', e => {
  console.log('Service Worker activo');
});

self.addEventListener('fetch', e => {
  // Permite que la app cargue incluso con datos en tiempo real de Firebase
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});