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

// 공지사항영역
$("#homepaper").on("click",function(){
    $("#notice").css({"color":"black"});
    $("#homepaper").css({"color":"#77abff"});
    $("#notice_table").css({"display":"none"});
    $("#homepaper_table").css({"display":"table"});
});

$("#notice").on("click",function(){
    $("#homepaper").css({"color":"black"});
    $("#notice").css({"color":"#77abff"});
    $("#homepaper_table").css({"display":"none"});
    $("#notice_table").css({"display":"table"});
});

// 날짜
setTimeout(function(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var thisweek = today.getDay();
    var date = ["일","월","화","수","목","금","토"];
    $(".year").append(year+'년');
    $(".month").append(month+'월');
    $("#calendar_day").append(day);
    $(".week").append(date[thisweek]+'요일');
    if(date[thisweek]==date[6]){
        $("#calendar_day").css({"color":"blue"});
    }else if(date[thisweek]==date[0]) {
        $("#calendar_day").css({"color":"red"});
    }else{
        $("#calendar_day").css({"color":"black"});
    };
    $(".day").append(day+'일');
},500);


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
};

// 배너
window.onload = function(){
    var bannerLeft=0;
    var first=1;
    var last=16;
    var imgCnt=0;
    var $img = $("#banner_box li");
    var $first;
    var $last;

    $img.each(function(){ // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+1;
        $(this).attr("id", "banner"+(++imgCnt)); // img에 id 속성 추가
    });

    if(imgCnt > 7){ //배너 7개 이상이면 이동시킴
        last = imgCnt;

        setInterval(function() {
            $img.each(function(){
                $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -142.857142857) { // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width()+1);
                first++;
                last++;
                if(last > imgCnt) { last=1; }
                if(first > imgCnt) { first=1; }
            }
        }, 50);
    }
}

// 슬라이드팝업
$("#game_popup").on("click",function(){
    $("#popup_background").fadeIn();
    $("#popup_box").append('<img src="./images/game.jpg">');
    $("#popup_box img").css({"width":"100%","height":"100%","position":"absolute"});
});

$("#popup_background").on("click",function(){
    popup_close();
});

$("#popup_close-btn").on("click",function(){
    popup_close();
});

function popup_close(){
    $("#popup_background").css({"display":"none"});
    $("#popup_box").empty();
}
