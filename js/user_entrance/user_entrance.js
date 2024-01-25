let entrance_input_login = document.querySelector('.entrance_input_login');
let entrance_input_pass = document.querySelector('.entrance_input_pass');
let entrance_error = document.querySelectorAll('.entrance_error');

let entrance_input_login_placeholder = document.querySelector('.entrance_input_login_placeholder');
let entrance_input_pass_placeholder = document.querySelector('.entrance_input_pass_placeholder');

let entrance_input_login_cluch = true;
let entrance_input_pass_cluch = true;


let entrance_input_login_placeholder_onblur_no_length = 'rgb(80,80,80)';
let entrance_input_pass_placeholder_onblur_no_length = 'rgb(80,80,80)';

entrance_input_login.onfocus = function() {
	entrance_error[0].style.opacity = '0';
	entrance_error[1].style.opacity = '0';
	entrance_input_login_placeholder.style.top = '-10px';
	entrance_input_login_placeholder.style.left = '20px';
	entrance_input_login_placeholder.style.color = 'white';
}
entrance_input_login.onblur = function() {
	entrance_input_login_placeholder.style.color = entrance_input_login_placeholder_onblur_no_length;
	if(entrance_input_login_cluch){
		entrance_input_login_placeholder.style.top = '12px';
		entrance_input_login_placeholder.style.left = '5px';
	}
}

entrance_input_pass.onfocus = function() {
	entrance_error[0].style.opacity = '0';
	entrance_error[1].style.opacity = '0';
	entrance_input_pass_placeholder.style.top = '-10px';
	entrance_input_pass_placeholder.style.left = '20px';
	entrance_input_pass_placeholder.style.color = 'white';
}
entrance_input_pass.onblur = function() {
	entrance_input_pass_placeholder.style.color = entrance_input_pass_placeholder_onblur_no_length;
	if(entrance_input_pass_cluch){
		entrance_input_pass_placeholder.style.top = '12px';
		entrance_input_pass_placeholder.style.left = '5px';
	}
}


entrance_input_login.addEventListener('change', entrance_input_login_placeholder_func);
entrance_input_pass.addEventListener('change', entrance_input_pass_placeholder_func);

function entrance_input_login_placeholder_func(){
	if(entrance_input_login.value.length > 0){
		entrance_input_login_cluch = false;
		entrance_input_login_placeholder_onblur_no_length = '#b92970';
	}
	else{
		entrance_input_login_cluch = true;
		entrance_input_login_placeholder_onblur_no_length = 'rgb(80,80,80)';
	}
}
function entrance_input_pass_placeholder_func(){
	if(entrance_input_pass.value.length > 0){
		entrance_input_pass_cluch = false;
		entrance_input_pass_placeholder_onblur_no_length = '#b92970';
	}
	else{
		entrance_input_pass_cluch = true;
		entrance_input_pass_placeholder_onblur_no_length = 'rgb(80,80,80)';
	}
}
// ------------------------------------------------
let entrance_input_pass_checkbox = document.querySelector('.entrance_input_pass_checkbox');
let entrance_input_pass_checkbox_cluch = false;

entrance_input_pass_checkbox.onclick = function(){
	if(entrance_input_pass_checkbox_cluch){
		entrance_input_pass_checkbox.classList.remove('entrance_input_pass_checkbox_true');
		entrance_input_pass.setAttribute('type', 'password');
		entrance_input_pass.style.fontSize = '24px';
		entrance_input_pass_checkbox_cluch = false;
	}
	else{
		entrance_input_pass_checkbox.classList.add('entrance_input_pass_checkbox_true');
		entrance_input_pass.setAttribute('type', 'text');
		entrance_input_pass.style.fontSize = '16px';
		entrance_input_pass_checkbox_cluch = true;
	}
}

let entrance_button = document.querySelector('.entrance_content_row button');

entrance_button.onclick = function(){
	window.location.href = 'registration.php';
}
function entrance_errorr() {
	entrance_error[0].style.opacity = '1';
	entrance_error[1].style.opacity = '1';
}

let entrance_input_submit = document.querySelector('.entrance_input_submit');
entrance_input_submit.onclick = () => {
	$(document).ready(function() {
		$.ajax({
			method: "POST",
			url: "server/server_entrance.php",
			data: {
				entrance_input_login: entrance_input_login.value,
				entrance_input_pass: entrance_input_pass.value
			}
		})
		.done(function(msg){
			if(msg == false){
				entrance_errorr();
			}else{
				localStorage.setItem('token', msg);
				document.location.href = 'page.php';
			}
		})
	})
}

var token = localStorage.getItem('token');
console.log(token)
$(document).ready(function() {
	$.ajax({
		method: "POST",
		url: "server/check_token.php",
		data: {token: token}
	})
	.done(function(msg){
		if(msg == false){
			console.log('Нет сохронёного входа');
		}else{
			document.location.href = 'page.php';
		}
	})
})