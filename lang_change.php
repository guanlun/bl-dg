<?php
    session_start();
    if (isset($_GET['lang'])) {
        $_SESSION['LANG_PREF'] = $_GET['lang'];
    }
    header('location: ' . $_GET['url']);
?>
