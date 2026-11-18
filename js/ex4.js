// JavaScript Document

$(document).ready(function(){

//menu 漢堡選單
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});
	//menu rwd 偵測到瀏覽器到達768px以上時，nav顯示，否則隱藏
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});


//first but + content
	$(".list").eq(0).addClass("ch_bg");
	$(".content").hide().eq(0).show();
	
//click event
	$(".list").click(function(){
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		var _index = $(this).index();
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);//由右念到左


	});

//swiper
var swiper = new Swiper('.mySwiper', {
	speed: 1000,//切換速度
	spaceBetween: 0,//圖片切換中間距離
	centeredSlides: true,
	autoplay: {
		delay: 2500,//圖片停多久
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
    
	
});