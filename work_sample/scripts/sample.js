$(function() {
    $('#bg_img img').mousedown(function() { // prevent drag
        return false;
    });

    $('#bg_img img').css('width', $('html').width());

    $('#info_view').scroll();

    var page_height = $('body').height();
    var page_width = $('body').width();
    $('#gallery_container').gallery({
        'width': 700,
        'height': 450,
    });
});