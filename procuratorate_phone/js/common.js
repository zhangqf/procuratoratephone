$(document).ready(function(){
	$('.ui-nav li').click(function(){
		$(this).siblings("li").removeClass('ui-nav1');
		$(this).siblings("li").addClass('ui-nav2');
		$(this).removeClass('ui-nav2');
		$(this).addClass('ui-nav1');
		var index=$(this).index();
		$(".ui-section").find('ul').eq(index).css("display","block");
		$(".ui-section").find('ul').eq(index).siblings("ul").eq(0).css("display","none");
		$(".ui-section").find('ul').eq(index).siblings("ul").eq(1).css("display","none");
	});
	$('.uploadImg').click(function(){
		var index=$(this).index('img')-1;
		console.log(index);
		$('.file').eq(index).click();
//		$('.file').eq(index).change(function(){
//			$('.fileName').eq(index).val($('.file').eq(index).val());
//		});
	});
})