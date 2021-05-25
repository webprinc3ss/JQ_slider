$(document).ready(function () {
    //set options

    var speed = 500;
    var autoswitch = true;
    var autoswitch_speed = 4000;

    //add initial active class

    $('.slide').first().addClass('active');

    //Hide all slide

    $('.slide').hide()

    //show first slide

    $('.active').show();

    $('#next').on('click', function () {

        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':last-child')) {

            $('.slide').first().addClass('active');

        }

        else {

            $('.oldActive').next().addClass('active');

        }

        $('.oldActive').removeClass('oldActive');

        $('.slide').fadeOut(speed);

        $('.active').fadeIn(speed);

    })

    $('#prev').on('click', function () {

        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':first-child')) {

            $('.slide').last().addClass('active');

        }

        else {

            $('.oldActive').prev().addClass('active');

        }

        $('.oldActive').removeClass('oldActive');

        $('.slide').fadeOut(speed);

        $('.active').fadeIn(speed);

    })

    if (autoswitch == true) {

        var myVar = setInterval(function () { SlideStart() }, autoswitch_speed);

    }

    function SlideStart() {

        $('.active').removeClass('active').addClass('oldActive');

        if ($('.oldActive').is(':last-child')) {

            $('.slide').first().addClass('active');

        }

        else {

            $('.oldActive').next().addClass('active');

        }

        $('.oldActive').removeClass('oldActive');

        $('.slide').fadeOut(speed);

        $('.active').fadeIn(speed);

    }

    document.getElementById("slider").onmouseover = function () { mouseOver() };

    document.getElementById("slider").onmouseout = function () { mouseOut() };

    var myVar;

    function mouseOver() {

        clearInterval(myVar);

    }

    function mouseOut() {

        myVar = setInterval(function () { SlideStart() }, autoswitch_speed);

    }

})