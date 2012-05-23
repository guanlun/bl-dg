<?php
    function connect() {
        $con = mysql_connect('188.121.40.81', 'bldg1989', 'Birthday27!') or die('cannot connect to the database');
        mysql_query("SET NAMES 'gbk'");
        $db = mysql_select_db('bldg1989') or die('cannot select database');
        /*
        $con = mysql_connect('localhost', 'root', 'mysqlpass') or die('cannot connect to the database');
        mysql_query("SET NAMES 'utf8'");
        $db = mysql_select_db('bldg_db') or die('cannot select database');
        */
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
            $work['nameSC'] = $row['ProjectNameSC'];
            $work['infoSC'] = $row['InformationSC'];
            $work['briefSC'] = $row['BriefSC'];
            $work['statusSC'] = $row['StatusSC'];
            $work['cateSC'] = $row['CategorySC'];
            $work['nameTC'] = $row['ProjectNameTC'];
            $work['infoTC'] = $row['InformationTC'];
            $work['briefTC'] = $row['BriefTC'];
            $work['statusTC'] = $row['StatusTC'];
            $work['cateTC'] = $row['CategoryTC'];
            $work['locationSC'] = $row['locationSC'];
            $work['locationTC'] = $row['locationTC'];
        }
        return $work;
    }

    function get_all_works() {
        $query = 'SELECT * FROM `Work` ORDER BY `ID`';
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
            $work['nameSC'] = $row['ProjectNameSC'];
            $work['infoSC'] = $row['InformationSC'];
            $work['briefSC'] = $row['BriefSC'];
            $work['statusSC'] = $row['StatusSC'];
            $work['cateSC'] = $row['CategorySC'];
            $work['nameTC'] = $row['ProjectNameTC'];
            $work['infoTC'] = $row['InformationTC'];
            $work['briefTC'] = $row['BriefTC'];
            $work['statusTC'] = $row['StatusTC'];
            $work['cateTC'] = $row['CategoryTC'];
            $work['locationSC'] = $row['locationSC'];
            $work['locationTC'] = $row['locationTC'];
            array_push($work_arr, $work);
        }
        return $work_arr;
    }

    function get_text_by_name($text_name) {
        $query = 'SELECT * FROM `Text` WHERE `Title` LIKE \'' . $text_name . '\'';
        $result = mysql_query($query);
        $text = array();

        while ($row = mysql_fetch_array($result)) {
            $text['Title'] = $row['Title'];
            $text['Content'] = $row['Content'];
            $text['Image'] = $row['Image'];
            $text['Directory'] = $row['Directory'];
            $text['Language'] = $row['Language'];
        }
        return $text;
    }

    function get_text_by_dir($dir) {
        $query = 'SELECT * FROM `Text` WHERE `Directory` LIKE \'' . $dir . '\'';
        $result = mysql_query($query);
        $text = array();

        while ($row = mysql_fetch_array($result)) {
            $text['Title'] = $row['Title'];
            $text['Content'] = $row['Content'];
            $text['Image'] = $row['Image'];
            $text['Directory'] = $row['Directory'];
            $text['Language'] = $row['Language'];
        }
        return $text;
    }

    function get_first_text() {
        $text_arr = get_all_texts();
        return $text_arr[0];
    }

    function get_all_texts() {
        $query = 'SELECT * FROM `Text` ORDER BY `ID`';
        $result = mysql_query($query);
        $text_arr = array();
        while ($row = mysql_fetch_array($result)) {
            $text = array();
            $text['ID'] = $row['ID'];
            $text['Title'] = $row['Title'];
            $text['Content'] = $row['Content'];
            $text['Image'] = $row['Image'];
            $text['Directory'] = $row['Directory'];
            $text['Language'] = $row['Language'];
            array_push($text_arr, $text);
        }
        return array_reverse($text_arr);
    }

    function get_research_by_name($name) {
        $query = 'SELECT * FROM `Research` WHERE `Name` LIKE \'' . $name . '\'';
        $result = mysql_query($query);
        $research = array();

        while ($row = mysql_fetch_array($result)) {
            $research['ID'] = $row['ID'];
            $research['Name'] = $row['Name'];
            $research['Info'] = $row['Info'];
            $research['GalleryImages'] = $row['GalleryImages'];
            $research['Directory'] = $row['Directory'];
            $research['NameSC'] = $row['NameSC'];
            $research['InfoSC'] = $row['InfoSC'];
            $research['NameTC'] = $row['NameTC'];
            $research['InfoTC'] = $row['InfoTC'];
        }
        return $research;
    }

    function get_research_by_dir($dir) {
        $query = 'SELECT * FROM `Research` WHERE `Directory` LIKE \'' . $dir . '\'';
        $result = mysql_query($query);
        $research = array();

        while ($row = mysql_fetch_array($result)) {
            $research['ID'] = $row['ID'];
            $research['Name'] = $row['Name'];
            $research['Info'] = $row['Info'];
            $research['GalleryImages'] = $row['GalleryImages'];
            $research['Directory'] = $row['Directory'];
            $research['NameSC'] = $row['NameSC'];
            $research['InfoSC'] = $row['InfoSC'];
            $research['NameTC'] = $row['NameTC'];
            $research['InfoTC'] = $row['InfoTC'];
        }
        return $research;
    }
 
    function get_first_research() {
        $research_arr = get_all_researches();
        return $research_arr[0];
    }

    function get_all_researches() {
        $query = 'SELECT * FROM `Research` ORDER BY `ID`';
        $result = mysql_query($query);
        $research_arr = array();
        while ($row = mysql_fetch_array($result)) {
            $research = array();
            $research['ID'] = $row['ID'];
            $research['Name'] = $row['Name'];
            $research['Info'] = $row['Info'];
            $research['GalleryImages'] = $row['GalleryImages'];
            $research['Directory'] = $row['Directory'];
            $research['NameSC'] = $row['NameSC'];
            $research['InfoSC'] = $row['InfoSC'];
            $research['NameTC'] = $row['NameTC'];
            $research['InfoTC'] = $row['InfoTC'];
            array_push($research_arr, $research);
        }
        return array_reverse($research_arr);
    }


?>
