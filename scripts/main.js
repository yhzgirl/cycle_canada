function instagram(){jQuery.ajax({url:"https://api.instagram.com/v1/users/self/media/recent/?access_token=1910658902.aa2c401.cf848414fa6f43cd831db1c0895c79a9&callback=callback",jsonp:"callback",dataType:"jsonp",success:function(t){var e=t.data[0].images.low_resolution.url,o="<img alt='latest instagram photo' src='"+e+"' class='img-responsive center-block'>";jQuery(".instagramMedia").html(o)}})}$(document).ready(function(){$(".dropdown-toggle").dropdown("dropdown-toggle")}),function(t,e,o,a){t(function(){t("#footer").load("footer.html")})}(jQuery,window,document),jQuery(document).ready(function(){jQuery(window).width()>1200&&jQuery("html, body, *").mousewheel(function(t,e){this.scrollLeft-=2*e,t.preventDefault()})}),instagram(),!function(t,e,o){var a,n=t.getElementsByTagName(e)[0],c=/^http:/.test(t.location)?"http":"https";t.getElementById(o)||(a=t.createElement(e),a.id=o,a.src=c+"://platform.twitter.com/widgets.js",n.parentNode.insertBefore(a,n))}(document,"script","twitter-wjs");