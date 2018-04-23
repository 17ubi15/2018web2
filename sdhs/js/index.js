var img = $("#slide_box-content img");
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

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();

$("#calendar_year").append(year+'년');
$("#calendar_month").append(month+'월');
