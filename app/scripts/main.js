
	$(document).ready(function () {
		$(".dropdown-toggle").dropdown("dropdown-toggle");
	});

/* load footer */
(function ($, window, document, undefined) {
	$(function () {
		$('#footer').load('footer.html');
	});
})(jQuery, window, document);

/* Instagram latest image */
function instagram() {
	jQuery.ajax({
		url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1910658902.aa2c401.cf848414fa6f43cd831db1c0895c79a9&callback=callback",
		jsonp: "callback",
		dataType: "jsonp",
		success: function (response) {
			var latestMedia = response.data[0].images.low_resolution.url;
			var image = "<img alt='latest instagram photo' src='" + latestMedia + "' class='img-responsive center-block'>";
			jQuery('.instagramMedia').html(image);
		}
	});
}
instagram();

///* Twitter feed */
//! function (d, s, id) {
//	var js, fjs = d.getElementsByTagName(s)[0],
//		p = /^http:/.test(d.location) ? 'http' : 'https';
//	if (!d.getElementById(id)) {
//		js = d.createElement(s);
//		js.id = id;
//		js.src = p + "://platform.twitter.com/widgets.js";
//		fjs.parentNode.insertBefore(js, fjs);
//	}
//}(document, "script", "twitter-wjs");