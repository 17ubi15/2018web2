var img = $("#slide-box img");
var cnt = 0;
var max = img.length-1;

setInterval(function(){
    if(img.is(":animated")) return false;
    $(img[cnt]).siblings().css({"left":"100%"});
    $(img[cnt]).animate({"left":"-100%"}, function(){
        $(this).css({"left":"100%"});
    });
    cnt++;
    if(cnt>max) cnt = 0;
    $(img[cnt]).animate({"left":"0"});
},3000);
