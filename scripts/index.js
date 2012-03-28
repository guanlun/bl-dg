var img_orig_width, img_orig_height;
var page_width, page_height;

var logo;
var nav_bar;

var logo_clicked = false;

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

function animate() {
}

$(function() {
    page_height = $(window).height();
    page_width = $(window).width();

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
        logo.css('width', '100px');
        var img_width = 100;
        var img_height = logo.height();
        var ctn_width = 1024;
        var ctn_height = 650; // TODO: to be changed!!!
        logo.css('left', (ctn_width - img_width) / 2);
        logo.css('top', (ctn_height - img_height) / 2);

        logo.click(function() {
            if (!logo_clicked) {
                logo_clicked = true;
                var anim = setInterval(function() {
                    img_width += 5;
                    img_height += 5;
                    logo.css('width', img_width);
                    logo.css('height', img_height);
                    logo.css('left', (ctn_width - img_width) / 2);
                    logo.css('top', (ctn_height - img_height) / 2);
                    if (img_width >= 600) {
                        clearInterval(anim);
                    }
                }, 5);

                setTimeout(function() {
                    $('body').css('overflow', 'hidden');
                    nav_bar.css('visibility', 'visible');
                    nav_bar.css('margin-top', '-100px');

                    nav_bar.addClass('nav_scalein');
                    nav_bar.animate({
                        marginTop: 0
                    }, 800, function() {
                        $('body').css('overflow', 'auto');
                    });

                    var anim = setInterval(function() {
                        img_width -= 5;
                        img_height -= 5;
                        logo.css('width', img_width);
                        logo.css('height', img_height);
                        logo.css('left', (ctn_width - img_width) / 2);
                        logo.css('top', (ctn_height - img_height) / 2);
                        if (img_width <= 100) {
                            clearInterval(anim);
                        }
                    }, 5);

                }, 2000);
            }
            
        });
    });

    nav_bar.css('visibility', 'hidden');
    lang_sel.css('visibility', 'hidden');

});

