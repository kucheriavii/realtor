$(function() {
	//scripts for article page
	if($('body').hasClass('articlePage')){

		$('.video').parent().click(function () {
		  if($(this).children(".video").get(0).paused){
			  	$(this).children(".video").get(0).play();
			  	$(this).children(".playpause").fadeOut();
		    }else{
				$(this).children(".video").get(0).pause();
				$(this).children(".playpause").fadeIn();
		    }
		});
		ulCount();
		function ulCount(){
			var count = 0;
			$('.article__count-list li p').each(function(){
				count++;
				$(this).before('<span class="article_span-count">'+count+'.</span>')
			})
		}

		$('.img-ltl-wrap').click(function(e){
			e.preventDefault();
			var src = $(this).find('img').attr('src');
			$('.gallery .img-wrap img').attr('src', src);
		})

		return 0;
	}
	//end of article scripts
	//background preloader
	//$('.main-screen').css('background-image', 'url(../video/fon.png)');

	if(isMobile(1200)){
		tips(); //most inportant thing
	}
	sberbank();//sberbank();
	popup();
	if (!isMobile(1200)){
		animationList();//animation
	}
	if(isMobile(768)){
		$('.re-hash__cart-wrap').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		});
	}

	if(!isMobile(1023)){
	//	screenScrollier(); //fullScreen scrolling navigator
	}
	fixedMenu(); //fixed menu
	fixedPriceInCalculator() //make displayfix in calculator
	resonToTrastCount();
	inputChoose();
	popupReport();
	messangersActive();
	$('.main-page__scroll').on('click',function(){
		var scrollPosition = $(".about-me").offset().top - 80;
		$(window).scrollTo(scrollPosition,500);
		console.log('test')
	})

	$('.menu__item').eq(1).click(function(e){
		e.preventDefault();
		$('.info').addClass('fadeInLeft');
	});

	/*************************************************************************/

$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){
	  	$(this).children(".video").get(0).play();
	  	$(this).children(".playpause").fadeOut();
    }else{
		$(this).children(".video").get(0).pause();
		$(this).children(".playpause").fadeIn();
    }
});

$('.playarticle').click(function(){
$('.article__video')[0].play();
})




	/*************************************************************************/

    $(document).on('click', '.play_button', function(){
        player.playVideo();
        setTimeout(function(){
            $('.play_button').remove();
		},1000);

	})
	/************************************************************************/

	$('.feedback__item-list').slick({
		 infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		   responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },{
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    }]
	});

	/**************************************************************************/
	var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

	if (isIOS) {


			var video = '<video class="video js-video" muted><source src="video/fon.mp4" type="video/mp4">Your browser does not support HTML5 video.</video> ';
			var canvas = '<canvas class="canvas js-canvas"></canvas>';
			var timeline = '<div class="video-timeline js-timeline"><div class="video-timeline-passed js-timeline-passed"></div></div>';
			$('.iphone-video').addClass('iphone-on').append(video, canvas, timeline);



		var canvasVideo = new CanvasVideoPlayer({
			videoSelector: '.js-video',
			canvasSelector: '.js-canvas',
			timelineSelector: '.js-timeline',
			audio: false,
			autoplay: false,
			loop: true,
			resetOnLastFrame: true,
		});


		setInterval(function(){canvasVideo.play();}, 7000);

	}

	/************************************************************************/
	$(document).ready(function() {
		mainscreenVideoBackground();
		$('.main-screen').css('background-image', 'none')
	});


	/**************************************************************************/
	/*******************************ДЛЯ ЛАНДСКЕЙПОВ********************************/
	if($(window).height()<390){
		$('html').addClass('landscape');
	}
	if($(window).height()==1024 && $(window).width()==768){
		$('html').addClass('tablet-portrait');
	}




	/**************************************************************************/


	/*************************************************************************/
	/* about me picture */
	/*Вот почему нельзя уместить данную картинку в предел екрана*/
	/*************************************************************************/

/*	if (!isMobile(1200)){
		var aboutMeWidth = $('.about-me').width();
		var aboutMeHeight = aboutMeWidth*0.64;
		 $('.about-me').css({
			 'min-height' : aboutMeHeight
		 })
	}*/


	ymaps.ready(init);
    var myMap,
        myPlacemark,
				cartCenter;
				cartCenter = [55.753640, 37.580308];
		var mZoom = 15;
		if (isMobile(500)){
			mZoom = 14;
			cartCenter = [55.752040, 37.589958]
		}

    function init(){
        myMap = new ymaps.Map("map", {
            center: cartCenter,
            zoom: mZoom,

        });
				myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier']);
        myPlacemark = new ymaps.Placemark([55.752040, 7.586158],
        	{
	        	hintContent: 'Moscow!',
	        	balloonContent: 'Realtor'
        	},{
            iconImageSize: [48, 150],
        	 // Своё изображение иконки метки.
            iconImageHref: 'img/icons/png/map.png',
        });
        myPlacemarkWithContent = new ymaps.Placemark([55.752040, 37.586158], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'test',
            iconContent: '12'
        }, {

            // Своё изображение иконки метки.
            iconLayout: "default#image",
            iconImageHref: '../img/mapicon2.png',
            iconImageSize: [70, 70],
	        iconImageOffset: [0, -70],
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemarkWithContent);
        myMap.behaviors.disable('scrollZoom');
		myMap.controls.remove('zoomControl');
    }
    /**************************************************************************/


	$('.popup').mCustomScrollbar({
        scrollInertia: 0,
        scrollButtons: {enable: true},
    });










});
function fixedPriceInCalculator(){
	var start = $('.calculator__parameters-base-rate').offset().top-95;
	var finish = $('.attention').offset().top-400;
	if(isMobile(900)){
		finish = $('.attention').offset().top-250;
	}
	if(isMobile(500)){
		finish = $('.attention').offset().top-900;
		start-=300;
	}
	if(isMobile(400)){
		finish = $('.attention').offset().top;
	}
	$(document).on('scroll', function(e){
		var distance = $('.calculator__parameters-base-rate').offset().top;
		var position = $(document).scrollTop();
		var bottomStop = $('.attention').offset().top+$(window).height()+$('.attention').height()


		if(position>start){
			$('.calculator__parameters-base-rate').addClass('fix');

		}

		if(position<start){
			$('.calculator__parameters-base-rate').removeClass('fix');
		}
		if(position>finish){
			$('.calculator__parameters-base-rate').removeClass('fix');
		}

	})
}

function inputChoose(){
	$(document).on('click','.input-choose', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).parents('.input-wrap').find('.input-variants').removeClass('active');
		}else{
			$(this).addClass('active');
			$(this).parents('.input-wrap').find('.input-variants').addClass('active');
		}
	})
	$(document).on('click','.input-variants li', function(){
		var choose = $(this).text();
		$(this).parents('.input-wrap').find('.input-choose').val(choose);
		$(this).removeClass('active');
		$(this).parents('.input-wrap').find('.input-variants').removeClass('active');
	})
}

function tips(){
	$('.most-important-things__item-img-wrap').click(function(e){
		$(this).parents(".most-important-things__item")
		.toggleClass('active')
		.find('.most-important-things__item-text')
		.slideToggle();
	})
}

function fixedMenu(){
	if(!isMobile(768) && !$('.main-navbar--fixed').hasClass('noscript')){ //класс noscript в фиксированом меню
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
	//scroll to your section
	$(document).on('click', '.menu__item .menu__link', function(e){
		e.preventDefault();
		var scrollTo = "."+$(this).data('scrollto');
		$(window).scrollTo(scrollTo,500);
		$(window).scrollTo("-=80px",20);
		$('.menu__item .menu__link').removeClass('active');
		$('.tablet-none').removeClass('active'); //for mobile adaptation
		$('.hamburger').removeClass('is-active'); //for mobile adaptation
		$(e).target.addClass('active');
	})
	//add underline to menu
	$(document).on("scroll load", function(){
		var aboutMe = $('.about-me').offset().top-80,
			reasonsToTrust = $('.reasons-to-trust').offset().top-80,
			positiveFlat = $('.positive-flat').offset().top-80,
			feedback = $('.feedback').offset().top-80,
			calculator = $('.calculator').offset().top-80,
			map = $('.map').offset().top-80,
			actual = $(document).scrollTop();
		//underline in menu
		if (actual < aboutMe){
				$('.menu__item .menu__link').removeClass('active');
		}
		if (actual >= aboutMe){
				$('.menu__item .menu__link').removeClass('active');
				$('.menu__item .menu__link[data-scrollto="about-me"]').addClass('active');
		}
		if (actual >= reasonsToTrust) {
				$('.menu__item .menu__link').removeClass('active');
				$('.menu__item .menu__link[data-scrollto="reasons-to-trust"]').addClass('active');
		}
		if (actual >= positiveFlat) {
				$('.menu__item .menu__link').removeClass('active');
				$('.menu__item .menu__link[data-scrollto="positive-flat"]').addClass('active');
		}
		if (actual >= feedback) {
				$('.menu__item .menu__link').removeClass('active');
				$('.menu__item .menu__link[data-scrollto="feedback"]').addClass('active');
		}
		if (actual >= calculator) {
				$('.menu__item .menu__link').removeClass('active');
				$('.menu__item .menu__link[data-scrollto="calculator"]').addClass('active');
		}
		if (actual >= map) {
				$('.menu__item .menu__link').removeClass('active');
				$('.menu__item .menu__link[data-scrollto="map"]').addClass('active');
		}

	})
	//adaptive. burger
		$('.hamburger').click(function(e){
			if($(this).hasClass('is-active')){
				$(this).removeClass('is-active');
				$('.tablet-none').removeClass('active');
			} else {
				$(this).addClass('is-active');
				$('.tablet-none').addClass('active');
			}
		})
}
$('.about-me').mousemove(function(e){
  //  var X = e.pageX; // положения по оси X
  //  var Y =  e.pageY - $('.about-me').offset().top; // положения по оси Y
  //  console.log("X: " + X + " Y: " + Y); // вывод результата в консоль
});

function mainscreenVideoBackground(){
	var src = $(".main-page").data('src');
	$('.main-screen').vide({
		webm: src+".webm",
		//mp4: src+".mp4",
		jpg: "../Video/fon.png"
	}, {
		resizing: true,
	});


setTimeout(function () {
	$('.main-screen').css({
		"background-color": "rgba(35,35,57,.4)"
	})
}, 2000);

}

function screenScrollier(){
	$.scrollify({
	    section : ".section",
	    scrollbars: true,
	  });
	$('.on-scroll-page').click(function(){

	 $.scrollify.enable();

	})
	$('.off-scroll-page').click(function(){

	 $.scrollify.disable();
	})

}

//animation list
function animationList(){
	anim(".about-me",".about-me__item:nth-child(1)","fadeInLeft");
	anim(".about-me",".about-me__item:nth-child(2)","fadeInLeft");
	anim(".about-me",".about-me__item:nth-child(3)","fadeInLeft");
	anim(".about-me",".about-me__item:nth-child(4)","fadeInLeft");
	anim(".about-me",".about-me__item:nth-child(5)","fadeInLeft");
	anim(".about-me",".about-me__item:nth-child(6)","fadeInLeft");
	anim(".about-me",".about-me__item:nth-child(7)","fadeInLeft");
	anim(".about-me",".about-me__item:nth-child(8)","fadeInLeft");

	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__BTI","fadeInRight");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__quick-shell","fadeInRight");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__item:nth-child(1)","fadeInDown");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__item:nth-child(2)","fadeInDown");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__item:nth-child(3)","fadeInDown");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__item:nth-child(4)","fadeInDown");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__item:nth-child(5)","fadeInDown");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__item:nth-child(6)","fadeInDown");
	anim(".reasons-to-trust__fon-wrap",".reasons-to-trust__item:nth-child(7)","fadeInDown");


	anim(".re-hash",".re-hash__header","fadeInDown");
	anim(".re-hash",".re-hash__cart:nth-child(1)","fadeInLeft");
	anim(".re-hash",".re-hash__cart:nth-child(2)","fadeInLeft");
	anim(".re-hash",".re-hash__cart:nth-child(3)","fadeInLeft");
	anim(".re-hash",".re-hash__cart:nth-child(4)","fadeInRight");
	anim(".re-hash",".re-hash__cart:nth-child(5)","fadeInRight");

	anim(".additional-options",".additional-options__content-header","fadeIn");
	anim(".additional-options",".additional-options__img-bg","fadeIn");
	anim(".additional-options",".additional-options__content-item:nth-child(1)","fadeInRight");
	anim(".additional-options",".additional-options__content-item:nth-child(2)","fadeInRight");
	anim(".additional-options",".additional-options__content-item:nth-child(3)","fadeInRight");
	anim(".additional-options",".additional-options__content-item:nth-child(4)","fadeInRight");
	anim(".additional-options",".additional-options__content-history","fadeInRight");

}






function popup(){
	$(document).on('click','.on-popup', function(){
		var popup = '.popup-'+$(this).data('popup');

		$('.popap__wrapper').fadeIn(300);
		$(popup).fadeIn(300);
		//scroll adecvat
		$('.popup').mCustomScrollbar({
	        scrollInertia: 0,
	        scrollButtons: {enable: true},
	        scrollbarPosition: "outside"
	    });
	})
	$(document).on('click','.close', function(){
		$('.popap__wrapper').fadeOut(300).removeClass('thk-wrapper');
		$('.popup').fadeOut();
		$('.popup-thk').fadeOut();
		$.scrollify.enable();
	})

	$(document).on('click','.popup .button', function(e){
		e.preventDefault();
		$('.popup').fadeOut();
		$('.popup-thk').fadeIn();
		$('.popap__wrapper').addClass('thk-wrapper');
	})
}

function isMobile (size) {
	if($(window).width()<size){
		return true;
	} else{
		return false;
	}
}

function sberbank(){
	// Настройки калькулятора
	var calculatorOptions = {
		 apiKey: '728a2644-fefc-43c1-9054-5806c8fda7ef', // Используйте этот API-key
		 excludedProduct: [], // укажите продукт, который нужно исключить
		 schema: {
		 product: 4, // 4 - это новостройка, укажите значение, которое нужно вам
		 realtyDiscount: true/false // оставьте одно значение
		 },
		 excludedDiscounts: ['realtyDiscount'], // укажите дисконт, который нужно скрыть


		// Также, можно подписаться на события. Необходимо заменить пустые функции на свои реализации
		// изменение параметров расчета
		onChangeParams: function (e) {}, // успешное окончание расчета
		onChangeResults: function (e) {}, // ошибка при выполненииы расчета
		onFailedResults: function (e) {}
	};
	domclick.mortgage.ready(function (mortgage) {
		 mortgage(
		 'calculator',
		 { calculator: calculatorOptions },
		 { cssSuffix: 'universal' }
		 );
	});
}

function anim(when,what){
	$(document).on('scroll', function(e){
		if($(document).scrollTop()>=$(when).offset().top-400){
			$(what).addClass('fadeInLeft animated');
		}
	})
	$(window).on('load', function(e){
		if($(document).scrollTop()>=$(when).offset().top-800){
			$(what).addClass('fadeInLeft animated');
		}
	})
}

function resonToTrastCount(){
	var count = 0;
	$('.reasons-to-trust__item p:first-child').each(function(){
		count++;
		$(this).before('<span class="reasons-to-trust__item-count">'+count+'.</span>')
	})
}

function popupReport(){
	$(document).on('change', 'input[name="flat-ad"]', function(){
		var ans = $(this).attr('id');
		if(ans == "ad-yes"){
			$('.forYesAns').addClass('active');
			$('.forNoAns').removeClass('active');
		}
		if(ans == "ad-no"){
			$('.forYesAns').removeClass('active')
			$('.forNoAns').addClass('active')
		}
	})

	$(document).on('keyup', '#flet-desc', function(){
		var length = $(this).val().length;
		$('.textarea-sym-left').text("Введено "+length+" знаков");
	})
}

function messangersActive(){
	$(document).on('click', '.map-messengers-link img', function(e){
		e.preventDefault();
		if($(this).parents('.map-messengers-link').hasClass('active')){
			$(this).parents('.map-messengers-link').removeClass('active');
		} else {
			$(this).parents('.map-messengers-link').addClass('active');
		}
	})
}
