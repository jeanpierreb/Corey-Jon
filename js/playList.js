define([
   'jquery-ui',
   'imagesloaded',
   'jplayer',
   'video',
   'bigvideo',
   'transit',
   'Handlebars',
   'hbs!templates/playList'

], function ($, imagesloaded, jPlayer, video, bigvideo, transit, Handlebars, template) {

    return  {

        placeTemplate: function() {
            data = {
                "id": '1',
                "video": 'https://s3.amazonaws.com/coreyjon/rorschach.mov',
                "image": 'https://s3.amazonaws.com/coreyjon/img/rorschach.jpg',
                "image-id": 'crazy_loud_image',
                "image-alt": 'Crazy Loud',
                "section-id": 'crazy_loud'
            };
            $('body').find('.wrapper').append(template(data));

            data = {
                "id": '2',
                "video": 'https://s3.amazonaws.com/coreyjon/buddha.mov',
                "image": 'https://s3.amazonaws.com/coreyjon/img/buddha.jpg',
                "image-id": 'crazy_glue_image',
                "image-alt": 'Can\'t Figure Me Out',
                "section-id": 'crazy_glue'
            };
            $('body').find('.wrapper').append(template(data));
        },

        installPlayer: function() {
            var playlistOptions = {   playlistOptions:{},
                    swfPath: "/js",
                    supplied: "mp3, oga",
                    smoothPlayBar: false,
                    keyEnabled: true,
                    audioFullScreen: false,
                    repeat: true,
                    autoPlay: false,
                    loopOnPrevious : true,
                    loop: true
                };
            
                var myPlaylist = new jPlayerPlaylist({
                    jPlayer: "#jquery_jplayer_1",
                    cssSelectorAncestor: "#jp_container_1"
                },[{    title:"Crazy Loud",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-a/crazy_loud.mp3",
                        oga: "./music/side-a/crazy_loud.oga"
                    }, {title:"One Minute",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-a/one_minute.mp3",
                        oga: "./music/side-a/one_minute.oga"
                    }, {title:"Renegade",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-a/renegade.mp3",
                        oga: "./music/side-a/renegade.oga"
                    }, {title:"Out of Control",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-a/out_of_control_2175.mp3",
                        oga: "./music/side-a/out_of_control_2175.oga"
                    }],
                playlistOptions);
            
                var myPlaylist2 = new jPlayerPlaylist({
                    jPlayer: "#jquery_jplayer_2",
                    cssSelectorAncestor: "#jp_container_2"
                },[{    title:"Crazy Glue",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-b/crazy_glue.mp3",
                        oga: "./music/side-b/crazy_glue.oga"
                    }, {title:"Long Stroke",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-b/long_stroke.mp3",
                        oga: "./music/side-b/long_stroke.oga"
                    }, {title:"Matters",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-b/matters.mp3",
                        oga: "./music/side-b/matters.oga"
                    }, {title:"Got to Have You",
                        free: false,
                        mp3: "https://s3.amazonaws.com/coreyjon/music/side-b/got_to_have_you.mp3",
                        oga: "./music/side-b/got_to_have_you.oga"
                    }],
                playlistOptions);

                $('.wrapper').trigger("playerLoaded");
        }
    };
});