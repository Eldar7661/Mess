let page_profile_gender_title = document.querySelectorAll('.page_profile_gender_title');
let page_profile_gender_pointer = document.querySelector('.page_profile_gender_pointer');
page_profile_gender_title.forEach(element => element.onclick = function() {
    page_profile_gender_pointer.style.left = this.getAttribute("data-page_profile_gender_title")+"px";
})

let profile_name = document.querySelector('#profile_name');
let profile_surname = document.querySelector('#profile_surname');
let profile_avatar = document.querySelector('.page_profile_div_photo img');
let profile_status = document.querySelector('.page_profile_div_status textarea');
let profile_gender = document.querySelector('.page_profile_gender_pointer');
let profile_dateBirth = document.querySelector('#dateBirth');
let profile_familyStatus = document.querySelectorAll('#familyStatus option');
let profile_city = document.querySelector('#city');
$(document).ready(function() {
    $.ajax({
        method: "POST",
        url: "server/server_page/server_page_profile.php?",
        data: {
            page_profile: true,
            token: token
        }
    })
    .done(function(msg){
        let array_page = $.parseJSON(msg);
        profile_name.value = array_page[0];
        profile_surname.value = array_page[1];
        profile_avatar.setAttribute('src', array_page[2]);
        profile_status.value = array_page[3];
        profile_gender.style.left = array_page[4];
        profile_dateBirth.value = array_page[5];
        profile_familyStatus[array_page[6]].setAttribute('selected', 'selected');
        profile_city.value = array_page[7];
    })
})

let page_profile_button_save = document.querySelector('.page_profile_button_save button');
page_profile_button_save.onclick = function() {
    $(document).ready(function() {
        var familyStatus = document.querySelector('#familyStatus');
        $.ajax({
            method: "POST",
            url: "server/server_page/server_page_profile.php",
            data: {
                token: token,
                page_save: true,
                profile_name: profile_name.value,
                profile_surname: profile_surname.value,
                // profile_avatar: profile_avatar.getAttribute('src'),
                profile_status: profile_status.value,
                profile_gender: window.getComputedStyle(profile_gender).left,
                profile_dateBirth: profile_dateBirth.value,
                profile_familyStatus: familyStatus.value,
                profile_city: profile_city.value,
            }
        })
        .done(function(msg){
            if(msg){
                page_profile_animation_save('0', 1);
                setTimeout(function() {
                    page_profile_animation_save('-20', 0);
                }, 600)
            }
        })
    })
}
let page_profile_title_save = document.querySelectorAll('.page_profile_button_save div span');
function page_profile_animation_save(sposition_y, opacity, index = 0) {
    page_profile_title_save[index].style.transform = 'translateY('+sposition_y+'px)';
    page_profile_title_save[index].style.opacity = opacity;
    if (index == page_profile_title_save.length-1) {
        return;
    }
    index++;
    setTimeout(() => {
        page_profile_animation_save(sposition_y, opacity, index);
    }, 100)
}



profile_name.addEventListener('change', profile_name_width);
profile_surname.addEventListener('change', function(){
   profile_surname_width()
});
function profile_name_width(){
    let profile_name_lenght = profile_name.value.length;
    profile_name.style.width = String(14 * profile_name_lenght)+'px';
}
function profile_surname_width(){
    let profile_surname_lenght = profile_surname.value.length;
    profile_surname.style.width = String(14 * profile_surname_lenght)+'px';
}
setTimeout(function() {
    profile_name_width();
    profile_surname_width();
}, 100)



let page_profile_photo_input = document.getElementById('page_profile_photo_input');
let page_profile_photo_delete = document.querySelector('.page_profile_photo_delete');

page_profile_photo_delete.onclick = ()=>{
    if(confirm('Удалить? Аватар невозможно будет востановить')){
        $(document).ready(function() {
            $.ajax({
                method: "POST",
                url: "server/server_page/server_page_profile.php",
                data: {
                    image_delete: true,
                    token: token,
                }
            })
            .done(function(msg){
                profile_avatar.setAttribute('src', msg);
            })
        })
    }
}


page_profile_photo_input.addEventListener('change', function(){
    if(page_profile_photo_input.value){
        $(document).ready(function() {
            if (window.FormData === undefined) {
                alert('В вашем браузере FormData не поддерживается')
            } else {
                let avatar = page_profile_photo_input.files;
                let avatar_formData = new FormData();
                $.each( avatar, function( key, value ){
                    avatar_formData.append( key, value );
                });
                avatar_formData.append( 'token', token );
                avatar_formData.append( 'image_unload', 1 );
                $.ajax({
                    // method: "POST",
                    url: "server/server_page/server_page_profile.php",
                    type: "POST",
                    cache: false,
                    contentType: false,
                    processData: false,
                    dataType : 'json',
                    data: avatar_formData
                })
                .done(function(msg){
                    if(msg[0] == '0'){
                        alert(msg);
                    } else {
                        profile_avatar.setAttribute('src', msg);
                        // window.location.reload();
                    }
                })
            }
        })
    } else{
        alert('Файл не выбран')
    }
});