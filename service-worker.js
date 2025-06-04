self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("mufrodat-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "https://cdn.tailwindcss.com",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
