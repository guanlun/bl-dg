var dot_count = 0;
var dot_anim = 0;
var items;

function remove_ending_dots(str) {
    while (str[str.length - 1] == '.') {
        str = str.substring(0, str.length - 1);
    }
    return str;
}

function init_item_position() {
    var init_left = 100;
    var left_sum = init_left;
    var margin = 200;

    for (var i = 0; i < items.length; i++) {
        var left_pos = left_sum - items.eq(i).width() / 2;
        items.eq(i).css('left', left_pos);
        init_left += margin;
        left_sum += margin;
    }
}

$(function() {
    items = $('#nav_bar ul li');

    init_item_position();

    items.click(function() {
        console.log($(this).attr('id'));
        window.location = '/' + $(this).attr('id');
    });

    items.mouseover(function() {
        dot_count = 0;
        for (var i = 0; i < items.length; i++) {
            items.eq(i).css('font-weight', 'normal');
            items.eq(i).text(remove_ending_dots(items.eq(i).text()));
        }

        var curr = $(this);

        curr.css('font-weight', 'bold');
        clearInterval(dot_anim);
        dot_anim = setInterval(function() {
            if (dot_count < 3) {
                curr.text(curr.text() + '.');
                dot_count++;
            }
        }, 300);
    });

    items.mouseout(function() {
        clearInterval(dot_anim);
        for (index in items) {
            items.eq(index).css('font-weight', 'normal');
            items.eq(index).text(remove_ending_dots(items.eq(index).text()));
        }
    });

    var langSels = $('#lang_sel').find('.lang');
    langSels.click(function() {
        var langPref;
        if ($(this).attr('id') == 'lang_en') {
            langPref = 'en';
        } else if ($(this).attr('id') == 'lang_sc') {
            langPref = 'sc';
        } else if ($(this).attr('id') == 'lang_tc') {
            langPref = 'tc';
        }
        window.location = '/lang_change.php?lang=' + langPref + '&url=' + window.location.href;
    });

});
