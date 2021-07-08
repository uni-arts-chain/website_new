
$('.header .nav').click(function () {
    $('.menuList').toggleClass('activeList')
})


$(function () {
    $('.showClick').click(function () {
        $(this).nextAll('.isShow').css({
            opacity:'1'
        })
    })
})