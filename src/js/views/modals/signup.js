// signup Modal View
// =============================

(function(ns){
    ns.classes.views.modals.Signup = ns.classes.views.modals.Base.extend({

        title : 'Sign Up',

        template: ns.helpers.loadTemplate('tmpl_partial_signup')

    });
})(mandible);
