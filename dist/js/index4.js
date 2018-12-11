	$(function(){

		$.ajax({

			url:"json/main2.json",

			success:function(arr){

			var html6 ="";
				for(var j = 0; j < arr[0].child2.length; j++){				
						html6 += `<li class="phone1"><a href=""><img src="${arr[0].child2[j].img}" alt=""></a>
						<span class="phone1span1">${arr[0].child2[j].title1}</span>
						<span class="phone1span2">${arr[0].child2[j].title2}</span>
						<span class="phone1span3">${arr[0].child2[j].price}</span>
						<button id=${arr[0].child2[j].id} class="button">${arr[0].child2[j].title4}</button></li>
						`										
				}

				 $(html6).appendTo($(".center-wrapper-box"));							

			},
			error:function(msg){
				alert(msg);
			}
		})

/*
购物车

 */


/*事件委托，解决异步加载问题都用事件委托解决。给ul加载，li 是触发对象，li可以用，ul在html页面，已经存在.li 还没有加载出来*/


/*给li 添加点击事件，就是添加cookie*/
$(".center-wrapper-box").on("click" ,".button",function(){

	// ballMove(this);
	//获取到当前加入购物车按钮所在的商品id
	var id = this.id;

//1、判断是否第一次添加cookie

var first = $.cookie("goods") == null ? true :false;

//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
if(first){
/*{id:${id}, num:1}  对象用：。${id} ${} 拼接获取值  $()jq获取是这样的*/
/*'[{id:${id}, num:1}] 整体是个字符串 第一个id 是字符串，第二个是个变量。所以需要拼接*/
	$.cookie("goods",`[{id:${id},num:1}]`,{expires:7});
}else{

	/*已经不是第一次添加，判断cookie里面是否添加这个产品  先获取cookie 值判断。cookie id 是否等于点击按钮的id 
	上面点击按钮已经声明 var id = this.id（通过遍历获取到每个cookie id） */
	var str = $.cookie("goods");
	/*获取cookie 数据，并转成对应的数据结构*/
/*	eval json格式的字符串转成字符串
cookie 里面存的都是json格式的字符串  要转成我们能用的普通字符串
eval  相当于  JSON.parse() JSON转换成普通对应能用
	转换的字符串，必须最外层是数组，数组元素是对象*/
	var arr = eval(str);
	/*var same = false; //假设没有相同的数据*/
	var same = false; /*加上没有相同的数据*/

	for(var i = 0; i < arr.length; i++){
		if(arr[i].id == id){
			/*arr[i].num++;   num是$.cookie("goods",'[{id = ${id}, num = 1}]',{expires:7}); 里面的num  。num是我们自己起的名字，代表数量，起a,b什么都是可以的*/
			arr[i].num++;

			/*arr 已经变成新的数据 给cookie 重新设置一下cookie值 先转成json格式。因为cookie 都是json 格式。然后再把num++ 后的arr给存上*/

			var cookieStr = JSON.stringify(arr);

			/*声明的变量 变量里面有字符串，带引号*/
			$.cookie("goods" ,cookieStr,{expires:7});
			same = true;
			/*上面判断都是有相同的数据，num ++ 了已经。要将same 变成true 让在这停止，不进入下面。下面是第一次添加这个产品。所以变成true*/
			break;			
		}
	}

	if(!same){
		/*之前没有添加过 ,声明一个变量。因为json数据都是用变量存的一个个商品
		obj 的格式就是我们data.json 数据的格式  id 是thisid  和上面$.cookie("goods",'[{id:${id}, num:1}]',{expires:7}); 是一样的*/
		/*整体是个对象不需要像上面一样拼接*/
		var obj = {id:id, num:1};

		arr.push(obj);
		/*将cookie 值重新设置。需要转换成cookie 能用的JSON 格式*/
		var cookieStr = JSON.stringify(arr);
		$.cookie("goods",cookieStr,{expires:7});
		}
	}
	 // sc_car();
	 // sc_msg();
})

/*购物车数字*/
	// function sc_car(){
	// 		var str = $.cookie("goods");
	// 		if(str){
	// 			var arr = eval(str);
	// 			var sum = 0;
	// 			for(var i = 0; i < arr.length; i++){
	// 				sum += arr[i].num;
	// 			}
	// 			$("#num").html(sum);
	// 		}
	// 	}

/*购物车物品显示*/
// function sc_msg(){
// 			$.ajax({
// 				url: 'json/main2.json',
// 				success: function(arr){
// 					$(".sc_right ul").html("");
// 					//在所有商品信息里面找出，加入购物车的商品信息
// 					var cookie_arr = eval($.cookie('goods'));
// 					for(var i = 0; i < cookie_arr.length; i++){
// 						$(`<li>
// 				<div class = "sc_goodsPic">
// 					<img src="${arr[cookie_arr[i].id].img}" alt="">
// 				</div>
// 				<div class = "sc_goodsTitle">
// 					<p>这是商品曲奇饼干</p>
// 				</div>
// 				<div class = "sc_goodsBtn">购买</div>
// 				<div class = "sc_goodsNum">商品数量:${cookie_arr[i].num}</div>
// 			</li>`).appendTo($(".sc_right ul"));
// 					}
// 				}
// 			})
// 		}


	})