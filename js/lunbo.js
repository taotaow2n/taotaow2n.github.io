define(function(){
	return function(){
		var yin = lunbocontent.getElementsByClassName("lunbo_yin");
		var ul1 = lunbocontent.getElementsByClassName("lunul1")[0];
		var li = ul1.getElementsByTagName("li");
		$(li).mouseenter(function(){
			var ind = $(this).index();
			$(yin).eq(ind).stop().fadeIn(350);
			yin[ind].style.top = -53.3*ind+"px";
		}).mouseleave(function(){
			var ind = $(this).stop().index();
			$(yin).eq(ind).stop().fadeOut(300);
		})
		//导航鼠标跟随
		var nli = lunbonav.getElementsByTagName("li");
		$(nli).mouseenter(function(){
			//var x = this.offsetLeft;
			//var y = this.offsetWidth;
			//startMove(gengsui,{"left":x,"width":y})
			$("#gengsui").stop().animate({
				left:this.offsetLeft,
				width:this.offsetWidth
			})	
		}).mouseleave(function(){
			//startMove(gengsui,{"left":0,"width":50})
			$("#gengsui").stop().animate({
				left:0,
				width:50
			})
		})
		//小字运动
		var timer1 = setInterval(fn1,2000);
		setTimeout(fn,100);
		setTimeout(fn0,200);
		function fn(){
			var timer2 = setInterval(fn2,2000)
		}
		function fn0(){
			var timer3 = setInterval(fn3,2000)
		}
		
		function fn1(){
			startMove(dong1,{"top":-30},function(){
				dong1.style.top = "0px";
			})
			startMove(dong1_1,{"top":0},function(){
					dong1_1.style.top = "30px";
				})
		}
			function fn2(){
			startMove(dong2,{"top":-30},function(){
				dong2.style.top = "0px";
			})
			startMove(dong2_2,{"top":0},function(){
					dong2_2.style.top = "30px";
				})
		}
		function fn3(){
			startMove(dong3,{"top":-30},function(){
				dong3.style.top = "0px";
			})
			startMove(dong3_3,{"top":0},function(){
					dong3_3.style.top = "30px";
				})
		}
		
		//图片轮播部分
		var lunul1 = lunbobox.getElementsByTagName("ul")[0];
		var img = lunul1.getElementsByTagName("img");
		var ulli = Array.from(lunul1.children);
		var ol1 = lunbobox.getElementsByTagName("ol")[0];
		var olli = Array.from(ol1.children);
		var lunbo_1 = document.getElementsByClassName("lunbotu_1")[0];
		ulli.forEach(function(value,index){//将图片的显示顺序调换过来；
					value.style.zIndex = -index+5;
				})
		olli.forEach(function(li, index){
			li.onclick = function(){
				now = index;	// 记录应该显示的图片的下标
				tab();	// 执行切换效果
			}
		});
		
		var now = 0;	// 记录下标
		olli[now].className = "selected";	// 初始化按钮样式
		//tab();//先运行一遍，将所有图片透明度变为0，再将最后一张图片变为1 
		
		function tab(){	
		
			olli.forEach(function(li, index){//每次运动请所有的变透明，当前的透明度变为100
				li.className = "";
				qstartMove(ulli[index], {"opacity":0}, function(){//所有图片隐藏
					ulli[index].style.display = "none";
					img[index].style.transform = "scale(1.1,1.1)";
				});
			});
			// 设置当前按钮的样式
			olli[now].className = "selected";
			
			ulli[now].style.display = "block";//第二张图片显示出来，第一轮之后，这里的now值为0，第一张图片被逐渐显示；
			if(now==0)lunbo_1.style.backgroundColor = "rgb(254, 226, 212)";
			if(now==1)lunbo_1.style.backgroundColor = "rgb(217, 241, 253)";
			if(now==2)lunbo_1.style.backgroundColor = "rgb(254, 226, 212)";
			if(now==3)lunbo_1.style.backgroundColor = "rgb(243, 219, 253)";
			if(now==4)lunbo_1.style.backgroundColor = "rgb(254, 226, 230)"
			qstartMove(ulli[now], {"opacity":100},function(){
				img[now].style.transform = "scale(1,1)";
			});
		}
		function next(){
			now++;//先进行加1运算，下标为1，那就是第二张图片要逐渐显示了；
			if( now>4 ){ now=0 }
			tab();
		}
		var timer = setInterval(next, 4500);
		lunbobox.onmouseover = function(){
			clearInterval(timer);
		}
		
		lunbobox.onmouseout = function(){
			if(timer){
				clearInterval(timer)
			}
			timer = setInterval(next, 4500);
			
		}
				
		
	}
})