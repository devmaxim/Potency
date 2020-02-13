$(function(){
	let clock;
	clock = $('.footer-clock').FlipClock({
		autoStart : false
	});
	clock.setTime(86400);
	clock.setCountdown(true);
	clock.start();

	$("#arrow").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $('.feedback-slider').slick({
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	prevArrow: '<div class="slider-arrow feedback-arrow feedback-arrow_left"></div>',
    	nextArrow: '<div class="slider-arrow feedback-arrow feedback-arrow_right"></div>'	   
    })

    $('.form__name').focus(function(){
    	$('.form_focus').addClass('form_focus-active');
    });
    $('.form__name').focusout(function(){
    	$('.form_focus').removeClass('form_focus-active');
    });
    $('.form__tel').focus(function(){
    	$('.form_focus-tel').addClass('form_focus-active');
    });
    $('.form__tel').focusout(function(){
    	$('.form_focus-tel').removeClass('form_focus-active');
    });
});