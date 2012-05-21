// Footer View
// =============================

(function(ns){
    ns.classes.views.partials.footer = ns.classes.views.base.extend({
        el: 'footer',

        events: {
        },

        template: ns.helpers.loadTemplate('tmpl_partial_footer'),

        render: function(){
            $(this.el).html(this.template());
        },

        registerEvents: function(){},
        unregisterEvents: function(){}
    });
})(mandible);
