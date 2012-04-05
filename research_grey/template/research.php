<?php

function left_container($data) {
    echo "<div id='inner_container'>
                <div id='left_container'>
                    <div id='title_view'>" . $data['name'] . "</div>
                    <div id='info_view'>" . $data['info'] . "</div>
                    <div id='brief_view'>";
    $brief = $data['brief'];
    $entries = split('##', $brief);
    for ($i = 0; $i < count($entries); $i++) {
        $pair = split('&&', $entries[$i]);
        echo '<div class=\'cate\'>' . $pair[0] . '</div><br />';
        echo $pair[1] . '<br />';
    }
    echo "</div>
                </div>";
}



function brief_view($data) {
    $brief = $data['brief'];
    $entries = split('##', $brief);
    for ($i = 0; $i < count($entries); $i++) {
        $pair = split('&&', $entries[$i]);
        echo '<div class=\'cate\'>' . $pair[0] . '</div><br />';
        echo $pair[1] . '<br />';
    }
}

function gallery($name,$data) {
    $gallery_imgs = split(';', $data['GalleryImages']);
    for ($i = 0; $i < count($gallery_imgs) - 1; $i++) {
        $html = '../' . $name . "/images/" . substr($gallery_imgs[$i], 0, -3) . "html";
        if (file_exists($html)) {
            $videosrc = file_get_contents($html);
            echo '<div><img src=\'../' . $name . '/images/' . $gallery_imgs[$i] . '\' videosrc="' . $videosrc . '"/></div>';
        } else {
            echo '<div><img src=\'../' . $name . '/images/' . $gallery_imgs[$i] . '\' videosrc=""/></div>';
        }
    }
}

?>
