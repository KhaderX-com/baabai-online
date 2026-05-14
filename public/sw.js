self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// No-op service worker placeholder to avoid 404s during local development.
self.addEventListener("fetch", () => {});
