function registration_stage_onfocus(registration_stage_placeholder) {
	registration_stage_placeholder.style.top = '-10px';
	registration_stage_placeholder.style.left = '20px';
	registration_stage_placeholder.style.color = 'white';
}

function registration_stage_onblur(registration_stage_input, registration_stage_placeholder, registration_stage_input_cluch, registration_stage_placeholder_onblur_no_length) {
	if(registration_stage_input.value.length > 0){
		registration_stage_input_cluch = false;
		registration_stage_placeholder_onblur_no_length = '#b92970';
	}
	else{
		registration_stage_input_cluch = true;
		registration_stage_placeholder_onblur_no_length = 'rgb(80,80,80)';
	}
	if(registration_stage_input_cluch){
		registration_stage_placeholder.style.top = '12px';
		registration_stage_placeholder.style.left = '5px';
	}
	registration_stage_placeholder.style.color = registration_stage_placeholder_onblur_no_length;
}
let registration = document. querySelector('.registration');
let registration_content = document. querySelector('.registration_content');

let registration_stage_login_error = document.querySelector('.registration_stage_login_error');
let registration_stage_code_error = document.querySelector('.registration_stage_code_error');
let registration_stage_user_data_error = document.querySelector('.registration_stage_user_data_error');

// переменые к анимации input
let registration_stage_login_input_login = document.querySelector('.registration_stage_login_input_login');
let registration_stage_login_input_login_placeholder = document.querySelector('.registration_stage_login_input_login_placeholder');
let registration_stage_login_input_login_cluch = true;
let registration_stage_login_input_login_placeholder_onblur_no_length = 'rgb(80,80,80)';


let registration_stage_code_input_code = document.querySelector('.registration_stage_code_input_code');
let registration_stage_code_input_code_placeholder = document.querySelector('.registration_stage_code_input_code_placeholder');
let registration_stage_code_input_code_cluch = true;
let registration_stage_code_input_code_placeholder_onblur_no_length = 'rgb(80,80,80)';


let registration_stage_user_data_input_user_name = document.querySelector('.registration_stage_user_data_input_user_name');
let registration_stage_user_data_input_user_name_placeholder = document.querySelector('.registration_stage_user_data_input_user_name_placeholder');
let registration_stage_user_data_input_user_name_cluch = true;
let registration_stage_user_data_input_user_name_placeholder_onblur_no_length = 'rgb(80,80,80)';

let registration_stage_user_data_input_user_surname = document.querySelector('.registration_stage_user_data_input_user_surname');
let registration_stage_user_data_input_user_surname_placeholder = document.querySelector('.registration_stage_user_data_input_user_surname_placeholder');
let registration_stage_user_data_input_user_surname_cluch = true;
let registration_stage_user_data_input_user_surname_placeholder_onblur_no_length = 'rgb(80,80,80)';

let registration_stage_user_data_input_user_pass = document.querySelector('.registration_stage_user_data_input_user_pass');
let registration_stage_user_data_input_user_pass_placeholder = document.querySelector('.registration_stage_user_data_input_user_pass_placeholder');
let registration_stage_user_data_input_user_pass_cluch = true;
let registration_stage_user_data_input_user_pass_placeholder_onblur_no_length = 'rgb(80,80,80)';

let registration_stage_user_data_input_user_passtwo = document.querySelector('.registration_stage_user_data_input_user_passtwo');
let registration_stage_user_data_input_user_passtwo_placeholder = document.querySelector('.registration_stage_user_data_input_user_passtwo_placeholder');
let registration_stage_user_data_input_user_passtwo_cluch = true;
let registration_stage_user_data_input_user_passtwo_placeholder_onblur_no_length = 'rgb(80,80,80)';
// конец - переменые к анимации input

// ---------------------------------------------------
registration_stage_login_input_login.onfocus = function(){
	registration_stage_login_error.style.opacity = '0';
	registration_stage_onfocus(registration_stage_login_input_login_placeholder);
};
registration_stage_login_input_login.onblur = function(){
	registration_stage_onblur(registration_stage_login_input_login, registration_stage_login_input_login_placeholder, registration_stage_login_input_login_cluch, registration_stage_login_input_login_placeholder_onblur_no_length);
};

registration_stage_code_input_code.onfocus = function(){
	registration_stage_code_error.style.opacity = '0';
	registration_stage_onfocus(registration_stage_code_input_code_placeholder);
};
registration_stage_code_input_code.onblur = function(){
	registration_stage_onblur(registration_stage_code_input_code, registration_stage_code_input_code_placeholder, registration_stage_code_input_code_cluch, registration_stage_code_input_code_placeholder_onblur_no_length);
};

registration_stage_user_data_input_user_name.onfocus = function(){
	registration_stage_onfocus(registration_stage_user_data_input_user_name_placeholder);
};
registration_stage_user_data_input_user_name.onblur = function(){
	registration_stage_onblur(registration_stage_user_data_input_user_name, registration_stage_user_data_input_user_name_placeholder, registration_stage_user_data_input_user_name_cluch, registration_stage_user_data_input_user_name_placeholder_onblur_no_length);
};

registration_stage_user_data_input_user_surname.onfocus = function(){
	registration_stage_onfocus(registration_stage_user_data_input_user_surname_placeholder);
};
registration_stage_user_data_input_user_surname.onblur = function(){
	registration_stage_onblur(registration_stage_user_data_input_user_surname, registration_stage_user_data_input_user_surname_placeholder, registration_stage_user_data_input_user_surname_cluch, registration_stage_user_data_input_user_surname_placeholder_onblur_no_length);
};

registration_stage_user_data_input_user_pass.onfocus = function(){
	registration_stage_onfocus(registration_stage_user_data_input_user_pass_placeholder);
};
registration_stage_user_data_input_user_pass.onblur = function(){
	registration_stage_onblur(registration_stage_user_data_input_user_pass, registration_stage_user_data_input_user_pass_placeholder, registration_stage_user_data_input_user_pass_cluch, registration_stage_user_data_input_user_pass_placeholder_onblur_no_length);
};

registration_stage_user_data_input_user_passtwo.onfocus = function(){
	registration_stage_user_data_error.style.opacity = '0';
	registration_stage_onfocus(registration_stage_user_data_input_user_passtwo_placeholder);
};
registration_stage_user_data_input_user_passtwo.onblur = function(){
	registration_stage_onblur(registration_stage_user_data_input_user_passtwo, registration_stage_user_data_input_user_passtwo_placeholder, registration_stage_user_data_input_user_passtwo_cluch, registration_stage_user_data_input_user_passtwo_placeholder_onblur_no_length);
};
// ---------------------------------------------------
registration_stage_code_input_code.addEventListener('input', (e) =>{
	if(registration_stage_code_input_code.value > 999999){
		registration_stage_code_input_code.value = 999999;
	}
	else if(registration_stage_code_input_code.value < 0){
		registration_stage_code_input_code.value = 0;
	}
});

function registration_login_error(){
	registration_stage_login_input_login.value = '';
	registration_stage_login_error.style.opacity = '1';
}
function registration_code_error(){
	console.log('asdass')
	registration_stage_code_error.style.opacity = '1';
}
function registration_user_data_error() {
	registration_stage_user_data_error.style.opacity = '1';
}


let registration_stage_code_input_back = document.querySelector('[name="registration_stage_code_input_back"]');
let registration_width = Number(window.getComputedStyle(registration).width.slice(0, -2));
function registration_stage_login_input_submit(){
	registration_content.style.left = '-'+String(registration_width)+'px';
}
registration_stage_code_input_back.onclick = function(){
	registration_content.style.left = '0px';
	registration_stage_code_input_code.value = '';
}
function registration_stage_code_input_submit(){
	registration_content.style.left = '-'+String(2*registration_width)+'px';
	registration.style.height = '350px'
}
function registration_stage_user_data_input_submit(){}
// конец - переход этапов регистрации

$(document).ready(function() {
	$('[name="registration_stage_login_input_submit"]').on('click', function(){
		if(registration_stage_login_input_login.value == null || registration_stage_login_input_login.value == ""){
			alert("Необходимо заполнить Email!");
		}
		else{
			$.ajax({
				method: "POST",
				url: "server/server_registration.php",
				data: {
					registration_login: 1,
					registration_stage_login_input_login: registration_stage_login_input_login.value
				}
			})
			.done(function(msg){
				if(msg == 'error'){
					alert("Почта не найдена! Или отправка не получилось");
				} else if(msg == 1){
					registration_stage_login_input_submit();
				} else {
					registration_login_error();
				}
			})

}	})
	$('[name="registration_stage_code_input_submit"]').on('click', function(){
		if(registration_stage_code_input_code.value == null || registration_stage_code_input_code.value == ""){
			alert("Необходимо заполнить CODE!");
		}
		else{
			$.ajax({
				method: "POST",
				url: "server/server_registration.php",
				data: {
					registration_code: 1,
					registration_stage_login_input_login: registration_stage_login_input_login.value, registration_stage_code_input_code: registration_stage_code_input_code.value}
			})
			.done(function(msg){
				if(msg == 1) {
					registration_stage_code_input_submit();
				} else {
					registration_code_error()
				}
			})
		}
	})
	$('[name="registration_stage_user_data_input_submit"]').on('click', function(){
		let registration_stage_user_data_value_cluch = true;
		if(registration_stage_user_data_input_user_name.value == null || registration_stage_user_data_input_user_name.value == ""){
			registration_stage_user_data_value_cluch = false;
			alert("Необходимо заполнить Имя!");
		}
		if(registration_stage_user_data_input_user_surname.value == null || registration_stage_user_data_input_user_surname.value == ""){
			registration_stage_user_data_value_cluch = false;
			alert("Необходимо заполнить Фамилию!");
		}
		if(registration_stage_user_data_input_user_pass.value == null || registration_stage_user_data_input_user_pass.value == ""){
			registration_stage_user_data_value_cluch = false;
			alert("Необходимо заполнить Пороль!");
		}
		if(registration_stage_user_data_input_user_pass.value != registration_stage_user_data_input_user_passtwo.value){
			registration_stage_user_data_value_cluch = false;
			registration_user_data_error();
		}
		if(registration_stage_user_data_value_cluch){
			$.ajax({
				method: "POST",
				url: "server/server_registration.php",
				data: {
					registration_user_data: 1,
					registration_stage_login_input_login: registration_stage_login_input_login.value,
					registration_stage_user_data_input_user_name: registration_stage_user_data_input_user_name.value,
					registration_stage_user_data_input_user_surname: registration_stage_user_data_input_user_surname.value,
					registration_stage_user_data_input_user_pass: registration_stage_user_data_input_user_pass.value
				}
			})
			.done(function(msg){
				if(msg == 1) {
					alert('Акаунт создан!');
					window.location.href = 'index.php';
				} else {
					alert("Попытка регистрации с неподтверждённой почтой");
					alert("НАРУШЕНИЕ ПРАВИЛ САЙТА ИЛИ МЕЖДУНАРОДНОГО ЗАКОНА КАРАЕТСЯ НАКАЗАНИЕМ");
				}
			})
		}
	})
})