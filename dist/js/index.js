define(['jquery', 'jquery-cookie'],function($){
function index(){
		$(function(){
				var aBtns = $("#banner").find("ol").find("li");
				var oUl = $("#banner").find("ul");
				var aLis = oUl.find("li");

				var iNow = 0;
				var timer = null;
				aBtns.click(function(){
					iNow = $(this).index();					
					tab()

				})

				function tab(){
					aBtns.attr("class","");
					aBtns.eq(iNow).attr("class","active");
					oUl.stop().animate({left:-1240 * iNow},400,function(){
						if(iNow == aLis.size() - 1){
							iNow = 0;
							oUl.css("left", 0);							
						}
					});
				}

				function timerInner(){
					iNow++;
					/*tab();*/
					if(iNow == aLis.size() - 1){
						aBtns.eq(0).attr("class", 'active');
					}
				}

				timer = setInterval(timerInner,500);

			$("#banner").hover(function(){
					clearInterval(timer);
				}, function(){
					timer = setInterval(timerInner, 500);

				})

			})


	/*顶部产品下拉*/
	$(function(){

/*ajax 加载html页面*/

	$.ajax({
		url:"json/down.json",
		success:function(arr){

			for(var i = 0; i < arr.length; i++){
				
				$(".hearder-product").append($(`<li><a href=''>${arr[i].title}</a></li>`));

				if(arr[i].child){
					// var str = '<div>';
					var html2 = '<ul class="hearder-bottom-product1">';
					for(var j = 0; j < arr[i].child.length;j++){						
							html2 += `<li><a href=""><img src="${arr[i].child[j].img}" alt=""></a>
							<p>"${arr[i].child[j].title1}"</p><p>"${arr[i].child[j].price}"</p></li>`					
					}
					html2 +='</ul>'
					
				}

				$(".hearder-bottom").append($(html2));


			}//*i for 循环*/

			/*移入移出事件*/
			$(".hearder-product li ").mouseenter(function(){
				$(".hearder-bottom ul").css("display","none");
				$(".hearder-bottom ul").eq($(this).index()).css("display","block");
			});
			$(".hearder-wrap").mouseleave(function(){
				$(".hearder-bottom ul").css("display","none");
			});
			
		},
		error:function(msg){
			alert(msg);
		}
	})

	}) /*顶部产品结束*/



/*main1 循环开始   魅族手机  两个大手机*/

	$(function(){

		$.ajax({

			url:"json/main1.json",

			success:function(arr){

				$(".section-phone").append($(`<h3>${arr[0].title}</h3>`));
				$(".section-banner").append($(`<img src="${arr[0].img}" alt="">`));
			
				var html5 = "";
				for(var i = 0; i < arr[0].child1.length; i++){			
						html5 += ` <li class="li"><a href="index2.html"><div class="product-signred"><span class="product-sign">${arr[0].child1[i].title1}</span></div>
						<div class="box-info">
							<p class="box-infop1">${arr[0].child1[i].title2}</p>				
							<p class="box-infop2">${arr[0].child1[i].title3}</p>
							<p class="box-infop3">${arr[0].child1[i].price}</p>
						</div>	
					<img src="${arr[0].child1[i].img}" alt="">
					</a></li>`
									
				}
				$(".center-wrapper-box").append($(html5));


			var html6 ="";
				for(var j = 0; j < arr[0].child2.length; j++){				
						html6 += `<li class="phone1"><a href=""><img src="${arr[0].child2[j].img}" alt=""></a>
						<span class="phone1span1">${arr[0].child2[j].title1}</span>
						<span class="phone1span2">${arr[0].child2[j].title2}</span>
						<span class="phone1span3">${arr[0].child2[j].price}</span></li>`										
				}

				 $(html6).appendTo($(".center-wrapper-box"));							

			},
			error:function(msg){
				alert(msg);
			}
		})
	})



/*主体大循环  开始*/
	$(function(){

	 		$.ajax({
	 			url:"json/main.json",
	 			success:function(arr){
	 			
 				for(var i = 0; i < arr.length ; i++){ 
 					$(".mainbox").eq(i).append(`	
 						<div class="main">
							<div class="main-top"><h3>${arr[i].title}</h3></div>																
							<div class="main-banner"><a href=""><img  src="${arr[i].img}" alt=""></a></div>							
						 <ul class="main-headset"></ul></div>
						`)
 							var html3="";

							for(var j = 0; j < arr[i].child.length; j++){
								/**/

								if(j == 0 || j==4||j==8){
							
 								html3 += `<li class="headset"><a href=""><img class = "bigimg" src="${arr[i].child[j].img}" alt=""></a></li>`
 							}else{
				 			 	html3 +=` <li class="headset"><a href=""><img class = "main-image" src="${arr[i].child[j].img}" alt=""></a>
								<span class="headsetspan1">${arr[i].child[j].title1}</span>
								<span class="headsetspan2">${arr[i].child[j].title2}</span>
								<span class="headsetspan3">${arr[i].child[j].price}</span></li>`;
						}		
					

				
				}
						$(html3).appendTo($(".main-headset").eq(i));
			


				
 				}
			



	 			},
	 			
	 			error:function(msg){
	 				alert(msg);
	 			}
	 		})
	})/*主体大循环结束标签*/


/*社区热帖 开始*/

	$(function(){
		$.ajax({
			url:"json/community.json",
			success:function(arr){
				
				$(".community-top").append($(`<h3>${arr[0].title}</h3>`));
				var html7 = "";
				for(var i = 0; i < arr[0].child.length;i++){
					html7 += `<li class="community-1"><a href="">
						<img class = "communityb" src="${arr[0].child[i].img}" alt="">
						<img class = "communityl" src="${arr[0].child[i].img2}" alt="">
						<span>${arr[0].child[i].title1}</span>
						<p>${arr[0].child[i].title2}</p>
						<i>${arr[0].child[i].title3}</i>
					</a></li>`

				}

				$(".community-ul").append($(html7));

			},
			error:function(msg){
				console.log(msg);
			}
		})

	})/*社区热帖结束*/




}/*function index(){ 函数的结束括号*/		

/*function index(){ return 出来整体的这个函数。是后面的那个index*/
return{
	index: index
}
})


