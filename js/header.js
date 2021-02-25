$(function () {
    //个人中心登录注册显示隐藏
    $('.topbar-user-login-box span').click(function () {
        $('.topbar-user-login').toggleClass("show")
    })



    //头部搜索框显示隐藏
    var dds = $(".head-search-box-content dd")

    $(".open").click(function () {
        $(this).css({
            "display": "none"
        })
        $(".confirm").css({
            "right": "300px"
        })
        $(".head-search-wrap").css({
            "height": "400",
            "opacity": "1"
        })
        $(".close").css({
            "opacity": "1"
        })
        $('.head-search-box-input-line').css({
            "right": "0px"
        })
        $(".head-search-box-input input").css({
            "left": "0px"
        })
        //热搜列表滑动
        var time1 = 0
        $(dds).each(function (i) {
            time1 += 20
            let this1 = this
            setTimeout(function () {
                $(this1).css({
                    "transform": "translateX(0)"
                })
            }, time1)
        })

    })
    $(".close").click(function () {

        close()
    })
   


    function close() {

        $(".close").css({
            "opacity": "0"
        })
        $(".confirm").css({
            "right": "0"
        })
        $(".head-search-wrap").css({
            "height": "0",
            "opacity": "0"
        })
        $(".open").css({
            "display": "block"
        })
        $('.head-search-box-input-line').css({
            "right": "-600px"
        })
        $(".head-search-box-input input").css({
            "left": "-50px"
        })
        var time1 = 120
        $(dds).each(function (i) {
            time1 -= 20
            let this1 = this
            setTimeout(function () {
                $(this1).css({
                    "transform": "translateX(600px)"
                })
            }, time1)
        })

    }
    $(".open").hover(function () {
        $(".confirm").css({
            "color": "blueviolet"
        })
    },
        function () {
            $(".confirm").css({
                "color": "#242933"
            })
        }
    )
    $(".confirm").hover(function () {
        $(".confirm").css({
            "color": "blueviolet"
        })
    },
        function () {
            $(".confirm").css({
                "color": "#242933"
            })
        }
    )


    //头部分类产品显示隐藏
    var lis = $(".head-series-list li")
    var pro = $(".head-series-product")

    for (let i = 0; i < 6; i++) {
        $(lis[i]).mouseenter(function () {
            $(pro[i]).css({
                "opacity": "1",
                "height": "450px",
                "transition": "1s all"

            })
            $(".head-product-mask").css('height', '540px')
        }
        )
        $(lis[i]).mouseleave(function () {
            $(pro[i]).css({
                "opacity": "0",
                "height": "0px",
                "transition": ".3s all"
            })
            $(".head-product-mask").css('height', '0px')
        }
        )
        $(pro[i]).mouseenter(function () {
            $(pro[i]).css({
                "opacity": "1",
                "height": "450px",
                "transition": "1s all"
            })
            $(".head-product-mask").css('height', '540px')
        }
        )

    }
    $(pro).mouseleave(function () {
        $(pro).css({
            "opacity": "0",
            "height": "0px",
            "transition": ".3s all"
        })
        $(".head-product-mask").css('height', '0px')
    }
    )

    //头部产品hover滑动
    $(pro).find("li").hover(
        function () {
            $(this).find("img:eq(0)").css(
                "transform", "translateX(-10px)"
            ).end().find("img:gt(0)").css(
                "transform", "translateX(10px)"
            )
        },
        function () {
            $(this).find("img").css(
                "transform", "translateX(0)"
            )
        }
    )

    //右侧sidebar
    var lis = $(".sidebar li")

    $(window).scroll(function () {
        //获取滚动距离
        var top1 = document.documentElement.scrollTop
        if (top1 > 400) {
            $(lis[3]).css("display", "block")
        } else {
            $(lis[3]).css("display", "none")
        }
    });
    $(lis[3]).click(function () {
        document.documentElement.scrollTop = 0
    })



})