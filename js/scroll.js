$(document).ready(function() {

	// get header height
	var headerHeight = $('.header-box').outerHeight();

	$('.slide-section').click(function(e) {

		var linkHref = $(this).attr('href');
		var headerHeight = $('.header-box').outerHeight();

		$('html,body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 500); // time to scroll

		e.preventDefault();

	});

	// active link switching
	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();
		
		$('.slide-section').each(function() {

			var sectionOffset = $(this.hash).offset().top - headerHeight - 1;

			if ( scrollbarLocation < 400) {
				$("a").removeClass("active");
			} 

			if ( sectionOffset <= scrollbarLocation ) {
				var thisElement = $(this).addClass('active');
				$("a").removeClass("active");
				$(thisElement).addClass('active');
			}
		});

	});

});