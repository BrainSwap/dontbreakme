// Routes
// =============================
// Tracks the URL hash change.

(function (ns) {
    ns.classes.Router = Backbone.Router.extend({

        routes:{
            "":"welcome",
            "login":"login",
            "signup":"signup",
            "about":"about",
            "logout":"logout"
        },

        /* /welcome */
        welcome:function () {
        },

        /* /login */
        login:function () {
            // TODO:
            alert('This view is popup and not done');
        },

        /* /signup */
        signup:function () {
            // TODO:
            alert('This view is popup and not done');
        },

        /* /about */
        about:function () {
            // TODO:
            alert('This view is popup and not done');
        },

        /* /logout */
        logout:function () {
            ns.helpers.logout();
        },

        // Called on Backbone.history.start.
        initialize:function () {
            console.log('Router initialize', arguments);
        }
    });

})(mandible);
