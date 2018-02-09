define(function(){
	return function(){
		var cartbox = document.getElementsByClassName("cartbox")[0];
		var cspan = cartbox.getElementsByClassName("cspan")[0];
		
		cspan.onclick = function(){
			var x = parseInt(getComputedStyle(cartbox,null)["right"]);
			console.log(x)
			if(x<=-280){
				//cartbox.style.right="0";
				qstartMove(cartbox,{"right":0})
			}else{
				qstartMove(cartbox,{"right":-280})
			}
		}
	}
})