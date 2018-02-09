define(function(){
	return function(){
		var timer = setInterval(function(){ 
			var d1 = new Date().getTime();//取出当前时间到1970年1月1日8点毫秒数
			var d2 = Date.parse("2017/10/12 10:59:40");//取出当前时间到1970年1月1日8点毫秒数
			var ms = d2-d1;
			var d = parseInt(ms/(1000*60*60*24));	//天
			ms = ms % (1000*60*60*24);	// 剩余的毫秒
			var h = parseInt(ms/(1000*60*60));	//时
			ms = ms % (1000*60*60);	// 剩余的毫秒
			var m = parseInt(ms/(1000*60));	//分钟
			ms = ms % (1000*60);	// 剩余的毫秒
			var s = parseInt(ms/(1000));	//秒
			ms = ms % (1000);	// 剩余的毫秒
			var jishi = document.getElementById("jishi1");
			var span = jishi.getElementsByTagName("span");
			span[0].innerHTML = parseInt(h/10);
			span[1].innerHTML = parseInt(h%10);
			span[2].innerHTML = parseInt(m/10);
			span[3].innerHTML = parseInt(m%10);
			span[4].innerHTML = parseInt(s/10);
			span[5].innerHTML = parseInt(s%10);
			span[6].innerHTML = parseInt(ms/100);
			},100)
		//左右按钮部分
		var content = Array.from(document.getElementsByClassName("xuancontent"));
		btnleft.onmousedown = function(){return false};
		btnright.onmousedown = function(){return false};
		content.forEach(function(v){
			v.style.left = "0px";
		})
		btnright.onclick=function(){
			content.forEach(function(con){
				var x = parseInt(con.style.left);
				if(x==0){
				con.style.left = "-1194px";
				}else{
					con.style.left = "0";
				}
			
			})
		}
		btnleft.onclick=function(){
			content.forEach(function(con){
				var x = parseInt(con.style.left);
				if(x==0){
				con.style.left = "-1194px";
				}else{
					con.style.left = "0";
				}
			
			})
		}
		
		//猜你喜欢按钮
		
		xihuanl.onmousedown = function(){return false};
		xihuanr.onmousedown = function(){return false};
		xihuancontent.style.left = "0px"
		xihuanl.onclick=function(){
				var x = parseInt(xihuancontent.style.left);
				if(x==0){
				xihuancontent.style.left = "-1187px";
				}else{
					xihuancontent.style.left = "0";
				}
			
		}
		xihuanr.onclick=function(){		
				var x = parseInt(xihuancontent.style.left);
				if(x==0){
				xihuancontent.style.left = "-1187px";
				}else{
					xihuancontent.style.left = "0";
				}
			
		
		}
		
		
		
		
		
		//选项卡按钮部分
		var xuanxiangka = document.getElementById("xuanxiangka");
		var li = Array.from(xuanxiangka.getElementsByTagName("li"));
		
		
		
			
				li.forEach(function(value,index){
					value.onclick = function(){
						li.forEach(function(a){
							a.style.background = "#444851";
						})
						value.style.backgroundColor ="#cb351a";
						value.onmouseover = function(){return false}
						content.forEach(function(value1){
							value1.style.display= "none";
						})
						content[index].style.display= "block";
						
					}
					
				})
			
	
			
		
	}
})