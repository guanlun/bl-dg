var img_orig_width, img_orig_height;
var page_width, page_height;

var curr_column = 'Featured';
var curr_entry;

var work_arr = new Array();

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

function init_index() {
    $.ajax({
        type:'POST',
        url:'db_ajax.php',
        success:function(data) {
            var works = data.split('|---|');
            for (index in works) {
                if (works[index] != '') {
                    var work_strs = works[index].split('||');
                    var work = new Array();
                    work['ProjectName'] = work_strs[0];
                    work['Information'] = work_strs[1];
                    work['Brief'] = work_strs[2];
                    work['BackgroundImage'] = work_strs[3];
                    work['GalleryImages'] = work_strs[4];
                    work['Caption'] = work_strs[5];
                    work['Featured'] = work_strs[6];
                    work['Status'] = work_strs[7];
                    work['Category'] = work_strs[8];
                    work['Chronology'] = work_strs[9];
                    work['Location'] = work_strs[10];
                    work_arr.push(work);
                }
            }
            init_data();
        }
    });
}

function init_data() {
    var lists = '';
    for (index in work_arr) {
        var value = work_arr[index]['ProjectName'];
        lists += '<li id=\'' + value.replace(/[ |,|\.]/g, '_') + '\'>' + value + '</li>';
    }
    $('#middle_container ul').html(lists);

    curr_entry = work_arr[0]['ProjectName'].replace(/[ |,|\.]/g, '_');
    $('#left_container ul li').click(function() {
        curr_column = $(this).attr('id');
        update_columns();
        update_entries();
    });

    $('#middle_container ul li').mouseover(function() {
        curr_entry = $(this).attr('id');
        update_entries();
        update_background();
    });

    $('#middle_container ul li').click(function() {
        window.location = $(this).attr('id').toLowerCase();
    });

    update_columns();
    update_entries();
    update_background();
}

function update_columns() {
    $('#left_container ul li').css('color', '#666');
    $('#left_container').find('#' + curr_column).css('color', '#333');
    if (curr_column == 'Featured') {
        $('#right_container ul').html('');
    } else {
        var list = new Array();
        for (index in work_arr) {
            var value = work_arr[index][curr_column];
            list.push('<li id=\'' + value.replace(/[ |,|\.]/g, '_') + '\'>' + value + '</li>');
        }

        var unique_list = new Array();
        for (var i = 0; i < list.length; i++) {
            var same = false;
            for (var j = 0; j < i; j++) {
                if (list[j] == list[i]) {
                    same = true;
                }
            }
            if (!same) {
                unique_list.push(list[i]);
            }
        }

        list_str = '';
        for (index in unique_list) {
            list_str += unique_list[index];
        }

        $('#right_container ul').html(list_str);
    }
}

function update_entries() {
    $('#middle_container ul li').css('color', '#666');
    $('#middle_container').find('#' + curr_entry).css('color', '#333');
    for (index in work_arr) {
        if (work_arr[index]['ProjectName'].replace(/[ |,|\.]/g, '_') == curr_entry) { // get the correct entry
            if (curr_column != 'Featured') {
                var value = work_arr[index][curr_column];
                $('#right_container ul li').css('color', '#666');
                $('#right_container').find('#' + value.replace(/[ |,|\.]/g, '_')).css('color', '#333');
            }
        }
    }
}

function update_background() {
    for (index in work_arr) {
        if (work_arr[index]['ProjectName'].replace(/[ |,|\.]/g, '_') == curr_entry) { // get the correct entry
            var bg_path = curr_entry.toLowerCase() + '/images/' + work_arr[index]['BackgroundImage'];
            $('#bg_img').html('<img src=\'' + bg_path + '\' />');
            img_orig_width = $('#bg_img img').width();
            img_orig_height = $('#bg_img img').height();
            resize_bg_img();
        }
    }
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
