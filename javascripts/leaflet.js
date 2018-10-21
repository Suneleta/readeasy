$(document).ready(function() {
	$("div.screenshots a").fancybox({
			'speedIn'		:	400,
			'speedOut'		:	400,
			'overlayShow'	:	false,
			'padding' : 8,
			'centerOnScroll' : true
	});

	$("div.screenshots ul li").hover(function() {
		$("span", this).stop(true, true).fadeIn(300);
	}, function() {
		$("span", this).stop(true, true).fadeOut(300);
	});

	$(".app_store").hover(function() {
    $("a.on", this).stop(true, true).fadeIn(300);
  }, function() {
    $("a.on", this).stop(true, true).fadeOut(300);
  });

});
