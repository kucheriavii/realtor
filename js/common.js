$(function() {
	mainscreenVideoBackground(); //main-page video background
	screenScrollier(); //fullScreen scrolling navigator
	fixedMenu(); //fixed menu
	console.log('test')
	$('.menu__item').eq(1).click(function(e){
		e.preventDefault();
		console.log('test')
		$('.info').addClass('fadeInLeft');
	});

	/*************************************************************************/
	$(document).on('load scroll', function(e){
		if($(document).scrollTop()>=$('.section').eq(1).offset().top){
			$('.info').addClass('fadeInLeft animated');
		} else if ($(document).scrollTop()<$('.section').eq(1).offset().top){
			$('.info').removeClass('fadeInLeft animated');
		}
	})
	/*************************************************************************/
	var count = 0;
	$('.reasons-to-trust__item p:first-child').each(function(){
		count++;
		$(this).before('<span class="reasons-to-trust__item-count">'+count+'.</span>')
	})

	/************************************************************************/

	$('.feedback__item-list').slick({
		 infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1
	});

	/************************************************************************/
	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 13
        });

        myPlacemark = new ymaps.Placemark([55.76, 37.64], { hintContent: 'Moscow!', balloonContent: 'Capital of Russia' 
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
    /**************************************************************************/

    //youtube script
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player;

		onYouTubeIframeAPIReady = function () {
		    player = new YT.Player('player', {
		        height: '244',
		        width: '434',
		        videoId: 'AkyQgpqRyBY',  // youtube video id
		        playerVars: {
		            'autoplay': 0,
		            'rel': 0,
		            'showinfo': 0
		        },
		        events: {
		            'onStateChange': onPlayerStateChange
		        }
		    });
		}

		var p = document.getElementById ("player");
		$(p).hide();

		var t = document.getElementById ("thumbnail");
		t.src = "http://img.youtube.com/vi/AkyQgpqRyBY/0.jpg";

		onPlayerStateChange = function (event) {
		    if (event.data == YT.PlayerState.ENDED) {
		        $('.start-video').fadeIn('normal');
		    }
		}

		$(document).on('click', '.start-video', function () {
		    $(this).hide();
		    $("#player").show();
		    $("#thumbnail_container").hide();
		    player.playVideo();
		});

});


function fixedMenu(){
	$(window).on('load scroll', function(e){
		if($(window).scrollTop()>=$('.main-page__description-wrap').height()-1){
			$('.main-navbar').fadeOut();
			$('.main-navbar--fixed').fadeIn(300).css('display','flex');
		} else {
			$('.main-navbar').fadeIn();
			$('.main-navbar--fixed').fadeOut(300);
		}
	})
} 


function mainscreenVideoBackground(){
	$('.main-screen').vide({
		mp4: "../video/fon.mp4",
		jpg: "../img/main-pic.png"
	}, {
		volume: 1,
		muted: 1
	});

}

function screenScrollier(){
	$.scrollify({
	    section : ".section",
	    scrollbars: true,
	  });
}