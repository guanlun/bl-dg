<?php

include_once('header.php');

function nav_bar() {
    $lang = $_SESSION['LANG_PREF'];
    if ($lang == 'sc') {
        echo "<div id=\"nav_bar\">
                    <ul>
                        <li id=\"work\">��Ʒ</li>
                        <li id=\"research\">�о�</li>
                        <li id=\"texts\">����</li>
                        <li id=\"news\">����</li>
                        <li id=\"info\">����</li>
                    </ul>
                </div>";
    } else if ($lang == 'tc') {
        echo "<div id=\"nav_bar\">
                    <ul>
                        <li id=\"work\">��Ʒ</li>
                        <li id=\"research\">�о�</li>
                        <li id=\"texts\">����</li>
                        <li id=\"news\">��</li>
                        <li id=\"info\">�P�</li>
                    </ul>
                </div>";
    } else {
        echo "<div id=\"nav_bar\">
                    <ul>
                        <li id=\"work\">work</li>
                        <li id=\"research\">research</li>
                        <li id=\"texts\">texts</li>
                        <li id=\"news\">news</li>
                        <li id=\"info\">info</li>
                    </ul>
                </div>";
    }
}

function lang_sel() {
    echo "
        <div id=\"lang_sel\">
            <span id=\"lang_en\" class=\"lang\">en</span> |
            <span id=\"lang_sc\" class=\"lang\">����</span> |
            <span id=\"lang_tc\" class=\"lang\">����</span>
        </div>
    ";
}

?>
        <link href="/css/header.css" rel="stylesheet"/>
        <script src="/scripts/jquery-1.7.1.min.js"></script>
        <script type='text/javascript' src='/scripts/header.js'></script>
