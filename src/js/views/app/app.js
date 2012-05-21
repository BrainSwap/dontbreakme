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

            ns.data.calendars = new ns.classes.collections.Calendars(ns.helpers.populateDefaultCalendarCollection());
            ns.data.calendars.loadSaved();

            this.calendarView = new ns.classes.views.calendar({
                collection : ns.data.calendars
            });

            this.render();
        },

        render: function(){
            this.$el.append(this.calendarView.render().el);
        },

        registerEvents: function(){
        }
    });
})(mandible);
