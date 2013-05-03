/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'backbone.marionette': [
            'webjars!json2.js',
            'webjars!jquery.js',
            'webjars!underscore.js',
            'webjars!backbone.js',
            'webjars!backbone.eventbinder.js',
            'webjars!backbone.wreqr.js',
            'webjars!backbone.babysitter.js' ]
    }
});
