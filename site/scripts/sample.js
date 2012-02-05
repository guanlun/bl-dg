$(function() {
    $('#bg_img img').mousedown(function() { // prevent drag
        return false;
    });

    $('#info_view').scroll();

    var page_height = $('body').height();
    var page_width = $('body').width();
    $('#gallery_container').gallery({
        'width': page_width / 2,
        'height': page_height / 1.6,
    });
});
