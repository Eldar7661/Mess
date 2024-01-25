let page_people_content = document.querySelector('.page_people_content');


function personNew(name, avatar, general_friend, id){
    let page_people_person = document.createElement('div');
    let page_people_person_avatar = document.createElement('div');
    let page_people_person_info = document.createElement('div');
    let page_people_person_avatarImg = document.createElement('img');
    let page_people_person_name = document.createElement('span');
    let page_people_person_general_friend = document.createElement('span');
    let page_people_person_infoButton = document.createElement('button');

    page_people_person.className = 'page_people_person';
    page_people_person_avatar.className = 'page_people_person_avatar';
    page_people_person_info.className = 'page_people_person_info';
    page_people_person_name.className = 'page_people_person_name';
    page_people_person_general_friend.className = 'page_people_person_general_friend';

    page_people_person_name.innerHTML = name;
    page_people_person_avatarImg.setAttribute('src', avatar);
    page_people_person_general_friend.innerHTML = general_friend;
    page_people_person_infoButton.innerHTML = 'Подать заявку';
    page_people_person_infoButton.setAttribute('id', 'page_people_person_application');
    page_people_person_infoButton.setAttribute('data-id', id);

    page_people_content.append(page_people_person);
    page_people_person.append(page_people_person_avatar);
    page_people_person.append(page_people_person_info);
    page_people_person_avatar.append(page_people_person_avatarImg);
    page_people_person_info.append(page_people_person_name);
    page_people_person_info.append(page_people_person_general_friend);
    page_people_person_info.append(page_people_person_infoButton);
}

function PagePeopleApplicationNew(name, avatar, id){
    let page_people_person = document.createElement('div');
    let page_people_person_avatar = document.createElement('div');
    let page_people_person_info = document.createElement('div');
    let page_people_person_avatarImg = document.createElement('img');
    let page_people_person_name = document.createElement('span');
    let page_people_person_infoButton = document.createElement('button');

    page_people_person.className = 'page_people_person';
    page_people_person_avatar.className = 'page_people_person_avatar';
    page_people_person_info.className = 'page_people_person_info';
    page_people_person_name.className = 'page_people_person_name';

    page_people_person_name.innerHTML = name;
    page_people_person_avatarImg.setAttribute('src', avatar);
    page_people_person_infoButton.innerHTML = 'Отменить заявку';
    page_people_person_infoButton.setAttribute('id', 'page_people_person_delete_application');
    page_people_person_infoButton.setAttribute('data-id', id);

    page_people_content.append(page_people_person);
    page_people_person.append(page_people_person_avatar);
    page_people_person.append(page_people_person_info);
    page_people_person_avatar.append(page_people_person_avatarImg);
    page_people_person_info.append(page_people_person_name);
    page_people_person_info.append(page_people_person_infoButton);
}

$(document).ready(function() {
    $.ajax({
        method: "POST",
        url: "server/server_page/server_page_people.php",
        data: {
            token: token,
            page_people_already_application: 1
        }
    })
    .done(function(msg){
        let array_people = $.parseJSON(msg);
        array_people.forEach((array_person) => {
            PagePeopleApplicationNew(array_person[1]+' '+array_person[2], array_person[3], array_person[0]);
        })
        eventPagePeopleApplicationButtonDelete();
    })
})
setTimeout(() => {
    $(document).ready(function() {
        $.ajax({
            method: "POST",
            url: "server/server_page/server_page_people.php",
            data: {
                token: token,
                page_people: 1
            }
        })
        .done(function(msg){
            let array_people = $.parseJSON(msg);
            array_people.forEach((array_person) => {
                personNew(array_person[1]+' '+array_person[2], array_person[3], array_person[4], array_person[0]);
            })
            eventPagePeopleApplicationButton();
        })
    })
}, 400)

function eventPagePeopleApplicationButton() {
    let page_people_person_application = document.querySelectorAll('#page_people_person_application');

    page_people_person_application.forEach((button) => {
        button.onclick = () => {
            let id_persone_applicationTo = button.getAttribute('data-id');
            $(document).ready(function() {
                $.ajax({
                    method: "POST",
                    url: "server/server_page/server_page_people.php",
                    data: {
                        token: token,
                        page_people_application: 1,
                        id_persone_applicationTo: id_persone_applicationTo
                    }
                })
                .done(function(msg){
                    console.log('Заявка к: '+msg);
                })
            })
            button.parentNode.parentNode.remove();
        }
    })
}
function eventPagePeopleApplicationButtonDelete() {
    let page_people_person_delete_application = document.querySelectorAll('#page_people_person_delete_application');

    page_people_person_delete_application.forEach((button) => {
        button.onclick = () => {
            let id_persone_applicationTo_delete = button.getAttribute('data-id');
            $(document).ready(function() {
                $.ajax({
                    method: "POST",
                    url: "server/server_page/server_page_people.php",
                    data: {
                        token: token,
                        page_people_application_delete: 1,
                        id_persone_applicationTo_delete: id_persone_applicationTo_delete
                    }
                })
                .done(function(msg){
                    console.log('Отменина к: '+msg);
                })
            })
            button.parentNode.parentNode.remove();
        }
    })
}