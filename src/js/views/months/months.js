// Months View
// =============================
// All month views are contained inside this one.

(function(ns){
    ns.classes.views.Months = ns.classes.views.base.extend({
        id: 'calendar',

        events: {
        },

        initialize: function(){
            _.bindAll(this, 'setActiveDayMonth');
            this.collection.on('change:hits', this.setActiveDayMonth);
        },

        setActiveDayMonth: function(){
            var curDay = ns.data.curDate.getDate();
            var curMonth = ns.data.curDate.getMonth();

            this.$el.find('.cal-month' + curMonth).addClass('active-month')
                .find('.cal-day' + curDay).addClass('active-day');
        },

        render: function(){
            var that = this;

            // For each calendar month, create new view.
            this.collection.each(function(model){
                var view = new ns.classes.views.partials.Month({
                    model : model
                })
                that.$el.append(view.render().el);
            });

            this.setActiveDayMonth();
            return this;
        },

        registerEvents: function(){
        }
    });
})(mandible);


