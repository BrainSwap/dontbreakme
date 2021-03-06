// Months Collection
// =============================
// Holds models of current months.

(function(ns) {
	var model = ns.classes.collections.Months = Backbone.Collection.extend({
        defaults: {
        },

        localStorage: new Backbone.LocalStorage('calendar'),
        model: ns.classes.models.Month,

        loadSaved: function(){
            if (window.localStorage && localStorage.calendar){
                this.each(function(model){
                    if ('calendar-' + model.get('id') in localStorage){
                        model.fetch()
                    }
                });
            }
            return this;
        },

        initialize: function(){
        }
    });

})(mandible);

