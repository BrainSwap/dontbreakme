// Brainswap controller
// =============================
// Sits between views and models. Creates and passes data to views.
(function (ns) {
    var proto;

    ns.classes.Controller = function () {};

    proto = ns.classes.Controller.prototype;

    // Routes router call to a view. Creates view if required while destroying
    // previous view.
    proto.routeTo = function (section, subsection, options) {
        console.warn('Routeto section', section, 'subsection', subsection, 'options', options);
        var oldView = ns.currentView;
        var newView, $newViewEl;
        var hash = window.location.hash;
        var classObj;

        // View logic: Depending on "Section" complexity, each section of the application can have multiple views
        // (spawning off one base view) or a single view with many templates it uses to handle sections.
        var viewClass = typeof ns.classes.views[section] == 'object' ? ns.classes.views[section][subsection] : ns.classes.views[section];
        if (!viewClass) {
            throw Error('"' + section + '" does not exist as a view.');
        }

        subsection = subsection || null;
        $newViewEl = $('<div></div>');

        // Object passed to new view class.
        classObj = {
            el:$newViewEl[0],
            section:section,
            subsection:subsection,
            args:options
        };

        // Page and section specific code here. This will eventually be broken
        // up into seperate files.
        // ==============================================
        // If this is welcome page or login page include login partial
        if (hash == "" || hash == "#!/login") {
            //classObj.viewPartials = [ns.classes.views.partials.login]
            // If this is new portfolio page, include editorbar partial.
        } else if (hash == '#!/portfolios/' || hash == '#!/portfolio/new') {
            classObj.viewPartials = [ns.classes.views.partials.footer]
        }else {
            var regex = /^#!\/portfolio\/((\d+\/edit)|(\d+))$/;
            if (hash.search(regex) > -1) {
                classObj.viewPartials = [ns.classes.views.partials.footer];
            }
        }

        // Create new view.
        newView = {
            section:section,
            subsection:subsection,
            view:new viewClass(classObj),
            hash:hash
        };

        if (oldView && oldView.hasOwnProperty('routeInfo')){
            console.log(oldView.routeInfo);
        }

        if (options) {
            console.log(options);
        }

        // If an old view exists remove it's event listeners to prevent it from rendering itself.
        if (oldView) {
            console.log('oldView', oldView);
            if ('unregisterEvents' in oldView) {
                oldView.unregisterEvents();
            }
        }

        // Set reference to current view.
        ns.currentView = newView.view;

        // Render the new view.
        $('#container-inner').append($newViewEl[0]);
        newView.view.render();

        if ('afterRender' in newView.view) {
            newView.view.afterRender();
        }

        if ('registerEvents' in newView.view) {
            newView.view.registerEvents();
        }

        // If an old view exists, retire it and show new view.
        if (oldView) {
            console.log('Remove old view');
            $(oldView.el).hide().remove();
        }

        // Remove pass view style classes
        // and add current view to body class.
        $('body').removeClass(
            function (i, str) {
                var match = str.match(/section-\w*/);
                return match ? match[0] : '';
            }).removeClass(
            function (i, str) {
                var match = str.match(/subsection-\w*/);
                return match ? match[0] : '';
            }).addClass('section-' + section + (subsection ? (' ' + 'subsection-' + subsection) : ''));
    }

})(mandible);
