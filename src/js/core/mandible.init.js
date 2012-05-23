// Brainswap object
// =============================
// Namespace for holding values and helper functions.
(function (ns) {
    // There is only one global router.
    ns.router = null;
    // Reference to current active view.
    ns.currentView = null;
    // reference to current logged-in user.
    ns.currentUser = null;

    // Namespace for all user account data is kept.
    ns.data = {
        // Global templates.
        templates: {},
        calendars: {},
        curDate: new Date(),
        sounds: {
            themes : {
                ki : {
                    add : 'orchid-laserken',
                    combo : ['hyper-combo', 'blaster-combo', 'super-combo', 'ultra-combo','monster-combo'],
                    month : 'perfect',
                    year : 'supreme-victory',
                    remove: 'fulgore-laser'
                },
                random : {
                    add : 'fanfare',
                    combo : ['mmmm', 'woow', 'cheering', 'applause'],
                    month : 'cheering',
                    year : 'applause',
                    remove: 'whahwhah'
                }
            }
        },
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsAr:  [[0, 31], [3, 29], [4, 31], [0, 30], [2, 31], [5, 30], [0, 31], [3, 31], [6, 30], [1, 31], [4, 30], [6, 31]] // [offset, length]
    };

    // Namespace for helper functions.
    ns.helpers = null;

    // Namespace for custom Backbone classes.
    ns.classes = {
        views:{
            partials:{},
            modals:{},
            calendar:{}
        },
        models:{},
        collections:{},
        Controller:{},
        Router:null
    };

    // Main application start point.
    ns.init = function () {
        var h = ns.helpers;

        var session = h.storageGet('session');
        var fragment;

        ns.data.user = new ns.classes.models.User;
        ns.data.user.fetch();

        ns.data.templates.spinner = h.loadTemplate("tmpl_spinner");

        // Setup Contoller, Router, and main app view.
        // ===================
        ns.controller = new ns.classes.Controller;
        ns.router = new ns.classes.Router;
        ns.appView = new ns.classes.views.app({
            viewPartials: [ns.classes.views.partials.header, ns.classes.views.partials.footer]
        });
        if ('registerEvents' in ns.appView){
            ns.appView.registerEvents();
        }

        // Start monitoring hash changes.
        Backbone.history.start({pushState: true});
        fragment = Backbone.history.fragment;

        // Logic to add selected highlight on current tab.
        ns.router.bind('all', function (route, section) {
        });
    };

    // Support pushstate and dialogue popups
    $(document.body).delegate('a', 'click', function(e){
        var $el = $(e.target);
        var link = $el.attr('href');

        if ($el.hasClass('modal-link')){
            (function(){
                var instance;
                var modalClass;

                link = link.replace(/^\//,'');
                modalClass = ns.classes.views.modals[link.charAt(0).toUpperCase() + link.slice(1)];
                if (modalClass){
                    instance = new modalClass();
                    instance.render().registerEvents();
                }else{
                    console.error('Modal class "%s" missing.', link);
                }
            })();
            e.preventDefault();
        }else  if (link.length > 1 && link.indexOf('http') == -1){
            ns.router.navigate(link);
            e.preventDefault();
        }
    });

})(mandible);

$(mandible.init);
