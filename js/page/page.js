let wrapper = document.querySelector('.wrapper');
let header = document.querySelector('header');
let main = document.querySelector('main');
let page_block = document.querySelectorAll('.page_block');
let page_opacity = document.querySelector('.page_opacity');
let page_animation = document.querySelector('.page_animation');
let page_animation_line = document.querySelector('.page_animation_line');
// let nav_animation_page = 0;
setTimeout(()=>{
    main.style.height = window.getComputedStyle(page_block[1]).height
}, 200);
function nav_animation_page(nav_index) {
    page_opacity.style.zIndex = '3';
    page_opacity.style.opacity = '1';
    page_block.forEach((element) => {
        element.style.zIndex = '1';
        element.style.opacity = '0';
    });
    page_block[nav_index].style.zIndex = '2';
    page_block[nav_index].style.opacity = '1';
    setTimeout(function(){
        page_animation.style.height = '10px';
    }, 200)
    setTimeout(function(){
        page_animation.style.width = '200px';
    }, 600)
    setTimeout(function(){
        page_animation_line.style.left = '0px';
    }, 1000)
    setTimeout(function(){
        page_animation.style.background = 'white';
        page_animation.style.width = '100%';
    }, 1200)
    setTimeout(function(){
        page_animation.style.height = '100%';
        main.style.height = window.getComputedStyle(page_block[nav_index]).height;
        wrapper.style.height = String(
            Number(window.getComputedStyle(page_block[nav_index]).height.slice(0, -2))+
            Number(window.getComputedStyle(header).height.slice(0, -2))+
            Number(window.getComputedStyle(footer).height.slice(0, -2))+
            150) + 'px';
    }, 1600)
    setTimeout(function(){
        page_opacity.style.opacity = '0';
    }, 2000)
    setTimeout(function(){
        page_opacity.style.zIndex = '0';
        page_animation.style.background = '#333';
        page_animation_line.style.left = '-200px';
    }, 2200)
}

$(document).ready(function() {
    token = localStorage.getItem('token');
    $.ajax({
        method: "POST",
        url: "server/check_token.php",
        data: {token: token}
    })
    .done(function(msg){
        if(!msg){
            document.location.href = 'index.php';
        }
    })
})