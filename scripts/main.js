function instagram(){jQuery.ajax({url:"https://api.instagram.com/v1/users/self/media/recent/?access_token=1910658902.aa2c401.cf848414fa6f43cd831db1c0895c79a9&callback=callback",jsonp:"callback",dataType:"jsonp",success:function(t){var e=t.data[0].images.low_resolution.url,a="<img src='"+e+"' class='img-responsive center-block'>";jQuery(".instagramMedia").html(a)}})}!function(t,e,a,c){t(function(){t("#footer").load("footer.html")})}(jQuery,window,document),jQuery(document).ready(function(){jQuery(window).width()>1200&&jQuery("html, body, *").mousewheel(function(t,e){this.scrollLeft-=2*e,t.preventDefault()})}),instagram(),!function(t,e,a){var c,n=t.getElementsByTagName(e)[0],o=/^http:/.test(t.location)?"http":"https";t.getElementById(a)||(c=t.createElement(e),c.id=a,c.src=o+"://platform.twitter.com/widgets.js",n.parentNode.insertBefore(c,n))}(document,"script","twitter-wjs");