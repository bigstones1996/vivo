$(function () {
    var u1 = u2 = u3 = false;
    $("input")[0].oninput = function () {
        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
        if (reg.test($(this).val())) {
            $(this).next().html("用户名可用").css({
                "color": "green",
                "font-weight": "700"
            });
            u1 = true;
            fn3()

        } else {
            $(this).next().html("用户名仅支持字母、数字、“-”“_”的组合，4-16个字符").css({
                "color": "red",
                "font-weight": "700"
            });
            u1 = false;
            fn3()

        }
    }

    $("input")[1].oninput = function () {
        var reg = /^[a-zA-Z0-9_-]{8,16}$/;
        if (reg.test($(this).val())) {
            $(this).next().html("密码可用").css({
                "color": "green",
                "font-weight": "700"
            });
            u2 = true;
            fn1()

        } else {
            $(this).next().html("密码仅支持字母、数字、“_”的组合，8-12个字符").css({
                "color": "red",
                "font-weight": "700"
            });
            u2 = false;
            fn1()
        }
    }
    $("input")[2].oninput = function () {


        fn1()
    }

    function fn1() {
        var pwd = $("input").eq(1).val()
        var reg = /^[a-zA-Z0-9_-]{8,16}$/;
        if (reg.test(pwd)) {
            if ($("input").eq(2).val() == pwd) {
                $("input").eq(2).next().html("两次密码一致,恭喜成功").css({
                    "color": "green",
                    "font-weight": "700"
                });
                u3 = true;
            } else {
                $("input").eq(2).next().html("两次密码不一致,请重新输入").css({
                    "color": "red",
                    "font-weight": "700"
                });
                u3 = false;
            }
            fn3()

        } else {
            $("input").eq(2).next().html("密码仅支持字母、数字、“_”的组合，8-12个字符").css({
                "color": "red",
                "font-weight": "700"
            });
            u3 = false;
            fn3()

        }
    }

    $(".check").click(function () {
        $(this).find("img").toggleClass("show")
        fn3()

    })
    fn3()
    function fn3() {
        if (u1 & u2 & u3 & $(".check img").hasClass("show")) {
            $("button").css({
                "background-color": "#418eff"
            })
        } else (
            $("button").css({
                "background-color": "#999"
            })
        )
    }


    $("button").click(function () {
        var user =$("input").eq(0).val()
        var pwd =$("input").eq(1).val()

        if (u1 & u2 & u3 & $(".check img").hasClass("show")) {

            Ajax({
                url: '../php/register/register.php',
                data: `username=${user}&password=${pwd}`,
                success: function (dt) {
                    //判断当前返回值是否等于1
                    if (dt == 1) {
                        location.href="../html/login.html"
                    } else {
                        alert("注册失败,用户名重复")
                    }
                }
            })

        } else {
            alert("请输入正确的用户名和密码")
            return false
        }
    })

console.log(NaN);

})