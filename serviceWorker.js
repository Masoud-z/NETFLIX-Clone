const staticDevNetflix = "dev-netflix-site-v1";
const assets = [
  "./",
  "./index.html",
  "./offline.html",
  "./css/style.css",
  "./js/main.js",
  "./img/background.jpg",
  "./img/boxshot.png",
  "./img/device-pile.png",
  "./img/download-icon.gif",
  "./img/kids.png",
  "./img/logo.png",
  "./img/mobile-0819.jpg",
  "./img/tv.png",
  "./video/gadget.m4v",
  "./video/tv.m4v",
];

self.addEventListener("install", function (event) {
  event.waitUntil(preLoad());
});

const preLoad = function () {
  console.log("Installing web app");
  return caches.open("offline").then(function (cache) {
    console.log("caching index and important routes");
    return cache.addAll(assets);
  });
};

self.addEventListener("fetch", function (event) {
  event.respondWith(
    checkResponse(event.request).catch(function () {
      return returnFromCache(event.request);
    })
  );
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function (request) {
  return new Promise(function (fulfill, reject) {
    fetch(request).then(function (response) {
      if (response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return fetch(request).then(function (response) {
      console.log(response.url + " was cached");
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status == 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};
