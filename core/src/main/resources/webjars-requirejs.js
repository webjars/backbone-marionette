/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'backbone.marionette': [
            'webjars!jquery.js',
            'webjars!underscore.js',
            'webjars!backbone.js',
            'webjars!backbone.wreq.js',
            'webjars!backbone.babysitter.js' ]
    }
});
