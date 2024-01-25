window.token = localStorage.getItem('token');
let nav_shift = 10;
function setNavShift() {
	let ul = document.querySelector('nav ul');
	let nav_div = document.querySelectorAll('.nav_div');
	let ul_height = Number(window.getComputedStyle(ul).height.slice(0, -2));
	let nav_div_height = Number(window.getComputedStyle(nav_div[0]).height.slice(0, -2));
	let amount_nav_div = nav_div.length;
	let indent_global = ul_height - (amount_nav_div * nav_div_height);
	let indent = indent_global / (amount_nav_div-1);
	nav_shift = nav_div_height + indent;
}
setNavShift();
let nav_icon = document.querySelectorAll('.nav_icon');
let nav_pointer = document.querySelector('.nav_pointer');
let nav_index = 0;
nav_icon.forEach((elem)=>elem.onclick = function () {
	nav_index = this.dataset.nav_index;
	nav_pointer.style.top = String(nav_index * nav_shift) + 'px';
	nav_animation_page(nav_index);
	// let j = 0;
	// while(j <  nav_icon.length){
	// 	nav_icon[j].style.backgroundImage = 'url(media/image/nav/'+String(j)+'-0.png)';
	// 	j++;
	// }
	// let elem = this;
	// setTimeout(function(){
	// 	elem.style.backgroundImage = 'url(media/image/nav/'+String(nav_index)+'-1.png)';
	// }, 300)
})
nav_icon[0].style.backgroundImage = 'url(media/image/nav/profile.png)';
nav_icon[1].style.backgroundImage = 'url(media/image/nav/message.png)';
nav_icon[2].style.backgroundImage = 'url(media/image/nav/friends.png)';
nav_icon[3].style.backgroundImage = 'url(media/image/nav/people.png)';
nav_icon[4].style.backgroundImage = 'url(media/image/nav/settings.png)';