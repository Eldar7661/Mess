<?php
include('../db.php');

$token = $_POST['token'] ?? '0';
$db_result = mysqli_query($db_connect, "SELECT `id` FROM `token` WHERE `token`='".$token."'");
$id = null;
foreach ($db_result as $row) {
    $id = $row['id'];
}

$func = $_POST['func'] ?? 0;

if ($func == 'send'){
    $messMess = $_POST['messMess'] ?? 'NaN or Null';
    $messTo = $_POST['messTo'] ?? 'NaN or Null';

    $db_result = mysqli_query($db_connect, "SELECT `name` FROM `user` WHERE `id`='".$id."'");
    foreach ($db_result as $name) {
        $messMess = $name['name'].': '.$messMess;
    }
    $db_result = mysqli_query($db_connect, "
        INSERT INTO `messenge`(`messGo`, `messTo`, `messMess`)
        VALUES ('".$id."','".$messTo."','".$messMess."')");
}
if ($func == 'get'){
    $array_messenge = [];
    $messTo = $_POST['messTo'] ?? 'NaN or Null';
    $db_result = mysqli_query($db_connect, "
        SELECT `messMess`
        FROM `messenge`
        WHERE (`messGo`='".$id."' or `messGo`='".$messTo."')
            and (`messTo`='".$id."' or `messTo`='".$messTo."')");
    foreach ($db_result as $messMess) {
        array_push($array_messenge, $messMess['messMess']);
    }
    echo json_encode($array_messenge);
}
if ($func == 'getMyName'){
    $db_result = mysqli_query($db_connect, "SELECT `name` FROM `user` WHERE `id`='".$id."'");
    foreach ($db_result as $name) {
        $n = $name['name'];
    }
    echo $n;
}
?>