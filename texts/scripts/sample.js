var img_orig_width, img_orig_height;
var page_width, page_height;

function resize_bg_img() {
    var bg_img = $('#bg_img img');
    
    page_height = $(window).height();
    page_width = $(window).width();

    var img_w_h_ratio = img_orig_width / img_orig_height;
    var page_w_h_ratio = page_width / page_height;

    if (img_w_h_ratio > page_w_h_ratio) { // image is wider compared to the page
        var img_new_height = page_height;
        var img_new_width = Math.ceil(img_orig_width / img_orig_height * img_new_height);
        var img_margin_left = - (page_width - img_new_width) / 2;
        if (img_margin_left > 0) {
            img_margin_left = - img_margin_left;
        }
        bg_img.css('height', img_new_height);
        bg_img.css('width', img_new_width);
        bg_img.css('margin-left', img_margin_left);
        bg_img.css('margin-top', '0');
    } else { // image is taller campared to the page
        var img_new_width = page_width;
        var img_new_height = Math.ceil(img_orig_height / img_orig_width * img_new_width);
        var img_margin_top = - (page_height - img_new_height) / 2;
        if (img_margin_top > 0) { 
            img_margin_top = - img_margin_top;
        }
        bg_img.css('height', img_new_height);
        bg_img.css('width', img_new_width);
        bg_img.css('margin-top', img_margin_top);
        bg_img.css('margin-left', '0');
    }
}

function resize_container() {
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
}

$(function() {
    page_height = $(window).height();
    page_width = $(window).width();

    $('#bg_img img').mousedown(function() { // prevent drag
        return false;
    });

    $('#work').css('margin-left', '0px');
    $('#employment').css('margin-right', '0px');

    $('#left_list_items').scroll();
    $('#right_article_content').scroll();

    $('#left_image img').load(function() {
        var img_width = $(this).width();
        var img_height = $(this).height();
        var ctn_width = $('#left_image').width();
        var ctn_height = $('#left_image').height();
        var new_height = ctn_height;
        var new_width = ctn_height * img_width / img_height;
        $('#left_image img').css('height', new_height);
        $('#left_image img').css('width', new_width);

        var margin_left = (ctn_width - new_width) / 2;
        $('#left_image img').css('margin-left', margin_left);
    });

    $('#left_list_items ul li').click(function() {
        window.location = '../' + $(this).attr('id');
    });

    $('#left_list_items ul li').mouseover(function() {
        $('#left_list_items ul li').css('color', '#666');
        $(this).css('color', '#000');
    });

    $('#left_list_items ul li').mouseout(function() {
        $(this).css('color', '#666');
    });

    var lang = $('#lang_indicate').text();
    if (lang != 'EN') {
        $('#right_article_content').css('font-size', '14px');
    }

    /*
    $('#bg_img img').css('opacity', '0.0');
    $('#bg_img img').load(function() {
        img_orig_width = $('#bg_img img').width();
        img_orig_height = $('#bg_img img').height();
        resize_bg_img();
        $('#bg_img img').css('opacity', '0.05');
    });
    */

    resize_container();
    
    $(window).resize(function() {
        resize_bg_img();
        resize_container();
    });
});
