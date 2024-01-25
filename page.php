<?php include('include/start.php')?>
<?php include('include/header.php')?>
<link rel="stylesheet" type="text/css" href="css/page/page.css">
<link rel="stylesheet" type="text/css" href="css/page/page_profile.css">
<link rel="stylesheet" type="text/css" href="css/page/page_messenge.css">
<link rel="stylesheet" type="text/css" href="css/page/page_people.css">
<link rel="stylesheet" type="text/css" href="css/page/page_friends.css">
<div class="content">
    <?php include('include/nav.php')?>
    <script type="text/javascript" src="js/page/page.js" defer></script>
    <script type="text/javascript" src="js/page/page_profile.js" defer></script>
    <script type="text/javascript" src="js/page/page_messenge.js" defer></script>
    <script type="text/javascript" src="js/page/page_friends.js" defer></script>
    <script type="text/javascript" src="js/page/page_people.js" defer></script>
    <main>
        <div class="page_block">
            <div class="page_title"><u>Мой профиль</u></div>
            <div class="page_profile_content">
                <section>
                    <div class="page_profile_div_photo">
                        <img src="#" alt="">
                    </div>
                    <div class="page_profile_div_photo_input">
                        <input type="file" id="page_profile_photo_input" accept="image/*">
                        <img src="media/image/user/avatar-delete.png" class="page_profile_photo_delete">
                        <label for="page_profile_photo_input">Изменить</label>
                    </div>
                </section>
                <section>
                    <div class="page_profile_div_name">
                        <input type="text" id="profile_name">
                        <input type="text" id="profile_surname">
                        <!-- <select>12</select> -->
                    </div>
                    <div class="page_profile_div_status">
                        <textarea placeholder="Статус" maxlength="299"></textarea>
                    </div>
                </section>
                <section>
                    <ul>
                        <li>Пол</li>
                        <li>Дата Рождения</li>
                        <li>Семейное Полжение</li>
                        <li>Город</li>
                    </ul>
                    <ul>
                        <li>
                            <div class="page_profile_div_gender">
                                <div class="page_profile_gender_title" data-page_profile_gender_title="0">Мурской</div>
                                <div class="page_profile_gender_title" data-page_profile_gender_title="100">Неопределено</div>
                                <div class="page_profile_gender_title" data-page_profile_gender_title="200">Женский</div>
                                <div class="page_profile_gender_pointer"></div>
                            </div>
                        </li>
                        <li><input type="date" id="dateBirth"></li>
                        <li>
                            <select id="familyStatus">
                                <option value="0">Неопределено</option>
                                <option value="1">Женат</option>
                                <option value="2">Замужем</option>
                                <option value="3">В отношениях</option>
                                <option value="4">Влюблен</option>
                            </select>
                        </li>
                        <li><input type="text" id="city" maxlength="18"></li>
                    </ul>
                </section>
            </div>
            <div class="page_profile_button_save">
                <div>
                    <span>C</span>
                    <span>о</span>
                    <span>х</span>
                    <span>р</span>
                    <span>а</span>
                    <span>н</span>
                    <span>и</span>
                    <span>н</span>
                    <span>о</span>
                </div>
                <button>Сохранить</button>
            </div>
        </div>
        <div class="page_block">
            <div class="page_title"><u>Сообщения</u></div>
            <div class="page_messenge_content">
                <div class="page_messenge_friend"></div>
                <div class="page_messenge">
                    <div class="page_messenge_mess">
                        <div class="page_messenge_mess_block">
                        </div>
                    </div>
                    <div class="page_messenge_input">
                        <input type="text" name="">
                        <input type="button" name="">
                    </div>
                </div>
            </div>
        </div>
        <div class="page_block">
            <div class="page_friends_content">
                <div class="page_friends_list">
                    <div class="page_friends_title">Друзья</div>
                </div>
                <div class="page_friends_online">
                    <div class="page_friends_title">Онлайн</div>
                </div>
                <div class="page_friends_application">
                    <div class="page_friends_title">Заявки</div>
                </div>
            </div>
        </div>
        <div class="page_block">
            <div class="page_title"><u>Люди</u></div>
            <div class="page_people_content">
                <!-- <div class="page_people_person">
                    <div class="page_people_person_avatar">
                        <img src="media/image/user/mess.png">
                    </div>
                    <div class="page_people_person_info">
                        <span class="page_people_person_name">Алиев Эльдар</span>
                        <span class="page_people_person_general_friend">Талгар, 1 общий друг</span>
                        <button>Подать заявку</button>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="page_block"></div>
        <div class="page_opacity">
            <div class="page_animation">
                <div class="page_animation_line"></div>
            </div>
        </div>
    </main>
</div>
<?php include('include/footer.php')?>