<?php
include('../db.php');
$page_profile = $_POST['page_profile'] ?? false;
$page_save = $_POST['page_save'] ?? false;
$image_unload = $_POST['image_unload'] ?? false;
$image_delete = $_POST['image_delete'] ?? false;

$token = $_POST['token'] ?? '0';
$db_result = mysqli_query($db_connect, "SELECT `id` FROM `token` WHERE `token`='".$token."'");
$id = null;
foreach ($db_result as $row) {
    $id = $row['id'];
}

if($page_profile){
    $db_result = mysqli_query($db_connect, "SELECT * FROM `user` WHERE `id`='".$id."'");
    $array_page = [];
    foreach ($db_result as $row) {
        array_push($array_page, $row['name']);
        array_push($array_page, $row['surname']);
        array_push($array_page, $row['avatar']);
        array_push($array_page, $row['status']);
        array_push($array_page, $row['gender']);
        array_push($array_page, $row['dateBirth']);
        array_push($array_page, $row['familyStatus']);
        array_push($array_page, $row['city']);
    }
    echo json_encode($array_page);
}
if($page_save){
    $profile_name = $_POST['profile_name'];
    $profile_surname = $_POST['profile_surname'];
    $profile_status = $_POST['profile_status'];
    $profile_gender = $_POST['profile_gender'];
    $profile_dateBirth = $_POST['profile_dateBirth'];
    $profile_familyStatus = $_POST['profile_familyStatus'];
    $profile_city = $_POST['profile_city'];
    $db_result = mysqli_query($db_connect, "UPDATE `user` SET
        `name`='".$profile_name."',
        `surname`='".$profile_surname."',
        `status`='".$profile_status."',
        `gender`='".$profile_gender."',
        `dateBirth`='".$profile_dateBirth."',
        `familyStatus`='".$profile_familyStatus."',
        `city`='".$profile_city."'
        WHERE `id`='".$id."'");
    echo 1;
}
if($image_unload){
    $db_result = mysqli_query($db_connect, "SELECT `avatar` FROM `user` WHERE `id`='".$id."'");
    $avatarNameObl = null;
    foreach ($db_result as $row) {
        $avatarNameObl = $row['avatar'];
    }
    if($avatarNameObl != 'media/image/user/mess.png'){
        unlink("../../".$avatarNameObl);
    }
    $profile_avatar_post = $_FILES;
    $done_files = array();
    // Запрещенные расширения файлов.
    $allow = array();
    $deny = array(
        'phtml', 'php', 'php3', 'php4', 'php5', 'php6', 'php7', 'phps', 'cgi', 'pl', 'asp',
        'aspx', 'shtml', 'shtm', 'htaccess', 'htpasswd', 'ini', 'log', 'sh', 'js', 'html',
        'htm', 'css', 'sql', 'spl', 'scgi', 'fcgi', 'exe'
    );
    foreach( $profile_avatar_post as $profile_avatar ){
        $pattern = "[^a-zа-яё0-9,~!@#%^-_\$\?\(\)\{\}\[\]\.]";
        $profile_avatar_name = mb_eregi_replace($pattern, '-', $profile_avatar['name']);
        $profile_avatar_name = mb_ereg_replace('[-]+', '-', $profile_avatar_name);
        $profile_avatar_parts = pathinfo($profile_avatar_name);

        if (empty($profile_avatar_name) || empty($profile_avatar_parts['extension'])) {
            die( json_encode( '0Недопустимый тип файла' ) );
        } elseif (!empty($allow) && !in_array(strtolower($profile_avatar_parts['extension']), $allow)) {
            die( json_encode( '0Недопустимый тип файла' ) );
        } elseif (!empty($deny) && in_array(strtolower($profile_avatar_parts['extension']), $deny)) {
            die( json_encode( '0Недопустимый тип файла' ) );
        } else {
            $profile_avatar_dir_name =  $id.'--'.$profile_avatar_name;
            if( move_uploaded_file( $profile_avatar['tmp_name'], "../../media/image/user/$profile_avatar_dir_name" ) ){
                $done_files[] = realpath( "../../media/image/user/$profile_avatar_dir_name" );
            }
        }
    }
    $db_result = mysqli_query($db_connect, "UPDATE `user` SET `avatar` = 'media/image/user/".$profile_avatar_dir_name."' WHERE `id`='".$id."'");
    die( json_encode("media/image/user/".$profile_avatar_dir_name) );
}
if($image_delete){
    $db_result = mysqli_query($db_connect, "SELECT `avatar` FROM `user` WHERE `id`='".$id."'");
    $avatarNameObl = null;
    foreach ($db_result as $row) {
        $avatarNameObl = $row['avatar'];
    }
    if($avatarNameObl != 'media/image/user/mess.png'){
        unlink("../../".$avatarNameObl);
    }
    $db_result = mysqli_query($db_connect, "UPDATE `user` SET `avatar` = 'media/image/user/mess.png' WHERE `id`='".$id."'");
    echo 'media/image/user/mess.png';
}
?>