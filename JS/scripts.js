$(document).ready(function() {
    $(".blog").mouseover(function() {
        $("#blog").show();
    }).mouseout(function() {
        $("#blog").hide();
    });

    $(".pitch").mouseover(function() {
        $("#pitch").show();
    }).mouseout(function() {
        $("#pitch").hide();
    });

    $(".gallery").mouseover(function() {
        $("#gallery").show();
    }).mouseout(function() {
        $("#gallery").hide();
    });

    $(".delani").mouseover(function() {
        $("#delani").show();
    }).mouseout(function() {
        $("#delani").hide();
    });

    $(".quotes").mouseover(function() {
        $("#quotes").show();
    }).mouseout(function() {
        $("#quotes").hide();
    });
});