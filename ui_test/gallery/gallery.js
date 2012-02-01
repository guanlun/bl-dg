var test_arr = [];
jQuery.fn.gallery = function() {
    var container = $(this);
    var img_width = 100;
    var scroll_id = 0;

    var img_id = 0;

    var div_width = container.width();
    var div_height = container.height();
    var div_top = container.position().top;
    var div_left = container.position().left;

    scroll = $('<div id=\'scroll\'></div>');
    scroll.css('width', div_width);
    scroll.css('overflow-x', 'hidden');
    scroll.css('margin-top', '5px');

    var inner_div = container.find('.gallery');
    var inner_width = inner_div.find('img').length * 100;
    inner_div.css('width', inner_width);

    scroll.append(inner_div);
    container.append(scroll);

    imgs = inner_div.find('img');
    imgs.css('width', '90px');
    imgs.css('height', '60px');
    imgs.css('float', 'left');
    imgs.css('background', '#EEE');
    imgs.css('padding-left', '5px');
    imgs.css('padding-right', '5px');
    imgs.css('opacity', '0.3');

    imgs.mouseover(function() {
        $(this).css('opacity', '0.6');
    });

    imgs.mouseout(function() {
        $(this).css('opacity', '0.3');
    });

    var moving = false;

    scroll.mousemove(function(e) {
        function left() {
            var curr_dis = scroll.scrollLeft();
            scroll.scrollLeft(curr_dis - 2);
        }

        function right() {
            var curr_dis = scroll.scrollLeft();
            scroll.scrollLeft(curr_dis + 2);
        }

        left_offset = e.pageX - scroll.offset().left;
        scroll_width = div_width / 5;

        if (left_offset < scroll_width) {
            if (!moving) {
                scroll_id = setInterval(left, 10);
                moving = true;
            }
        } else if (left_offset > div_width - scroll_width) {
            if (!moving) {
                scroll_id = setInterval(right, 10);
                moving = true;
            }
        } else {
            moving = false;
            clearInterval(scroll_id);
        }
    });

    scroll.mouseout(function() {
        moving = false;
        clearInterval(scroll_id);
    });

    // large image display
    container.prepend('<div id=\'' + container.attr('id') + '_large_display\'></div>');
    var display = $('#' + container.attr('id') + '_large_display');
    var display_width = div_width;
    var display_height = parseInt(div_width * 0.75);
    display.css('width', display_width);
    display.css('height', display_height);
    display.css('overflow', 'hidden');

    function set_img(src) {
        img_id = src; // set the last image to the current one
        var img = new Image();
        img.src = src;
        test_arr.push(img);

        var width = img.width;
        var height = img.height;
        var width_ratio = width / display_width;
        var height_ratio = height / display_height;

        if (width_ratio < height_ratio) {
            width = width / height_ratio;
            height = height / height_ratio;
        } else {
            width = width / width_ratio;
            height = height / width_ratio;
        }

        img.width = width;
        img.height = height;
        display.html(img);

        display.css('text-align', 'center');
    }

    imgs.click(function() {
        src = $(this).attr('src');
        if (img_id == src) {
            return;
        } else {
            var img = new Image();
            img.src = src;
            display.animate( {
                opacity: 0.0,
            }, 100, function() {
                set_img(src);
                display.animate( {
                    opacity: 0.6,
                }, 100);
            });
        }
    });

    imgs.eq(0).load(function() {
        set_img('images/01.jpg');
    });
};
