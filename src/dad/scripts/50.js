

$(document).ready(function(){

    var scrollHeight = $('body').height() - $(window).height();
    var $sliders = $('#sidebar .inner')
    var height = $('#sidebar').height();

    var $events = $('.event');
    var eventsArray = [];

    $events.each( function(i, $el) {
        var pct = ((Number($(this).attr('data-year'))-1964)*2);
        $(this).css('top',pct+'%');
        eventsArray.push({el: $(this), pct: pct, show: $(this).hasClass('on')});
    });

    var eventsN = eventsArray.length;


    var scrollFn = function() {

        var pct = $(window).scrollTop()/scrollHeight*100;

        $sliders.css('height',pct+'%')

        for (var i=0; i<eventsN; ++i) {

            if (pct < eventsArray[i].pct && eventsArray[i].show) {
                eventsArray[i].el.removeClass('on');
                eventsArray[i].show = false;
            } else if (pct >= eventsArray[i].pct && !eventsArray[i].show) {
                eventsArray[i].el.addClass('on');
                eventsArray[i].show = true;
            }

        }
    };

    var updateResize = function() {

        scrollHeight = $('body').height() - $(window).height();
        height = $('#sidebar').height();

        $('#klaus'  ).css('clip','rect('+(                0)+'px,5px,'+height+'px,-3px)')
        $('#nicola' ).css('clip','rect('+(    0.4/50*height)+'px,5px,'+height+'px,-3px)')
        $('#philipp').css('clip','rect('+((50-22)/50*height)+'px,5px,'+height+'px,-3px)')
        $('#emily'  ).css('clip','rect('+((50-20)/50*height)+'px,5px,'+height+'px,-3px)')
        $('#henrike').css('clip','rect('+((50-17)/50*height)+'px,5px,'+height+'px,-3px)')

    };

    updateResize();
    scrollFn();

    $(window).resize(updateResize);
    $(window).scroll(scrollFn);
    $(window).on('touchmove',scrollFn);

});
