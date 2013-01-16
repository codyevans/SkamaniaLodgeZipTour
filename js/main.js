/* ======================================================================== */
// smoothScroll

$(".main_nav a").smoothScroll();

$("a#Top").smoothScroll();

$("#mobile_nav a").smoothScroll();


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

$('#mobile_nav').hide();

$('#navicon').click(function(e) {

	$('#mobile_nav').slideToggle();

	e.preventDefault();

});

$('#mobile_nav a').click(function() {
	$('#mobile_nav').hide();
});


/* ======================================================================== */
// window resize code.

/*
if( $(window).width() > 1400 ) {
   alert('hello');
}
*/


        

