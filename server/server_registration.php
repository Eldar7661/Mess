<?php
include('db.php');
include('server_encode_pass.php');
$registration_login = $_POST['registration_login'] ?? false;
$registration_code = $_POST['registration_code'] ?? false;
$registration_user_data = $_POST['registration_user_data'] ?? false;

if($registration_login){
	$registration_stage_login_input_login = $_POST['registration_stage_login_input_login'];
	$db_result = mysqli_query($db_connect, "SELECT `email` FROM `user`");
	$user_not_in_db_user = false;
	$email = null;
	foreach ($db_result as $row) {
		$email = $row['email'];
		if($email == $registration_stage_login_input_login){
			$user_not_in_db_user = false;
			break;
		}
		else{
			$user_not_in_db_user = true;
		}
	}
	if($user_not_in_db_user){
		$code = null;
		$code = shell_exec('C:\xampp\htdocs\mess\server\code.exe '.$registration_stage_login_input_login);
		if($code == 1){
			echo 'error';
		}
		else{
			$db_user_registration_code = mysqli_query($db_connect, "SELECT `email` FROM `user_registration_code`");
			$user_not_in_db_user_registration_code = true;
			foreach ($db_user_registration_code as $row) {
				$email = $row['email'];
				if($email == $registration_stage_login_input_login){
					$user_not_in_db_user_registration_code = false;
					break;
				}
			}
			if($user_not_in_db_user_registration_code){
				$db_query_user_registration_code = mysqli_query($db_connect, "INSERT INTO `user_registration_code`(`email`, `code`) VALUES ('{$registration_stage_login_input_login}','{$code}')");
			}
			else{
				$db_query_user_registration_code = mysqli_query($db_connect, "UPDATE `user_registration_code` SET `code`='{$code}' WHERE `email`='{$registration_stage_login_input_login}'");
			}
			echo 1;
		}
	}
	else{
		echo 0;
	}
}

if($registration_code){
	$registration_stage_login_input_login = $_POST['registration_stage_login_input_login'];
	$registration_stage_code_input_code = $_POST['registration_stage_code_input_code'];
	$db_result = mysqli_query($db_connect, "SELECT `code` FROM `user_registration_code` WHERE `email`='".$registration_stage_login_input_login."'");
	foreach ($db_result as $row) {
		$code = $row['code'];
	}
	if(strval($registration_stage_code_input_code) ==  strval($code)){
		$db_result = mysqli_query($db_connect, "UPDATE `user_registration_code` SET `email_checked`='1' WHERE `email`='".$registration_stage_login_input_login."'");
		echo 1;
	}
	else{
		echo 0;
	}
}
if($registration_user_data){
	$registration_stage_login_input_login = $_POST['registration_stage_login_input_login'];
	$registration_stage_user_data_input_user_name = $_POST['registration_stage_user_data_input_user_name'];
	$registration_stage_user_data_input_user_surname = $_POST['registration_stage_user_data_input_user_surname'];
	$registration_stage_user_data_input_user_pass = $_POST['registration_stage_user_data_input_user_pass'];
	$encode_registration_stage_user_data_input_user_pass = encode_pass($registration_stage_user_data_input_user_pass);
	$db_result = mysqli_query($db_connect, "SELECT `email_checked` FROM `user_registration_code` WHERE `email`='".$registration_stage_login_input_login."'");
	$email_checked = 0;
	foreach ($db_result as $row) {
		$email_checked = $row['email_checked'];
	}
	if($email_checked){
		$user_all_id = [
			'111111', '222222',
			'333333', '444444',
			'555555', '666666',
			'777777', '888888',
			'999999', '012345',
			'543210', '123456',
			'654321',
		];
		$db_result = mysqli_query($db_connect, "SELECT `id` FROM `user`");
		$generation_user_id = 0;
		foreach($db_result as $row){
			array_push($user_all_id, $row['id']);
		}
		while(true){
			$while_stop = true;
			$generation_user_id = rand(100000, 998000);
			foreach($user_all_id as $id){
				if($generation_user_id == $id){
					$while_stop = false;
				}
			}
			if($while_stop){
				break;
			}
		}
		$db_result = mysqli_query($db_connect, "INSERT INTO `user`(
			`id`,
			`email`,
			`pass`,
			`name`,
			`surname`
		) VALUES (
			'{$generation_user_id}',
			'{$registration_stage_login_input_login}',
			'{$encode_registration_stage_user_data_input_user_pass}',
			'{$registration_stage_user_data_input_user_name}',
			'{$registration_stage_user_data_input_user_surname}'
		)");
		$db_result = mysqli_query($db_connect, "DELETE FROM `user_registration_code` WHERE `email` = '{$registration_stage_login_input_login}'");
		echo 1;
	}
	else{
		echo 0;
	}
}
mysqli_close($db_connect);
?>