let page_messenge_friend = document.querySelector('.page_messenge_friend');
let page_messenge_mess_block = document.querySelector('.page_messenge_mess_block');

function messengefriends(name, avatar, id){
    let page_messenge_person = document.createElement('div');
    let page_messenge_person_avatar = document.createElement('div');
    let page_messenge_person_info = document.createElement('div');
    let page_messenge_person_avatarImg = document.createElement('img');
    let page_messenge_person_name = document.createElement('span');

    page_messenge_person.className = 'page_messenge_persons';
    page_messenge_person_avatar.className = 'page_messenge_person_avatar';
    page_messenge_person_info.className = 'page_messenge_person_info';
    page_messenge_person_name.className = 'page_messenge_person_name';

    page_messenge_person_name.innerHTML = name;
    page_messenge_person_avatarImg.setAttribute('src', avatar);
    page_messenge_person.setAttribute('data-id', id);

    page_messenge_friend.append(page_messenge_person);

    page_messenge_person.append(page_messenge_person_avatar);
    page_messenge_person.append(page_messenge_person_info);
    page_messenge_person_avatar.append(page_messenge_person_avatarImg);
    page_messenge_person_info.append(page_messenge_person_name);
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
            messengefriends(array_person[1]+' '+array_person[2], array_person[3], array_person[0]);
        })
        eventPageMessenge();
    })
})

function eventPageMessenge(){
    let page_messenge_persons = document.querySelectorAll('.page_messenge_persons');
    let page_messenge = document.querySelector('.page_messenge');

    page_messenge_persons.forEach((person) => {
        person.onclick = () => {
            let id = person.getAttribute('data-id');
            sessionStorage.setItem('messId', id);
            $(document).ready(function() {
                $.ajax({
                    method: "POST",
                    url: "server/server_page/server_page_messenge.php",
                    data: {
                        token: token,
                        func: 'get',
                        messTo: id
                    }
                })
                .done(function(msg){
                    page_messenge_mess_block.innerHTML = '';
                    messengeGetFromServer = $.parseJSON(msg);
                    messengeGetFromServer.forEach((messenge) => {
                        page_messenge_mess_block.innerHTML = page_messenge_mess_block.innerHTML+'<span>'+messenge+'</span>';
                    })
                })
            })
            page_messenge.style.opacity = '1';
        }
    })
}

let page_messenge_inputButton = document.querySelector('.page_messenge_input [type="button"]');
let page_messenge_inputText = document.querySelector('.page_messenge_input [type="text"]');

page_messenge_inputButton.onclick = () => {
    if (page_messenge_inputText.value != ''){
        messengeNew();
    }
};
page_messenge_inputText.addEventListener('keydown', (key) => {
    if (key.key == 'Enter' && page_messenge_inputText.value != ''){
        messengeNew();
    }
})
function messengeNew() {
    page_messenge_mess_block.innerHTML = page_messenge_mess_block.innerHTML+'<span>'+sessionStorage.getItem('MyName')+': '+page_messenge_inputText.value+'</span>';
    let messMess = page_messenge_inputText.value;
    $(document).ready(function() {
        $.ajax({
            method: "POST",
            url: "server/server_page/server_page_messenge.php",
            data: {
                token: token,
                func: 'send',
                messMess: messMess,
                messTo: sessionStorage.getItem('messId')
            }
        })
        .done(function(msg){})
    })
    page_messenge_inputText.value = '';
}

$(document).ready(function() {
        $.ajax({
            method: "POST",
            url: "server/server_page/server_page_messenge.php",
            data: {
                token: token,
                func: 'getMyName',
            }
        })
        .done(function(msg){
            sessionStorage.setItem('MyName', msg);
        })
    })