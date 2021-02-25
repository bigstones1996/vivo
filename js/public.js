$(function () {
    $("#app").prepend("<div id='header'></div>");
    $("#header").load("../html/header.html ")
    $("#app").append("<div id='footer'></div>");
    $("#footer").load("../html/footer.html ")
})