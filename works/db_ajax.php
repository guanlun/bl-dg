<?php
    include('database.php');
    connect();
    $type = $_POST['type'];

    switch ($type) {
    case 'columns':
        $column = $_POST['column'];

        switch ($column) {
        case 'featured':
            $query = '';
            break;
        case 'status':
            $query = 'SELECT DISTINCT `Status` FROM `Work`';
            break;
        case 'category':
            $query = 'SELECT DISTINCT `Category` FROM `Work`';
            break;
        case 'chronology':
            $query = 'SELECT DISTINCT `Chronology` FROM `Work`';
            break;
        case 'location':
            $query = 'SELECT DISTINCT `Location` FROM `Work`';
            break;
        }

        $result = mysql_query($query);
        while ($row = mysql_fetch_array($result)) {
            echo $row['Status'];
            echo $row['Category'];
            echo $row['Chronology'];
            echo $row['Location'];
            echo ';';
        }
        break;
    case 'entries':
        $column = $_POST['column'];
        $entry = $_POST['entry'];

        switch ($column) {
        case 'featured':
            exit();
        case 'status':
            $query = 'SELECT `Status` FROM `Work` WHERE `ProjectName` LIKE \'' . $entry . '\'';
            break;
        case 'category':
            $query = 'SELECT `Category` FROM `Work` WHERE `ProjectName` LIKE \'' . $entry . '\'';
            break;
        case 'chronology':
            $query = 'SELECT `Chronology` FROM `Work` WHERE `ProjectName` LIKE \'' . $entry . '\'';
            break;
        case 'location':
            $query = 'SELECT `Location` FROM `Work` WHERE `ProjectName` LIKE \'' . $entry . '\'';
            break;
        }

        $result = mysql_query($query);
        while ($row = mysql_fetch_array($result)) {
            echo $row['Status'];
            echo $row['Category'];
            echo $row['Chronology'];
            echo $row['Location'];
        }
        break;
    case 'bg_img':
        $entry = $_POST['entry'];
        $query = 'SELECT `BackgroundImage` FROM `Work` WHERE `ProjectName` LIKE \'' . $entry . '\'';
        $result = mysql_query($query);
        while ($row = mysql_fetch_array($result)) {
            echo $row['BackgroundImage'];
        }
        break;
    }
?>
