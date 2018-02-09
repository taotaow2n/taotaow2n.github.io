define(function(){
	return function(){
		$("#a1").mouseenter(function(){
			$("#ul2").slideDown(0);
		})
		$("#ul2").mouseleave(function(){
			$("#ul2").slideUp(0);
		})
		$("#hong").mouseover(function(){
			hong.src = "img/images/hongxin.png";
		}).mouseout(function(){
			hong.src = "img/images/lvxin.png";
		})
		$("#shouon").mouseenter(function(){
			//startMove(shouji,{"height":"125"});
			$("#shouji").stop().slideDown();
			shouon.className = "shouon";
		})
		$("#shouon").mouseleave(function(){
			$("#shouji").stop().slideUp();
			shouon.className = "shou";
		})
		var xuanfu_1  = document.getElementsByClassName("xuanfu_1")[0];
		var c = document.documentElement.offsetWidth;
		var x = parseInt(getComputedStyle(xuanfu,null).width);
		window.onscroll = function(){
				var y = document.documentElement.scrollTop;
				if(y>2000){
				$("#xuanfu").slideDown().css({"left":(c-x)/2});
				$(".xuanfu_1").slideDown();
					
				}else{
					$("#xuanfu").slideUp();
					$(".xuanfu_1").slideUp();
					
				}
		}
	
		
		//cookie
		var ming = Array.from(document.getElementsByClassName("xing"));
		var arr = getCookie("name2");
		var arr1 = getCookie("name3");
		if(arr[0]){
			cooa.innerHTML = arr[0];
			coo1.style.display = "inline-block";
			coo2.style.display = "inline-block";
			ming.forEach(function(value){
				value.style.display = "none";
			})
		}else if(arr1[0]){
			cooa.innerHTML = arr1[0];
			coo1.style.display = "inline-block";
			coo2.style.display = "inline-block";
			ming.forEach(function(value){
				value.style.display = "none";
			})
		}
		coo2.onclick = function(){
			setCookie("name2",[],-1);
			setCookie("name3",[],-1);
			coo1.style.display = "none";
			coo2.style.display = "none";
			ming.forEach(function(value){
				value.style.display = "inline-block";
			});
			
		}
		
		
		
		
		}
	
})