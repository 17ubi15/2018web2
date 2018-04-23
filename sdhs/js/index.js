// 이미지 슬라이드
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

// 날짜
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

$(".year").append(year+'년');
$(".month").append(month+'월');
$(".day").append(day+'일');
var thisweek = today.getDay();
var date = ["월","화","수","목","금","토","일"];
$(".week").append(date[thisweek-1]);

// 지도
function map(){
    function initMap() {
        var uluru = {lat: 37.539088, lng: 126.990692};
        var map = new google.maps.Map(document.getElementById('map_box'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
}
