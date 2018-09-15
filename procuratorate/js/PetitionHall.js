window.onload=function(){
	(function(){
		var state=$('.ui-state');
		for(var i=0;i< state.length;i++){
			if(state[i].innerHTML=="已接收" || state[i].innerHTML=="办理完成"){
				state[i].id="green";
			}else if(state[i].innerHTML=="受理审查中" || state[i].innerHTML=="办理中"){
				state[i].id="gray";
			}
		}
	}());
	
	var login=document.getElementById('login');
	var register=document.getElementById('register');
	var lClose=document.getElementById('ui-login-close');
	var rClose=document.getElementById('ui-register-close');
	var l=document.getElementById('ui-login');
	var r=document.getElementById('ui-register');
	var goR=document.getElementById('ui-goR');
	var goL=document.getElementById('ui-goL');
	login.onclick=function(){
		l.style.display="block";
	}
	lClose.onclick=function(){
		l.style.display="none";
	}
	goR.onclick=function(){
		l.style.display="none";
		r.style.display="block";
	}
	register.onclick=function(){
		r.style.display="block";
	}
	rClose.onclick=function(){
		r.style.display="none";
	}
	goL.onclick=function(){
		r.style.display="none";
		l.style.display="block";
	}
	
	
	var checkCode = document.getElementById('codeL'); 
	var checkCode1 = document.getElementById('codeR'); 
	function createCode(){ 
        var code = "";    
        var codeLength = 4;//验证码的长度      
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
        'S','T','U','V','W','X','Y','Z');//随机数   
        for(var i = 0; i < codeLength; i++) {//循环操作   
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
            code += random[index];//根据索引取得随机数加到code上   
        }
        checkCode.innerHTML = code;//把code值赋给验证码   
    }
	function createCode1(){ 
        var code = "";    
        var codeLength = 4;//验证码的长度      
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
        'S','T','U','V','W','X','Y','Z');//随机数   
        for(var i = 0; i < codeLength; i++) {//循环操作   
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
            code += random[index];//根据索引取得随机数加到code上   
        }
        checkCode1.innerHTML = code;//把code值赋给验证码   
    }
	checkCode.onclick=createCode;
	checkCode1.onclick=createCode1;
	
	
	
	var passWord=document.getElementById('pwL');
	var passWord1=document.getElementById('pwR');
	var flag=true,flag1=true;
	passWord.onclick=function(){
		var s=60;
		var timer;
		if(flag){
			timer=setInterval(function(){
				if(s>0){
					passWord.innerHTML="重新获取("+s+"s)";
				}
				if(s==0 || l.style.display=="none"){
					passWord.innerHTML="重新获取";
					clearInterval(timer);
					flag=true;
				}
				s--;	
			},1000);
			flag=false;
		}
		
	}
	
	passWord1.onclick=function(){
		var s=60;
		var timer;
		if(flag1){
			timer=setInterval(function(){
				if(s>0){
					passWord1.innerHTML="重新获取("+s+"s)";
				}
				if(s==0 || r.style.display=="none"){
					passWord1.innerHTML="重新获取";
					clearInterval(timer);
					flag1=true;
				}
				s--;	
			},1000);
			flag1=false;
		}
		
	}
    
}
//文字上下滚动
var timeId;
function move(container ,time){
	var warpper = $(container)
	var height = warpper.height();
	var child = warpper.children()
	var i = 0;
	warpper.append(child.clone());
	timeId=setInterval(
		function(){
			i+=.5;
			if(i>=height){
				i=0;
			}
			warpper.css({
				"top":-i,
			})
		},time
	)


$(".ui-left-content").on("mouseenter",function(){
	clearInterval(timeId)
})
$(".ui-left-content").on("mouseleave",function(){
	timeId=setInterval(
		function(){
			i+=.5;
			if(i>=height){
				i=0;
			}
			warpper.css({
				"top":-i,
			})
		},time
	)
})
}
move(".ui-left-warpper",40)