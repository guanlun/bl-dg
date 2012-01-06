var last_left = 0;
var hover_ind_anim_inited = false;

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

function init() {
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
}

$(document).ready(init);
