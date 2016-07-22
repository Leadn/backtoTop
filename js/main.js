/*要引入jq*/
/**
 * backToTop1
 */
$(document).ready(function() {
    $(window).scroll(function() { //滚动时触发
        var top = $(document).scrollTop(), //获取滚动条到顶部的垂直高度
            height = $(window).height(); //获得可视浏览器的高度
        if (top > 100) {
            $("#backToTop1").show(200, function() {
                $("#backToTop1").css({
                    top: height + top - 80
                })
            });
        }
    });
    /*点击回到顶部*/
    $('#backToTop1').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});
/**
 * backToTop2
 */
$(document).ready(function() {
    $(window).scroll(function() { //滚动时触发
        var top = $(document).scrollTop(); //获取滚动条到顶部的垂直高度
        if (top > 100) { //到一定高度显示
            var height = $(window).height(); //获得可视浏览器的高度
            $("#backToTop2").fadeIn(300).css({
                top: height - 80
            });
        }
        if (top < 100) { //小于100消失
            $("#backToTop2").fadeOut(200);
        }
    });
    /*点击回到顶部*/
    $('#backToTop2').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});
