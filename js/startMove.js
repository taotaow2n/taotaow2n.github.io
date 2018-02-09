/*
 * 运动函数
 * 参数：
 * elem 指操作的元素
 * obj 指操作的元素节点上的css属性及它的目标值
 * 			attr 指操作的元素节点上的css属性
 * 			target 指操作的元素节点上的css属性的目标值
 * fn 指运动函数执行完，执行哪一个函数
 */
function startMove(elem, obj, fn){
	// 清除定时器
	clearInterval(elem.timer);
	// 多属性同时运动时，是否每一个属性都到了目标值
	// 开启定时器
	elem.timer = setInterval(function(){
		var flag = true;	// 默认时认为到了目标值 
		// 支持多属性同时运动
		for( var attr in obj ){
			// 目标值
			var target = obj[attr];
			// 判断属性是否为透明度
			var v; // 获取当前值
			if( attr == "opacity" ){
				v = getStyle(elem, attr);
				v = Math.round(v*100);
			}else{				
				v = parseInt(getStyle(elem, attr));
			}
			//console.log(v);
			// 目标值与当前值的间距
			var dist = target - v;
			// 求步长
			var speed = dist/6;
			// 步长取整数
			if(speed>0){
				speed = Math.ceil(speed);
			}else{
				speed = Math.floor(speed);
			}
			// 更新
			if( attr == "opacity" ){
				elem.style.opacity = (v+speed)/100;
				if(/MSIE/.test(navigator.userAgent)){// 如果当前浏览器为IE，则执行兼容代码
					elem.style.filter = "alpha(opacity="+(v+speed)+")";	// 兼容低版本IE
				}
			}else{
				elem.style[attr] = v+speed+"px";
			}
			// 如果没有到达目标值
			if(v!=target){
				flag = false;
			}
			//console.log(0);
		}
		// 如果已经到达目标值，则停止定时器
		if( flag ){
			clearInterval(elem.timer);
			if( fn ){	// 如果给定了第三个参数，则执行该函数
				fn();
			}
		}
	}, 50);	
	
}

/*
 * 获取行间样式
 */
function getStyle(elem, attr){
	if( window.getComputedStyle ){
		return getComputedStyle(elem, null)[attr];
	}else{
		return elem.currentStyle[attr];
	}
}
