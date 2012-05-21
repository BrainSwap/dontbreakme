// Base Modal View
// =============================
// All modal views extend this view.

(function(ns){
    ns.classes.views.modals.Base = Backbone.View.extend({

        className : 'modal',
        templateModal: ns.helpers.loadTemplate('tmpl_partial_modal'),

        title : 'Enter title',

        render: function(){
            var that = this;

            var $el = $(this.el).html(this.templateModal({
                title : this.title,
                body : this.template({
                    model : this.model
                }),
            }));
            $.blockUI({
                message: $el,
                onUnblock: function(){
                    that.unregisterEvents();
                }, 
            });
            $('.blockMsg').css({
                width:$el.width()+'px', 
                height:$el.height()+'px', 
                marginTop: (-$el.height())/2+'px',
                marginLeft: (-$el.width())/2+'px'
            });


            return this;
        },

        closeModal: function(e){
            $.unblockUI();
            if (e){
                e.preventDefault();
            }
        },

        registerEvents: function(){
            $(document.body).delegate('a.modal-close', 'click', this.closeModal);
            return this;
        },

        unregisterEvents: function(){
            $(document.body).undelegate('a.modal-close', 'click');
            return this;
        }
    });
})(mandible);
