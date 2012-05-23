<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><meta http-equiv="Content-Type" content="text/html;charset=gbk"/><?php
    include('../database.php');
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
        echo $row['Directory'] . '||';
        echo $row['ProjectNameSC'] . '||';
        echo $row['InformationSC'] . '||';
        echo $row['BriefSC'] . '||';
        echo $row['StatusSC'] . '||';
        echo $row['CategorySC'] . '||';
        echo $row['ProjectNameTC'] . '||';
        echo $row['InformationTC'] . '||';
        echo $row['BriefTC'] . '||';
        echo $row['StatusTC'] . '||';
        echo $row['CategoryTC'] . '||';
        echo $row['LocationSC'] . '||';
        echo $row['LocationTC'] . '|---|';
    }
?>
