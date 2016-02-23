<?php
$password = "abc123";
$salt = bin2hex(openssl_random_pseudo_bytes(32));
$hash = hash_pbkdf2("sha512", $password, $salt, 262144, 128);

$length = strlen($hash);

echo $length;