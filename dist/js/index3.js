/*点击按钮数量加减*/
$(function(){

	$(".main3").on("click",".compute .add",function(){
			// alert($("#num").val()) 
			// sum();
		if(parseInt($(this).prev().val()) >= 5){
			$(this).prev().val(5);
		}else{
			$(this).prev().val(parseInt($(this).prev().val())+1);
		}	

		var arr = eval($.cookie("goods"));
	for(var i = 0; i < arr.length; i++){
		if(arr[i].id == $(this).prev().attr("data-id")){
			arr[i].num = parseInt($(this).prev().val());
		}
	}

	var cookieStr =JSON.stringify(arr);
	$.cookie("goods",cookieStr,{expires:7});	


	let _this = this;
	sum(_this);

		return false;
		})

	$(".main3").on("click",".compute .minus",function(){
		if(parseInt($(this).next().val()) == 1){
			$(this).next().val(1);
		}else{
			$(this).next().val(parseInt($(this).next().val())-1);
		}		

			var arr = eval($.cookie("goods"));
	for(var i = 0; i < arr.length; i++){
		if(arr[i].id == $(this).next().attr("data-id")){
			arr[i].num = parseInt($(this).next().val());
		}
	}

	var cookieStr =JSON.stringify(arr);
	$.cookie("goods",cookieStr,{expires:7});	

	let _this = this;
	sum2(_this);
		return false;

		})

})

/*按钮点击加减结束*/

 

/*价格结算*/
function sum(_this){
	let price = $(_this).parents('.div4').prev().html();
	price = price.replace(/￥/g,'');
	$(_this).parents('.div4').next().children('span').html('￥'+price*$(_this).prev().val())

}
function sum2(_this){
	let price = $(_this).parents('.div4').prev().html();
	price = price.replace(/￥/g,'');
	$(_this).parents('.div4').next().children('span').html('￥'+price*$(_this).next().val())

}

/*购物车加载*/

	$(function(){

		$.ajax({

			url:"json/main2.json",

			success:function(data){

			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);

			var html6 = "";
			for(var i = 0; i < arr.length; i ++){

				
				// alert(arr[i].id);
			  html6 +=`
			  <div style="position:relative;" class = "aa">
				<div class= "checkbox"></div>
				<div class="img"><img src="${data[0].child2[arr[i].id].img}" alt=""></div>
				<div class="font">
					<p class="p1">${data[0].child2[arr[i].id].title1}</p>
					<p class="p2">${data[0].child2[arr[i].id].title2}</p>
				</div>
				<span class="isprice">${data[0].child2[arr[i].id].price}</span>
				<div class="div4">
					<div class="compute">
						<a class ="minus" href="" data-id = "${arr[i].id}">-</a>
							<input type="text" value="${arr[i].num}" class="num" data-id = "${arr[i].id}" data-max ="5">
						<a class = "add" href="" data-id = "${arr[i].id}">+</a>
					</div>
				</div>
				<div class="main5">
					<span id="mainprice">${data[0].child2[arr[i].id].price}</span>
				</div>
				 
				<span class="delete" data-id = "${arr[i].id}">删除</span>			
			</div>
			`

	}

				 $(html6).appendTo($(".main3"));			


				 $('.delete').click(function(){
						let arr = eval($.cookie('goods'));
						let arr2 = [];
						for(let i =0;i<arr.length;i++){
							if(arr[i].id != $(this).attr('data-id')){
								arr2.push(arr[i]);
							}
						}
						$.cookie('goods',JSON.stringify(arr2));
						location.reload();
				})				

			},
			error:function(msg){
				alert(msg);
			}
		})
	})

	/*点击加减*/
