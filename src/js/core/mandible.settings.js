// Brainswap global settings object
// =============================
// Namespace for holding global settings.
(function (bs) {
    bs.settings = {
        apiURL: 'api.dontbreak.me'
    };

    window.mandible = bs;
})({});

/* Enables CORS for all ajax calls. */
$.ajaxSetup({
    xhrFields:{
        withCredentials: true
    }
});
