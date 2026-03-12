const CACHE_NAME = "crazybugs-v1";
const BASE_URL = "https://xyuaUi.github.io/crazybugsbyxyua/";

const ASSETS = [
  BASE_URL + "assets/audio/lobbyost.m4a",
  BASE_URL + "assets/audio/characterost.m4a",
  BASE_URL + "assets/bgcharacter.png",
  BASE_URL + "assets/soundfx/touch.mp3",
  BASE_URL + "assets/lobbybg.png",
  BASE_URL + "assets/windowstab.png",
  BASE_URL + "assets/pointer.png",
  BASE_URL + "assets/splashloading2.png",
  BASE_URL + "assets/splashscreen.png",
  BASE_URL + "assets/loadingbg.png",
  BASE_URL + "icons/icon-16.png",
  BASE_URL + "icons/icon-32.png",
  BASE_URL + "icons/icon-48.png",
  BASE_URL + "icons/icon-72.png",
  BASE_URL + "icons/icon-96.png",
  BASE_URL + "icons/icon-128.png",
  BASE_URL + "icons/icon-144.png",
  BASE_URL + "icons/icon-152.png",
  BASE_URL + "icons/icon-180.png",
  BASE_URL + "icons/icon-192.png",
  BASE_URL + "icons/icon-256.png",
  BASE_URL + "icons/icon-384.png",
  BASE_URL + "icons/icon-512.png",
  BASE_URL + "icons/icon-16-maskable.png",
  BASE_URL + "icons/icon-32-maskable.png",
  BASE_URL + "icons/icon-48-maskable.png",
  BASE_URL + "icons/icon-72-maskable.png",
  BASE_URL + "icons/icon-96-maskable.png",
  BASE_URL + "icons/icon-128-maskable.png",
  BASE_URL + "icons/icon-144-maskable.png",
  BASE_URL + "icons/icon-152-maskable.png",
  BASE_URL + "icons/icon-180-maskable.png",
  BASE_URL + "icons/icon-192-maskable.png",
  BASE_URL + "icons/icon-256-maskable.png",
  BASE_URL + "icons/icon-384-maskable.png",
  BASE_URL + "icons/icon-512-maskable.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => cached);
    })
  );
});
