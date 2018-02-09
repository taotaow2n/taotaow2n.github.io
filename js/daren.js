define(function(){
	return function(){
		var timer  = setInterval(tab,3000)
		var dalun1 = document.getElementById("dalun1");
			var n = 0;
			function fn(){
				if(n>=2){
					qstartMove(dalun1,{"left":-230*n},function(){
						dalun1.style.left = "0px";
						n = 0;
					})
				}else{
					qstartMove(dalun1,{"left":-230*n})
				}
			}
			function tab(){
				n++;
				fn();
			}
			
			dalun1.onmouseover = function(){
			    clearInterval(timer);
			}
			dalun1.onmouseout = function(){
				timer = setInterval(tab,3000);
			}
	}
})