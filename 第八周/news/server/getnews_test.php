<html>
<body>

<?php
	header("Content-type:application/json;charset=utf-8");
	
	require_once('db.php');
	if($link->connect_errno){
		echo json_encode(array('success'=>'none'));
	}else{
		$sql = "SELECT * FROM news";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);


		$senddata=array();

		while ($row=mysqli_fetch_assoc($result)) {
			array_push($senddata, array(
								'id'=>$row['id'],
								'newstype'=>$row['newstype'],
								'newstitle'=>$row['newstitle'],
								'newsimg'=>$row['newsimg'],
								'newstime'=>$row['newstime'],
								'newssrc'=>$row['newssrc'],
								'newstype'=>$row['newstype'],
					));
		}
		echo json_encode($senddata);
	}
	
	// if (!$result = $mysqli->query($sql)) {
	// }
	$link->close();

	// $arr= array(
	// 		'newstype' => '百家' , 
	// 		'newsimg' => 'img/2.jpg',
	// 		'newstime' => '2016-12-18',
	// 		'newssrc' => '极客',
	// 		'newstitle' => '标题新闻的战俘'
	// 		);
	// echo json_encode($arr);
?>
</body>
</html>