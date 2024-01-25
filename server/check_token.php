<?php
include('db.php');
$token = $_POST['token'] ?? 0;
$db_result = mysqli_query($db_connect, "SELECT `id` FROM `token` WHERE `token`='".$token."'");
$db_id = null;
foreach ($db_result as $row) {
	$db_id = $row['id'];
}
if ($db_id == null){
	echo false;
}
else{
	echo true;
}
mysqli_close($db_connect);
?>