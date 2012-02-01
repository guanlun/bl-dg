jQuery.fn.noScrollbarDiv = function() {
    var div = $(this);
    var scroll_id;
    function scroll_up() {
        function up() {
            var curr_dis = div.scrollTop();
            div.scrollTop(curr_dis - 1);
        }
        scroll_id = setInterval(up, 20);
    }

    function scroll_down() {
        function down() {
            var curr_dis = div.scrollTop();
            div.scrollTop(curr_dis + 1);
        }
        scroll_id = setInterval(down, 20);
    }

    function stop_scroll() {
        clearInterval(scroll_id);
    }

    var top_scroll_zone = '<div id=\'' + div.attr('id') + '_top_scroll_zone\'></div>';
    var bottom_scroll_zone = '<div id=\'' + div.attr('id') + '_bottom_scroll_zone\'></div>';
    div.append(top_scroll_zone);
    div.append(bottom_scroll_zone);

    var top_div = $('#' + div.attr('id') + '_top_scroll_zone');
    var bottom_div = $('#' + div.attr('id') + '_bottom_scroll_zone');

    width = div.width();
    height = div.height();

    div.css('overflow-y', 'hidden');

    top_div.css('position', 'absolute');
    top_div.css('height', height / 5);
    bottom_div.css('position', 'absolute');
    bottom_div.css('height', height / 5);
    
    top_pos = div.position().top;
    bottom_pos = div.position().top + 
            div.height() - bottom_div.height();

    top_div.css('top', top_pos);
    top_div.css('width', width);
    bottom_div.css('top', bottom_pos);
    bottom_div.css('width', width);

    top_div.mouseover(scroll_up);
    top_div.mouseout(stop_scroll);
    bottom_div.mouseover(scroll_down);
    bottom_div.mouseout(stop_scroll);
};
