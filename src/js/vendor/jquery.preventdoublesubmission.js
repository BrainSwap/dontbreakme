// jQuery plugin to prevent double submission of forms
jQuery.fn.preventDoubleSubmission = function() {
    var $this = $(this);
    var defaultCommitMessage = 'Submitting...';

    $this.bind('submit',function(e){
        var $submit = $this.find('*[type=submit]');
        // Form submit can be input or button.
        var isButton = $submit.is('button');
        var submitValue;
        var oldSubmitValue;

        if ($submit.length){
            // Remember old submit value
            $submit.data('oldSubmitValue', isButton ? $submit.text() : $submit.val());
            // Update submit value
            submitValue = $submit.attr('submitValue');
        }

        // If already submitted, ignore.
        if ($this.data('submitted') === true) {
            // Previously submitted - don't submit again
            e.preventDefault();
        } else {
            // Mark this so that the next submit can be ignored
            $this.data('submitted', true);

            // If custom submit value exists set the submit message.
            if (submitValue){
                if (isButton){
                    $submit.text(submitValue);
                }else{
                    $submit.val(submitValue);
                }

            // Else use default submit message
            }else{
                if (isButton){
                    $submit.text(defaultCommitMessage);
                }else{
                    $submit.val(defaultCommitMessage);
                }
            }
        }
    });

    // Keep chainability
    return $this;
};

// Reenable the form in case of serverside validation error.
jQuery.fn.enableForm = function() {
    var $this = $(this);
    var $submit = $this.find('*[type=submit]');
    var oldSubmitValue = $submit.data('oldSubmitValue');
    var isButton = $submit.is('button');

    if (oldSubmitValue){
        if (isButton){
            $submit.text(oldSubmitValue);
        }else{
            $submit.val(oldSubmitValue);
        }
    }

    $this.data('submitted', false);

    // Keep chainability
    return $this;
};