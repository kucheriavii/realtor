$(function() {
	mainscreenVideoBackground(); //main-page video background
	
	if(isMobile(768)){
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
		  fade: true,
		});
	}

	if(!isMobile(768)){
		screenScrollier(); //fullScreen scrolling navigator
	}
	fixedMenu(); //fixed menu





	$('.menu__item').eq(1).click(function(e){
		e.preventDefault();
		$('.info').addClass('fadeInLeft');
	});

	/*************************************************************************/
	function anim(when,what){
		$(document).on('scroll', function(e){
			if($(document).scrollTop()>=$(when).offset().top-10){
				$(what).addClass('fadeInLeft animated');
			}
		})
		$(window).on('load', function(e){
			if($(document).scrollTop()>=$(when).offset().top-10){
				$(what).addClass('fadeInLeft animated');
			}
		})
	}
	
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

   
});

function tips(){
	$('.most-important-things__item-img-wrap').click(function(e){
		$(this).parents(".most-important-things__item")
		.toggleClass('active')
		.find('.most-important-things__item-text')
		.slideToggle();
	})
}

function fixedMenu(){
	if(!isMobile(768)){
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
		$('.menu__item .menu__link').removeClass('active');
		$('.tablet-none').removeClass('active'); //for mobile adaptation
		$('.hamburger').removeClass('is-active'); //for mobile adaptation
		$(e).target.addClass('active');
	})
	//add underline to menu
	$(document).on("scroll load", function(){
		var aboutMe = $('.about-me').offset().top,
			reasonsToTrust = $('.reasons-to-trust').offset().top,
			positiveFlat = $('.positive-flat').offset().top,
			feedback = $('.feedback').offset().top,
			calculator = $('.calculator').offset().top,
			map = $('.map').offset().top,
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


function mainscreenVideoBackground(){
	var src = $(".main-page").data('src');
	$('.main-screen').vide({
		mp4: src+".mp4",
		webm: src+".webm",
		jpg: src+".png"
	}, {
		resizing: true,
	});

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




//animation function
function anim(when,what,effect){
		 $(document).on('scroll', function(e){
		 	if($(document).scrollTop()>=$(when).offset().top-10){
				$(what).addClass(effect+' animated ');
				
			}
		 })
		$(window).on('load', function(e){
			if($(document).scrollTop()>=$(when).offset().top-100){
				$(what).addClass(effect+' animated ');
			}
		})
	}

function popup(){
	$(document).on('click','.on-popup', function(){
		$('.popap__wrapper').fadeIn(300);
	})
	$(document).on('click','.popup .close', popupClose)






	function popupClose(){
		$('.popap__wrapper').fadeOut(300);
		$.scrollify.enable();
	}
}

function isMobile (size) {
	if($(window).width()<size){
		console.log('mobile version');
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