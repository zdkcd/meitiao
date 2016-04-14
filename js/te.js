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
	$(window).scroll(function(){
		var this_height=$(window).height();	
		var offs=$("#test").offset();
		var scrtop=$(window).scrollTop();
		console.log(this_height+",offs:"+offs.top+",scrtop:"+scrtop)
		// if(offs.top>=)
	})
	
})