<?php 
    include('../../database.php');
    require_once ('../../template/main.php');
    connect();
    $uri = $_SERVER["REQUEST_URI"];
    $parts = split('/', $uri);
    $name = $parts[count($parts) - 2];
    $data = get_text_by_name($name);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>BL-DG/texts</title>
        <link href="../css/index.css" rel="stylesheet"/>
        <link rel="SHORTCUT ICON" href="/tabicon.ico"/>
        <script src="../scripts/jquery-1.7.1.min.js"></script>
        <script src="../scripts/scroll.js"></script>
        <script src="../scripts/sample.js"></script>
    </head>
    <body>
        <div id='bg_img'>
            <img />
        </div>
        <div id='container'>
            <?php nav_bar(); ?>
            <div id='inner_container'>
                <div id='left_container'>
                    <div id='left_image'>
                        <img src='images/MAIN.jpg'>
                    </div>
                    <div id='left_list'>
                        <div id='left_list_title'>Article List</div>
                        <div id='left_list_items'>
                            <ul>
                            <?
                                $texts = get_all_texts();
                                foreach ($texts as $t) {
                                    echo '<li id=\'' . $t['Title'] . '\'>' . $t['Title'] . '</li>';
                                }
                            ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='right_container'>
                    <?php lang_sel(); ?>
                    <div id='right_article'>
                        <div id='right_article_title'>
                            <? echo $data['Title']; ?>
                        </div>
                        <div id='right_article_content'>
                            <? 
                                $filename = $data['Content'];
                                $handle = fopen($filename, 'r'); 
                                $content = fread($handle, filesize($filename));
                                echo $content;
                            ?>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </body>
</html>
