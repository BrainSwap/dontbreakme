(function(ns) {
	var model = ns.classes.models.User = Backbone.Model.extend({

        defaults: {
            'id': 'user',
            'email': null,
            'userName': null,
            'firstName': null,
            'sounds' : 'off',
            'lastName': null
        },

        localStorage: new Backbone.LocalStorage('user'),

        load: function(){
            if (window.localStorage && localStorage.user){
                this.fetch();
            }
            return this;
        },

        initialize: function(){
            this.on('change:sounds', function(model, item){
                this.save();
            });
        }

    });

})(mandible);

