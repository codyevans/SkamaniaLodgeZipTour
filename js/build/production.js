// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){

    // Enable strict mode
    "use strict";

    w.picturefill = function() {
        var ps = w.document.getElementsByTagName( "span" );

        // Loop the pictures
        for( var i = 0, il = ps.length; i < il; i++ ){
            if( ps[ i ].getAttribute( "data-picture" ) !== null ){

                var sources = ps[ i ].getElementsByTagName( "span" ),
                    matches = [];

                // See if which sources match
                for( var j = 0, jl = sources.length; j < jl; j++ ){
                    var media = sources[ j ].getAttribute( "data-media" );
                    // if there's no media specified, OR w.matchMedia is supported 
                    if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
                        matches.push( sources[ j ] );
                    }
                }

            // Find any existing img element in the picture element
            var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

            if( matches.length ){
                var matchedEl = matches.pop();
                if( !picImg || picImg.parentNode.nodeName === "NOSCRIPT" ){
                    picImg = w.document.createElement( "img" );
                    picImg.alt = ps[ i ].getAttribute( "data-alt" );
                }
                else if( matchedEl === picImg.parentNode ){
                    // Skip further actions if the correct image is already in place
                    continue;
                }

                picImg.src =  matchedEl.getAttribute( "data-src" );
                matchedEl.appendChild( picImg );
                picImg.removeAttribute("width");
                picImg.removeAttribute("height");
            }
            else if( picImg ){
                picImg.parentNode.removeChild( picImg );
            }
        }
        }
    };

    // Run on resize and domready (w.load as a fallback)
    if( w.addEventListener ){
        w.addEventListener( "resize", w.picturefill, false );
        w.addEventListener( "DOMContentLoaded", function(){
            w.picturefill();
            // Run once only
            w.removeEventListener( "load", w.picturefill, false );
        }, false );
        w.addEventListener( "load", w.picturefill, false );
    }
    else if( w.attachEvent ){
        w.attachEvent( "onload", w.picturefill );
    }

}( this ));


// jquery.royalslider v9.4.8
(function(l){function t(b,f){var c,h,a=this,e=navigator.userAgent.toLowerCase();a.uid=l.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,j=["webkit","Moz","ms","O"],g="",k=0;for(c=0;c<j.length;c++)h=j[c],!g&&h+"Transform"in d&&(g=h),h=h.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[h+"RequestAnimationFrame"],window.cancelAnimationFrame=window[h+"CancelAnimationFrame"]||window[h+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-k)),c=window.setTimeout(function(){a(b+d)},d);k=b+d;return c});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=e.match(/(ipad)/);j=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];c=j[1]||"";h=j[2]||"0";
j={};c&&(j[c]=!0,j.version=h);j.chrome&&(j.webkit=!0);a._a=j;a.isAndroid=-1<e.indexOf("android");a.slider=l(b);a.ev=l(a);a._b=l(document);a.st=l.extend({},l.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;if(a.st.allowCSS3&&(!j.webkit||a.st.allowCSS3OnWebkit))e=g+(g?"T":"t"),a._e=e+"ransform"in d&&e+"ransition"in d,a._e&&(a._f=g+(g?"P":"p")+"erspective"in d);g=g.toLowerCase();a._g="-"+g+"-";a._h="vertical"===a.st.slidesOrientation?!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";
a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;l.each(l.rsModules,function(b,d){"uid"!==b&&d.call(a)});a.slides=[];a._r=0;(a.st.slides?l(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return 0.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>a.numSlides-1&&(a.st.startSlideId=a.numSlides-
1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.msTouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=
[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(l('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=l(d+"</div></div>");g=a.ns;a.msEnabled=window.navigator.msPointerEnabled;a.msEnabled?(a.msTouch=Boolean(1<window.navigator.msMaxTouchPoints),a.hasTouch=!1,a._n1=0.2,a._j1="MSPointerDown"+g,a._k1="MSPointerMove"+g,a._l1="MSPointerUp"+g,a._m1="MSPointerCancel"+g):(a._j1="mousedown"+g,a._k1="mousemove"+g,a._l1="mouseup"+g,a._m1="mouseup"+g,"ontouchstart"in
window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+g,a._k1+=" touchmove"+g,a._l1+=" touchend"+g,a._m1+=" touchcancel"+g,a._n1=0.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=0.2));a.st.sliderDrag&&(a._f1=!0,j.msie||j.opera?a._g1=a._h1="move":j.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):j.webkit&&-1!=navigator.platform.indexOf("Mac")&&(a._g1="-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");
a.msEnabled&&a._p1.css("-ms-touch-action",a._h?"pan-y":"pan-x");a._q1=l('<div class="rsPreloader"></div>');d=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(j.webkit&&!j.chrome&&a.slider.addClass("rsWebkit3d"),a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),a._l?a._p1[a._g+a._t1]=a._g+"transform":(g=
{},g[a._g+a._t1]="opacity",g[a._g+a._u1]=a.st.transitionSpeed+"ms",g[a._g+a._v1]=a.st.css3easeInOut,d.css(g))):(a._x1="left",a._w1="top");var n;l(window).on("resize"+a.ns,function(){n&&clearTimeout(n);n=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();if(a.st.arrowsNavHideOnTouch&&(a.hasTouch||a.msTouch))a.st.arrowsNav=!1;a.st.arrowsNav&&(d=a._o1,l('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(d),
a._c2=d.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=d.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),d.one("mousemove.arrowshover",function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),d.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),
a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a._f1)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var m=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var d=l(b.target).attr("class");if(-1!==l.inArray(d,m)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(l(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick")}}).on("click.rs","a",function(){if(a.dragSuccess)return!1;
a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}l.rsModules||(l.rsModules={uid:0});t.prototype={constructor:t,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-
1)/2)));this._y=b},_s:function(b,f){function c(a,b){b?e.images.push(a.attr(b)):e.images.push(a.text());if(j){j=!1;e.caption="src"===b?a.attr("alt"):a.contents();e.image=e.images[0];e.videoURL=a.attr("data-rsVideo");var d=a.attr("data-rsw"),c=a.attr("data-rsh");"undefined"!==typeof d&&!1!==d&&"undefined"!==typeof c&&!1!==c?(e.iW=parseInt(d),e.iH=parseInt(c)):h.st.imgWidth&&h.st.imgHeight&&(e.iW=h.st.imgWidth,e.iH=h.st.imgHeight)}}var h=this,a,e={},d,j=!0;b=l(b);h._k2=b;h.ev.trigger("rsBeforeParseNode",
[b,e]);if(!e.stopParsing)return b=h._k2,e.id=h._r,e.contentAdded=!1,h._r++,e.images=[],e.isBig=!1,e.hasCover||(b.hasClass("rsImg")?(d=b,a=!0):(d=b.find(".rsImg"),d.length&&(a=!0)),a?(e.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=l(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(e.caption=d.remove()),e.content=b,h.ev.trigger("rsAfterParseNode",[b,e]),f&&h.slides.push(e),0===
e.images.length&&(e.isLoaded=!0,e.isRendered=!1,e.isLoading=!1,e.images=null),e},_b2:function(){var b=this,f,c,h=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(a){if(!b._l2&&(c=a.keyCode,(37===c||39===c)&&!f))h(c),f=setInterval(function(){h(c)},700)}).on("keyup"+b.ns,function(){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+
this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+" click");this.slider.data("royalSlider",null);l.removeData(this.slider,"royalSlider");l(window).off("resize"+this.ns);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,e,f){c.isAdded?(h(e,c),a(e,c)):(f||(f=d.slidesJQ[e]),c.holder?f=c.holder:(f=d.slidesJQ[e]=l(f),c.holder=f),c.appendOnLoaded=!1,a(e,c,f),h(e,c),d._p2(c,f,b),appended=c.isAdded=!0)}function h(a,c){c.contentAdded||(d.setItemHtml(c,
b),b||(c.contentAdded=!0))}function a(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function e(a){if(k){if(a>n-1)return e(a-n);if(0>a)return e(n+a)}return a}var d=this,j,g,k=d._z,n=d.numSlides;if(!isNaN(f))return e(f);var m=d.currSlideId,p,q=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,r=Math.min(2,q),u=!1,t=!1,s;for(g=m;g<m+1+r;g++)if(s=e(g),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){u=!0;break}for(g=m-1;g>m-1-r;g--)if(s=e(g),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){t=
!0;break}if(u)for(g=m;g<m+q+1;g++)s=e(g),p=Math.floor((d._u-(m-g))/d.numSlides)*d.numSlides,(j=d.slides[s])&&c(j,s);if(t)for(g=m-1;g>m-1-q;g--)s=e(g),p=Math.floor((d._u-(m-g))/n)*n,(j=d.slides[s])&&c(j,s);if(!b){r=e(m-q);m=e(m+q);q=r>m?0:r;for(g=0;g<n;g++)if(!(r>m&&g>r-1)&&(g<q||g>m))if((j=d.slides[g])&&j.holder)j.holder.detach(),j.isAdded=!1}},setItemHtml:function(b,f){function c(){if(b.images){if(!b.isLoading){var a,c;b.content.hasClass("rsImg")?(a=b.content,c=!0):a=b.content.find(".rsImg:not(img)");
a&&!a.is("img")&&a.each(function(){var a=l(this),d='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';c?b.content=l(d):a.replaceWith(d)});a=c?b.content:b.content.find("img.rsImg");j();a.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||k._q2(b),e());b.isLoading=!0;if(b.isBig)l("<img />").on("load.rs error.rs",function(){h([this],!0)}).attr("src",b.image);else{b.loaded=[];b.imgLoaders=[];for(a=0;a<b.images.length;a++){var d=l("<img />");b.imgLoaders.push(this);d.on("load.rs error.rs",
function(){b.loaded.push(this);b.loaded.length===b.imgLoaders.length&&h(b.loaded,!1)}).attr("src",b.images[a])}}}}else b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,e(!0)}function h(c,d){if(c.length){var e=c[0];if(d!==b.isBig)(e=b.holder.children())&&1<e.length&&g();else if(b.iW&&b.iH)a();else if(b.iW=e.width,b.iH=e.height,b.iW&&b.iH)a();else{var f=new Image;f.onload=function(){f.width?(b.iW=f.width,b.iH=f.height,a()):setTimeout(function(){f.width&&(b.iW=f.width,b.iH=f.height);a()},1E3)};f.src=e.src}}else a()}
function a(){b.isLoaded=!0;b.isLoading=!1;e();g();d()}function e(){if(!b.isAppended){var a=k.st.visibleNearby,c=b.id-k._o;if(!f&&!b.appendOnLoaded&&k.st.fadeinLoadedSlide&&(0===c||(a||k._r2||k._l2)&&(-1===c||1===c)))a={visibility:"visible",opacity:0},a[k._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16);b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);b.isAppended=!0;b.isLoaded&&(k._q2(b),d());
b.sizeReady||(b.sizeReady=!0,setTimeout(function(){k.ev.trigger("rsMaybeSizeReady",b)},100))}}function d(){b.loadedTriggered||(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),k.ev.trigger("rsAfterContentSet",b))}function j(){k.st.usePreloader&&b.holder.html(k._q1.clone())}function g(){if(k.st.usePreloader){var a=b.holder.find(".rsPreloader");a.length&&a.remove()}}var k=this;b.isLoaded?e():f?!k._l&&b.images&&b.iW&&b.iH?c():(b.holder.isWaiting=!0,j(),b.holder.slideId=-99):c()},
_p2:function(b){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,h,a="touchstart"===b.type;c._s2=a;c.ev.trigger("rsDragStart");if(l(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)a&&(c._v2=!0);else{a&&(c._v2=!1);c._w2();if(a){var e=b.originalEvent.touches;if(e&&0<e.length)h=e[0],1<e.length&&(c._v2=!0);else return}else b.preventDefault(),h=b,c.msEnabled&&(h=h.originalEvent);c._l2=!0;c._b.on(c._k1,
function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=h.pageX;c._c3=h.pageY;c._d3=c._v=(!f?c._h:c._e3)?h.pageX:h.pageY;c._f3=0;c._g3=0;c._h3=!f?c._p:c._i3;c._j3=(new Date).getTime();if(a)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,h=b.pageX-this._b3,a=b.pageY-this._c3,e=this._h3+h,d=this._h3+a,j=!f?this._h:this._e3,e=j?e:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=b.pageY;"x"===d&&0!==h?this._f3=0<h?1:-1:"y"===d&&0!==
a&&(this._g3=0<a?1:-1);d=j?this._b3:this._c3;h=j?h:a;f?e>this._n3?e=this._h3+h*this._n1:e<this._o3&&(e=this._h3+h*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(e=this._h3+h*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(e=this._h3+h*this._n1));this._h3=e;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,h,a="touchmove"===b.type;if(!c._s2||a){if(a){if(c._r3)return;var e=b.originalEvent.touches;if(e){if(1<e.length)return;
h=e[0]}else return}else h=b,c.msEnabled&&(h=h.originalEvent);c._a3||(c._e&&(!f?c._p1:c._s3).css(c._g+c._u1,"0s"),function j(){c._l2&&(c._t3=requestAnimationFrame(j),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=h;else if(e=!f?c._h:c._e3,h=Math.abs(h.pageX-c._b3)-Math.abs(h.pageY-c._c3)-(e?-7:7),7<h){if(e)b.preventDefault(),c._z2="x";else if(a){c._v3();return}c._l3=!0}else if(-7>h){if(e){if(a){c._v3();return}}else b.preventDefault(),c._z2="y";c._l3=!0}}},_v3:function(){this._r3=
!0;this._a3=this._l2=!1;this._y2()},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function h(b,d){if(a._l||f)j=(-a._u-a._d1)*a._w,g=Math.abs(a._p-j),a._c=g/d,b&&(a._c+=250),a._c=c(a._c),a._x3(j,!1)}var a=this,e,d,j,g;d="touchend"===b.type||"touchcancel"===b.type;if(!a._s2||d)if(a._s2=!1,a.ev.trigger("rsDragRelease"),a._u3=null,a._l2=!1,a._r3=!1,a._l3=!1,a._m3=0,cancelAnimationFrame(a._t3),a._a3&&(f?a._q3(a._h3):a._l&&a._p3(a._h3)),a._b.off(a._k1).off(a._l1),d&&a._e1.off(a._m1),a._i1(),
!a._a3&&!a._v2&&f&&a._w3){var k=l(b.target).closest(".rsNavItem");k.length&&a.goTo(k.index())}else{e=!f?a._h:a._e3;if(!a._a3||"y"===a._z2&&e||"x"===a._z2&&!e)if(!f&&a._t2){a._t2=!1;if(a.st.navigateByClick){a._i2(a.msEnabled?b.originalEvent:b);a.dragSuccess=!0;return}a.dragSuccess=!0}else{a._t2=!1;a.dragSuccess=!1;return}else a.dragSuccess=!0;a._t2=!1;a._z2="";var n=a.st.minSlideOffset;d=d?b.originalEvent.changedTouches[0]:a.msEnabled?b.originalEvent:b;var m=e?d.pageX:d.pageY,p=a._d3;d=a._v;var q=
a.currSlideId,r=a.numSlides,u=e?a._f3:a._g3,t=a._z;Math.abs(m-p);e=m-d;d=(new Date).getTime()-a._j3;d=Math.abs(e)/d;if(0===u||1>=r)h(!0,d);else{if(!t&&!f)if(0>=q){if(0<u){h(!0,d);return}}else if(q>=r-1&&0>u){h(!0,d);return}if(f){j=a._i3;if(j>a._n3)j=a._n3;else if(j<a._o3)j=a._o3;else{n=d*d/0.006;k=-a._i3;m=a._y3-a._z3+a._i3;0<e&&n>k?(k+=a._z3/(15/(0.003*(n/d))),d=d*k/n,n=k):0>e&&n>m&&(m+=a._z3/(15/(0.003*(n/d))),d=d*m/n,n=m);k=Math.max(Math.round(d/0.003),50);j+=n*(0>e?-1:1);if(j>a._n3){a._a4(j,k,
!0,a._n3,200);return}if(j<a._o3){a._a4(j,k,!0,a._o3,200);return}}a._a4(j,k,!0)}else p+n<m?0>u?h(!1,d):a._m2("prev",c(Math.abs(a._p-(-a._u-a._d1+1)*a._w)/d),!1,!0,!0):p-n>m?0<u?h(!1,d):a._m2("next",c(Math.abs(a._p-(-a._u-a._d1-1)*a._w)/d),!1,!0,!0):h(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,c;if(this.st.autoScaleSlider){var h=this.st.autoScaleSliderWidth,
a=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",f*(a/h)),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",c*(h/a)),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");
this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&(b.images&&b.isLoaded)&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=
this._e1.offset();this._j2=this._j2[this._i]},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,'<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>');f<this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",[c,f]);this._g4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=this.slides[b];f&&(f.holder&&f.holder.remove(),b<
this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._g4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_g4:function(){var b=this,f=b.numSlides,f=0>=b._u?0:Math.floor(b._u/f);b.numSlides=b.slides.length;0===b.numSlides?(b.currSlideId=b._d1=b._u=0,b.currSlide=b._h4=null):b._u=f*b.numSlides+b.currSlideId;for(f=0;f<b.numSlides;f++)b.slides[f].id=f;b.currSlide=b.slides[b.currSlideId];b._r1=b.slidesJQ[b.currSlideId];
b.currSlideId>=b.numSlides?b.goTo(b.numSlides-1):0>b.currSlideId&&b.goTo(0);b._t();b._l&&b._z&&b._p1.css(b._g+b._u1,"0ms");b._i4&&clearTimeout(b._i4);b._i4=setTimeout(function(){b._l&&b._p3((-b._u-b._d1)*b._w);b._n2();b._l||b._r1.css({display:"block",opacity:1})},14);b.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",
this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,h,a){var e=this,d,j,g;e.ev.trigger("rsBeforeMove",[b,h]);newItemId="next"===b?e.currSlideId+1:"prev"===b?e.currSlideId-1:b=parseInt(b,10);if(!e._z){if(0>newItemId){e._j4("left",!h);return}if(newItemId>=e.numSlides){e._j4("right",!h);return}}e._r2&&(e._u2(!0),c=!1);
j=newItemId-e.currSlideId;g=e._o2=e.currSlideId;var k=e.currSlideId+j;h=e._u;var l;e._z?(k=e._n2(!1,k),h+=j):h=k;e._o=k;e._h4=e.slidesJQ[e.currSlideId];e._u=h;e.currSlideId=e._o;e.currSlide=e.slides[e.currSlideId];e._r1=e.slidesJQ[e.currSlideId];var k=e.st.slidesDiff,m=Boolean(0<j);j=Math.abs(j);var p=Math.floor(g/e._y),q=Math.floor((g+(m?k:-k))/e._y),p=(m?Math.max(p,q):Math.min(p,q))*e._y+(m?e._y-1:0);p>e.numSlides-1?p=e.numSlides-1:0>p&&(p=0);g=m?p-g:g-p;g>e._y&&(g=e._y);if(j>g+k){e._d1+=(j-(g+
k))*(m?-1:1);f*=1.4;for(g=0;g<e.numSlides;g++)e.slides[g].positionSet=!1}e._c=f;e._n2(!0);a||(l=!0);d=(-h-e._d1)*e._w;l?setTimeout(function(){e._k4=!1;e._x3(d,b,!1,c);e.ev.trigger("rsOnUpdateNav")},0):(e._x3(d,b,!1,c),e.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),!this._z&&!this.st.loopRewind&&(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):
this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,h,a){function e(){var a;if(j&&(a=j.data("rsTimeout")))j!==g&&j.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),j.data("rsTimeout","");if(a=g.data("rsTimeout"))clearTimeout(a),g.data("rsTimeout","")}var d=this,j,g,k={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");d._e?d._l?(d._c=parseInt(d._c),
c=d._g+d._v1,k[d._g+d._u1]=d._c+"ms",k[c]=h?l.rsCSS3Easing[d.st.easeInOut]:l.rsCSS3Easing[d.st.easeOut],d._p1.css(k),h||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,j=d._h4,g=d._r1,g.data("rsTimeout")&&g.css("opacity",0),e(),j&&j.data("rsTimeout",setTimeout(function(){k[d._g+d._u1]="0ms";k.zIndex=0;k.display="none";j.data("rsTimeout","");j.css(k);setTimeout(function(){j.css("opacity",0)},16)},d._c+60)),k.display="block",k.zIndex=d._m,k.opacity=0,k[d._g+d._u1]=
"0ms",k[d._g+d._v1]=l.rsCSS3Easing[d.st.easeInOut],g.css(k),g.data("rsTimeout",setTimeout(function(){g.css(d._g+d._u1,d._c+"ms");g.data("rsTimeout",setTimeout(function(){g.css("opacity",1);g.data("rsTimeout","")},20))},20))):d._l?(k[d._h?d._x1:d._w1]=b+"px",d._p1.animate(k,d._c,h?d.st.easeInOut:d.st.easeOut)):(j=d._h4,g=d._r1,g.stop(!0,!0).css({opacity:0,display:"block",zIndex:d._m}),d._c=d.st.transitionSpeed,g.animate({opacity:1},d._c,d.st.easeInOut),e(),j&&j.data("rsTimeout",setTimeout(function(){j.stop(!0,
!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=a?setTimeout(function(){d.loadingTimeout=null;a.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._l4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(this._e){if(!b){b=this._p;var f=this._h3=this._m4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else this._p1.stop(!0),this._p=parseInt(this._p1.css(this._x1),
10);else 20<this._m?this._m=10:this._m++},_m4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_n4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:b},_l4:function(){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._o4=!1;this.ev.trigger("rsAfterSlideChange")},
_j4:function(b,f){var c=this,h=(-c._u-c._d1)*c._w;if(!(0===c.numSlides||c._r2))if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var a=function(){c._r2=!1};c._x3(h+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(h,"",!1,!0,a)})}},_q2:function(b){if(!b.isRendered){var f=b.content,c="rsMainSlideImage",h,a=this.st.imageAlignCenter,e=this.st.imageScaleMode,d;b.videoURL&&(c="rsVideoContainer","fill"!==e?h=!0:(d=f,d.hasClass(c)||(d=d.find("."+c)),d.css({width:"100%",
height:"100%"}),c="rsMainSlideImage"));f.hasClass(c)||(f=f.find("."+c));if(f){var j=b.iW,c=b.iH;b.isRendered=!0;if("none"!==e||a){bMargin="fill"!==e?this._d4:0;b=this._b4-2*bMargin;d=this._c4-2*bMargin;var g,k,l={};if("fit-if-smaller"===e&&(j>b||c>d))e="fit";if("fill"===e||"fit"===e)g=b/j,k=d/c,g="fill"==e?g>k?g:k:"fit"==e?g<k?g:k:1,j=Math.ceil(j*g,10),c=Math.ceil(c*g,10);"none"!==e&&(l.width=j,l.height=c,h&&f.find(".rsImg").css({width:"100%",height:"100%"}));a&&(l.marginLeft=Math.floor((b-j)/2)+
bMargin,l.marginTop=Math.floor((d-c)/2)+bMargin);f.css(l)}}}}};l.rsProto=t.prototype;l.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=l(this);if("object"===typeof b||!b)c.data("royalSlider")||c.data("royalSlider",new t(c,b));else if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,Array.prototype.slice.call(f,1))})};l.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",
transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,
autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};l.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};l.extend(jQuery.easing,{easeInOutSine:function(b,f,c,h,a){return-h/2*(Math.cos(Math.PI*f/a)-1)+c},easeOutSine:function(b,f,c,h,a){return h*Math.sin(f/a*(Math.PI/2))+c},easeOutCubic:function(b,f,c,h,a){return h*((f=f/a-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._p4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._h4&&a._h4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._p4})(jQuery);
// jquery.rs.animated-blocks v1.0.6
(function(j){j.extend(j.rsProto,{_q4:function(){function l(){var f=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._u4!==f){if(0<a._t4.length){for(b=0;b<a._t4.length;b++)clearTimeout(a._t4[b]);a._t4=[]}if(0<a._s4.length){var e;for(b=0;b<a._s4.length;b++)if(e=a._s4[b])a._e?(e.block.css(a._g+a._u1,"0s"),e.block.css(e.css)):e.block.stop(!0).css(e.css),a._u4=null,f.animBlocksDisplayed=!1;a._s4=[]}f.animBlocks&&(f.animBlocksDisplayed=!0,a._u4=f,a._v4(f.animBlocks))}}var a=this,b;a._r4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=j.extend({},a._r4,a.st.block);a._s4=[];a._t4=[];a.ev.on("rsAfterInit",function(){l()});a.ev.on("rsBeforeParseNode",function(a,b,c){b=j(b);c.animBlocks=b.find(".rsABlock").css("display","none");c.animBlocks.length||(c.animBlocks=b.hasClass("rsABlock")?b.css("display","none"):!1)});a.ev.on("rsAfterContentSet",function(b,e){e.id===a.slides[a.currSlideId].id&&setTimeout(function(){l()},a.st.fadeinLoadedSlide?300:0)});
a.ev.on("rsAfterSlideChange",function(){l()})},_w4:function(j,a){setTimeout(function(){j.css(a)},6)},_v4:function(l){var a=this,b,f,e,c;a._t4=[];l.each(function(l){b=j(this);f={};e={};c=null;var g=b.data("move-offset");isNaN(g)&&(g=a.st.block.moveOffset);if(0<g){var d=b.data("move-effect");d?(d=d.toLowerCase(),"none"===d?d=!1:"left"!==d&&("top"!==d&&"bottom"!==d&&"right"!==d)&&(d=a.st.block.moveEffect,"none"===d&&(d=!1))):d=a.st.block.moveEffect;if(d&&"none"!==d){var m;m="right"===d||"left"===d?!0:
!1;var k,h;isOppositeProp=!1;a._e?(k=0,h=a._x1):(m?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",isOppositeProp=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",isOppositeProp=!0),h="margin-"+h,isOppositeProp&&(g=-g),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),b.data("rs-start-move-prop",k))));e[h]=a._n4("top"===d||"left"===d?k-g:k+g,m);f[h]=a._n4(k,m)}}if(g=b.attr("data-fade-effect")){if("none"===g.toLowerCase()||"false"===
g.toLowerCase())g=!1}else g=a.st.block.fadeEffect;g&&(e.opacity=0,f.opacity=1);if(g||d)c={},c.hasFade=Boolean(g),Boolean(d)&&(c.moveProp=h,c.hasMove=!0),c.speed=b.data("speed"),isNaN(c.speed)&&(c.speed=a.st.block.speed),c.easing=b.data("easing"),c.easing||(c.easing=a.st.block.easing),c.css3Easing=j.rsCSS3Easing[c.easing],c.delay=b.data("delay"),isNaN(c.delay)&&(c.delay=a.st.block.delay*l);d={};a._e&&(d[a._g+a._u1]="0ms");d.moveProp=f.moveProp;d.opacity=f.opacity;d.display="none";a._s4.push({block:b,
css:d});a._w4(b,e);a._t4.push(setTimeout(function(b,d,c,g){return function(){b.css("display","block");if(c){var f={};if(a._e){var e="";c.hasMove&&(e+=c.moveProp);c.hasFade&&(c.hasMove&&(e+=", "),e+="opacity");f[a._g+a._t1]=e;f[a._g+a._u1]=c.speed+"ms";f[a._g+a._v1]=c.css3Easing;b.css(f);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._t4[g]}}(b,f,c,l),6>=c.delay?12:c.delay))})}});j.rsModules.animatedBlocks=j.rsProto._q4})(jQuery);
// jquery.rs.auto-height v1.0.2
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this;if(a.st.autoHeight){var b,d,e,c=function(c){e=a.slides[a.currSlideId];if(b=e.holder)if((d=b.height())&&void 0!==d)a._c4=d,a._e||!c?a._e1.css("height",d):a._e1.stop(!0,!0).animate({height:d},a.st.transitionSpeed)};a.ev.on("rsMaybeSizeReady.rsAutoHeight",function(a,b){e===b&&c()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&c()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){c(!1);
setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>');a._e&&a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16)},16)});a.ev.on("rsBeforeAnimStart",function(){c(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){c(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._x4})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_y4:function(){var a=this,d;a._z4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._z4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._a5()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();b(window).off("blur"+a.ns+" focus"+a.ns)}))},
_a5:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){!a._l2&&(!a._r2&&a._b5&&e===a.currSlide)&&a._c5()});a.ev.on("rsDragRelease",function(){a._b5&&a._d5&&(a._d5=!1,a._c5())});a.ev.on("rsAfterSlideChange",function(){a._b5&&a._d5&&(a._d5=!1,a.currSlide.isLoaded&&a._c5())});a.ev.on("rsDragStart",function(){a._b5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._d5=!0,a._e5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._b5&&(c&&a.st.autoPlay.stopAtAction?a.stopAutoPlay():
(a._d5=!0,a._e5()))});a._f5=!1;a.ev.on("rsVideoStop",function(){a._b5&&(a._f5=!1,a._c5())});a.ev.on("rsVideoPlay",function(){a._b5&&(a._d5=!1,a._e5(),a._f5=!0)});b(window).on("blur"+a.ns,function(){a._b5&&(a._d5=!0,a._e5())}).on("focus"+a.ns,function(){a._b5&&a._d5&&(a._d5=!1,a._c5())});a.st.autoPlay.pauseOnHover&&(a._g5=!1,a.slider.hover(function(){a._b5&&(a._d5=!1,a._e5(),a._g5=!0)},function(){a._b5&&(a._g5=!1,a._c5())}))},toggleAutoPlay:function(){this._b5?this.stopAutoPlay():this.startAutoPlay()},
startAutoPlay:function(){this._b5=!0;this.currSlide.isLoaded&&this._c5()},stopAutoPlay:function(){this._f5=this._g5=this._d5=this._b5=!1;this._e5()},_c5:function(){var a=this;!a._g5&&!a._f5&&(a._h5=!0,a._i5&&clearTimeout(a._i5),a._i5=setTimeout(function(){var b;!a._z&&!a.st.loopRewind&&(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},!a.currSlide.customDelay?a.st.autoPlay.delay:a.currSlide.customDelay))},_e5:function(){!this._g5&&!this._f5&&(this._h5=!1,this._i5&&(clearTimeout(this._i5),
this._i5=null))}});b.rsModules.autoplay=b.rsProto._y4})(jQuery);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_j5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._k5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._l5=b=c(b+"</div>");a._m5=b.appendTo(a.slider).children();a._l5.on("click.rs",".rsNavItem",function(){a._n5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._l5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._m5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._m5=a._l5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._m5.eq(c);d&&d.length&&(d.remove(),a._m5=a._l5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._o5&&a._o5.removeClass("rsNavSelected");b=a._m5.eq(b);b.addClass("rsNavSelected");a._o5=b}))}});c.rsModules.bullets=c.rsProto._j5})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010
(function(b){b.extend(b.rsProto,{_p5:function(){var a=this,g,c,e;a._q5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._q5,a.st.deeplinking);if(a.st.deeplinking.enabled){var h=a.st.deeplinking.change,d="#"+a.st.deeplinking.prefix,f=function(){var a=window.location.hash;return a&&(a=parseInt(a.substring(d.length),10),0<=a)?a-1:-1},j=f();-1!==j&&(a.st.startSlideId=j);h&&(b(window).on("hashchange"+a.ns,function(){if(!g){var b=f();0>b||(b>a.numSlides-1&&(b=a.numSlides-1),a.goTo(b))}}),
a.ev.on("rsBeforeAnimStart",function(){c&&clearTimeout(c);e&&clearTimeout(e)}),a.ev.on("rsAfterSlideChange",function(){c&&clearTimeout(c);e&&clearTimeout(e);e=setTimeout(function(){g=!0;window.location.replace((""+window.location).split("#")[0]+d+(a.currSlideId+1));c=setTimeout(function(){g=!1;c=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){c=e=null;h&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._p5})(jQuery);
(function(b,a,g){function c(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var e=document,h,d=b.event.special,f=e.documentMode,j="onhashchange"in a&&(f===g||7<f);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;d.hashchange=b.extend(d.hashchange,{setup:function(){if(j)return!1;b(h.start)},teardown:function(){if(j)return!1;b(h.stop)}});var p=function(){var e=c(),d=r(n);e!==n?(q(n=e,d),b(a).trigger("hashchange")):
d!==n&&(location.href=location.href.replace(/#.*/,"")+d);l=setTimeout(p,b.fn.hashchange.delay)},d={},l,n=c(),q=f=function(a){return a},r=f;d.start=function(){l||p()};d.stop=function(){l&&clearTimeout(l);l=g};if(a.attachEvent&&!a.addEventListener&&!j){var k,m;d.start=function(){k||(m=(m=b.fn.hashchange.src)&&m+c(),k=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){m||q(c());p()}).attr("src",m||"javascript:0").insertAfter("body")[0].contentWindow,e.onpropertychange=function(){try{"title"===
event.propertyName&&(k.document.title=e.title)}catch(a){}})};d.stop=f;r=function(){return c(k.location.href)};q=function(a,d){var c=k.document,f=b.fn.hashchange.domain;a!==d&&(c.title=e.title,c.open(),f&&c.write('<script>document.domain="'+f+'"\x3c/script>'),c.close(),k.location.hash=a)}}h=d})(jQuery,this);
// jquery.rs.fullscreen v1.0.5
(function(c){c.extend(c.rsProto,{_r5:function(){var a=this;a._s5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._s5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._t5()})},_t5:function(){var a=this;a._u5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){a._v5={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""};var b=["webkit","moz","o","ms","khtml"];if(!a.isAndroid)if("undefined"!=typeof document.cancelFullScreen)a._v5.supportsFullScreen=!0;else for(var d=0;d<b.length;d++)if(a._v5.prefix=b[d],"undefined"!=typeof document[a._v5.prefix+"CancelFullScreen"]){a._v5.supportsFullScreen=!0;break}a._v5.supportsFullScreen?(a.nativeFS=!0,a._v5.fullScreenEventName=a._v5.prefix+"fullscreenchange"+a.ns,a._v5.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;
default:return document[this.prefix+"FullScreen"]}},a._v5.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},a._v5.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}):a._v5=!1}a.st.fullscreen.buttonFS&&(a._w5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},
enterFullscreen:function(a){var b=this;if(b._v5)if(a)b._v5.requestFullScreen(c("html")[0]);else{b._b.on(b._v5.fullScreenEventName,function(){b._v5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._v5.requestFullScreen(c("html")[0]);return}if(!b._x5){b._x5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._u5&&b._b2();a=c(window);b._y5=a.scrollTop();b._z5=a.scrollLeft();b._a6=c("html").attr("style");b._b6=c("body").attr("style");b._c6=b.slider.attr("style");
c("body, html").css({overflow:"hidden",height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=
!1,b._d6(a));b.isFullscreen=!0;b._x5=!1;b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._v5){if(!a){b._v5.cancelFullScreen(c("html")[0]);return}b._b.off(b._v5.fullScreenEventName)}if(!b._x5){b._x5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._u5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._a6||"");c("body").attr("style",b._b6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=
a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._d6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._y5);a.scrollLeft(b._z5);b._x5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_d6:function(a){var b=
!a.isLoaded&&!a.isLoading?'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>':'<img class="rsImg rsMainSlideImage" src="'+a.image+'"/>';a.content.hasClass("rsImg")?a.content=c(b):a.content.find(".rsImg").eq(0).replaceWith(b);!a.isLoaded&&(!a.isLoading&&a.holder)&&a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._r5})(jQuery);
// jquery.rs.global-caption v1.0
(function(b){b.extend(b.rsProto,{_e6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(!a.st.globalCaptionInside?a.slider:a._e1);a.globalCaption.html(a.currSlide.caption)}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption)}))}});b.rsModules.globalCaption=b.rsProto._e6})(jQuery);
// jquery.rs.nav-auto-hide v1.0
(function(b){b.extend(b.rsProto,{_f6:function(){var a=this;if(a.st.navAutoHide&&!a.hasTouch)a.ev.one("rsAfterInit",function(){if(a._l5){a._l5.addClass("rsHidden");var b=a.slider;b.one("mousemove.controlnav",function(){a._l5.removeClass("rsHidden")});b.hover(function(){a._l5.removeClass("rsHidden")},function(){a._l5.addClass("rsHidden")})}})}});b.rsModules.autoHideNav=b.rsProto._f6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_g6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._h6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._l5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._m5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._m5=a._l5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._m5.eq(d);b&&(b.remove(),a._m5=a._l5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._o5&&a._o5.removeClass("rsNavSelected");c=a._m5.eq(c);c.addClass("rsNavSelected");a._o5=c}))},_h6:function(){var a=this,c;a._k5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._l5=c;a._m5=c.children(".rsNavItem");a.slider.append(c);a._l5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._g6})(jQuery);
// jquery.rs.thumbnails v1.0.5
(function(f){f.extend(f.rsProto,{_i6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._j6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._j6,a.st.thumbs),a._k6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,c,b){c=f(c);b.thumbnail=c.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=f(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=c.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=c.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._l6()}),a._o5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._m5[a.currSlideId]);e!==a._o5&&(a._o5&&
(a._o5.removeClass("rsNavSelected"),a._o5=null),a._m6&&a._n6(a.currSlideId),a._o5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,c,b){e="<div"+a._o6+' class="rsNavItem rsThumb">'+a._p6+c.thumbnail+"</div>";b>=a.numSlides?a._s3.append(e):a._m5.eq(b).before(e);a._m5=a._s3.children();a.updateThumbsSize()}),a.ev.on("rsOnRemoveSlide",function(e,c){var b=a._m5.eq(c);b&&(b.remove(),a._m5=a._s3.children(),a.updateThumbsSize())}))},_l6:function(){var a=this,e="rsThumbs",c=a.st.thumbs,
b="",g,d,h=c.spacing;a._k5=!0;a._e3="vertical"===c.orientation?!1:!0;a._o6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._q6=!1;a._n5=!1;a._m6=!1;a._r6=c.arrows&&c.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);b+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._p6=c.appendSpan?'<span class="thumbIco"></span>':"";for(var j=0;j<a.numSlides;j++)d=a.slides[j],b+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._p6+
"</div>";b=f(b+"</div></div>");g={};c.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=c.paddingTop);c.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=c.paddingBottom);b.css(g);a._s3=f(b).find("."+e+"Container");a._r6&&(e+="Arrow",c.arrowLeft?a._s6=c.arrowLeft:(a._s6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),b.append(a._s6)),c.arrowRight?a._t6=c.arrowRight:(a._t6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),b.append(a._t6)),a._s6.click(function(){var b=
(Math.floor(a._i3/a._u6)+a._v6)*a._u6;a._a4(b>a._n3?a._n3:b)}),a._t6.click(function(){var b=(Math.floor(a._i3/a._u6)-a._v6)*a._u6;a._a4(b<a._o3?a._o3:b)}),c.arrowsAutoHide&&!a.hasTouch&&(a._s6.css("opacity",0),a._t6.css("opacity",0),b.one("mousemove.rsarrowshover",function(){a._m6&&(a._s6.css("opacity",1),a._t6.css("opacity",1))}),b.hover(function(){a._m6&&(a._s6.css("opacity",1),a._t6.css("opacity",1))},function(){a._m6&&(a._s6.css("opacity",0),a._t6.css("opacity",0))})));a._l5=b;a._m5=a._s3.children();
a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(b);a._w3=!0;a._w6=h;c.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._l5.on("click.rs",".rsNavItem",function(){a._n5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",function(){a._x6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)})},updateThumbsSize:function(){var a=this,e=a._m5.first(),c={},b=a._m5.length;a._u6=(a._e3?e.outerWidth():
e.outerHeight())+a._w6;a._y3=b*a._u6-a._w6;c[a._e3?"width":"height"]=a._y3+a._w6;a._z3=a._e3?a._l5.width():a._l5.height();a._o3=-(a._y3-a._z3)-a.st.thumbs.firstMargin;a._n3=a.st.thumbs.firstMargin;a._v6=Math.floor(a._z3/a._u6);if(a._y3<a._z3)a.st.thumbs.autoCenter&&a._q3((a._z3-a._y3)/2),a.st.thumbs.arrows&&a._s6&&(a._s6.addClass("rsThumbsArrowDisabled"),a._t6.addClass("rsThumbsArrowDisabled")),a._m6=!1,a._n5=!1,a._l5.off(a._j1);else if(a.st.thumbs.navigation&&!a._m6&&(a._m6=!0,!a.hasTouch&&a.st.thumbs.drag||
a.hasTouch&&a.st.thumbs.touch))a._n5=!0,a._l5.on(a._j1,function(b){a._g2(b,!0)});a._e&&(c[a._g+"transition-duration"]="0ms");a._s3.css(c);if(a._w3&&(a.isFullscreen||a.st.thumbs.fitInViewport))a._e3?a._c4=a._x6-a._l5.outerHeight():a._b4=a._x6-a._l5.outerWidth()},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._l5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._l6(),this._l5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=
a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,c,b,g){var d=this;if(d._m6){e||(e=d.st.thumbs.transitionSpeed);d._i3=a;d._y6&&clearTimeout(d._y6);d._q6&&(d._e||d._s3.stop(),c=!0);var h={};d._q6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=c?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,
e,c?"easeOutCubic":d.st.easeInOut));b&&(d._i3=b);d._z6();d._y6=setTimeout(function(){d._q6=!1;g&&(d._a4(b,g,!0),g=null)},e)}},_z6:function(){this._r6&&(this._i3===this._n3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._t6.addClass("rsThumbsArrowDisabled"):this._t6.removeClass("rsThumbsArrowDisabled"))},_n6:function(a,e){var c=0,b,f=a*this._u6+2*this._u6-this._w6+this._n3,d=Math.floor(this._i3/this._u6);this._m6&&(this._k6&&(e=!0,
this._k6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(c=1),d=-a+this._v6-2+c,b=d*this._u6+this._z3%this._u6+this._w6-this._n3):0!==a?(a-1)*this._u6<=-this._i3+this._n3&&a-1<=this.numSlides-this._v6&&(b=(-a+1)*this._u6+this._n3):b=this._n3,b!==this._i3&&(c=void 0===b?this._i3:b,c>this._n3?this._q3(this._n3):c<this._o3?this._q3(this._o3):void 0!==b&&(e?this._q3(b):this._a4(b))),this._z6())}});f.rsModules.thumbnails=f.rsProto._i6})(jQuery);
// jquery.rs.video v1.1.0
(function(f){f.extend(f.rsProto,{_a7:function(){var a=this;a._b7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=f.extend({},a._b7,
a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._c7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._d7&&a._d7.css({width:b.width(),height:b.height()})},32)});var c=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,e,d){b=f(e);if(d.videoURL){c&&(a._e=a._f=!1);e=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');b.hasClass("rsImg")?d.content=e.append(b).append(g):
d.content.find(".rsImg").wrap(e).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._c7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._c7){var c=a.currSlide;if(!c.videoURL)return!1;var b=a._e7=c.content,c=c.videoURL,e,d;c.match(/youtu\.be/i)||c.match(/youtube\.com/i)?(d=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(d=c.match(d))&&11==d[7].length&&(e=d[7]),void 0!==e&&(a._d7=a.st.video.youTubeCode.replace("%id%",
e))):c.match(/vimeo\.com/i)&&(d=/(www\.)?vimeo.com\/(\d+)($|\/)/,(d=c.match(d))&&(e=d[2]),void 0!==e&&(a._d7=a.st.video.vimeoCode.replace("%id%",e)));a.videoObj=f(a._d7);a.ev.trigger("rsOnCreateVideoElement",[c]);a.videoObj.length&&(a._d7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._d7.find(".rsPreloader").after(a.videoObj),b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer"),a._d7.css({width:b.width(),
height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._d7),a.isIPAD&&b.addClass("rsIOSVideo"),a._f7(!1),setTimeout(function(){a._d7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._c7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._c7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),a._f7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",[a.videoObj]);
var c=a._d7.find("iframe");if(c.length)try{c.attr("src","")}catch(b){}a._d7.remove();a._d7=null},16),a.ev.trigger("rsVideoStop"),a._c7=!1,!0):!1},_f7:function(a){var c=[],b=this.st.video;b.autoHideArrows&&(this._c2&&(c.push(this._c2,this._d2),this._e2=!a),this._w5&&c.push(this._w5));b.autoHideControlNav&&this._l5&&c.push(this._l5);b.autoHideBlocks&&this.currSlide.animBlocks&&c.push(this.currSlide.animBlocks);b.autoHideCaption&&this.globalCaption&&c.push(this.globalCaption);if(c.length)for(b=0;b<c.length;b++)a?
c[b].removeClass("rsHidden"):c[b].addClass("rsHidden")}});f.rsModules.video=f.rsProto._a7})(jQuery);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._g7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._h7={enabled:!0,centerArea:0.6,center:!0,breakpoint:0,breakpointCenterArea:0.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._h7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._i7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._i7.css("overflow","visible");a._o1=a.st.controlsInside?
a._i7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._i7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._i7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._g7})(jQuery);



/*! Smooth Scroll - v1.4.7 - 2012-10-29
* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */
(function(a){function f(a){return a.replace(/(:|\.)/g,"\\$1")}var b="1.4.7",c={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},d=function(b){var c=[],d=!1,e=b.dir&&b.dir=="left"?"scrollLeft":"scrollTop";return this.each(function(){if(this==document||this==window)return;var b=a(this);b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))}),c.length||this.each(function(a){this.nodeName==="BODY"&&(c=[this])}),b.el==="first"&&c.length>1&&(c=[c[0]]),c},e="ontouchend"in document;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b){b=b||{};var c=a.extend({},a.fn.smoothScroll.defaults,b),d=a.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(b){var e=this,g=a(this),h=c.exclude,i=c.excludeWithin,j=0,k=0,l=!0,m={},n=location.hostname===e.hostname||!e.hostname,o=c.scrollTarget||(a.smoothScroll.filterPath(e.pathname)||d)===d,p=f(e.hash);if(!c.scrollTarget&&(!n||!o||!p))l=!1;else{while(l&&j<h.length)g.is(f(h[j++]))&&(l=!1);while(l&&k<i.length)g.closest(i[k++]).length&&(l=!1)}l&&(b.preventDefault(),a.extend(m,c,{scrollTarget:c.scrollTarget||p,link:e}),a.smoothScroll(m))}),this}}),a.smoothScroll=function(b,c){var d,e,f,g,h=0,i="offset",j="scrollTop",k={},l={},m=[];typeof b=="number"?(d=a.fn.smoothScroll.defaults,f=b):(d=a.extend({},a.fn.smoothScroll.defaults,b||{}),d.scrollElement&&(i="position",d.scrollElement.css("position")=="static"&&d.scrollElement.css("position","relative"))),d=a.extend({link:null},d),j=d.direction=="left"?"scrollLeft":j,d.scrollElement?(e=d.scrollElement,h=e[j]()):e=a("html, body").firstScrollable(),d.beforeScroll.call(e,d),f=typeof b=="number"?b:c||a(d.scrollTarget)[i]()&&a(d.scrollTarget)[i]()[d.direction]||0,k[j]=f+h+d.offset,g=d.speed,g==="auto"&&(g=k[j]||e.scrollTop(),g=g/d.autoCoefficent),l={duration:g,easing:d.easing,complete:function(){d.afterScroll.call(d.link,d)}},d.step&&(l.step=d.step),e.length?e.stop().animate(k,l):d.afterScroll.call(d.link,d)},a.smoothScroll.version=b,a.smoothScroll.filterPath=function(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=c})(jQuery);


/*
* $ lightbox_me
* By: Buck Wilson
* Version : 2.3
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


(function($) {

    $.fn.lightbox_me = function(options) {

        return this.each(function() {

            var
                opts = $.extend({}, $.fn.lightbox_me.defaults, options),
                $overlay = $(),
                $self = $(this),
                $iframe = $('<iframe id="foo" style="z-index: ' + (opts.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
                ie6 = ($.browser.msie && $.browser.version < 7);

            if (opts.showOverlay) {
                //check if there's an existing overlay, if so, make subequent ones clear
               var $currentOverlays = $(".js_lb_overlay:visible");
                if ($currentOverlays.length > 0){
                    $overlay = $('<div class="lb_overlay_clear js_lb_overlay"/>');
                } else {
                    $overlay = $('<div class="' + opts.classPrefix + '_overlay js_lb_overlay"/>');
                }
            }

            /*----------------------------------------------------
               DOM Building
            ---------------------------------------------------- */
            if (ie6) {
                var src = /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank';
                $iframe.attr('src', src);
                $('body').append($iframe);
            } // iframe shim for ie6, to hide select elements
            $('body').append($self.hide()).append($overlay);


            /*----------------------------------------------------
               Overlay CSS stuffs
            ---------------------------------------------------- */

            // set css of the overlay
            if (opts.showOverlay) {
                setOverlayHeight(); // pulled this into a function because it is called on window resize.
                $overlay.css({ position: 'absolute', width: '100%', top: 0, left: 0, right: 0, bottom: 0, zIndex: (opts.zIndex + 2), display: 'none' });
                if (!$overlay.hasClass('lb_overlay_clear')){
                    $overlay.css(opts.overlayCSS);
                }
            }

            /*----------------------------------------------------
               Animate it in.
            ---------------------------------------------------- */
               //
            if (opts.showOverlay) {
                $overlay.fadeIn(opts.overlaySpeed, function() {
                    setSelfPosition();
                    $self[opts.appearEffect](opts.lightboxSpeed, function() { setOverlayHeight(); setSelfPosition(); opts.onLoad()});
                });
            } else {
                setSelfPosition();
                $self[opts.appearEffect](opts.lightboxSpeed, function() { opts.onLoad()});
            }

            /*----------------------------------------------------
               Hide parent if parent specified (parentLightbox should be jquery reference to any parent lightbox)
            ---------------------------------------------------- */
            if (opts.parentLightbox) {
                opts.parentLightbox.fadeOut(200);
            }


            /*----------------------------------------------------
               Bind Events
            ---------------------------------------------------- */

            $(window).resize(setOverlayHeight)
                     .resize(setSelfPosition)
                     .scroll(setSelfPosition);
                     
            $(window).bind('keyup.lightbox_me', observeKeyPress);
                     
            if (opts.closeClick) {
                $overlay.click(function(e) { closeLightbox(); e.preventDefault; });
            }
            $self.delegate(opts.closeSelector, "click", function(e) {
                closeLightbox(); e.preventDefault();
            });
            $self.bind('close', closeLightbox);
            $self.bind('reposition', setSelfPosition);

            

            /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


            /*----------------------------------------------------
               Private Functions
            ---------------------------------------------------- */

            /* Remove or hide all elements */
            function closeLightbox() {
                var s = $self[0].style;
                if (opts.destroyOnClose) {
                    $self.add($overlay).remove();
                } else {
                    $self.add($overlay).hide();
                }

                //show the hidden parent lightbox
                if (opts.parentLightbox) {
                    opts.parentLightbox.fadeIn(200);
                }

                $iframe.remove();
                
                // clean up events.
                $self.undelegate(opts.closeSelector, "click");

                $(window).unbind('reposition', setOverlayHeight);
                $(window).unbind('reposition', setSelfPosition);
                $(window).unbind('scroll', setSelfPosition);
                $(window).unbind('keyup.lightbox_me');
                if (ie6)
                    s.removeExpression('top');
                opts.onClose();
            }


            /* Function to bind to the window to observe the escape/enter key press */
            function observeKeyPress(e) {
                if((e.keyCode == 27 || (e.DOM_VK_ESCAPE == 27 && e.which==0)) && opts.closeEsc) closeLightbox();
            }


            /* Set the height of the overlay
                    : if the document height is taller than the window, then set the overlay height to the document height.
                    : otherwise, just set overlay height: 100%
            */
            function setOverlayHeight() {
                if ($(window).height() < $(document).height()) {
                    $overlay.css({height: $(document).height() + 'px'});
                     $iframe.css({height: $(document).height() + 'px'}); 
                } else {
                    $overlay.css({height: '100%'});
                    if (ie6) {
                        $('html,body').css('height','100%');
                        $iframe.css('height', '100%');
                    } // ie6 hack for height: 100%; TODO: handle this in IE7
                }
            }


            /* Set the position of the modal'd window ($self)
                    : if $self is taller than the window, then make it absolutely positioned
                    : otherwise fixed
            */
            function setSelfPosition() {
                var s = $self[0].style;

                // reset CSS so width is re-calculated for margin-left CSS
                $self.css({left: '50%', marginLeft: ($self.outerWidth() / 2) * -1,  zIndex: (opts.zIndex + 3) });


                /* we have to get a little fancy when dealing with height, because lightbox_me
                    is just so fancy.
                 */

                // if the height of $self is bigger than the window and self isn't already position absolute
                if (($self.height() + 80  >= $(window).height()) && ($self.css('position') != 'absolute' || ie6)) {

                    // we are going to make it positioned where the user can see it, but they can still scroll
                    // so the top offset is based on the user's scroll position.
                    var topOffset = $(document).scrollTop() + 40;
                    $self.css({position: 'absolute', top: topOffset + 'px', marginTop: 0})
                    if (ie6) {
                        s.removeExpression('top');
                    }
                } else if ($self.height()+ 80  < $(window).height()) {
                    //if the height is less than the window height, then we're gonna make this thing position: fixed.
                    // in ie6 we're gonna fake it.
                    if (ie6) {
                        s.position = 'absolute';
                        if (opts.centered) {
                            s.setExpression('top', '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')
                            s.marginTop = 0;
                        } else {
                            var top = (opts.modalCSS && opts.modalCSS.top) ? parseInt(opts.modalCSS.top) : 0;
                            s.setExpression('top', '((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"')
                        }
                    } else {
                        if (opts.centered) {
                            $self.css({ position: 'fixed', top: '50%', marginTop: ($self.outerHeight() / 2) * -1})
                        } else {
                            $self.css({ position: 'fixed'}).css(opts.modalCSS);
                        }

                    }
                }
            }

        });



    };

    $.fn.lightbox_me.defaults = {

        // animation
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,

        // close
        closeSelector: ".close",
        closeClick: true,
        closeEsc: true,

        // behavior
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,

        // callbacks
        onLoad: function() {},
        onClose: function() {},

        // style
        classPrefix: 'lb',
        zIndex: 999,
        centered: false,
        modalCSS: {top: '40px'},
        overlayCSS: {background: 'black', opacity: .3}
    }
})(jQuery);


// jquery.fasttap.js v1.0.0
// (c) Tim Hall
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function ($) {
    var touchSupported = ('ontouchstart' in window || 'createTouch' in document),
        clickbuster = (function () {
            var coordinates = [],
                delay = 2500,
                threshold = 25,
                preventGhostClick = function (x, y) {
                    coordinates.push(x, y);
                    window.setTimeout(pop, delay);
                },
                pop = function () {
                    coordinates.splice(0, 2);
                },
                onClick = function (event) {
                    for (var i = 0; i < coordinates.length; i += 2) {
                        var x = coordinates[i],
                            y = coordinates[i + 1];

                        if (Math.abs(event.clientX - x) < threshold
                            && Math.abs(event.clientY - y) < threshold) {
                            event.stopPropagation();
                            event.preventDefault();
                        }
                    }
                };

            return {
                preventGhostClick: preventGhostClick,
                onClick: onClick
            }
        })(),
        fireEvent = function (element, event) {
            if ('createEvent' in document) {
                var eventObj = document.createEvent('MouseEvents');
                eventObj.initEvent(event, true, false);
                element.dispatchEvent(eventObj);
            } else if ('createEventObject' in document) {
                var eventObj = document.createEventObject();
                element.fireEvent('on' + event, eventObj);
            }
        };

    // Register global clickbuster event handler
    $(document).on('click', clickbuster.onClick);

    $.fn.fasttap = function (options) {
        var $element = this,
            handlers = (function () {
                var startX, startY,
                    threshold = 10,
                    onTouchStart = function (event) {
                        event.stopPropagation();

                        $(event.target).on('touchend', onClick);
                        $('body').on('touchmove', onTouchMove);
                            
                        startX = event.originalEvent.touches[0].clientX;
                        startY = event.originalEvent.touches[0].clientY;
                    },

                    onTouchMove = function (event) {
                        if (Math.abs(event.originalEvent.touches[0].clientX - startX) > threshold ||
                            Math.abs(event.originalEvent.touches[0].clientY - startY) > threshold) {
                            reset();
                        }
                    },

                    onClick = function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        reset();
                        
                        if (options && typeof options.callback === 'function') {
                            // If callback is defined, call it
                            options.callback.call(this, event);
                        } else if (event.type == 'touchend') {
                            // Otherwise, perform default click event for tap
                            fireEvent(event.target, 'click');
                        }

                        if (event.type == 'touchend') {
                            clickbuster.preventGhostClick(startX, startY);
                        }
                    },

                    reset = function () {
                        $element.off('touchend', onClick);
                        $('body').off('touchmove', onTouchMove);
                    },

                    handleEvent = function (event) {
                        switch (event.type) {
                            case 'touchstart': onTouchStart(event); break;
                            case 'touchmove': onTouchMove(event); break;
                            case 'touchend': onClick(event); break;
                            case 'click': onClick(event); break;
                        }
                    }

                return {
                    onTouchStart: onTouchStart,
                    onTouchMove: onTouchMove,
                    onClick: onClick,
                    handleEvent: handleEvent
                }
            })()

        // Register event handlers
        if (touchSupported) { $element.on('touchstart', handlers.onTouchStart); }
        if (options && options.callback) { $element.on('click', handlers.onClick); }

        return this;
    };
})(jQuery);

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

