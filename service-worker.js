const CACHE_NAME = "learn-play-v4";

const FILES_TO_CACHE = [

    "index.html",
    "games.html",
    "abc.html",
    "123.html",
    "memory.html",
    "color.html",
    "animals.html",

    "manifest.json",

    "assets/css/style.css",

    "assets/icon/icon-192.png",
    "assets/icon/icon-512.png"

];


/* =========================
   INSTALL
========================= */

self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches.open(CACHE_NAME)
                .then(cache => {

                    return cache.addAll(
                        FILES_TO_CACHE
                    );

                })

        );

    }
);


/* =========================
   ACTIVATE
========================= */

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches.keys()
                .then(keys => {

                    return Promise.all(

                        keys
                            .filter(
                                key =>
                                    key !== CACHE_NAME
                            )
                            .map(
                                key =>
                                    caches.delete(key)
                            )

                    );

                })

        );

    }
);


/* =========================
   FETCH
========================= */

self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            caches.match(
                event.request
            )
            .then(
                cachedResponse => {

                    return (
                        cachedResponse ||
                        fetch(event.request)
                    );

                }
            )

        );

    }
);