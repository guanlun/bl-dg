<?php
    // note here the directories are not based on the current dir but the dirs of works
    include('../../database.php');
    require_once '../template/research.php';
    require_once '../../template/main.php';
    connect();
    $uri = $_SERVER["REQUEST_URI"];
    $parts = split('/', $uri);
    $name = $parts[count($parts) - 2];
    $data = get_research_by_name($name);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>BL-DG/Research</title>
        <link href="../css/sample.css" rel="stylesheet"/>
        <link rel="SHORTCUT ICON" href="/tabicon.ico"/>
        <script src="../scripts/jquery-1.7.1.min.js"></script>
        <script src="../scripts/scroll.js"></script>
        <script src="../scripts/gallery.js"></script>
        <script src="../scripts/sample.js"></script>
    </head>
    <body>
        <div id='bg_img'>
            <img />
        </div>
        <div id='container'>
            <?php nav_bar() ?>
            <div id='inner_container'>
                <div id='left_container'>
                    <div id='title_view'>
                        <? echo $data['Name']; ?>
                    </div>
                    <div id='info_view'>
                        <? 
                            $filename = $data['Info'];
                            $handle = fopen($filename, 'r'); 
                            $content = fread($handle, filesize($filename));
                            echo $content;
                        ?>
                    </div>
                    <div id='research_list'>
                        <div id='research_list_title'>Research Project List</div>
                        <div id='research_list_items'>
                            <ul>
                                <?
                                    $researches = get_all_researches();
                                    foreach ($researches as $r) {
                                        echo '<li id=\'' . $r['Directory'] . '\'>' . $r['Name'] . '</li>';
                                    }
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='right_container'>
                    <?php lang_sel() ?>
                    <div id='gallery_container'>
                        <div class='gallery'>
                            <?php gallery($name, $data) ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </body>
</html>
