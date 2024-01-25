let page_friends_list = document.querySelector('.page_friends_list');
let page_friends_online = document.querySelector('.page_friends_online');
let page_friends_application = document.querySelector('.page_friends_application');

function friendsNew(name, avatar, id, online=0){
    let page_friends_person = document.createElement('div');
    let page_friends_person_avatar = document.createElement('div');
    let page_friends_person_info = document.createElement('div');
    let page_friends_person_avatarImg = document.createElement('img');
    let page_friends_person_name = document.createElement('span');

    page_friends_person.className = 'page_friends_person';
    page_friends_person_avatar.className = 'page_friends_person_avatar';
    page_friends_person_info.className = 'page_friends_person_info';
    page_friends_person_name.className = 'page_friends_person_name';

    page_friends_person_name.innerHTML = name;
    page_friends_person_avatarImg.setAttribute('src', avatar);
    page_friends_person.setAttribute('data-id', id);

    if(online){
        page_friends_online.append(page_friends_person);
    } else {
        page_friends_list.append(page_friends_person);
    }

    page_friends_person.append(page_friends_person_avatar);
    page_friends_person.append(page_friends_person_info);
    page_friends_person_avatar.append(page_friends_person_avatarImg);
    page_friends_person_info.append(page_friends_person_name);
}
function applicationFriendsNew(name, avatar, id){
    let page_friends_person = document.createElement('div');
    let page_friends_person_avatar = document.createElement('div');
    let page_friends_person_info = document.createElement('div');
    let page_friends_person_avatarImg = document.createElement('img');
    let page_friends_person_name = document.createElement('span');
    let page_friends_person_span = document.createElement('span');
    let page_friends_person_spanButtonAccept = document.createElement('button');
    let page_friends_person_spanButtonReject = document.createElement('button');

    page_friends_person.className = 'page_friends_person';
    page_friends_person_avatar.className = 'page_friends_person_avatar';
    page_friends_person_info.className = 'page_friends_person_info';
    page_friends_person_name.className = 'page_friends_person_name';

    page_friends_person_name.innerHTML = name;
    page_friends_person_avatarImg.setAttribute('src', avatar);
    page_friends_person_spanButtonAccept.innerHTML = 'Принять';
    page_friends_person_spanButtonReject.innerHTML = 'Отклонить';
    page_friends_person_spanButtonAccept.setAttribute('id', 'page_friends_person_buttonAccept');
    page_friends_person_spanButtonReject.setAttribute('id', 'page_friends_person_buttonReject');
    page_friends_person_spanButtonAccept.setAttribute('data-id', id);
    page_friends_person_spanButtonReject.setAttribute('data-id', id);

    page_friends_application.append(page_friends_person);
    page_friends_person.append(page_friends_person_avatar);
    page_friends_person.append(page_friends_person_info);
    page_friends_person_avatar.append(page_friends_person_avatarImg);
    page_friends_person_info.append(page_friends_person_name);
    page_friends_person_info.append(page_friends_person_span);
    page_friends_person_span.append(page_friends_person_spanButtonAccept);
    page_friends_person_span.append(page_friends_person_spanButtonReject);
}

$(document).ready(function() {
    $.ajax({
        method: "POST",
        url: "server/server_page/server_page_people.php",
        data: {
            token: token,
            page_friends: 1
        }
    })
    .done(function(msg){
        let array_friends = $.parseJSON(msg);
        array_friends.forEach((array_person) => {
            friendsNew(array_person[1]+' '+array_person[2], array_person[3], array_person[0]);
        })
        eventPageFriends();
    })
})
$(document).ready(function() {
    $.ajax({
        method: "POST",
        url: "server/server_page/server_page_people.php",
        data: {
            token: token,
            page_friends_application: 1
        }
    })
    .done(function(msg){
        let array_friends = $.parseJSON(msg);
        array_friends.forEach((array_person) => {
            applicationFriendsNew(array_person[1]+' '+array_person[2], array_person[3], array_person[0]);
        })
        eventPageFriendsApplicationButton();
    })
})
friendsNew('Админ Admin', 'media/image/user/mess.png', 'admin', 1);

function eventPageFriendsApplicationButton(){
    let page_friends_person_buttonAccept = document.querySelectorAll('#page_friends_person_buttonAccept');
    let page_friends_person_buttonReject = document.querySelectorAll('#page_friends_person_buttonReject');

    page_friends_person_buttonAccept.forEach((button) => {
        button.onclick = () => {
            let id_friend_applicationGo = button.getAttribute('data-id');
            $(document).ready(function() {
                $.ajax({
                    method: "POST",
                    url: "server/server_page/server_page_people.php",
                    data: {
                        token: token,
                        page_friends_applicationAccept: 1,
                        id_friend_applicationGo: id_friend_applicationGo
                    }
                })
                .done(function(msg){
                    console.log('Добавлен: '+msg);
                })
            })
            button.parentNode.parentNode.parentNode.style.opacity = '0';
            setTimeout(()=>{
                button.parentNode.parentNode.parentNode.remove();
            }, 1000)
        }
    })
    page_friends_person_buttonReject.forEach((button) => {
        button.onclick = () => {
           let id_friend_applicationGo = button.getAttribute('data-id');
            $(document).ready(function() {
                $.ajax({
                    method: "POST",
                    url: "server/server_page/server_page_people.php",
                    data: {
                        token: token,
                        page_friends_applicationReject: 1,
                        id_friend_applicationGo: id_friend_applicationGo
                    }
                })
                .done(function(msg){
                    console.log('Отклонён: '+msg);
                })
            })
            button.parentNode.parentNode.parentNode.style.opacity = '0';
            setTimeout(()=>{
                button.parentNode.parentNode.parentNode.remove();
            }, 1000)
        }
    })
}


function eventPageFriends(){
    let page_friends_person = document.querySelectorAll('.page_friends_person');

    page_friends_person.forEach((person) => {
        person.onclick = () =>{
            let id = person.getAttribute('data-id');
            console.log(id);
        }
    })
}