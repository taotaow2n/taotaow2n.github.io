
	var head = document.getElementsByTagName("head")[0];
	var input1 = document.getElementById("xinput");
	function callback1(obj){
		xul1.innerHTML = "";
		var a = obj.s;
		a.forEach(function(value,index){
			if(index<5){
				var li = document.createElement("li");
				xul1.appendChild(li);
				li.innerHTML = value;
				li.onmouseover = function(){
					this.style.backgroundColor="rgba(200,200,200,.2)";
					input1.value = this.innerHTML;
					li.onclick = function(){
						xa1.href = "https://www.baidu.com/s?wd="+input1.value;
						xa1.target = "_blank";
						xa1.click();
					}
				}
				li.onmouseout = function(){
					this.style.backgroundColor="";
				}
			}
		})
	}
	function jsonp1(url){
		var script = document.createElement("script");
		head.appendChild(script);
		script.src = url;
	}
	var ind = -1;
	input1.onkeyup = function(e){
		var li = xul1.getElementsByTagName("li");
		var l = li.length;
		var e = e||window.event;
		var w = input1.value;
		console.log(w);
		var code = e.keyCode||e.which;
		switch(code){
			case 10:
			case 13:
			xa1.href = "https://www.baidu.com/s?wd="+w;
			xa1.target = "_blank";
			xa1.click();
			break;
			case 38:
			ind--;
			if(ind<0)ind=4;
			change();
			break;
			case 40:
			ind++;
			if(ind>4)ind=0;
			change();
			break;
			default :
			if(this.value!=""){
				xul1.style.display="block";
				jsonp1("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=callback1&wd="+w);

			}else{
				xul1.innerHTML = "";
				xul1.style.display="none";
			}	
		}
		function change(){
		for(var i =0;i<l ;i++){
				li[i].style.backgroundColor = "";
			}
			li[ind].style.backgroundColor = "rgba(200,200,200,.2)";
			input1.value = li[ind].innerHTML;
	}
	}
	
	xub1.onclick = function(){
						xa1.href = "https://www.baidu.com/s?wd="+input1.value;
						xa1.target = "_blank";
						xa1.click();
				}
	input1.onmouseover = function(){
		this.style.borderColor="#666"
	}
	input1.onmouseout = function(){
		this.style.borderColor="#CB351A"
	}
	input1.onblur= function(){
		xul1.style.display="none"
	}
