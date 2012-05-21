// about Modal View
// =============================

(function(ns){
    ns.classes.views.modals.About = ns.classes.views.modals.Base.extend({

        title : 'About',

        template: ns.helpers.loadTemplate('tmpl_partial_about')

    });
})(mandible);
