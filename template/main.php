<?php

function nav_bar() {
    echo "<div id=\"nav_bar\">
                <ul>
                    <li id=\"work\"><a href=\"/work\">work</a></li>
                    <li id=\"research\">research</li>
                    <li id=\"texts\"><a href=\"/texts\">texts</a></li>
                    <li id=\"info\"><a href=\"/info\">info</a></li>
                    <li id=\"news\">news</li>
                    <li id=\"employment\">employment</li>
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
