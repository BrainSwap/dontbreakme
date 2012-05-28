// App View
// =============================
// All other views are contained inside this one.

(function(ns){
    ns.classes.views.app = ns.classes.views.base.extend({
        el: '#container-inner',

        events: {
        },

        initialize: function(){
            this.activatePartials();

            ns.data.months = new ns.classes.collections.Months(ns.helpers.populateDefaultCalendarCollection());
            ns.data.months.loadSaved();

            this.monthsView = new ns.classes.views.Months({
                collection : ns.data.months
            });

            this.render();
        },

        render: function(){
            this.$el.append(this.monthsView.render().el);
        },

        registerEvents: function(){
        }
    });
})(mandible);
