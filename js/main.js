/* ======================================================================== */
// smoothScroll

$(".main_nav a").smoothScroll();

$("a#Top").smoothScroll();

$("#mobile_nav a").smoothScroll();

//$("a.mobile_backTop").smoothScroll();


/* ======================================================================== */
// backstretch

$('.hero_1').backstretch('assets/hero/1.jpg');


/* ======================================================================== */
// cycle_lite

$('#headline_slideshow').cycle();


/* ======================================================================== */
// lightbox_me

if ( $(window).width() > 768 ) {

	$('#bookingBTN, #bookingBTN2').click(function(e) {

		$('#bookDesktop').lightbox_me({
			centered: true
		});

		e.preventDefault();

	});

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
	e.preventDefault();
});


/* ======================================================================== */
// window resize code.

/*
if( $(window).width() > 1400 ) {
   alert('hello');
}
*/


        

