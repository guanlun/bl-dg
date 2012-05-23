<?php
    session_start();
    $lang = 'en';
    if (isset($_SESSION['LANG_PREF'])) {
        $lang = $_SESSION['LANG_PREF'];
    }
?>
