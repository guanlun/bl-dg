<?php require_once 'template/main.php'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>BL-DG</title>
        <link href="css/index.css" rel="stylesheet"/>
        <script src="scripts/jquery-1.7.1.min.js"></script>
        <script src="scripts/index.js"></script>
    </head>
    <body>
        <div id='bg_img'>
            <img />
        </div>
        <div id='container'>
            <?php nav_bar() ?>
            <div id='inner_container'>
                <?php lang_sel() ?>
                <div id='logo_container'>
                    <img src='images/LOGO.jpg' />
                </div>
            </div>
        </div>
    </body>
</html>
