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

            ns.data.user.on('change:sounds', this.setTheme);
            this.setTheme();

            this.render();
        },

        render: function(){
            this.$el.append(this.monthsView.render().el);
        },

        setTheme: function(){
            var ext = '.mp3';
            var theme = ns.data.user.get('sounds');
            // Most browsers support mp3 but Firefox, falling back to .ogg.
            if ($.browser.mozilla){
                ext = '.ogg';
            }
            if (theme !== 'none'){
                $('#audio-player').attr('src', '/sounds/' + theme + '/all' + ext);
            }
        },

        registerEvents: function(){
        }
    });
})(mandible);
