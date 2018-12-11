$(function(){
	var Land = $(".main-form");/*大块 land*/
	var Phone = Land.find(".username");/*手机号码登陆 username */
	var Code = Land.find(".password");/*密码 password*/
	var oBtn = Land.find(".button");
/*只有一个按钮登陆*/
	oBtn.click(function(){
	var str =`username=${Phone.val()}&password=${Code.val()}`
		 $.ajax({
		 	method:"post",
		 	url:"land2.php",
		 	data:str,
		 	success:function(data){
		 		alert(data);
		 	},
		 	error:function(msg){
		 		alert(msg);
		 	}
	 })
	})/*oBtn 点击事件结束标签*/

	
	
})