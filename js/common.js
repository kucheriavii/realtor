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

	function animateClass(argument) {
		// body...
	}
	$(document).on('load scroll', function(e){
		if($(document).scrollTop()>=$('.section').eq(1).offset().top){
			$('.info').addClass('fadeInLeft animated');
		} else if ($(document).scrollTop()<$('.section').eq(1).offset().top){
			$('.info').removeClass('fadeInLeft animated');
		}
	})

	

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
		jpg: "../video/fon.jpg"
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