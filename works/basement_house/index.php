<?php
    include('../database.php');
    connect();
    $uri = $_SERVER["REQUEST_URI"];
    $parts = split('/', $uri);
    $name = $parts[count($parts) - 2];
    $data = get_work_by_name($name);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>BL-DG <?php echo $data['name']; ?></title>
        <link href="../css/sample.css" rel="stylesheet"/>
        <script src="../scripts/jquery-1.7.1.min.js"></script>
        <script src="../scripts/scroll.js"></script>
        <script src="../scripts/gallery.js"></script>
        <script src="../scripts/sample.js"></script>
    </head>
    <body>
        <div id='bg_img'>
            <img src='images/<?php echo $data['bgimg']; ?>' />
        </div>
        <div id='container'>
            <div id="nav_bar">
                <ul>
                    <li id="work">work</li>
                    <li id="research">research</li>
                    <li id="words">words</li>
                    <li id="about">about</li>
                    <li id="contact">contact</li>
                    <li id="employment">employment</li>
                </ul>
            </div>

            <div id='inner_container'>
                <div id='left_container'>
                    <div id='title_view'>
                        <?php echo $data['name']; ?>
                    </div>
                    <div id='info_view'>
                        <?php echo $data['info']; ?>
                    </div>
                    <div id='brief_view'>
                        <?php
                            $brief = $data['brief'];
                            $entries = split('##', $brief);
                            for ($i = 0; $i < count($entries); $i++) {
                                $pair = split('&&', $entries[$i]);
                                echo '<div class=\'cate\'>' . $pair[0] . '</div><br />';
                                echo $pair[1] . '<br />';
                            }
                        ?>
                    </div>
                </div>

                <div id='right_container'>
                    <div id="lang_sel">
                        <span id="lang_en" class="lang">en</span> | 
                        <span id="lang_sc" class="lang">简体</span> | 
                        <span id="lang_tc" class="lang">繁體</span>
                    </div>
                    <div id='gallery_container'>
                        <div class='gallery'>
                            <?php
                                $gallery_imgs = split(';', $data['glrimgs']);
                                for ($i = 0; $i < count($gallery_imgs) - 1; $i++) {
                                    echo '<div><img src=\'images/' . $gallery_imgs[$i] . '\' /></div>';
                                }
                            ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </body>
</html>
