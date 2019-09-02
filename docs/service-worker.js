/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/vue-sample-pwa/precache-manifest.a9ce13d65ea87a0299d46ca1f0b18812.js"
);

workbox.core.setCacheNameDetails({prefix: "vue-sample-pwa"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/qiita.com\/api\/.*/, workbox.strategies.networkFirst({ "cacheName":"qiita-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"maxAgeSeconds":300,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
