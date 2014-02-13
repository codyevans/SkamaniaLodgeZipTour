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
// overlay modules

if ( $(window).width() > 768 ) {

	// load booking form on large screen
	$('#moduleDesktop-load').append('<iframe src="http://www.adventurecentral.com/user/web/wfCalendar.aspx?AID=16932&CLUID=27e1c4ab-aa49-45ca-8d11-77eea115fa89#InitialLocation" frameborder="0" scrolling="auto"></iframe>');

	// modal the bookings form
	$('#bookingBTN, #bookingBTN2, #bookingBTN-landing, #bookingBTN-landing2').click(function(e) {

		$('#bookDesktop').lightbox_me({
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
// Add Map for large screens + other mobile image stuff

// google map append for large screens
if ( $(window).width() > 768 ) {

	$('#map-load').append('<div class="map"><div id="map_canvas"></div></div> ');

}

// image append for large screens
if ( $(window).width() > 768 ) {

	var $hero = $('#hero-slider');

	// main content body images
	$('#desktop-add-image-1').append('<img src="assets/hero/content-images/kid-walking-sky-bridge.jpg" alt="Zip Lining throuhg the forest at Skamania Lodge." class="tour">');
	$('#desktop-add-image-2').append('<img src="assets/hero/content-images/view-from-the-sky-bridge.jpg" alt="A walk on the Skamania Zipline Sky Bridge" class="tour">');

	// hero slider images
	$hero.append('<div class="rsContent"><img class="rsImg" src="assets/hero/slider/man-walking-sky-bridge.jpg" data-rsTmb="small-image.jpg" alt="Zip Lining between to trees at Skamania Lodge." /></div>');
	$hero.append('<div class="rsContent"><img class="rsImg" src="assets/hero/slider/tina-zipping-in.jpg" data-rsTmb="small-image.jpg" alt="Zip Lining between to trees at Skamania Lodge." /></div>');
	$hero.append('div class="rsContent"><img class="rsImg" src="assets/hero/slider/zipping-the-brush.jpg" data-rsTmb="small-image.jpg" alt="Zip Lining between to trees at Skamania Lodge." /></div>');
	$hero.append('<div class="rsContent"><img class="rsImg" src="assets/hero/slider/kid-zipping.jpg" data-rsTmb="small-image.jpg" alt="Zip Lining between to trees at Skamania Lodge." /></div>');
	$hero.append('<div class="rsContent"><img class="rsImg" src="assets/hero/slider/zipping-towards-the-group.jpg" data-rsTmb="small-image.jpg" alt="Zip Lining between to trees at Skamania Lodge." /></div>');

}

// image swap on slider
if ( $(window).width() > 500 ) {

	$('#slider-image-2').attr( "src", "assets/hero/slider/pictureFill/zipping-between-trees_med.jpg" );
	$('#slider-image-3').attr( "src", "assets/hero/slider/pictureFill/long-zip-line_med.jpg" );

}

if ( $(window).width() > 768 ) {

	$('#slider-image-2').attr( "src", "assets/hero/slider/pictureFill/zipping-between-trees_large.jpg" );
	$('#slider-image-3').attr( "src", "assets/hero/slider/pictureFill/long-zip-line_large.jpg" );

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

