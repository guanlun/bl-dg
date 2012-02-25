<?php
    include('database.php');
    connect();
    $work_arr = get_all_works();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>BL-DG Works</title>
        <link href="css/index.css" rel="stylesheet"/>
        <script src="scripts/jquery-1.7.1.min.js"></script>
        <script src="scripts/index.js"></script>
    </head>
    <body>
        <div id='bg_img'>
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
                    <ul>
                        <li id='featured'>featured</li>
                        <li id='status'>status</li>
                        <li id='category'>category</li>
                        <li id='chronology'>chronology</li>
                        <li id='location'>location</li>
                    </ul>
                </div>
                <div id='middle_container'>
                    <ul>
                        <?php
                            for ($i = 0; $i < count($work_arr); $i++) {
                                $name = strtolower($work_arr[$i]['name']);
                                echo '<li id=\'' . $name . '\'>' . $name . '</li>';
                            }
                        ?>
                    </ul>
                </div>
                <div id='right_container'>
                    <ul>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </body>
</html>
