const staticDevNetflix = "dev-netflix-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/img/background.jpg",
  "/img/boxshot.png",
  "/img/device-pile.png",
  "/img/download-icon.gif",
  "/img/kids.png",
  "/img/logo.png",
  "/img/mobile-0819.jpg",
  "/img/tv.png",
  "/video/gadget.m4v",
  "/video/tv.m4v",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevNetflix).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })