requirejs.config({
    paths: {
        'modernizr': '../js/modernizr-2.5.3.min',

        'jquery': "//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min",

        'jquery-ui': "../js/jquery-ui-1.8.22.custom.min",

        'imagesloaded': "../js/jquery.imagesloaded.min",

        'video': "http://vjs.zencdn.net/c/video",

        'bigvideo': "../js/bigvideo",

        'transit': "../js/jquery.transit.min",

        'jplayer': "../js/jquery.jplayer.min"
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

   'transit'


], function () {
	console.log($);
    //alert('Looks good');

    $(document).ready(function(){

            var playlistOptions = {   playlistOptions:{},
                swfPath: "/js",
                supplied: "mp3, oga",
                smoothPlayBar: false,
                keyEnabled: true,
                audioFullScreen: false,
                repeat: true
            };
        
            var myPlaylist = new jPlayerPlaylist({
                jPlayer: "#jquery_jplayer_1",
                cssSelectorAncestor: "#jp_container_1"
            },[{    title:"Crazy Loud",
                    free: false,
                    mp3: "./music/side-a/crazy_loud.mp3",
                    oga: "./music/side-a/crazy_loud.oga"
                }, {title:"One Minute",
                    free: false,
                    mp3: "./music/side-a/one_minute.mp3",
                    oga: "./music/side-a/one_minute.oga"
                }, {title:"Renegade",
                    free: false,
                    mp3: "./music/side-a/renegade.mp3",
                    oga: "./music/side-a/renegade.oga"
                }, {title:"Out of Control",
                    free: false,
                    mp3: "./music/side-a/out_of_control_2175.mp3",
                    oga: "./music/side-a/out_of_control_2175.oga"
                }],
            playlistOptions);
        $("#playlist-next1").click(function() {myPlaylist.next();});
        $("#playlist-previous1").click(function() {myPlaylist.previous();});

        
            var myPlaylist2 = new jPlayerPlaylist({
                jPlayer: "#jquery_jplayer_2",
                cssSelectorAncestor: "#jp_container_2"
            },[{    title:"Crazy Glue",
                    free: false,
                    mp3: "./music/side-b/crazy_glue.mp3",
                    oga: "./music/side-b/crazy_glue.oga"
                }, {title:"Long Stroke",
                    free: false,
                    mp3: "./music/side-b/long_stroke.mp3",
                    oga: "./music/side-b/long_stroke.oga"
                }, {title:"Matters",
                    free: false,
                    mp3: "./music/side-b/matters.mp3",
                    oga: "./music/side-b/matters.oga"
                }, {title:"Got to Have You",
                    free: false,
                    mp3: "./music/side-b/got_to_have_you.mp3",
                    oga: "./music/side-b/got_to_have_you.oga"
                }],
            playlistOptions);

        $("#playlist2-next").click(function() {myPlaylist2.next();});
        $("#playlist2-previous").click(function() {myPlaylist2.previous();});
        });

		

		$(function() {

            // Use Modernizr to detect for touch devices, 
            // which don't support autoplay and may have less bandwidth, 
            // so just give them the poster images instead
            var screenIndex = 1,
                numScreens = $('.screen').length,
                isTransitioning = false,
                transitionDur = 1000,
                BV,
                videoPlayer,
                isTouch = Modernizr.touch,
                $bigImage = $('.big-image'),
                $window = $(window);
            
            if (!isTouch) {
                // initialize BigVideo
                BV = new $.BigVideo({forceAutoplay:isTouch});
                BV.init();
                showVideo();
                
                BV.getPlayer().addEvent('loadeddata', function() {
                    onVideoLoaded();
                });

                // adjust image positioning so it lines up with video
                $bigImage
                    .css('position','relative')
                    .imagesLoaded(adjustImagePositioning);
                // and on window resize
                $window.on('resize', adjustImagePositioning);
            }
            if (isTouch) {
                $bigImage
                    .css('position','relative')
                    .imagesLoaded(adjustImagePositioning);
                // and on window resize and orientation change
                
                $('#crazy_loud_image').attr('src', 'img/loop_1.gif');
                $('#crazy_glue_image').attr('src', 'img/loop_2.gif');

                $window.on('resize', adjustImagePositioning);
                $window.on('orientationchange', adjustImagePositioning);
            }
            
            // Next button click goes to next div
            $('#next-btn').on('click', function(e) {
                e.preventDefault();
                if (!isTransitioning) {
                    next();
                }
            });


            function showVideo() {
                BV.show($('#screen-'+screenIndex).attr('data-video'),{ambient:true});
            }

            function next() {
                isTransitioning = true;
                
                // update video index, reset image opacity if starting over
                if (screenIndex === numScreens) {
                    $bigImage.css('opacity',1);
                    screenIndex = 1;
                } else {
                    screenIndex++;
                }
                
                if (!isTouch) {
                    $('#big-video-wrap').transit({'left':'-100%'},transitionDur)
                }
                    
                (Modernizr.csstransitions)?
                    $('.wrapper').transit(
                        {'left':'-'+(100*(screenIndex-1))+'%'},
                        transitionDur,
                        onTransitionComplete):
                    onTransitionComplete();
            }


            function onVideoLoaded() {
                $('#screen-'+screenIndex).find('.big-image').transit({'opacity':0},500)
            }

            function onTransitionComplete() {
                isTransitioning = false;
                if (!isTouch) {
                    $('#big-video-wrap').css('left',0);
                    showVideo();
                }
            }
            $(window).on('orientationchange', adjustImagePositioning);
            function adjustImagePositioning() {
                $bigImage.each(function(){
                    var $img = $(this),
                        img = new Image();

                    img.src = $img.attr('src');

                    var windowWidth = $window.width(),
                        windowHeight = $window.height(),
                        r_w = windowHeight / windowWidth,
                        i_w = img.width,
                        i_h = img.height,
                        r_i = i_h / i_w,
                        new_w, new_h, new_left, new_top;

                    if( r_w > r_i ) {
                        new_h   = windowHeight;
                        new_w   = windowHeight / r_i;
                    }
                    else {
                        new_h   = windowWidth * r_i;
                        new_w   = windowWidth;
                    }

                    $img.css({
                        width   : new_w,
                        height  : new_h,
                        left    : ( windowWidth - new_w ) / 2,
                        top     : ( windowHeight - new_h ) / 2
                    })

                });

            }
        });
});
  