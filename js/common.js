head.ready(function() {

	//sidebar
	$(".js-accordion-title").on("click", function(){
		if ($(this).parents(".js-accordion").hasClass("is-active")) {
			$(this).parents(".js-accordion").removeClass("is-active").find(".js-accordion-body").slideUp();
		}
		else {
			$(".js-accordion").removeClass("is-active");
			$(".js-accordion-body").slideUp();
			$(this).parents(".js-accordion").toggleClass("is-active").find(".js-accordion-body").slideDown()
		}
		
		return false;
	});
	//nav
	$(document).on("scroll", onScroll);
	
	//smoothscroll
	$('.nav__link[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    $(document).off("scroll");
	    
	    $('.nav__link').each(function () {
	        $(this).removeClass('is-active');
	    })
	    $(this).addClass('is-active');
	  
	    var target = this.hash,
	        menu = target;
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-70}, 500, 'swing', function () {
	        window.location.hash = target;
	        $(document).on("scroll", onScroll);
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav__link').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top-70 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav__link').removeClass("is-active");
	            currLink.addClass("is-active");
	        }
	        else{
	            currLink.removeClass("is-active");
	        }
	    });
	}
	//tabs
	$('.tabs a').click(function(event) {
		attr = $(this).attr('href');
		$('#content,#sidebar').addClass('is-hidden');
		$(' '+attr).removeClass('is-hidden');
		return false;
	});
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 70) {
	        $(".tabs").addClass("is-active");
	    } else {
	        $(".tabs").removeClass("is-active");
	    }
	});
});