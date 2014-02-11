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
// overlay modules

if ( $(window).width() > 768 ) {

	$('#bookingBTN, #bookingBTN2, #bookingBTN-landing, #bookingBTN-landing2').click(function(e) {

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
	
}


// Overlay Feature - 2013-2014 Winter Schedule

$('#winter-operations-btn, #winter-operations-mobile-btn').on("click", function(e) {

	if ( $('#night-zips').hasClass('overlayOn') ) {
		$('.info-overlay').removeClass('overlayOn');
	}

	$('#fullscreen-overlay').fadeIn();
	$('#winter-hours').addClass('overlayOn');

	e.preventDefault();

});

$('#night-zips-btn, #night-zips-mobile-btn').on("click", function(e) {

	if ( $('#winter-hours').hasClass('overlayOn') ) {
		$('.info-overlay').removeClass('overlayOn');
	}

	$('#fullscreen-overlay').fadeIn();
	$('#night-zips').addClass('overlayOn');

	e.preventDefault();

});

$('.close-overlay').on("click", function(e) {

	$('#fullscreen-overlay').fadeOut();
	$('.info-overlay').removeClass('overlayOn');

	e.preventDefault();

});


// night zips new tab

$('#night-zips-btn').hover( 
	function(e) {

		$("#tab").addClass('on');

	e.preventDefault();
}, function(e) {

		$("#tab").removeClass('on');

	e.preventDefault();
});



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
// Add Map for large screens

if ( $(window).width() > 768 ) {

	$('#map-load').append('<div class="map"><div id="map_canvas"></div></div> ');

}


/* ======================================================================== */
// mobile nav and navicon

// add active states to touch devices
document.addEventListener("touchstart", function(){}, true);

// remove 300ms delay on touch
$('a, #navicon, .close-overlay').fasttap();

// navicon
$('#navicon').click(function(e) {

	$('#mobile_nav').toggleClass('open');

	e.preventDefault();

});

$('ul.mobile a').click(function(e) {
	$('#mobile_nav').removeClass('open');
	//e.preventDefault();
});

