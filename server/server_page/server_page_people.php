<?php
include('../db.php');
$page_people = $_POST['page_people'] ?? 0;
$page_friends = $_POST['page_friends'] ?? 0;

$page_people_already_application =$_POST['page_people_already_application'] ?? 0;
$page_people_application = $_POST['page_people_application'] ?? 0;
$page_people_application_delete = $_POST['page_people_application_delete'] ?? 0;

$page_friends_application = $_POST['page_friends_application'] ?? 0;
$page_friends_applicationAccept = $_POST['page_friends_applicationAccept'] ?? 0;
$page_friends_applicationReject = $_POST['page_friends_applicationReject'] ?? 0;

$token = $_POST['token'] ?? '0';
$db_result = mysqli_query($db_connect, "SELECT `id` FROM `token` WHERE `token`='".$token."'");
$id = null;
foreach ($db_result as $row) {
    $id = $row['id'];
}

$array_friends = [];
$db_result = mysqli_query($db_connect, "SELECT `friendGo` FROM `friends` WHERE `friendTo`='".$id."'");
foreach($db_result as $friend){
    array_push($array_friends, $friend['friendGo']);
}
$db_result = mysqli_query($db_connect, "SELECT `friendTo` FROM `friends` WHERE `friendGo`='".$id."'");
foreach($db_result as $friend){
    array_push($array_friends, $friend['friendTo']);
}
// ---------------------------------------------------------------------------------------------

if($page_people){
    $db_result = mysqli_query($db_connect, "SELECT `friendTo` FROM `friends_application` WHERE `friendGo`='".$id."'");
    foreach($db_result as $row){
        array_push($array_friends, $row['friendTo']);
    }
    $db_result = mysqli_query($db_connect, "SELECT `id`, `name`, `surname`, `avatar`, `city` FROM `user`");
    $array_people = [];
    foreach ($db_result as $row) {
        $cluch = true;
        if($id == $row['id']){
            $cluch = false;
        } else {
            foreach($array_friends as $friend){
                if($friend == $row['id']){
                    $cluch = false;
                }
            }
        }

        if($cluch){
            $array_person = [];
            array_push($array_person, $row['id']);
            array_push($array_person, $row['name']);
            array_push($array_person, $row['surname']);
            array_push($array_person, $row['avatar']);
            array_push($array_person, $row['city']);

            array_push($array_people, $array_person);
        }
    }
    echo json_encode($array_people);
}

if($page_friends){
    $array_friends_echo = [];
    foreach($array_friends as $friend){
        $db_result = mysqli_query($db_connect, "SELECT `id`, `name`, `surname`, `avatar` FROM `user` WHERE `id`='".$friend."'");
        foreach ($db_result as $row) {
            $array_person = [];
            array_push($array_person, $row['id']);
            array_push($array_person, $row['name']);
            array_push($array_person, $row['surname']);
            array_push($array_person, $row['avatar']);

            array_push($array_friends_echo, $array_person);
        }
    }
    echo json_encode($array_friends_echo);
}
if($page_friends_application){
    $array_friends_application_echo = [];
    $array_friends_application = [];
    $db_result = mysqli_query($db_connect, "SELECT `friendGo` FROM `friends_application` WHERE `friendTo`='".$id."'");
    foreach($db_result as $friendGo){
        array_push($array_friends_application, $friendGo['friendGo']);
    }
    foreach($array_friends_application as $friend_application){
        $db_result = mysqli_query($db_connect, "SELECT `id`, `name`, `surname`, `avatar` FROM `user` WHERE `id`='".$friend_application."'");
        foreach ($db_result as $row) {
            $array_person = [];
            array_push($array_person, $row['id']);
            array_push($array_person, $row['name']);
            array_push($array_person, $row['surname']);
            array_push($array_person, $row['avatar']);

            array_push($array_friends_application_echo, $array_person);
        }
    }
    echo json_encode($array_friends_application_echo);
}

if($page_people_already_application){
    $array_people_already_application_echo = [];
    $db_result = mysqli_query($db_connect, "SELECT `friendTo` FROM `friends_application` WHERE `friendGo`='".$id."'");
    foreach($db_result as $friendTo){
        $db_resuld = mysqli_query($db_connect, "SELECT `id`, `name`, `surname`, `avatar` FROM `user` WHERE `id`='".$friendTo['friendTo']."'");
        foreach ($db_resuld as $row) {
            $array_person = [];
            array_push($array_person, $row['id']);
            array_push($array_person, $row['name']);
            array_push($array_person, $row['surname']);
            array_push($array_person, $row['avatar']);

            array_push($array_people_already_application_echo, $array_person);
        }
    }
    echo json_encode($array_people_already_application_echo);
}
if($page_people_application){
    $id_persone_applicationTo = $_POST['id_persone_applicationTo'];
    $db_result = mysqli_query($db_connect, "SELECT * FROM `friends_application`");
    $newApplication = true;

    foreach($db_result as $application){
        if($id == $application['friendGo'] and $id_persone_applicationTo == $application['friendTo']){
            $newApplication = false;
            break;
        }
    }
    if($newApplication){
        $db_result = mysqli_query($db_connect, "INSERT INTO `friends_application`(`friendGo`, `friendTo`) VALUES ('".$id."', '".$id_persone_applicationTo."')");
        echo $id_persone_applicationTo;
    }
}
if($page_people_application_delete){
    $id_persone_applicationTo_delete = $_POST['id_persone_applicationTo_delete'];
    $db_result = mysqli_query($db_connect, "DELETE FROM `friends_application` WHERE `friendGo`='".$id."' AND `friendTo`='".$id_persone_applicationTo_delete."'");
    echo $id_persone_applicationTo_delete;
}


if($page_friends_applicationAccept){
    $id_friend_applicationGo = $_POST['id_friend_applicationGo'];
    $db_result = mysqli_query($db_connect, "INSERT INTO `friends`(`friendGo`, `friendTo`) VALUES ('".$id_friend_applicationGo."', '".$id."')");
    echo $id_friend_applicationGo;
    funPage_friends_applicationReject();
}

if($page_friends_applicationReject){
    funPage_friends_applicationReject();
}
function funPage_friends_applicationReject()
{
    global $db_connect;
    global $id;
    $id_friend_applicationGo = $_POST['id_friend_applicationGo'];
    $db_result = mysqli_query($db_connect, "DELETE FROM `friends_application` WHERE `friendGo`='".$id_friend_applicationGo."' AND `friendTo`='".$id."'");
    echo $id_friend_applicationGo;
}