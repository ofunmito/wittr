self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('wittr-static-v1').then(function(cache) {
            return cache.addAll([
                '/',
                'js/main.js',
                'css/main.css',
                'imgs/icon.png',
                'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
                'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
            ]);
        })
    );
});

// My Solution - Not working perfectly
// self.addEventListener('fetch', function(event) {
//     // TODO: respond with an entry from the cache if there is one.
//     // If there isn't, fetch from the network.
//     event.respondWith(function() {
//         const cachedResponse = caches.match(event.request);
//         // Return it if we found one.
//         if (cachedResponse) return cachedResponse;
//         // If we didn't find a match in the cache, use the network.
//         return fetch(event.request);
//     }());
// });

// Jake's Solution
self.addEventListener('fetch', function(event) {
    // TODO: respond with an entry from the cache if there is one.
    // If there isn't, fetch from the network.
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Return it if we found one.
            if (response) return (response);
            // If we didn't find a match in the cache, use the network.
            return fetch(event.request);
        })
    );
});