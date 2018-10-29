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

	if(!isMobile(1023)){
		screenScrollier(); //fullScreen scrolling navigator
	}
	fixedMenu(); //fixed menu
	fixedPriceInCalculator() //make displayfix in calculator
	resonToTrastCount();
	inputChoose();
	popupReport();
		
	

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
		  slidesToScroll: 1,
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



	/************************************************************************/
	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.753640, 37.580308],
            zoom: 15,
           
        });

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
            iconImageHref: '../img/mapicon.png',
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
	var start = $('.calculator__parameters-base-rate').offset().top;
	var finish = $('.attention').offset().top-200;
	$(document).on('scroll', function(e){
		var distance = $('.calculator__parameters-base-rate').offset().top;
		var position = $(document).scrollTop();
		var bottomStop = $('.attention').offset().top+$(window).height()+$('.attention').height()

		if(position>start){
			$('.calculator__parameters-base-rate').addClass('fix');
		} 

		if(position<start){
			$('.calculator__parameters-base-rate').removeClass('fix')
		}
		if(position>finish){
			$('.calculator__parameters-base-rate').removeClass('fix')
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
		$('.popap__wrapper').fadeOut(300);
		$('.popup').fadeOut();
		$.scrollify.enable();
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