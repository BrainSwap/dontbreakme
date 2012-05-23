// Base View
// =============================
// All views extend this view.

(function(ns){
    ns.classes.views.base = Backbone.View.extend({

        activatedPartials : false,

        // Loop through any view partials passed in through controller and
        // instantiate them. If the View partial item is an array it is assumed
        // the second argument is the options to instantiate the view with.
        activatePartials: function(){
            var renderedPartials = this.renderedViewPartials;
            _.each(this.options.viewPartials, function(View){
                var view, options;
                if (View instanceof Array){
                    options = View[1];
                    View = View[0];
                }

                view = options ? new View(options) : new View;
                if ('render' in view){
                    console.log('rendering partial %s', view.$el.selector);
                    view.render();
                }
                renderedPartials.push(view);
            });
        },

        // Placeholder for view partial classes.
        // viewPartials: [], // this is in this.options;
        renderedViewPartials: [],

        destroy : function(){
            if (this.unregisterEvents){
                this.unregisterEvents();
            }

            if (this.el){
                $(this.el).remove();
            }
        }
    });
})(mandible);
