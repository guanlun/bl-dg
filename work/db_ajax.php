<?php
    include('database.php');
    connect();

    $query = 'SELECT * FROM `Work` ORDER BY `ID`';
    $result = mysql_query($query);
    while ($row = mysql_fetch_array($result)) {
        echo $row['ID'] . '||';
        echo $row['ProjectName'] . '||';
        echo $row['Information'] . '||';
        echo $row['Brief'] . '||';
        echo $row['BackgroundImage'] . '||';
        echo $row['GalleryImages'] . '||';
        echo $row['Caption'] . '||';
        echo $row['Featured'] . '||';
        echo $row['Status'] . '||';
        echo $row['Category'] . '||';
        echo $row['Chronology'] . '||';
        echo $row['Location'] . '||';
        echo $row['Directory'] . '|---|';
    }
?>
