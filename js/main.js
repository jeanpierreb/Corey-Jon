requirejs.config({
    paths: {
        'modernizr': '../js/libs/modernizr-2.5.3.min',

        'jquery': "//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min",

        'jquery-ui': "../js/libs/jquery-ui-1.8.22.custom.min",

        'imagesloaded': "../js/libs/jquery.imagesloaded.min",

        'video': "http://vjs.zencdn.net/c/video",

        'bigvideo': "../js/libs/bigvideo",

        'transit': "../js/libs/jquery.transit.min",

        'jplayer': "../js/libs/jquery.jplayer.min",

        'Handlebars': "../js/libs/handlebars-v1.3.0"
    },

    shim: {
        'modern': {
            deps: ['modernizr'],

            exports: 'modern'
        },

        'jquery': {
        	deps: ['require'],

            exports: '$'
        },

        'jquery-ui': {
            deps: ['jquery'],

            exports: '$'
        },

        'imagesloaded': {
            deps: ['jquery'],

            exports: 'imagesloaded'
        },

        'video': {
            deps: ['jquery'],

            exports: 'video'
        },

        'bigvideo': {
            deps: ['jquery'],

            exports: 'bigvideo'
        },

        'transit': {
            deps: ['jquery'],

            exports: 'transit'
        },

        'jplayer': {
            deps: ['jquery'],

            exports: 'jplayer'
        },

        'Handlebars': {
            deps: ['jquery'],

            exports: 'Handlebars'
        }
    },
});

require([
   'modernizr',

   'jquery',

   'jquery-ui',

   'imagesloaded',

   'jplayer',

   'video',

   'bigvideo',

   'transit',

   'Handlebars',

   '../js/playList',

   '../js/loadVideo'


], function () {
	var template = Handlebars.compile($("#screener").html());
    $('body').find('.wrapper').html(template());
});