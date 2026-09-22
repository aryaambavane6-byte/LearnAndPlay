const CACHE_NAME = "learn-play-v6";

const FILES_TO_CACHE = [

    /* =========================
       HTML FILES
    ========================= */

    "index.html",
    "games.html",
    "abc.html",
    "123.html",
    "memory.html",
    "color.html",
    "animals.html",
    "sequence.html",


    /* =========================
       PWA FILES
    ========================= */

    "manifest.json",

    "assets/css/style.css",

    "assets/icon/icon-192.png",
    "assets/icon/icon-512.png",


    /* =========================
       ABC IMAGES
    ========================= */

    "assets/images/ABC/apple.jpg",
    "assets/images/ABC/ball.jpg",
    "assets/images/ABC/cow.jpg",
    "assets/images/ABC/dog.jpg",
    "assets/images/ABC/elephant.jpg",
    "assets/images/ABC/fish.jpg",
    "assets/images/ABC/house.jpg",
    "assets/images/ABC/icecream.jpg",
    "assets/images/ABC/juice.jpg",
    "assets/images/ABC/mango.jpg",


    /* =========================
       ANIMAL IMAGES
    ========================= */

    "assets/images/Animal/cat.jpg",
    "assets/images/Animal/cow.jpg",
    "assets/images/Animal/dog.jpg",
    "assets/images/Animal/elephant.jpg",
    "assets/images/Animal/giraffe.jpg",
    "assets/images/Animal/lion.jpg",
    "assets/images/Animal/monkey.jpg",
    "assets/images/Animal/panda.jpg",
    "assets/images/Animal/rabbit.jpg",
    "assets/images/Animal/tiger.jpg"

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
