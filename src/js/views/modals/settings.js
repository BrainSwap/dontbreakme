// settings Modal View
// =============================

(function(ns){
    ns.classes.views.modals.Settings = ns.classes.views.modals.Base.extend({

        title : 'Settings',

        initialize: function(){
            this.model = ns.data.user;

            // Set current sound sprite.
            this.model.bind('change:sounds', function(model, val){
                if (val !== 'off'){
                    $('#audio-player').attr('src', '/sounds/' + val + '/all.wav');
                }
            });
        },

        events: {
            'click input.radio' : 'selectSound'
        },

        template: ns.helpers.loadTemplate('tmpl_partial_settings'),

        selectSound : function(e){
            ns.data.user.set({
                sounds : e.target.value
            });
        },

    });
})(mandible);
