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

            ns.data.user.on('change:sounds', this.setTheme);
            this.setTheme();

            this.render();
        },

        render: function(){
            this.$el.append(this.calendarView.render().el);
        },

        setTheme: function(){
            var theme = ns.data.user.get('sounds');
            if (theme !== 'none'){
                $('#audio-player').attr('src', '/sounds/' + theme + '/all.wav');
            }
        },

        registerEvents: function(){
        }
    });
})(mandible);
