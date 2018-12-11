<?php 
header('content-type:text/html;charset="utf-8"');

	$password = $_POST["password"];
	$link = mysql_connect("localhost", "root", "123456");
	//2、判断数据库是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出整个php程序
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择数据库
	mysql_select_db("meizu");

	$sql = "select * from meizuland where username = '{$username}'";

	$res = mysql_query($sql);
		//7、处理结果
		/*$row = mysql_fetch_assoc($res);*/
	$row = mysql_fetch_assoc($res);

	if(!$row){
		echo "请输入手机号码";
	}else{
		$sql = "select * from meizuland where username = '{$username}'";

		$res = mysql_query($sql);
		$row = mysyl_fetch_assoc($res);

		if($row){
			echo "用户名已存在";
		}else{
/*			$sql = "insert into land1(username,password) values('{$username}','{$password}');"*/

			$sql = "insert into meizuland(username,password)values('{$username}','{$password}');"

			$res = mysql_query($sql);

			if($res){
				echo "注册成功";
			}else{
				echo "注册失败";
			}
		}
	}

?>