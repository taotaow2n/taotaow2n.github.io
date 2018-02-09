define(["daojishi"],function(dao){
	return function(){
		//字体滚动
		var temai = document.getElementById("temai");
		var i = Array.from(temai.getElementsByTagName("i"));
		i.forEach(function(value,index){
			value.style.left = 14*index+"px";
			
		})
		var timer1= setInterval(fn,2000);
		function fn(){
		 setTimeout(function(){fn1()},50)
		 setTimeout(function(){fn2()},100)
		 setTimeout(function(){fn3()},150)
		  setTimeout(function(){fn4()},200)
		 setTimeout(function(){fn5()},250)
		  setTimeout(function(){fn6()},300)
		  setTimeout(function(){fn7()},350)
		  setTimeout(function(){fn8()},400)
		  setTimeout(function(){fn9()},450)
		  setTimeout(function(){fn10()},500)
		  setTimeout(function(){fn11()},550)
		  setTimeout(function(){fn12()},600)
		  setTimeout(function(){fn13()},650)
		 setTimeout(function(){fn14()},700)
		 setTimeout(function(){fn15()},750)
			           
		}
		
		function fn1(){
			qstartMove(i[0],{"top":-10},function(){
				i[0].style.top = "0"
			})
		}
		function fn2(){
			qstartMove(i[1],{"top":-10},function(){
				i[1].style.top = "0"
			})
		}
		function fn3(){
			qstartMove(i[2],{"top":-10},function(){
				i[2].style.top = "0"
			})
		}
		function fn4(){
			qstartMove(i[3],{"top":-10},function(){
				i[3].style.top = "0"
			})
		}
		function fn5(){
			qstartMove(i[4],{"top":-10},function(){
				i[4].style.top = "0"
			})
		}
		function fn6(){
			qstartMove(i[5],{"top":-10},function(){
				i[5].style.top = "0"
			})
		}
		function fn7(){
			qstartMove(i[6],{"top":-10},function(){
				i[6].style.top = "0"
			})
		}
		function fn8(){
			qstartMove(i[7],{"top":-10},function(){
				i[7].style.top = "0"
			})
		}
		function fn9(){
			qstartMove(i[8],{"top":-10},function(){
				i[8].style.top = "0"
			})
		}
		function fn10(){
			qstartMove(i[9],{"top":-10},function(){
				i[9].style.top = "0"
			})
		}
		function fn11(){
			qstartMove(i[10],{"top":-10},function(){
				i[10].style.top = "0"
			})
		}
		function fn12(){
			qstartMove(i[11],{"top":-10},function(){
				i[11].style.top = "0"
			})
		}
		function fn13(){
			qstartMove(i[12],{"top":-10},function(){
				i[12].style.top = "0"
			})
		}
		function fn14(){
			startMove(i[13],{"top":-10},function(){
				i[13].style.top = "0"
			})
		}
		function fn15(){
			qstartMove(i[14],{"top":-10},function(){
				i[14].style.top = "0"
			})
		}

		var jishi = Array.from(document.getElementsByClassName("jishi"));
		
		
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
			
			jishi.forEach(function(value){
				value.innerHTML = d+"天"+h+"时"+m+"分"+s+"秒";
			})
			
			
			},100)
		
		
		
		
	}
})