<?php

function gallery($name,$data) {
    $gallery_imgs = split(';', $data['glrimgs']);
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
