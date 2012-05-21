// login Modal View
// =============================

(function(ns){
    ns.classes.views.modals.Login = ns.classes.views.modals.Base.extend({

        title : 'Log In',

        template: ns.helpers.loadTemplate('tmpl_partial_login')

    });
})(mandible);
