/*底部点击按钮滑动事件*/
$(function(){

	var oBtn1 = $(".state").find(".button1");
	var oBtn2 = $(".state .button2");

	oBtn1.on("click",function(){
		$(".ul").animate({left:-240},500)
	})

	oBtn2.on("click",function(){
		$(".ul").animate({left:0},500)
	})

})
/*顶部点击按钮切换图片*/
$(function(){
	$(".choiceul2 li").click(function(){
		$(".choiceul1 li").css("display","none");
		$(".choiceul1 li").eq($(this).index()).css("display","block");
	})
})



/*main 开始循环*/


	$(function(){

		$.ajax({

			url:"json/index2-1.json",

			success:function(arr){	

			// $(".main-r").append($(`<h1>${arr[0].title1}</h1>`));
			// $(".main-r").append($(`<span class= "cc">${arr[1].title2}</span>`));
			$(".div1").append($(`<span class="delivery-span1">${arr[3].title4}</span>`));

			var html ="";
			
				html =`<span class="main-serviedt">${arr[2].title3}</span>								
				<div class="main-serviedd">
				<a href=""><span>${arr[2].child0[0]}</span></a>
				<a href=""><span>${arr[2].child0[1]}</span></a>
				<a href=""><span>${arr[2].child0[2]}</span></a>
				</div>`
			
			$(".main-serviedl").append($(html));


			
			for(var i = 0 ; i < arr[4].check.length; i++){
				$(".main-r").append($(`<div class="div3"><span class="div3span">${arr[4].check[i].title}</span></div>`));
				var html3 = "";
				for(var j = 0; j < arr[4].check[i].child1.length; j++){
					html3 += `<a href=""><span>${arr[4].check[i].child1[j]}</span></a>`;
					
				}

				$(".div3").eq(i).append(html3);

			}


/*点击变色事件*/

	  // :hover{color:#000;border:1px solid #000;}



	


			
		


			},
			error:function(msg){
				alert(msg);
			}
		})
	})