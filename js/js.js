$(".swiper-wrapper").css({
	width:$(window).width(),
	height:$(window).height()
})

$().ready(function(){
	var mySwiper = new Swiper(".swiper-container",{
		mousewheelControl:true,
		direction : 'vertical',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    if(swiper.activeIndex == 1){
		    	var n = 0;
				$(".car-box img").eq(n).show().siblings().hide();
			}
		}
	})
});