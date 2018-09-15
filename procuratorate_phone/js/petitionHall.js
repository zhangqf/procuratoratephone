$(document).ready(function(){
	$('.ui-subtitle2 a').click(function(){
		var index=$(this).index(); 
		$(this).addClass('situation');
		$(this).siblings().removeClass('situation');
		$(".ui-situation-content").eq(index).css("display","block");
		$(".ui-situation-content").eq(index).siblings().eq(3).css('display','none');
	});
	function list(){
		var searchcode=document.getElementsByClassName('searchcode')
		var img=document.getElementsByClassName('img');
		var situation2=document.getElementsByClassName('ui-situation2');
		for(var i=0;i<searchcode.length;i++){
			(function(j){
				searchcode[j].onclick=function(){
					if(img[j].src.match('right')){
						img[j].src="img/below.png";
						situation2[j].style.display="block";
					}else{
						img[j].src="img/right.png";
						situation2[j].style.display="none";
					}
				}
			}(i));
		}
	}
	list();
})
