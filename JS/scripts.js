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
});