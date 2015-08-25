$(document).ready(function() {

    $('#main-input').focus();

    // inicializamos las barras
    $('#gamescreen').nanoScroller();

    $.firefly({
        total : 100,
        minPixel: 1,
        maxPixel: 1,
        color: '#FFFFFF',
        on: '.moonfiction'
    });

    $('#main-input').keypress(function(e){
        if (e.which == 13 || e.keyCode == 13) {
            e.preventDefault();

            var txt = $(this).val().trim();

            // ponemos el mensaje en el buffer
            if (txt.length > 0) {
                say(txt, true);
            }
            
            // borramos el input
            $(this).val('');
        }
    });

    $(window).resize(function() {
        // actualizamos las barras
        $('#gamescreen').nanoScroller();

        //$.firefly.pause(true);
        $('.jqueryFireFly').stop().remove();
        $.firefly({
            total : 100,
            minPixel: 1,
            maxPixel: 1,
            color: '#FFFFFF',
            on: '.moonfiction'
        });
    });

    say('MoonFiction');
    say();
    say('An Interactive Fiction System');
    say('(using web technologies)');
    say();
    say('Made by Eliuk Blau');
    say('(c) 2015');
    say();

});
