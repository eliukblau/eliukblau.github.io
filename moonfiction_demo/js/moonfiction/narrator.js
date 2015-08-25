// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/Trim
if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
      return this.replace(rtrim, '');
    };
  })();
}

function say(msg, newline, fade, buffer)
{
    msg = typeof msg !== 'undefined' ? msg : '';
    newline = typeof newline !== 'undefined' ? newline : false;
    fade = typeof fade !== 'undefined' ? fade : true;
    buffer = typeof buffer !== 'undefined' ? buffer : '#main-buffer';

    $(buffer).append(
        (
            '<div class="narrator">' +
            '<span class="prompt{:NL:}"></span>' +
            '{:MSG:}' +
            '<br/>' +
            (newline ? '<br/>' : '') +
            '</div>'
        ).replace('{:NL:}', (!msg.length ? ' hidden' : ''))
         .replace('{:MSG:}', msg)
    );

    $('#gamescreen').nanoScroller();
    $('#gamescreen').nanoScroller({ scroll: 'bottom' });

    if (fade) { $('div.narrator').last().fadeIn('normal'); }
    else { $('div.narrator').last().css('display', 'inline'); }
}
