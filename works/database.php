<?php
    function connect() {
        $con = mysql_connect('localhost', 'root', 'mysqlpass') or die('cannot connect to the database');
        $db = mysql_select_db('bldg_db') or die('cannot select database');
    }

    function get_work_by_name($work_name) {
        $query = 'SELECT * FROM `Work` WHERE `ProjectName` LIKE \'' . $work_name . '\'';
        $result = mysql_query($query);
        $work = array();
        while ($row = mysql_fetch_array($result)) {
            $work['name'] = $row['ProjectName'];
            $work['info'] = $row['Information'];
            $work['brief'] = $row['Brief'];
            $work['bgimg'] = $row['BackgroundImage'];
            $work['glrimgs'] = $row['GalleryImages'];
            $work['caption'] = $row['Caption'];
            $work['featured'] = $row['Featured'];
            $work['status'] = $row['Status'];
            $work['cate'] = $row['Category'];
            $work['chron'] = $row['Chronology'];
            $work['location'] = $row['Location'];
        }
        return $work;
    }

    function get_all_works() {
        $query = 'SELECT * FROM `Work`';
        $result = mysql_query($query);
        $work_arr = array();
        while ($row = mysql_fetch_array($result)) {
            $work = array();
            $work['name'] = $row['ProjectName'];
            $work['info'] = $row['Information'];
            $work['brief'] = $row['Brief'];
            $work['bgimg'] = $row['BackgroundImage'];
            $work['glrimgs'] = $row['GalleryImages'];
            $work['caption'] = $row['Caption'];
            $work['featured'] = $row['Featured'];
            $work['status'] = $row['Status'];
            $work['cate'] = $row['Category'];
            $work['chron'] = $row['Chronology'];
            $work['location'] = $row['Location'];
            array_push($work_arr, $work);
        }
        return $work_arr;
    }
?>
