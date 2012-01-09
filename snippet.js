jQuery(document).ready(function ($) {
	var path = $('script[src*="lightbox"]').attr('src').split("/");
	var BASE_URL = path.slice(0, -1).join('/') + "/" ;
	var lightBox = $.fn.lightBox ;
	$.fn.lightBox = function(settings) {
		settings = $.extend({
			imageLoading: BASE_URL + 'images/lightbox-ico-loading.gif'
			,imageBtnPrev: BASE_URL + 'images/lightbox-btn-prev.gif'
			,imageBtnNext: BASE_URL + 'images/lightbox-btn-next.gif'
			,imageBtnClose: BASE_URL + 'images/lightbox-btn-close.gif'
			,imageBlank: BASE_URL + 'images/lightbox-blank.gif'
		}, settings);
		lightBox.bind(this)(settings);
	};
});