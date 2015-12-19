$(document).ready(function () {


    var norm;
    $("h2.home").hover(

        function () {

            var glitch = "images/" + "glitch_" + $(this).next().attr('class').split(' ')[1] + ".png";
            norm = $(this).next().attr('src');
            $(this).next().attr("src", glitch);
        },
        function () {

            $(this).next().attr("src", norm);
        }
    );


    $("h2.headICON").hover(

        function () {

            var glitch = "../images/" + "glitch_" + $(this).next().attr('class').split(' ')[1] + ".png";
            norm = $(this).next().attr('src');
            $(this).next().attr("src", glitch);
        },
        function () {

            $(this).next().attr("src", norm);
        }
    );


    $("h2.home").each(function (index) {

        if ($(window).width() < 700) {
            var glitch = "images/" + "glitch_" + $(this).next().attr('class').split(' ')[1] + ".png";
            norm = $(this).next().attr('src');
            $(this).next().attr("src", glitch);

        }
    });
});