<?php require_once '../template/main.php'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=gbk"/>
        <title>BL-DG/Work</title>
        <link href="css/index.css" rel="stylesheet"/>
        <link rel="SHORTCUT ICON" href="/tabicon.ico"/>
        <script src="scripts/jquery-1.7.1.min.js"></script>
        <script src="scripts/scroll.js"></script>
        <script src="scripts/index.js"></script>
    </head>
    <body>
        <div id='bg_img'>
            <img src="" />
        </div>
        <div id="loading">
            <p id="loading_text">0%</p><img id="loading_img" src="loading.gif"></img>
        </div>
        <div id='container'>
            <?php nav_bar() ?>
            <div id='inner_container'>
                <?php lang_sel() ?>
                <div id='left_container'>
                    <ul>
                        <? 
                            if ($lang == 'sc') {
                                echo '
                                    <li id=\'Featured\'>重点</li>
                                    <li id=\'StatusSC\'>状态</li>
                                    <li id=\'CategorySC\'>类别</li>
                                    <li id=\'Chronology\'>年份</li>
                                    <li id=\'LocationSC\'>位置</li>';
                            } else if ($lang == 'tc') {
                                echo '
                                    <li id=\'Featured\'>重點</li>
                                    <li id=\'StatusTC\'>狀態</li>
                                    <li id=\'CategoryTC\'>類別</li>
                                    <li id=\'Chronology\'>年份</li>
                                    <li id=\'LocationTC\'>位置</li>';
                            } else {
                                echo '
                                    <li id=\'Featured\'>FEATURED</li>
                                    <li id=\'Status\'>status</li>
                                    <li id=\'Category\'>category</li>
                                    <li id=\'Chronology\'>chronology</li>
                                    <li id=\'Location\'>location</li>';
                            }
                        ?>
                    </ul>
                </div>
                <div id='middle_container'>
                    <ul>
                    </ul>
                </div>
                <div id='right_container'>
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
