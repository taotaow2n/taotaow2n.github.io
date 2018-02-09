
	var head = document.getElementsByTagName("head")[0];
	var input = document.getElementById("sinput");
	function callback(obj){
		sul1.innerHTML = "";
		var a = obj.s;
		a.forEach(function(value,index){
			if(index<5){
				var li = document.createElement("li");
				sul1.appendChild(li);
				li.innerHTML = value;
				li.onmouseover = function(){
					this.style.backgroundColor="rgba(200,200,200,.2)";
					input.value = this.innerHTML;
					li.onclick = function(){
						sa1.href = "https://www.baidu.com/s?wd="+input.value;
						sa1.target = "_blank";
						sa1.click();
					}
				}
				li.onmouseout = function(){
					this.style.backgroundColor="";
				}
			}
		})
	}
	function jsonp(url){
		var script = document.createElement("script");
		head.appendChild(script);
		script.src = url;
	}
	var ind = -1;
	input.onkeyup = function(e){
		var li = sul1.getElementsByTagName("li");
		var l = li.length;
		var e = e||window.event;
		var w = input.value;
		console.log(w);
		var code = e.keyCode||e.which;
		switch(code){
			case 10:
			case 13:
			sa1.href = "https://www.baidu.com/s?wd="+w;
			sa1.target = "_blank";
			sa1.click();
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
				sul1.style.display="block";
				jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=callback&wd="+w);

			}else{
				sul1.innerHTML = "";
				sul1.style.display="none";
			}	
		}
		function change(){
		for(var i =0;i<l ;i++){
				li[i].style.backgroundColor = "";
			}
			li[ind].style.backgroundColor = "rgba(200,200,200,.2)";
			input.value = li[ind].innerHTML;
	}
	}
	
	sub1.onclick = function(){
						sa1.href = "https://www.baidu.com/s?wd="+input.value;
						sa1.target = "_blank";
						sa1.click();
				}
	input.onmouseover = function(){
		this.style.borderColor="#666"
	}
	input.onmouseout = function(){
		this.style.borderColor="#CB351A"
	}
	input.onblur= function(){
		sul1.style.display="none"
	}
