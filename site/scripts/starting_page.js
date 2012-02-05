var last_left = 0;
var hover_ind_anim_inited = false;

/*
function move_hover_ind(new_left, new_width) {
    if (hover_ind_anim_inited) {
        if (last_left == 0) {
            last_left = $("#delimeter").get(0).offsetLeft;
            $("#hover_ind").css("left", last_left);
        }
        
        $("#hover_ind").animate( {
            left: new_left,
            width: new_width
        }, 300, function() {
        });
    }
}

function init_hover_indicator() {
    hover_ind_anim_inited = true;
    $("#hover_ind").css("top", 60);
    $("#nav_bar ul li").click(function() {
        var left = $(this).get(0).offsetLeft;
        var width = $(this).get(0).offsetWidth;
        $("#hover_ind").show();
        move_hover_ind(left, width);
    });
}
*/

function show_nav_lang() {
}

function bldg_zoom_in() {
    $('#title').removeClass('bldg_before_scale');
    $('#title').addClass('bldg_fadein');
    $('#title').css('cursor', 'default');
    setTimeout(function() {
        $("#nav_bar").addClass("nav_movein");
        $("#delimeter").addClass("del_movein");
        $("#nav_bar").css("opacity", "1.0");
        $("#delimeter").css("opacity", "1.0");
        $("#nav_bar ul li").css("cursor", "pointer");
    }, 6000);
    $('#nav_bar').get(0).addEventListener('webkitAnimationEnd', function() {
        $('#title').removeClass('bldg_fadein');
        $('#title').addClass('bldg_fadeout');
        $("#lang_sel").addClass("langsel_fadein");
        $("#lang_sel").css("opacity", "1.0");
        $('#lang_sel').css('cursor', 'pointer');
    });
    $('#lang_sel').get(0).addEventListener('webkitAnimationEnd', function() {
        var title = $('#title');
        $('#title').remove();
        $('body').append(title.get(0));
        $('#title').removeClass('bldg_fadeout');
        $('#title').addClass('bldg_before_scale');
    });
}

function init() {
    var inited = false;

    $('#title').addClass('bldg_before_scale');
    $('#nav_bar').css('opacity', '0');
    $('#delimeter').css('opacity', '0');
    $('#lang_sel').css('opacity', '0');

    $('#title').click(function() {
        if (!inited) {
            bldg_zoom_in();
            inited = true;
        }
    });

    /*
    $("li").hover(function() {
        $(this).css("cursor", "pointer");
    }, function() {
        $(this).css("cursor", "auto");
    });
    $(".lang").hover(function() {
        $(this).css("cursor", "pointer");
    }, function() {
        $(this).css("cursor", "auto");
    });
    $("#title").addClass("bldg_fadein");
    $("#nav_bar").css("opacity", "0.0");
    $("#delimeter").css("opacity", "0.0");
    $("#lang_sel").css("opacity", "0.0");
    $("#hover_ind").hide();
    $("#title").get(0).addEventListener("webkitAnimationEnd", function() {
        $("#nav_bar").addClass("nav_movein");
        $("#delimeter").addClass("del_movein");
        $("#nav_bar").css("opacity", "1.0");
        $("#delimeter").css("opacity", "1.0");
        init_hover_indicator();
    }, false);
    $("#nav_bar").get(0).addEventListener("webkitAnimationEnd", function() {
        $("#lang_sel").addClass("langsel_fadein");
        $("#lang_sel").css("opacity", "1.0");
    }, false);
    */
}

$(document).ready(init);
