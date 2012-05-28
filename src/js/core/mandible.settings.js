// Mandible global settings object
// =============================
// Namespace for holding global settings.
(function (ns) {
    ns.settings = {
        apiURL: 'api.dontbreak.me'
    };

    window.mandible = ns;
})({});

/* Enables CORS for all ajax calls. */
$.ajaxSetup({
    xhrFields:{
        withCredentials: true
    }
});

$.blockUI.defaults.css = {
    overlayCSS: {
        cursor: 'auto'
    },
    cursor: 'auto',
    height: '200px',
    width: '400px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-150px',
    marginTop: '-150px',
    textAlign:	'center',
	color:		'#000',
	border:		'3px solid #aaa',
	backgroundColor:'#fff',
	cursor:		'wait',
	maxWidth: '80%'
};

