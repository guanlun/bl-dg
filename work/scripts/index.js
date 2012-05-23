var img_orig_width, img_orig_height;
var page_width, page_height;

var loaded=0;
var total;
var curr_column = 'Featured';
// var curr_entry;
var curr_id;
var curr_dir;

var work_arr = new Array();
var bg_img_arr = new Array();

var middle_dot_count = 0; // count the dots for animation in the middle container
var middle_dot_anim_id = 0;

var right_dot_count = 0; // count the dots for animation in the right container
var right_dot_anim_id = 0;

var last_entry = ''; // remember the last entry to avoid refresh 5ackground image when mouse moves onto the same one
var last_id;

var lang = 'en';

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
            var no_header = data.split('"/>');
            var works = no_header[1].split('|---|');
            for (index in works) {
                if (works[index] != '') {
                    var work_strs = works[index].split('||');
                    var work = {};
                    work['ID'] = work_strs[0];
                    work['ProjectName'] = work_strs[1];
                    work['Information'] = work_strs[2];
                    work['Brief'] = work_strs[3];
                    work['BackgroundImage'] = work_strs[4];
                    work['GalleryImages'] = work_strs[5];
                    work['Caption'] = work_strs[6];
                    work['Featured'] = work_strs[7];
                    work['Status'] = work_strs[8];
                    work['Category'] = work_strs[9];
                    work['Chronology'] = work_strs[10];
                    work['Location'] = work_strs[11];
                    work['Directory'] = work_strs[12];
                    work['ProjectNameSC'] = work_strs[13];
                    work['InformationSC'] = work_strs[14];
                    work['BriefSC'] = work_strs[15];
                    work['StatusSC'] = work_strs[16];
                    work['CategorySC'] = work_strs[17];
                    work['ProjectNameTC'] = work_strs[18];
                    work['InformationTC'] = work_strs[19];
                    work['BriefTC'] = work_strs[20];
                    work['StatusTC'] = work_strs[21];
                    work['CategoryTC'] = work_strs[22];
                    work['LocationSC'] = work_strs[23];
                    work['LocationTC'] = work_strs[24];
                    work_arr.push(work);
                }
            }
            load_bg_imgs();
            init_data();
        }
    });
}

function init_lang() {
    $.ajax({
        type:'POST',
        url:'get_lang.php',
        success:function(data) {
            lang = data;
            init_index();
        }
    });

}

function load_bg_imgs() {
    for (index in work_arr) {
        if (work_arr[index] != '') {
            var img = new Image();
            var img_arr = work_arr[index]['BackgroundImage'];
            var imgs = img_arr.split(';');
            for(i in imgs){
                if(imgs[i]!=""){
                    img.src = work_arr[index]['Directory'] + '/images/' + imgs[i];
                    bg_img_arr.push(img.src);
                    $.ajax({
                        type:'GET',
                        url:img.src,
                        success:function(){
                            loaded ++;
                            refreshProgressBar();
                        }
                    })
                }
            }
            
        }
    }
    total=bg_img_arr.length;
//    $('body').css('visibility', 'visible');
}

function refreshProgressBar(){
    $("#loading_text").html(Math.floor(loaded/total*100)+'%');
    if(loaded == total){
        $("#loading").css("display","none");
        window.setTimeout(function(){
            $("#container").css("display","block");
            $("#bg_img").css("display","block");
        }, 200);
    }
        
}

function init_data() {
    
    if (lang == 'en') {
        $('#container').css('font-size', '11px');
    } else {
        $('#container').css('font-size', '14px');
    }

    var lists = '';
    for (index in work_arr) {
        var value;
        if (lang == 'sc') {
            value = work_arr[index]['ProjectNameSC'];
        } else if (lang == 'tc') {
            value = work_arr[index]['ProjectNameTC'];
        } else {
            value = work_arr[index]['ProjectName'];
        }
        lists += '<li id=\'' + work_arr[index]['ID'] + '\'>' + value + '</li>';
    }
    $('#middle_container ul').html(lists);

    // curr_entry = work_arr[0]['ProjectName'].replace(/[ |,|\.|\(|\)]/g, '_');
    curr_id = parseInt(work_arr[0]['ID']);
    curr_dir = work_arr[0]['Directory'];
    $('#left_container ul li').click(function() {
        curr_column = $(this).attr('id');
        update_columns();
        update_entries();
    });

    $('#middle_container ul li').mouseover(function() {
        // curr_entry = $(this).attr('id');
        curr_id = parseInt($(this).attr('id'));
        curr_dir = work_arr[curr_id];

        update_entries();
        update_background();
    });

    $('#middle_container ul li').click(function() {
        for (index in work_arr) {
            if (parseInt(work_arr[index]['ID']) == curr_id) {
                if (work_arr[index]['Featured'] == 1) {
                    window.location = work_arr[index]['Directory'];
                }
            }
        }
    });

    update_columns();
    update_entries();
    update_background();
}

function remove_ending_dots(str) {
    while (str[str.length - 1] == '.') {
        str = str.substring(0, str.length - 1);
    }
    return str;
}

function update_columns() {
    // $('#left_container ul li').css('color', '#000'); // 666
    $('#left_container ul li').css('font-weight', 'normal');
    // $('#left_container').find('#' + curr_column).css('color', '#000'); // 333
    $('#left_container').find('#' + curr_column).css('font-weight', 'bold');

    if (curr_column == 'Featured') {
        $('#right_container ul').html('');
    } else {
        var list = new Array();
        for (index in work_arr) {
            var value = work_arr[index][curr_column];
            list.push('<li id=\'' + value.replace(/[ |,|\.|\(|\)]/g, '_') + '\'>' + value + '</li>');
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

        if (curr_column == 'Chronology') {
            unique_list = unique_list.sort();
        }

        list_str = '';
        for (index in unique_list) {
            list_str += unique_list[index];
        }

        $('#right_container ul').html(list_str);
    }
}

function update_entries() {
    var featured;
    for (index in work_arr) {
        if (work_arr[index]['ID'] == curr_id) {
            featured = work_arr[index]['Featured'];
        }
    }

    middle_dot_count = 0;
    right_dot_count = 0;
    var entries = $('#middle_container ul li');
    var act_entry = $('#middle_container').find('#' + curr_id);
    // entries.css('color', '#000'); // 666 originally
    entries.css('font-weight', 'normal');
    entries.css('cursor', 'default');
    // act_entry.css('color', '#000'); // 333 originally
    act_entry.css('font-weight', 'bold');

    for (index in entries) {
        entries.eq(index).text(remove_ending_dots(entries.eq(index).text()));
    }

    clearInterval(middle_dot_anim_id);

    if (featured == 1) { // featured
        act_entry.css('cursor', 'pointer');
        middle_dot_anim_id = setInterval(function() {
            if (middle_dot_count < 3) {
                act_entry.text(act_entry.text() + '.');
                middle_dot_count++;
            }
        }, 300);
    } else { // not featured
        var entries = $('#middle_container ul li');
        var act_entry = $('#middle_container').find('#' + curr_id);
        entries.css('font-weight', 'normal');
        act_entry.css('font-weight', 'bold');
    }

    for (index in work_arr) {
        // if (work_arr[index]['ProjectName'].replace(/[ |,|\.|\(|\)]/g, '_') == curr_entry) { // get the correct entry
        if (work_arr[index]['ID'] == curr_id) { // get the correct entry
            if (curr_column != 'Featured') {
                var value = work_arr[index][curr_column];
                var lists = $('#right_container ul li');
                var curr = $('#right_container').find('#' + value.replace(/[ |,|\.|\(|\)]/g, '_'));
                // lists.css('color', '#000'); // 666
                lists.css('font-weight', 'normal')
                // curr.css('color', '#000'); // 333
                curr.css('font-weight', 'bold');

                for (index in lists) {
                    lists.eq(index).text(remove_ending_dots(lists.eq(index).text()));
                }

                clearInterval(right_dot_anim_id);
                if (featured == 1) {
                    right_dot_anim_id = setInterval(function() {
                        if (right_dot_count < 3) {
                            curr.text(curr.text() + '.');
                            right_dot_count++;
                        }
                    }, 300);
                }
            }
        }
    }
}

function update_background() {
    // if (last_entry != curr_entry) {
    if (last_id != curr_id) {
        for (index in work_arr) {
            if (work_arr[index]['ID'] == curr_id) { // get the correct entry
                var featured = work_arr[index]['Featured'];
                // var bg_path = curr_entry.toLowerCase() + '/images/' + work_arr[index]['BackgroundImage'];
                if (featured == 1) {
                    var img_arr = work_arr[index]['BackgroundImage'];
                    var imgs = img_arr.split(';');
                    var img = imgs[Math.floor(Math.random() * imgs.length)]
                    var bg_path = work_arr[index]['Directory'] + '/images/' + img;
                }
                $('#bg_img img').stop();
                $('#bg_img img').animate({
                    opacity: 0.0,
                }, 150, function() {
                    if (featured == 1) {
                        $('#bg_img').html('<img src=\'' + bg_path + '\' />');
                        $('#bg_img').css('opacity', '0.0');
                        $('#bg_img img').load(function() {
                            img_orig_width = $('#bg_img img').width();
                            img_orig_height = $('#bg_img img').height();
                            resize_bg_img();
                            $('#bg_img').animate({
                                opacity:0.75,
                            }, 150);
                            
                        });
                        
                    }
                });
            }
        }
    }
    // last_entry = curr_entry;
    last_id = curr_id;
}

$(function() {
    init_lang();

    // init_index();

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

    $('#middle_container').scroll();

    $('body').css('visibility', 'visible');

});

