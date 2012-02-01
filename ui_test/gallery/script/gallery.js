jQuery.fn.gallery = function() {
    var container = $(this);
    var img_width = 100;
    var scroll_id = 0;

    var img_id = 0;
    
    var mouse_clicked_on_img = '';

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
        $(this).stop();
        $(this).animate({
            opacity: 0.8,
        }, 200);
    });

    imgs.mouseout(function() {
        $(this).stop();
        if (mouse_clicked_on_img != $(this).attr('src')) {
            $(this).animate({
                opacity: 0.3,
            }, 200);
        }
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

        var left_offset = e.pageX - scroll.offset().left;
        var scroll_width = div_width / 5;

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
        mouse_clicked_on_img = src;
        img_id = src; // set the last image to the current one
        var img = new Image();
        img.src = src;

        var width = img.width;
        var height = img.height;
        var width_ratio = width / display_width;
        var height_ratio = height / display_height;

        if (width_ratio < height_ratio) { // tall
            width = width / height_ratio;
            height = height / height_ratio;
        } else { // wide
            width = width / width_ratio;
            height = height / width_ratio;
            var margin_top = (display_height - height) / 2;
            if (margin_top > 0) {
                $(img).css('margin-top', margin_top);
            }
        }

        img.width = width;
        img.height = height;
        display.html(img);

        display.css('text-align', 'center');
    }

    imgs.click(function() {
        imgs.animate({
            opacity: 0.3,
        }, 200);
        $(this).stop();
        $(this).css('opacity', '0.8');
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
                    opacity: 0.8,
                }, 100);
            });
        }
    });

    imgs.eq(0).load(function() { // when the first image is loaded, set it as the display image
        imgs.eq(0).css('opacity', '0.8');
        set_img(imgs.eq(0).attr('src'));
    });
};
