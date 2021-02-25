$(function () {
    $(".btn").click(function () {
        //获取账号输入框中的value
        var u1 = $('[type="text"]').val()
        var p1 = $('[type="password"]').val()
        //调用ajax发送请求
        Ajax({
            url: '../php/login/login.php',
            data: `username=${u1}&password=${p1}`,
            success: function (dt) {
                //判断当前返回值是否等于1
                if (dt == 1) {
                    setCookie("user", u1)
                   
                    window.history.go(-1)

                } else {
                    alert("登录失败,请检查账号密码")
                }
            }
        })
    })
    $(".check").click(function () {
        $(".check img").toggleClass("show")
    })
    $(".register").click(function () {
        location.href = "../html/register.html"
    })

})