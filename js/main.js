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

        'pace': "../js/libs/pace.min",

        'Handlebars': "../js/libs/handlebars-v1.3.0",

        'hbs': '../js/libs/hbs'
    },

    hbs: { // optional
        helpers: true,            // default: true
        i18n: false,              // default: false
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
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

        'pace': {
            deps: ['jquery'],

            exports: 'pace'
        },

        'Handlebars': {
            deps: ['jquery'],

            exports: 'Handlebars'
        }
    },
});

require([
   'modernizr',

   'jquery-ui',

   'imagesloaded',

   'jplayer',

   'video',

   'bigvideo',

   'transit',

   'Handlebars',
   
   'playList',

   'loadVideo'
   


], function (modernizr, $, imagesloaded, jplayer, video, bigvideo, transit, Handlebars, playList, loadVideo) {
    
    $('.wrapper').on("playerLoaded", function() {
        new loadVideo();
    })
    playList.placeTemplate();
    playList.installPlayer();
	

});