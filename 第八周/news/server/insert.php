<?php
	header("Content-type:application/json;charset=utf-8");
	
	require_once('db.php');

	if($link){

		// 插入新闻
		$newstitle=htmlspecialchars($_POST['newstitle']);
		$newsimg=htmlspecialchars($_POST['newsimg']);
		$newstype=htmlspecialchars($_POST['newstype']);
		$newstime=htmlspecialchars($_POST['newstime']);
		$newssrc=htmlspecialchars($_POST['newssrc']);

		$sql="INSERT INTO `news`(`newstitle`,`newsimg`,`newstype`,`newstime`,`newssrc`) VALUES ('{$newstitle}','{$newsimg}','{$newstype}','{$newstime}','{$newssrc}')";

		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);

		echo json_encode(array('success'=>'ok'));
	}

?>