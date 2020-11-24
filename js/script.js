$(document).ready(function() {  

  $('.s-close').click(function(e){
        e.preventDefault();
        var br=$(this).closest('#spoiler');
        $(br).find('.oppen').slideDown().removeClass('hidden');
    $('.s-close',br).addClass('hidden');
        $('.s-open',br).removeClass('hidden');


    });
    $('.s-open').click(function(e){
        e.preventDefault();
        var br=$(this).closest('#spoiler');
        $(br).find('.oppen').slideUp().addClass('hidden');
    $('.s-open',br).addClass('hidden');
        $('.s-close',br).removeClass('hidden')


    });
})