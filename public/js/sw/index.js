self.addEventListener('fetch', function(event) {
    // TODO: respond to all requests with an html response
    // containing an element with class ="a-winner-is-me".
    // Ensure the Content-Type of the response is "text/html"
    event.respondWith(
        new Response('<div class="a-winner-is-me">This is my first experience hijacking a serviceWorker request</div>', {
            headers: { 'Content-Type': 'text/html' } // pass in the Content-Type as a header
        })
    );
    console.log(event.request);
});