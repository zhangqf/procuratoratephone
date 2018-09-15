$(".search").on("click",function(){
	$(".ui-chooseaddr").show();
	
	if (event.stopPropagation) { 
		// 针对 Mozilla 和 Opera 
		event.stopPropagation(); 
		} 
		else if (window.event) { 
		// 针对 IE 
		window.event.cancelBubble = true; 
		} 
})
$("body").on("click",function(){
	$(".ui-chooseaddr").hide();
})
var chooseaddr = document.getElementById("chooseaddr");


$(".ui-chooseaddr span").on("click",function(){
	console.log($(this).text())
	if (event.stopPropagation) { 
		// 针对 Mozilla 和 Opera 
		event.stopPropagation(); 
		} 
		else if (window.event) { 
		// 针对 IE 
		window.event.cancelBubble = true; 
		} 
	$("input[type='search']").val($(this).text());
	$(".ui-chooseaddr").hide();
	
})


//
//	console.log(window.YDUI_DISTRICT[27].c[4].c);
//	var tianshui = window.YDUI_DISTRICT[27].c[4].c;
//	console.log(tianshui[1].n);
//	console.log(window.YDUI_DISTRICT);