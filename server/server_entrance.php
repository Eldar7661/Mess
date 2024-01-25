<?php
include('db.php');
include('server_encode_pass.php');

$entrance_input_login = $_POST['entrance_input_login'] ?? null;
$entrance_input_pass = $_POST['entrance_input_pass'] ?? null;

$encode_entrance_input_pass = encode_pass($entrance_input_pass);
$db_result = mysqli_query($db_connect, "SELECT `pass` FROM `user` WHERE `email`='{$entrance_input_login}'");
$pass = null;
foreach ($db_result as $row) {
	$pass = $row['pass'];
}
if($encode_entrance_input_pass == $pass){
	$db_result = mysqli_query($db_connect, "SELECT `token` FROM `token`");
	while (true) {
		$user_new_token = '';
		$user_new_token_cluch = true;
		for ($i=0; $i < 6; $i++) {
			$user_new_token .= strval(rand(100, 1000));
		}
		$db_token = null;
		foreach ($db_result as $row) {
			$db_token = $row['token'];
			if($db_token == $user_new_token){
				$user_new_token_cluch = false;
			}
		}
		if($user_new_token_cluch){
			break;
		}
	}
	$db_result = mysqli_query($db_connect, "SELECT `id` FROM `user` WHERE `email`='".$entrance_input_login."'");
	$user_id = '0';
	foreach ($db_result as $row) {
		$user_id = $row['id'];
	}
	$db_result = mysqli_query($db_connect, "INSERT INTO `token`(`id`, `token`) VALUES ('".$user_id."','".$user_new_token."')");
	echo json_encode(intval($user_new_token));
}
else{
	echo false;
}
mysqli_close($db_connect);
?>