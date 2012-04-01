<?php

function nav_bar() {
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

function lang_sel() {
    echo "<div id=\"lang_sel\">
                        <span id=\"lang_en\" class=\"lang\">en</span> |
                        <span id=\"lang_sc\" class=\"lang\">简体</span> |
                        <span id=\"lang_tc\" class=\"lan\">繁體</span>
                    </div>";
}

?>
        <link href="/BLDG/css/header.css" rel="stylesheet"/>
        <script src="/BLDG/scripts/jquery-1.7.1.min.js"></script>
        <script type='text/javascript' src='/BLDG/scripts/header.js'></script>
