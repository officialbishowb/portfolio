<?php
#send an email
if (isset($_POST["email"])) {
    error_reporting(1);
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $msg = $_POST['message'];

    $bot_tok = "1918587279:AAEZzNrF6M6VLIeopAEicoKyWjTkbgBT50I";
    $sendId = 1791857988;
    $sendText = "Title: <b>" . $subject . "</b>%0AEmail: <b>" . $email . "</b>%0AFrom <b>" . $name . "</b>%0AMessage: <b>" . $msg . "</b>";
    $url = "https://api.telegram.org/bot" . $bot_tok . "/sendMessage?chat_id=" . $sendId . "&text=" . $sendText . "&parse_mode=HTML";

    $res = telegram($url); # get the result
    #if true is in $res
    # 1 is also true ig
    if (json_decode($res)->ok == "1") echo 1;
    # else
    echo false;
} else {
    header("Location: https://officialbishowb.com/#contact");
}


// telegram function to send telegram
function telegram($url)
{
    $res = file_get_contents($url); #it is easier then curl + it is not big to handle
    return $res;
}
