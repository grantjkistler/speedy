// Speedy moved to https://gkistlergit.github.io/speedy/. This worker clears the
// old offline copy, removes itself and sends open windows to the new address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://gkistlergit.github.io/speedy/');
  })());
});
