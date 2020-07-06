$(document).ready(function() {

    $('.products > div').bind('touchstart', function () {});
    const menuFive = document.querySelector('.menuFive');
    function addClassFunFive() {
        this.classList.toggle("clickMenuFive");
    }
    menuFive.addEventListener('click', addClassFunFive);

    $('.settings-more').on('click', f_acc);

    function f_acc(){
        if($(this).attr('data-key') != 1){
            $(this).next().css({
                'display' : 'block',
                'z-index' : 1000,
                'opacity' : 1,
                'bottom' : '215px'
            });
            $('.more-info').not($(this).next()).css({
                'display' : 'none',
            });
            $(this).attr('data-key', 1);
        } else{
            $(this).next().css({
                'display' : 'none'
            });
            $(this).attr('data-key', 0);
        }


    };

    $("#price_range").ionRangeSlider({
        min: 0,
        max: 1500
    });
});