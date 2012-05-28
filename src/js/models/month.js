// Calendar Model
// =============================
// Represents a month.

(function(ns) {
    ns.classes.models.Calendar = Backbone.Model.extend({
        defaults: {
            title : 'January',
            id : 0, // Index month
            days : 31,
            firstDay : 0,
            hits: null,
            lastHit : null
        },

        initialize: function(){
            var that = this;

            // Populate empty hit array
            if (this.attributes.hits == null){
                this.attributes.hits = [];
            }

            this.on("error", function(model, error) {
                console.error(model.get("title") + " " + error);
            });

            this.on('change:hits', function(){
                that.sortHits().save();
            });
        },

        checkComboStreak: function(){
            var lastHit = this.get('lastHit');
            // Edge case, check prev month, too.
            var prevMonth = this.getPrevMonth();

            // If this is the first day of the month, check
            // last day of prev month.
            if (lastHit == 0 && prevMonth){
                if (_.last(prevMonth.getAllHitsAr()) == 1){
                    return true;
                }
            }else{
                return this.get('hits').indexOf(lastHit - 1) !== -1;
            }
            return false;
        },

        // Ensure bad dates don't get added.
        validate: function(attr){
            var min = Math.min.apply( Math, attr.hits);
            var max = Math.max.apply( Math, attr.hits);
            if (min < 0 || max > attr.days){
                return 'hit date is out of range';
            }
        },

        // Called on every hit, sorts the hit array.
        sortHits: function(){
            this.get('hits').sort(function(a,b){
                return a - b
            });
            return this;
        },

        // Return the previous month or undefined.
        // Optional bool to specify wraparound month instead of undefined.
        getPrevMonth: function(wantWrap){
            var index = this.get('id');
            var prevMonth = this.collection.at(index - 1);
            if (!prevMonth && wantWrap){
                return this.collection.last();
            }
            return prevMonth;
        },

        // Adds a calendar hit.
        hit: function(day){
            var hits = this.get('hits');
            hits.push(day);
            this.set('lastHit', day);
            this.trigger("change:hits");
        },

        // Removes a calendar hit.
        removeHit: function(day){
            var hits = this.get('hits');
            var index = hits.indexOf(day);
            var lastHit = this.get('lastHit');
            if (index !== -1){
                hits.splice(index, 1);
                this.trigger("change:hits");
                if (lastHit == day){
                    this.set({
                        lastHit: null
                    });
                }
            }
        },

        // Adds or removed a calendar hit with a add / remove callback.
        toggleHit: function(day, addCallback, removeCallback){
            var hits = this.get('hits');
            if (hits.indexOf(day) == -1){
                this.hit(day);
                if (addCallback){
                    addCallback();
                }
            }else{
                this.removeHit(day);
                if (removeCallback){
                    removeCallback();
                }
            }
        },

        // Returns an array of all days of of the month and their hit status:
        // [0,1,1,0,0...]
        getAllHitsAr: function(){
            var length = this.get('days')
            var hitsAr = this.get('hits');
            var allHits = [];

            for (var i = 0; i < length; i++){
                allHits.push(_.include(hitsAr, i) ? 1 : 0);
            }
            return allHits;
        }
    });

})(mandible);