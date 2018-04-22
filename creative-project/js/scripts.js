$(document).ready(function () {
    $('.menu').click(function () {
        $('.menu').toggleClass('open-button');
        $('.fullnav').toggleClass('open-nav');
        $('.fullnav a').toggleClass('nav-link-transition')
    });

    // === 3d panel === //

    var $body = $('body'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');

function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		var sxPos = e.pageX / $panel.width() * 100 - 100;
		var syPos = e.pageY / $panel.height() * 100 - 100;
		TweenMax.to($pContent, 2, {
			rotationY: 0.05 * sxPos,
			rotationX: -0.03 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -400",
			ease: Expo.easeOut
		});
		TweenMax.to($img, 2, {
			rotationY: 0.05 * sxPos,
			rotationX: -0.03 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -200",
			ease: Expo.easeOut
		});
	});
};

initTilt();

console.clear();











})
