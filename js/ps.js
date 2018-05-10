$(document).ready(function() {

$(".nav_close").click(function(){
    $(".navmenu").hide("blind", 1000);
});

$("#navicon").click(function(){
    $(".navmenu").show("blind", 1000);
});


});