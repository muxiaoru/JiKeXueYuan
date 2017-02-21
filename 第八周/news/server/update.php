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
		$newsid=htmlspecialchars($_POST['id']);

		$sql="UPDATE `news`SET `newstitle`='{$newstitle}',`newsimg`='{$newsimg}',
		`newstype`='{$newstype}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE 
		`id`={$newsid}";

		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);

		echo json_encode(array('success'=>'$sql'));
	}

	$link->close();

?>