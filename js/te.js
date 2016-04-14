$(function(){
	$(".services").delegate(".moveto","click",function(){
		location.href=$(this).next("h3").children("a").attr("href");
	})
	$("#site-nav").delegate("#run_hom","click",function(){
		location.href=$(this).attr("href");
		// alert("")
	})
	$(".poro_1").delegate(".link i","click",function(){
		location.href=$(this).parent("a").attr("href");
	})
/*专注打造餐饮行业营销型网站 滑动效果*/ 
	// $(window).scroll(function(){

	// });
	// $(window).scroll(function(){
	// 	var he = $("#top").scrollTop();
		
	// 	// if (he){}
		
	// });

	
})