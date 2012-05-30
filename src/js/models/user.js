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

        initialize: function(){
            this.on('change:sounds', function(model, item){
                this.save();
            });
        }

    });

})(mandible);

