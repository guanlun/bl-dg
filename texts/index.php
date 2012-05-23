<?php 
    include('../database.php');
    require_once '../template/main.php';
    connect();
    $first_text = get_first_text();
    $title = $first_text['Directory'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=gbk"/>
        <title>BL-DG</title>
    </head>
    <body>
    <script>
        <!--
        window.location = '<?php echo $title; ?>';
        -->
    </script>
    </body>
</html>
