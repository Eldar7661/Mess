<?php
function bit_xor_without_transfer($num1, $num2)
{
    $number1 = strval(decbin($num1));
    $number2 = strval(decbin($num2));
    if(strlen($number1) == 6){
        $number1 = '0'.$number1;
    }
    if(strlen($number2) == 6){
        $number2 = '0'.$number2;
    }
    $result = '';
    for ($index = 0; $index < 7; $index++) {
        if($number1[$index] == $number2[$index]){
            $result = $result.'0';
        }
        else{
            $result = $result.'1';
        }
    }
    return bindec((int)$result);
}
function encode_pass($pass)
{
    $key = 'ElRi$7661';
    $pass_uni  = [];
    $key_uni  = [];
    foreach (str_split($pass) as $word) {
        array_push($pass_uni, mb_ord($word));
    }
    foreach (str_split($key) as $word) {
        array_push($key_uni, mb_ord($word));
    }
    $user_key = [];
    $temp_user_key_index = 0;
    foreach(str_split($pass) as $word) {
        array_push($user_key, $key_uni[$temp_user_key_index]);
        if($temp_user_key_index < (strlen($key)-1)){
            $temp_user_key_index++;
        }
        else{
            $temp_user_key_index = 0;
        }
    }
    $main_key = [];
    for($index = 0; $index < strlen($pass); $index++){
        $result = bit_xor_without_transfer($pass_uni[$index], $user_key[$index]);
        array_push($main_key, $result);
    }
    $main_key_simma = 0;
    foreach ($main_key as $num) {
        $main_key_simma += $num;
    }
    $sift = '';
    for($index = 0; $index < strlen($pass); $index++){
        $result = $pass_uni[$index] + $main_key[$index];
        $sift .= $result;
    }
    $sift .= strval($main_key_simma);
    return $sift;
}
?>