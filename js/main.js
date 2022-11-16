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
$(".btn_burgir").click(function() {
    if($(".btn_burgir").hasClass("active")) {
        $(".header__navbar").removeClass("active");
        $(".btn_burgir").removeClass("transform");
        setTimeout(function() {
            $(".btn_burgir").removeClass("active");
        }, 300);
    } else {
        $(".header__navbar").addClass("active");
        $(".btn_burgir").addClass("active");
        setTimeout(function() {
            $(".btn_burgir").addClass("transform");
        }, 300);
    }
});
$(".header__search .open").click(function() {
    $(".header__search_wrap").addClass("active");
    setTimeout(function() {
        $(".header__search_wrap").addClass("opacity");
    },1);
});
$(".header__search_wrap .close").click(function() {
    $(".header__search_wrap").removeClass("opacity");
    setTimeout(function() {
        $(".header__search_wrap").removeClass("active");
    },300);
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