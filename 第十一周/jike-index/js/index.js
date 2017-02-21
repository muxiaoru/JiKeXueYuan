$(document).ready(function() {
    var h = $('.header').offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() > h) {
            $('.top').css('display', 'block');
        } else {
            $('.top').css('display', 'none');
        }
    });
    $(".top").click(function(){
    	$(window).scrollTop(0);
    })
    $("#searchBtn").click(function() {
        $(".searchbox").show(1000);
    })
    $("#closeBtn").click(function() {
        $(".searchbox").hide();
    })
})
