$(function () {
    var id = location.search.split("=")[1]
    fn1(id)
    //创建渲染数据函数
    //获取操作对象
    var info = document.querySelector('.product-info');
    var settle = document.querySelector('.small-settle');
    var settle = document.querySelector('.small-settle');

    async function fn1(aa) {

        var dt = await promiseAjax({
            url: '../php/product/product.php',
            datatype: 'json',
            data: `id="${aa}"`
        })

        var dt2 = await promiseAjax({
            url: '../php/product/product2.php',
            datatype: 'json',
            data: `type="配件产品"`
        })



        dt.price = Number(dt.price).toFixed(2)
        var str =
            `
        <div class="product-img">
                        <div class="base-img-content">
                            <div class="big-img">
                                <ul>
                                    <li>
                                        <img
                                            src='${dt.img1}'>
                                    </li>
                                    <li>
                                        <img
                                        src='${dt.img2}'>
                                        </li>
                                    <li>
                                        <img
                                        src='${dt.img3}'>
                                        </li>
                                    <li>
                                        <img
                                        src='${dt.img4}'>
                                        </li>
                                </ul>

                                <div class="mask">
                                

                                </div>
                                

                            </div>
                            <div class="right">
                                <img src='${dt.img1}'>

                                </div>
                            <div class="small-img">
                                    <ul>
                                        <li>
                                            <img
                                                src='${dt.img1}'>
                                        </li>
                                        <li>
                                            <img
                                            src='${dt.img2}'>
                                            </li>
                                        <li>
                                            <img
                                            src='${dt.img3}'>
                                            </li>
                                        <li>
                                            <img
                                            src='${dt.img4}'>
                                            </li>
                                    </ul>

                            </div>
                            <div class="collection">
                                <span class="collection-num">
                                    <i class="iconfont icon-icon-Star"></i>
                                    ${dt.cll}
                                </span>
                                <span class="collection-share">
                                    <i class="iconfont icon-fenxiang01"></i>
                                    分享
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="product-right">
                        <div class="primary">

                            <h1>
                            ${dt.name}
                            </h1>
                            <p>
                            ${dt.title}
                            </p>
                            <div class="summary">
                                <div class="summary-price">
                                    ￥<span>
                                    ${dt.price}
                                    </span>
                                </div>
                                <div class="summary-right">
                                    <ul>
                                        <li>
                                            <span>赠品</span>
                                            <div class="summary-gift">
                                                <a href="#">
                                                    <img
                                                        src="https://shopstatic.vivo.com.cn/vivoshop/commodity/00/null_1608780244291_250x250.png">
                                                </a>
                                                <b>
                                                    <img
                                                        src="https://shopstatic.vivo.com.cn/vivoshop/commodity/00/null_1608780244291_250x250.png">
                                                    V粉流量卡
                                                </b>
                                            </div>
                                        </li>
                                        <li>
                                            <span>赠品</span>
                                            <em>订单满3500减200 </em>
                                            <a href="#">立即领取
                                                <i class="iconfont icon-jiantou-r"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <span>赠品</span>
                                            购物送积分
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="support">
                                <b>商品支持： </b>
                                <span>
                                    <i class="iconfont icon-dui"></i>花呗分期
                                    <div class="support-tips">
                                        <h3><i class="iconfont icon-dui"></i>花呗分期</h3>
                                        <p>商品支持分期</p>
                                    </div>
                                </span>
                                <span>
                                    <i class="iconfont icon-dui"></i>以旧换新
                                    <div class="support-tips">
                                        <h3><i class="iconfont icon-dui"></i>可以使用换新鼓励金</h3>
                                        <p>换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴<a href="#">现在换机 <i
                                                    class="iconfont icon-jiantou-r"></i></a></p>

                                    </div>
                                </span>
                                <span>
                                    <i class="iconfont icon-dui"></i>积分抵现
                                    <div class="support-tips">
                                        <h3><i class="iconfont icon-dui"></i>花呗分期</h3>
                                        <p>
                                            使用条件:
                                            <br>
                                            1、积分余额大于门槛积分(含) ;
                                            <br>
                                            2、当前等级为普通/白银/黄金的会员，最高使用积分抵现的金额分别为:
                                            <br>
                                            手机-单笔订单实际应支付金额的3%，不区分会员等级;
                                            使用说明:
                                            <br>
                                            1、目前积分抵现仅限在售手机&配件的部分商品可用，当前商品是否支持请以页面标识为准;如遇活动或促销，请参考活动规则说明;
                                            <br>
                                            2、抵现消耗的积分数量须为100的整数倍，如200/500/1000/10000等;
                                            <br>
                                            3、按实际应支付金额计算，每100积分抵扣1元人民币;
                                            <br>
                                            4、单笔订单内有多个可抵现商品时，抵扣部分按比例分摊;同时存在手机与配件时，将分别根据对应类别及规则进行抵现金额计算;
                                            <br>
                                            5、积分抵现部分金额将无法开具发票;
                                            <br>
                                            6、使用积分抵现的订单发生退货时，将按照实际退款金额对使用的积分做相应退回;退回后的积分有效期将按照使用前的有效期计算;
                                        </p>


                                    </div>
                                </span>

                            </div>
                        </div>

                        <div class="product-edition">
                            <p>版本</p>
                            <span>5G全网通版 8GB+128GB</span>
                            <span>5G全网通版 12GB+128GB</span>
                            <span>5G全网通版 12GB+256GB</span>
                            <span>KPL礼盒 12GB+128GB</span>
                        </div>
                        <div class="product-color">
                            <p>颜色</p>
                            <span>星溯</span>
                            <span>皓影</span>
                        </div>
                        <div class="product-add">
                            <p>选择套餐</p>
                            <span>官方标配</span>
                            <span>
                                <h3>vivo wacth套餐</h3>
                                <h4>￥${dt.price * 1 + 1199 * 1}<b>省￥100</b></h4>
                            </span>
                            <span>
                                <h3>TWS Neo套餐</h3>
                                <h4>￥${dt.price * 1 + 499 * 1}<b>省￥50</b></h4>
                            </span>
                            <span>
                                <h3>手机壳套餐</h3>
                                <h4>￥${dt.price * 1 + 39 * 1}<b>省￥20</b></h4>
                            </span>
                        </div>
                        <div class="product-num">
                            <p>数量</p>
                            <div class="btn">
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                                <span>(仅限购5件)</span>

                            </div>
                        </div>
                        <div class="product-buymode">
                            <p>
                                <img src="data:image/png;base64,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"
                                    alt="">
                                支持分期付款
                            </p>
                            <span class="red">
                                <h3>
                                    ￥<b>1332.66</b>x3期
                                </h3>
                                免息
                            </span>

                            <span class="red">
                                <h3>
                                    ￥<b>666.33</b>x6期
                                </h3>
                                免息
                            </span>
                            <span class="red">
                                <h3>
                                    ￥<b>333.16</b>x12期
                                </h3>
                                免息
                            </span>
                            <span class="red">
                                <h3>
                                    ￥<b>187.4</b>x24期
                                </h3>
                                手续费<em>
                                11
                                </em>/期
                            </span>
                        </div>
                        <div class="settle">
                            <p class="settle-price">￥<span>
                            ${dt.price}
                            </span></p>
                            <p class="settle-info">
                                已选： <span>5G全网通版 8GB+128GB</span> <span>星溯</span> <span>官方标配</span> <span>1</span> 件
                            </p>
                            <div class="buy">
                                <button>加入购物车</button>
                                <button>立即购买</button>
                            </div>
                        </div>
                    </div>
        `
        //将数据渲染至页面
        info.innerHTML = str

        var str2 =
            `
        <img src="${dt.img1}"
                alt="">
            <div class="pro-info">
                <div class="top">
                    <p>iQOO 5 <span>5G全网通版</span> <span>8GB+128GB </span><span>皓影</span> </p>

                    <b>￥<span>${dt.price}</span></b>
                </div>
                <div class="bto">
                    <p>
                    已选： <span>5G全网通版 8GB+128GB</span> <span>星溯</span> <span>官方标配</span> <span>1</span> 件
                    </p>
                </div>
            </div>
            <button>加入购物车</button>
        `
        //将数据渲染至页面
        settle.innerHTML = str2


        var ar1 = []
        var ar2 = []
        for (var i = 0; i < 8; i++) {
            ar1[i] = dt2[parseInt(Math.random() * 400)]
        }
        for (var i = 0; i < 4; i++) {
            ar2[i] = dt2[parseInt(Math.random() * 400)]
        }
        //创建拼接所有数据的字符串
        var str3 = ''
        //遍历当前ar1数组中所有的数据
        ar1.forEach(item => {

            str3 += `
            <li>
            <a href="../html/product.html?id=${item.id}">
                <div class="rec-img">
                    <img src="${item.img1}"
                    alt="">
                </div>
                <p class="name">${item.name}</p>
                <p class="price">￥<span>${item.price}</span> </p>
             </li></a>
                `
        })
        //创建拼接所有数据的字符串
        var str4 = ''
        //遍历当前ar1数组中所有的数据
        ar2.forEach(item => {

            str4 += `
             <li>
             <a href="../html/product.html?id=${item.id}">
                 <div class="rec-img">
                     <img src="${item.img1}"
                     alt="">
                 </div>
                 <p class="name">${item.name}</p>
                 <p class="price">￥<span>${item.price}</span> </p>
              </li>
              </a>
                 `
        })
        $(".recommend-con ul").eq(0).html(str3)
        $(".recommend-con ul").eq(1).html(str4)


        var str5 = `
                     <a href="../html/index.html">商城首页</a>
                    <span class="nav-online">
                        <i class="iconfont icon-jiantou-r"></i>
                        ${dt.type}
                    </span>
                    <span class="nav-online">
                    <i class="iconfont icon-jiantou-r"></i>
                        ${dt.type2}
                    </span>
        `
        $(".crumbs").html(str5)






        $(".small-img img").each(function (i) {
            $(this).mouseenter(function () {
                $(".big-img li").css({
                    "opacity": "0",
                    "z-index": "0"
                })
                $(".big-img li").eq(i).css({
                    "opacity": "1",
                    "z-index": "1"
                })
            })
        })
        $(".small-img img").mouseenter(function(){
            $(".right img").attr("src",$(this).attr("src"))
        })


        $(".big-img").mousemove(function (e) {
            var w1 = e.pageX - $(this).offset().left - $(".mask").width() / 2
            var h1 = e.pageY - $(this).offset().top - $(".mask").height() / 2
            if (w1 <= 0) {
                w1 = 0
            } else if (w1 >= $(this).width() - $(".mask").width()) {
                w1 = $(this).width() - $(".mask").width()
            }
            if (h1 <= 0) {
                h1 = 0
            } else if (h1 >= $(this).height() - $(".mask").height()) {
                h1 = $(this).height() - $(".mask").height()
            }
            $(".mask").css({
                "left": w1,
                "top": h1
            })
            
            $(".right img").css({
                "left": -w1*2,
                "top": -h1*2
            })

        })
        $(".big-img").mouseover(function () {
            $(".right").css({
                'display': 'block'
            })
            $(".mask").css({
                'display': 'block'
            })
        })

        $(".big-img").mouseout(function () {
            $(".right").css({
                'display': 'none'
            })
            $(".mask").css({
                'display': 'none'
            })
        })













        info.onclick = function (e) {
            var e = e || window.event
            //获取当前点击对象
            var target = e.target || e.srcElement
            var cartList = localStorage.getItem("cartList3")
            cartList = JSON.parse(cartList)

            if (target.innerText == "-") {
                var num1 = parseInt(target.nextElementSibling.innerText)
                if (num1 > 1) {
                    num1--
                    target.nextElementSibling.innerText = num1
                    zj()

                    fq()

                    $(".settle-info span").eq(3).text(num1)
                    $(".bto span").eq(3).text(num1)



                }
            }
            if (target.innerText == "+") {
                var num1 = parseInt(target.previousElementSibling.innerText)
                if (num1 < 5) {
                    num1++
                    target.previousElementSibling.innerText = num1
                    zj()
                    fq()
                    $(".settle-info span").eq(3).text(num1)
                    $(".bto span").eq(3).text(num1)


                }

            }
            //判断点击的对象是否为加入购物车按钮
            if (target.innerHTML == "加入购物车") {
                if (cartList) {
                    //把localStorage中获取的内容转为数组对象
                    var a = 0 //判断当前添加的商品是否在localStorage中存在
                    //遍历数组中所有元素啊
                    cartList.forEach(item => {
                        //判断当前遍历的商品是否等于要添加的商品

                        if (item.id == dt.id) {
                            a++
                            var b = parseInt($(".btn button").eq(1).text()) + parseInt(item.num1)
                            if (b <= 5) {
                                item.num1 = b
                            } else {
                                alert("最多购买五件")
                            }
                        }
                    })
                    //判断a变量是否等于0
                    if (a == 0) {
                        //修改商品数量
                        dt.num1 = 1
                        //把当前对象追加到数组中
                        cartList.push(dt)
                    }
                    //把当前商品添加到localStorage中
                    localStorage.setItem("cartList3", JSON.stringify(cartList))
                } else {
                    //修改当前商品数量
                    dt['num1'] = $(".btn button").eq(1).text()
                    //把当前商品添加到localStorage中
                    localStorage.setItem("cartList3", JSON.stringify([dt]))
                }


            }

            if (target.innerHTML == "立即购买") {
                location.href = "../html/shopcart.html"

            }
        }
        //计算分期金额
        fq()
        function fq() {
            var pf = $(".settle-price span").text()
            $(".product-buymode b").eq(0).text((pf / 3).toFixed(2))
            $(".product-buymode b").eq(1).text((pf / 6).toFixed(2))
            $(".product-buymode b").eq(2).text((pf / 12).toFixed(2))
            $(".product-buymode b").eq(3).text((pf / 24 + parseFloat(pf * 0.005)).toFixed(2))
            $(".product-buymode em").text(parseFloat(pf * 0.005).toFixed(2))

        }

        //计算总价
        function zj() {
            var num2 = $(".btn button").eq(1).text()
            $(".settle-price span").text((dt.price * num2).toFixed(2))
            $(".top b span").text((dt.price * num2).toFixed(2))
        }


        $('.product-edition span').click(function () {
            $('.product-edition span').css({
                "border-color": "#ddd",
                "color": '#777'
            })
            $(this).css({
                "border-color": "#e90f23",
                "color": '#e90f23'
            })
            $(".settle-info span").eq(0).text($(this).text())
            $(".bto span").eq(0).text($(this).text())
        })
        $('.product-color span').click(function () {
            $('.product-color span').css({
                "border-color": "#ddd",
                "color": '#777'
            })
            $(this).css({
                "border-color": "#e90f23",
                "color": '#e90f23'
            })
            $(".settle-info span").eq(1).text($(this).text())
            $(".bto span").eq(1).text($(this).text())

        })
        $('.product-add span').click(function () {
            $('.product-add span').css({
                "border-color": "#ddd",
                "color": '#777'
            })
            $(this).css({
                "border-color": "#e90f23",
                "color": '#e90f23'
            })
            $(".settle-info span").eq(2).text($(this).text())
            $(".bto span").eq(2).text($(this).text())

        })
        $('.product-buymode span').click(function () {
            $('.product-buymode span').css({
                "border-color": "#ddd",
                "color": '#777'
            }).removeClass("active1").addClass("red")
            $(this).css({
                "border-color": "#e90f23",
                "color": '#e90f23'
            }).removeClass("red").addClass("active1")


        })
        //推荐栏移动
        var n3 = 0
        $(".promotiop-left").click(function () {
            if (n3 > 0) {
                n3--
                $(".recommend-con").css({
                    "left": n3 * -255

                })
                $(".promotiop-right").removeClass("disabled")

            }
            if (n3 == 0) {
                $(this).addClass("disabled")
            }
            $(".recommend p span").eq(1).removeClass("active")
            $(".recommend p span").eq(0).addClass("active")

        })
        $(".promotiop-right").click(function () {
            if (n3 < 4) {
                var l1 = parseInt($(".recommend-con").css("left"))
                if (l1 > -2040) {
                    n3++
                    $(".recommend-con").css({
                        "left": n3 * -255

                    })

                    $(".promotiop-left").removeClass("disabled")
                }
            } else {

                $(".recommend-con").css({
                    "left": -2040
                })
                n3 = 1
                $(this).addClass("disabled")
                $(".recommend p span").eq(0).removeClass("active")
                $(".recommend p span").eq(1).addClass("active")
            }


        })

        //切换详情页

        //置顶
        var t1 = $(".details-bar").offset().top
        window.onscroll = function () {
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrolltop > t1) {
                $(".details-bar").css({
                    "position": "fixed",
                    'top': 0
                })
                $(".small-settle").css({
                    "display": "flex"
                })
            } else {
                $(".details-bar").css({
                    "position": "absolute",
                    'top': 0
                })
                $(".small-settle").css({
                    "display": "none"
                })
            }
        }
        $(".details-bar li").eq(0).click(function () {
            document.documentElement.scrollTop = t1
            $(".details-content>div").css({
                "display": "none"
            })
            $(".info").css({
                "display": "block"
            })
            $(".details-bar li").removeClass("active")
            $(this).addClass("active")
        })
        $(".details-bar li").eq(1).click(function () {
            document.documentElement.scrollTop = t1
            $(".details-content>div").css({
                "display": "none"
            })
            $(".after-service").css({
                "display": "block"
            })
            $(".details-bar li").removeClass("active")
            $(this).addClass("active")
        })
        $(".details-bar li").eq(2).click(function () {
            document.documentElement.scrollTop = t1
            $(".details-content>div").css({
                "display": "none"
            })
            $(".info").css({
                "display": "block"
            })
            $(".details-bar li").removeClass("active")
            $(this).addClass("active")
        })
        $(".details-bar li").eq(3).click(function () {
            document.documentElement.scrollTop = t1
            $(".details-content>div").css({
                "display": "none"
            })
            $(".after-service").css({
                "display": "block"
            })
            $(".details-bar li").removeClass("active")
            $(this).addClass("active")
        })



    }



})