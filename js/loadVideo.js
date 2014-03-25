define([
   'modernizr',
   'jquery',
   'jquery-ui',
   'imagesloaded',
   'jplayer',
   'video',
   'bigvideo',
   'transit'
], function () {
    return function() {
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

                //$window.on('resize', adjustImagePositioning);
                $window.on('orientationchange', adjustImagePositioning);
            }
            
            // Back and Next to switch screens
            $('nav').on('click', function(e) {
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
                    $('#big-video-wrap').transit({'left':'-100%'},transitionDur);
                }
                    
                (Modernizr.csstransitions)?
                    $('.wrapper').transit(
                        {'left':'-'+(100*(screenIndex-1))+'%'},
                        transitionDur,
                        onTransitionComplete):
                    onTransitionComplete();
            }


            function onVideoLoaded() {
                $('#screen-'+screenIndex).find('.big-image').transit({'opacity':0},500);
            }

            function onTransitionComplete() {
                isTransitioning = false;
                if (!isTouch) {
                    $('#big-video-wrap').css('left',0);
                    showVideo();
                }
            }

            //$(window).on('orientationchange', adjustImagePositioning);
            /*
            * I think the issue is here somewhere but I haven't
            * been able to figure it out. Hopefully you have better luck.
            * Also, let me know if the line of code above this comment is
            * useful. If not just delete that.
             */
            function adjustImagePositioning (){
            var mediaAspect = 16/9,
                windowW = $(window).width(),
                windowH = $(window).height(),
                windowAspect = windowW/windowH;
                if (windowAspect < mediaAspect) {
                    // taller
                    // is image
                    $('.big-image')
                        .width(windowH*mediaAspect)
                        .height(windowH)
                        .css('top',0)
                        .css('left',-(windowH*mediaAspect-windowW)/2);
                
                } else {
                    // wider
                    // is image
                    $('.big-image')
                        .width(windowW)
                        .height(windowW/mediaAspect)
                        .css('top',-(windowW/mediaAspect-windowH)/2)
                        .css('left',0);
                
                }

            }
    };
    
});
