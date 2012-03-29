var img_orig_width, img_orig_height;
var page_width, page_height;

var logo;
var nav_bar;

var logo_clicked = false;

function resize_container() {
    page_height = $(window).height();
    page_width = $(window).width();

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

function animate() {
}

$(function() {
    $('#work').css('margin-left', '0px');
    $('#employment').css('margin-right', '0px');

    resize_container();
    
    $(window).resize(function() {
        resize_container();
    });

    logo = $('#logo_container img');
    nav_bar = $('#nav_bar');
    lang_sel = $('#lang_sel');

    logo.load(function() {
        logo.css('visibility', 'visible');
        logo.css('width', '60px');
        var img_width = 60;
        var img_height = logo.height();
        var ctn_width = 1024;
        var ctn_height = 650;
        logo.css('left', (ctn_width - img_width) / 2);
        logo.css('top', (ctn_height - img_height) / 2);

        var top_margin = (page_height - $('#container').height()) / 2;
        var anim_start_y = - 50 - top_margin;

        logo.click(function() {
            if (!logo_clicked) {
                logo_clicked = true;
                $('#logo_container').css('cursor', 'default');
                var anim = setInterval(function() {
                    img_width *= 1.008;
                    img_height *= 1.008;
                    logo.css('width', img_width);
                    logo.css('height', img_height);
                    logo.css('left', (ctn_width - img_width) / 2);
                    logo.css('top', (ctn_height - img_height) / 2);
                    if (img_width >= 350) {
                        clearInterval(anim);
                    }
                }, 5);

                setTimeout(function() {
                    $('body').css('overflow', 'hidden');
                    nav_bar.css('visibility', 'visible');
                    if (anim_start_y > -70) {
                        nav_bar.css('margin-top', -70);
                    } else {
                        nav_bar.css('margin-top', anim_start_y);
                    }

                    nav_bar.addClass('nav_scalein');
                    nav_bar.animate({
                        marginTop: 0
                    }, 1600, function() {
                        $('body').css('overflow', 'auto');
                    });

                    var anim = setInterval(function() {
                        img_width /= 1.008;
                        img_height /= 1.008;
                        logo.css('width', img_width);
                        logo.css('height', img_height);
                        logo.css('left', (ctn_width - img_width) / 2);
                        logo.css('top', (ctn_height - img_height) / 2);
                        if (img_width <= 60) {
                            clearInterval(anim);
                            setTimeout(function() {
                                lang_sel.addClass('langsel_fadein');
                                setTimeout(function() {
                                    lang_sel.css('opacity', '1.0');
                                }, 1500);
                            }, 500);
                        }
                    }, 5);

                }, 2500);
            }
            
        });
    });

    nav_bar.css('visibility', 'hidden');
    lang_sel.css('opacity', '0.0');

});

