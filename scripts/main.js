function instagram(){jQuery.ajax({url:"https://api.instagram.com/v1/users/self/media/recent/?access_token=1910658902.aa2c401.cf848414fa6f43cd831db1c0895c79a9&callback=callback",jsonp:"callback",dataType:"jsonp",success:function(a){var o=a.data[0].images.low_resolution.url,t="<img alt='latest instagram photo' src='"+o+"' class='img-responsive center-block'>";jQuery(".instagramMedia").html(t)}})}$(document).ready(function(){$(".dropdown-toggle").dropdown("dropdown-toggle")}),function(a,o,t,c){a(function(){a("#footer").load("footer.html")})}(jQuery,window,document),instagram();