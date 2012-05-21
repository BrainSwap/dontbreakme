// Header Partial
// =============================
// Loaded on pages that have owner logged in.

(function(ns){
    ns.classes.views.partials.header = ns.classes.views.base.extend({
        el: 'body header',

        events: {
        },

        template: ns.helpers.loadTemplate('tmpl_partial_header'),

        initialize: function(){
        },

        render: function(){
            $(this.el).html(this.template());
            return this;
        },

        registerEvents: function(){
            // Bind to route changes
            // Can add logic here to change the header when the URL changes
            ns.router.bind('all', function (route, section) {
            });
        },
        unregisterEvents: function(){
        }
    });
})(mandible);
