define(function(){
	return function(){
//		var dong = document.getElementsByClassName("loudong")[0];
//		var ul = dong.getElementsByTagName("ul")[0];
//		var loulun = document.getElementsByClassName("loulun")[0];
//		var loubtnl = document.getElementsByClassName("loubtnl")[0];
//		var loubtnr = document.getElementsByClassName("loubtnr")[0];
		function lunbotu(a,b,c,d){
			var timer  = setInterval(tab,3000)
			var n = 0;
			function fn(){
				if(n>=2){
					qstartMove(a,{"left":-90*n},function(){
						a.style.left = "0px";
						n = 0;
					})
				}else{
					qstartMove(a,{"left":-90*n})
				}
			}
			function tab(){
				n++;
				fn();
			}
			//移入移出事件
			b.onmouseover = function(){
				clearInterval(timer);
			}
			b.onmouseout = function(){
				timer = setInterval(tab,3000);
			}
			c.onmousedown= function(){
				n--
				if(n<0){a.style.left ="-180px";n=1}
				fn();
				return false;
			}
			d.onmousedown = function(){
				n++;
				if(n>2){a.style.left ="0";n=1}
				fn();
				return false;
			}
		
		}
		lunbotu(louul1,loulun1,loubtnl1,loubtnr1);
		lunbotu(louul2,loulun2,loubtnl2,loubtnr2);
		lunbotu(louul3,loulun3,loubtnl3,loubtnr3);
		lunbotu(louul4,loulun4,loubtnl4,loubtnr4);
		lunbotu(louul5,loulun5,loubtnl5,loubtnr5);
		lunbotu(louul6,loulun6,loubtnl6,loubtnr6);
		lunbotu(louul7,loulun7,loubtnl7,loubtnr7);
		lunbotu(louul8,loulun8,loubtnl8,loubtnr8);
		lunbotu(louul9,loulun9,loubtnl9,loubtnr9);
		
	}
})