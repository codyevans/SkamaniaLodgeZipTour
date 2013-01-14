
/* ======================================================================== */
// smoothScroll

//$(".logo_wrap a").smoothScroll();

$(".main_nav a").smoothScroll();

$("a#Top").smoothScroll();


/* ======================================================================== */
// backstretch

$('.hero_1').backstretch('assets/hero/1.jpg');


/* ======================================================================== */
// cycle_lite

$('#headline_slideshow').cycle();


/* ======================================================================== */
// lightbox_me

/*
$('.giant_btn').click(function(e) {

	$('#booking').lightbox_me();

	e.preventDefault();

});
*/


/* ======================================================================== */
// window resize code.

/*
if( $(window).width() > 1400 ) {
   alert('hello');
}
*/



/* ======================================================================== */
// back to top fade in-out

$(window).scroll(function() {
	if ($(this).scrollTop() > 300) {
		$('.topBtn').fadeIn();
	} else {
		$('.topBtn').fadeOut();
	}
});







        

