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

   '../js/templates/screen',

   '../js/playList',

   '../js/loadVideo'


], function () {
	var template = Handlebars.compile($("#screener").html());
    data = {
    	"id": '1',
    	"video": 'loop_1.mov',
    	"image": 'loop_1.jpg',
    	"image-id": 'crazy_loud_image',
    	"image-alt": 'Crazy Loud',
    	"section-id": 'crazy_loud'
    }
    $('body').find('.wrapper').append(template(data));

    data = {
    	"id": '2',
    	"video": 'loop_2.mov',
    	"image": 'loop_2.jpg',
    	"image-id": 'crazy_glue_image',
    	"image-alt": 'Can\'t Figure Me Out',
    	"section-id": 'crazy_glue'
    }
    $('body').find('.wrapper').append(template(data));
});