/**
 * 
 */
var count=0; //题目个数
var bar=document.getElementById("bar");
var mess=document.getElementById("mess");
var submmit=document.getElementById("subm");
var widthid=document.getElementsByClassName("container")[0];
var refresh=window.setInterval("init()",1000);
//刷新进度条
var wid2=0;
function val(){
if (count==12){
   window.clearInterval(refresh);
}
else{
	count+=1;
    wid2=(count/12)*100;
    bar.style.width=wid2+"%";
    mess.innerHTML="已完成"+count+"道题";
}
}
var que=document.getElementsByClassName("question")[0].children;
var result=0;
//判断题目是否已做
function init(){	
	for (var i=0;i<que.length;i++){
	  var quechild=que[i].children[1];
	  if (quechild.getElementsByTagName("textarea").length!==0){		   
		var  quetta=quechild.getElementsByTagName("textarea");
		  queresult.tta(quetta);
		  if (result==1){
			  val();
			  result=0;
		  }
	  }
	  else{
		var queinp=quechild.getElementsByTagName("input");
		  queresult.inp(queinp);
		  if (result==1){
			  val();
			  result=0;
		  }
	  }  
	}
	wid2=0;
    count=0;
}
var queresult={
		
//题目为文本输入框
	tta:function(arr){		
		for (var i=0;i<arr.length;i++){
			if(arr[i].value!==""&&arr[i].value!=="请填写数字"){
				result+=1;
				break;
			}
			else{
				result=0;
			}
		}
		return result;
	},
//题目为单选框
	inp:function(arr){
		for (var i=0;i<arr.length;i++){
			if(arr[i].checked){
				result+=1;
				break;
			}
			else{
				result=0;
			}
		}
		return result;
	}
}
//提交按钮触发的函数
function alt(){
	if(bar.offsetWidth+2==widthid.offsetWidth){
		alert("恭喜您完成了答卷!");
	}
	else{
		alert("您还没有完成答卷，come on!")
	}
}
//兼容浏览器事件
var EventUtil={
		addHandler:function(element,type,handler){
			if (element.addEventListener){
				element.addEventListener(type,handler,false);
			}
			else if (element.attachEvent){
				element.attachEvent("on" + type,handler);
			}
			else {
				element["on" + type]=null;
			}
	  }
}
EventUtil.addHandler(submmit,"click",alt);