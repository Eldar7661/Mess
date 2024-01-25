<?php include('include/start.php')?>
<?php include('include/header.php')?>
<link rel="stylesheet" type="text/css" href="css/user_registration/user_registration.css">
<script type="text/javascript" src="js/user_registration/user_registration.js" defer></script>
<main>
	<div class="registration">
		<div class="registration_content">
			<div class="registration_stage registration_stage_login">
				<div>
					<div class="registration_stage_row">
						<span class="registration_title">Идентификация<br><hr></span>
					</div>
					<div class="registration_stage_row">
						<input type="text" name="registration_stage_login_input_login" maxlength="30" class="registration_stage_input registration_stage_login_input_login" required>
						<div class="registration_stage_error registration_stage_login_error">Почта занята</div>
						<div class="registration_stage_input_placeholder registration_stage_login_input_login_placeholder">email</div>
					</div>
					<div class="registration_stage_row">
						<div></div>
						<input type="submit" value="Далее" class="registration_stage_submit" name="registration_stage_login_input_submit">
					</div>
				</div>
			</div>
			<div class="registration_stage registration_stage_code">
				<div>
					<div class="registration_stage_row">
						<span class="registration_title">Подтверждение Email<br><hr></span>
					</div>
					<div class="registration_stage_row">
						<input type="number" name="registration_stage_code_input_code" class="registration_stage_input registration_stage_code_input_code">
						<div class="registration_stage_error registration_stage_code_error">Неверный code</div>
						<div class="registration_stage_input_placeholder registration_stage_code_input_code_placeholder">code</div>
					</div>
					<div class="registration_stage_row">
						<input type="submit" value="Назад" class="registration_stage_submit" name="registration_stage_code_input_back">
						<input type="submit" value="Далее" class="registration_stage_submit" name="registration_stage_code_input_submit">
					</div>
				</div>
			</div>
			<div class="registration_stage registration_stage_user_data">
				<div>
					<div class="registration_stage_row">
						<span class="registration_title">Данные<br><hr></span>
					</div>
					<div class="registration_stage_row">
						<input type="text" name="registration_stage_user_data_input_user_name" class="registration_stage_input registration_stage_user_data_input_user_name">
						<div class="registration_stage_input_placeholder registration_stage_user_data_input_user_name_placeholder">Имя</div>
					</div>
					<div class="registration_stage_row">
						<input type="text" name="registration_stage_user_data_input_user_surname" class="registration_stage_input registration_stage_user_data_input_user_surname">
						<div class="registration_stage_input_placeholder registration_stage_user_data_input_user_surname_placeholder">Фамилия</div>
					</div>
					<div class="registration_stage_row">
						<input type="text" name="registration_stage_user_data_input_user_pass" class="registration_stage_input registration_stage_user_data_input_user_pass">
						<div class="registration_stage_input_placeholder registration_stage_user_data_input_user_pass_placeholder">Пороль</div>
					</div>
					<div class="registration_stage_row">
						<input type="text" name="registration_stage_user_data_input_user_passtwo" class="registration_stage_input registration_stage_user_data_input_user_passtwo">
						<div class="registration_stage_error registration_stage_user_data_error">Несовпадает</div>
						<div class="registration_stage_input_placeholder registration_stage_user_data_input_user_passtwo_placeholder">Повторите пороль</div>
					</div>
					<div class="registration_stage_row">
						<div></div>
						<input type="submit" value="Создать" class="registration_stage_submit" name="registration_stage_user_data_input_submit">
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
<?php include('include/footer.php')?>