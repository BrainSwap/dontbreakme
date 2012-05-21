// Month Partial
// =============================
// Represents the markup of a single month.

(function(ns){
    ns.classes.views.partials.Month = ns.classes.views.base.extend({
        className : 'month',

        events: {
            'click .cal-body li a' : 'onSelectDay'
        },

        template: ns.helpers.loadTemplate('tmpl_partial_month'),

        initialize: function(){
            var that = this;
            _.bindAll(this, 'render');

            this.$el.addClass('cal-month' + this.model.get('id'));
            this.model.on('change:hits', this.render);
        },

        onSelectDay: function(e){
            var that = this;
            var day = $(e.target).text();
            day = parseInt(day) - 1;

            this.model.toggleHit(day, function(){
                if (that.model.onComboStreak()){
                    ns.helpers.playSound('combo');
                }else{
                    ns.helpers.playSound('add');
                }
            }, function(){
                ns.helpers.playSound('remove');
            });
            e.preventDefault();
        },

        render: function(){
            var prevMonthStartCount = this.model.getPrevMonth(true).get('days') - this.model.get('firstDay') + 1;
            var inactiveCalendarDaysStart = this.model.get('firstDay');
            var inactiveCalendarDaysEnd = 42 - (this.model.get('firstDay') + this.model.get('days'));

            $(this.el).html(this.template({
                model: this.model,
                daysAr: this.model.getHitJson(),
                inactiveCalendarDaysStart: inactiveCalendarDaysStart,
                inactiveCalendarDaysEnd: inactiveCalendarDaysEnd,
                prevMonthStartCount : prevMonthStartCount
            }));
            return this;
        },

        registerEvents: function(){
        },
        unregisterEvents: function(){
        }
    });
})(mandible);
