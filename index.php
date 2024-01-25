<?php include('include/start.php')?>
<?php include('include/header.php')?>
<link rel="stylesheet" type="text/css" href="css/user_entrance/user_entrance.css">
<main>
	<div class="entrance">
		<div class="entrance_content">
			<div class="entrance_content_row">
				<span class="entrance_title">Авторизация<br><hr color="#b92970" width="235px"></span>
			</div>
			<div class="entrance_content_row">
				<input type="text" name="entrance_input_login" maxlength="30" class="entrance_input_login">
				<div class="entrance_input_login_placeholder">Логин</div>
				<div class="entrance_error">Неверный</div>
			</div>
			<div class="entrance_content_row">
				<input type="password" name="entrance_input_pass" maxlength="30" class="entrance_input_pass">
				<div class="entrance_input_pass_placeholder">Пороль</div>
				<div class="entrance_error">Неверный</div>
				<div class="entrance_input_pass_checkbox"></div>
			</div>
			<div class="entrance_content_row">
				<button type="button">Создать Аккаунт</button>
				<input type="submit" value="Вход" class="entrance_input_submit" name="entrance_input_submit">
			</div>
		</div>
	</div>
</main>
<?php include('include/footer.php')?>
<script type="text/javascript" src="js/user_entrance/user_entrance.js"></script>