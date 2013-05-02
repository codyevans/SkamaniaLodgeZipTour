/* ======================================================================== */
// royal slider

jQuery(document).ready(function($) {
                $(".royalSlider").royalSlider({
                    // options go here
                    // as an example, enable keyboard arrows nav
                    keyboardNavEnabled: true,
                    imageScaleMode: 'fill',
                });  
            });

/* ======================================================================== */
// smoothScroll

$(".main_nav a").smoothScroll();

$("a#Top").smoothScroll();


/* ======================================================================== */
// cycle_lite

$('#headline_slideshow').cycle();


/* ======================================================================== */
// lightbox_me

if ( $(window).width() > 768 ) {

	$('#bookingBTN, #bookingBTN2').click(function(e) {

		$('#bookDesktop').lightbox_me({
			centered: true,
			closeSelector: "span.close"
		});

		e.preventDefault();

	});

	$('#employbtn').click(function(e) {

		$('#employment').lightbox_me({
			centered: true,
			closeSelector: "span.close"
		});

		e.preventDefault();

	});


	// $('#GrandOpen').lightbox_me({
	// 		centered: true,
	// 		closeSelector: "span.close"
	// 	});

}


/* ======================================================================== */
// back to top fade in-out

if ( $(window).width() > 768 ) {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.topBtn').fadeIn();
		} else {
			$('.topBtn').fadeOut();
		}
	});

}


/* ======================================================================== */
// mobile nav and navicon

$('#navicon').click(function(e) {

	$('#mobile_nav').toggleClass('open');

	e.preventDefault();

});

$('ul.mobile a').click(function(e) {
	$('#mobile_nav').removeClass('open');
	//e.preventDefault();
});

