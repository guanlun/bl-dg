$(function() {
    $('#work').css('margin-left', '0px');
    $('#employment').css('margin-right', '0px');

    $('#info_view').scroll();

    $('#gallery_container').gallery({
        'width': 700,
        'height': 540,
    });

    $('#bg_img img').mousedown(function() { // prevent drag
        return false;
    });

    $('#bg_img img').css('width', $('html').width());

    var page_height = $(window).height();
    var page_width = $(window).width();

    var margin_top = (page_height - $('#container').height()) / 2 - 25;
    if (margin_top < 0) {
        margin_top = 0;
    }

    var margin_left = (page_width - $('#container').width()) / 2;
    if (margin_left < 0) {
        margin_left = 0;
    }

    $('#container').css('margin-top', margin_top);
    $('#container').css('margin-left', margin_left);

    $('#bg_img img').css('min-height', $('#container').height() + margin_top);
    $('#bg_img img').css('min-width', $('#container').width() + margin_left);

    $(window).resize(function() {
        var page_height = $(window).height();
        var page_width = $(window).width();

        var margin_top = (page_height - $('#container').height()) / 2 - 25;
        if (margin_top < 0) {
            margin_top = 0;
        }

        var margin_left = (page_width - $('#container').width()) / 2;
        if (margin_left < 0) {
            margin_left = 0;
        }

        $('#container').css('margin-top', margin_top);
        $('#container').css('margin-left', margin_left);

        $('#bg_img img').css('height', page_height);
        $('#bg_img img').css('width', page_width);
    });
});
