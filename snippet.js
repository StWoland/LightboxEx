jQuery(document).ready(function ($) {
	var path = $('script[src*="lightbox"]').attr('src').split("/");
	var BASE_URL = path.slice(0, -1).join('/') + "/images/" ;
	var lightBox = $.fn.lightBox ;
	$.fn.lightBox = function(settings) {
		BASE_URL = ( settings && settings.baseUrl ) ? settings.baseUrl : BASE_URL ;
		settings = $.extend({
			imageLoading: BASE_URL + 'lightbox-ico-loading.gif'
			,imageBtnPrev: BASE_URL + 'lightbox-btn-prev.gif'
			,imageBtnNext: BASE_URL + 'lightbox-btn-next.gif'
			,imageBtnClose: BASE_URL + 'lightbox-btn-close.gif'
			,imageBlank: BASE_URL + 'lightbox-blank.gif'
		},settings);
		lightBox.bind(this)(settings);
	};
});