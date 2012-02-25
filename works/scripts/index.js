var img_orig_width, img_orig_height;
var page_width, page_height;

var curr_column = 'featured';
var curr_entry;

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

function refresh_right_container() {
    if (curr_column != 'featured') {
        $.ajax({
            type: 'POST',
            url: 'db_ajax.php',
            data: 'type=entries&column=' + curr_column + '&entry=' + curr_entry,
            dataType: 'html',
            success: function(data) {
                $('#right_container ul li').css('font-weight', 'normal');
                $('#right_container').find('#' + data.replace(/[ |,|\.]/g, '_')).css('font-weight', 'bold');
            }
        });
    }
}

function refresh_background() {
    $.ajax({
        type: 'POST',
        url: 'db_ajax.php',
        data: 'type=bg_img&entry=' + curr_entry,
        dataType: 'html',
        success: function(data) {
            var bg_path = curr_entry.toLowerCase().replace(/[ |,|\.]/g, '_') + '/images/' + data;
            $('#bg_img').html('<img src=\'' + bg_path + '\' />');
            img_orig_width = $('#bg_img img').width();
            img_orig_height = $('#bg_img img').height();
            resize_bg_img();
        }
    });
}

function init_index() {
    $('#featured').css('font-weight', 'bold');
    $('#left_container ul li').click(function() {
        curr_column = $(this).attr('id');
        $('#left_container ul li').css('font-weight', 'normal');
        $(this).css('font-weight', 'bold');

        $.ajax({
            type: 'POST',
            url: 'db_ajax.php',
            data: 'type=columns&column=' + curr_column,
            dataType: 'html',
            success: function(data) {
                var value_arr = data.split(';');
                var html_content = '<ul>';
                for (index in value_arr) {
                    if (value_arr[index] != '') {
                        var val = value_arr[index];
                        html_content += '<li id=\'' + val.replace(/[ |,|\.]/g, '_') + '\'>' + val + '</li>';
                    }
                }
                html_content += '</ul>';
                $('#right_container').html(html_content);
                refresh_right_container();
            }
        });
    });

    curr_entry = $('#middle_container ul li').eq(0).attr('id');
    $('#middle_container ul li').eq(0).css('font-weight', 'bold');
    $('#middle_container ul li').click(function() {
        curr_entry = $(this).attr('id');
        $('#middle_container ul li').css('font-weight', 'normal');
        $(this).css('font-weight', 'bold');
        refresh_right_container();
        refresh_background();
    });

    refresh_background();
}

$(function() {
    page_height = $(window).height();
    page_width = $(window).width();

    $('#bg_img img').mousedown(function() { // prevent drag
        return false;
    });

    $('#work').css('margin-left', '0px');
    $('#employment').css('margin-right', '0px');

    resize_container();
    
    $(window).resize(function() {
        resize_bg_img();
        resize_container();
    });

    init_index();
});
