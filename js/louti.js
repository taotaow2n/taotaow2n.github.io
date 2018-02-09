define(function(){
	return function(){
		var louti = document.getElementsByClassName("louti")[0];
		var a = Array.from(louti.getElementsByClassName("loutis"));
		var img = louti.getElementsByTagName("img");
		var span = Array.from(louti.getElementsByClassName("loutig"));
	
		
		
		function v(i){
				a[i].style.color = "#e8a79c";
				span[i].style.display = "inline-block";
				img[i].style.display = "none";
				a[i].style.borderColor = "#e8a79c";
		}
		
		function s(i){
			a[i].style.color = "";
				span[i].style.display = "none";
				img[i].style.display = "inline-block";
				a[i].style.borderColor = "";
		}
			function e(){
				
			
			a.forEach(function(value,i){
				value.onmouseover = function(){
					v(i);
				}
				value.onmouseout = function(){
					s(i);
				}
				value.onmousedown = function(){
					return false;
				}
			})
		}
			e();
		
				//获取到滚动条的高度
		var y;
		document.onscroll = function(){
			y = document.documentElement.scrollTop;
			if(y>2200&&y<6900){$(louti).fadeIn()};
			if(y>6900||y<2200){$(louti).fadeOut()};
		
			if(y>2200&&y<=2700){v(0);}else{s(0);}
			if(y>2700&&y<=3400){v(1);}else{s(1);}
			if(y>3400&&y<=3900){v(2);}else{s(2);}
			if(y>3900&&y<=4400){v(3);}else{s(3);}
			if(y>4400&&y<=4900){v(4);}else{s(4);}
			if(y>4900&&y<=5400){v(5);}else{s(5);}
			if(y>5400&&y<=5900){v(6);}else{s(6);}
			if(y>5900&&y<=6400){v(7);}else{s(7);}
			if(y>6400&&y<=6900){v(8);}else{s(8);}
			
		}
		function di(ind,dis){
		a[ind].onclick = function(){
			$("html,body").animate({
				"scrollTop":dis
			},500)
			//a[ind].onmouseout = null;
			}
		}
		di(0,2600);
		di(1,3118);
		di(2,3685);
		di(3,4173);
		di(4,4715);
		di(5,5229);
		di(6,5744);
		di(7,6284);
		di(8,6800);
		//a[1].onclick = function(){document.documentElement.scrollTop = "3118"}
//		a[2].onclick = function(){document.documentElement.scrollTop = "3658"}
//		a[3].onclick = function(){document.documentElement.scrollTop = "4173"}
//		a[4].onclick = function(){document.documentElement.scrollTop = "4715"}
//		a[5].onclick = function(){document.documentElement.scrollTop = "5229"}
//		a[6].onclick = function(){document.documentElement.scrollTop = "5744"}
//		a[7].onclick = function(){document.documentElement.scrollTop = "6284"}
//		a[8].onclick = function(){document.documentElement.scrollTop = "6800"}
		
	
		
	}
})