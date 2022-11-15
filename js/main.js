$(window).scroll(function(){
    if ( $(this).scrollTop() > 100) {
        $('.besamogas').css({bottom : '20px'});
    } else {
        $('.besamogas').css({bottom : '-100%'});
    }
});
$('.besamogas').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});
// modal
if(document.querySelector(".modal")){
    $(".open-modal").click(function() {
        $("#modal-main").addClass("active");
        setTimeout(function() {
            $("#modal-main").addClass("opacity");
        }, 1);
    });
    $(".modal__close").click(function() {
        $(".modal").removeClass("opacity");
        setTimeout(function() {
            $(".modal").removeClass("active");
        }, 500);
    });
    $("#modal-main2 .consultation__form .btn").click(function() {
        $("#modal-main2").removeClass("opacity");
        setTimeout(function() {
            $("#modal-main2").removeClass("active");
        }, 500);
    });
    $("#modal-main .consultation__form .btn").click(function() {
        $("#modal-main").removeClass("opacity");
        setTimeout(function() {
            $("#modal-main").removeClass("active");
        }, 500);
        $("#modal-main2").addClass("active");
        setTimeout(function() {
            $("#modal-main2").addClass("opacity");
        }, 1);
    });
};
if(document.querySelector(".reviews__add")) {
    $(".reviews__add").click(function() {
        $("#modal-main3").addClass("active");
        setTimeout(function() {
            $("#modal-main3").addClass("opacity");
        }, 1);
    });
};