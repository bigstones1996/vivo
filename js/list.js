$(function () {
    var search = location.search
    //默认进入智能手机页面
    if (search) {
        var list = search.split("=")[1][0]
        fn1(list)
        fn2(list)
        fn4(list)
    } else {
        fn1("1")
        fn2("1")
    }







    //给导航栏创建点击事件
    var tab = document.querySelector(".filter-tab")
    var tag = document.querySelector(".filter-tag")




    tag.onclick = function (e) {
        var e = e || window.event
        //获取当前点击对象
        var target = e.target || e.srcElement
        if (target.nodeName == "A") {
            $(".filter-tag a").removeClass("tag-active")
            $(target).addClass("tag-active")

        }
        if (target.innerText == "全部") {
            var aa = $(".tab-active").text()
            if (aa == "智能手机") {
                fn1(1)
            } else if (aa == "配件产品") {
                fn1(2)
            } else if (aa == "服务") {
                fn1(3)
            }
        } else if (target.nodeName == "A") {
            fn3(target.innerText)
        }


    }
    //创建渲染数据函数
    async function fn1(aa) {
        //获取操作对象
        var product = document.querySelector('.product');
        var pagination1 = document.querySelector('.pagination');
        var dt = await promiseAjax({
            url: '../php/list/list.php',
            datatype: 'json',
            data: `type="${aa}"`
        })

        //创建分页器对象
        new Pagination(pagination1, {
            pageInfo: {
                pagenum: 1,
                pagesize: 12,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 12)
            },
            textInfo: {
                prev: "上一页",
                next: "下一页",
            }, cb(m) {
                //获取当前页需要显示的数据
                var ar1 = dt.slice((m - 1) * 12, m * 12)
                //创建拼接所有数据的字符串
                var str = ''
                //遍历当前ar1数组中所有的数据
                ar1.forEach(item => {
                    str += `
                    <div class="item box-shadow1 ">
                    <a href="../html/product.html?id=${item.id}">
                        
                        <div class="img-box">
                            <img
                            src="${item.img1}">
                        </div>
                        <div class="prodinfo">
                            <p class="name">${item.name}</p>
                            <p class="feature2">${item.title}</p>
                            <p class="price">￥<span>${item.price}</span></p>
                        </div>
                    </a>

                </div>  
                `
                })
                //把当前拼接好的字符串，添加到盒子中
                product.innerHTML = str
                if (dt.length <= 12) {
                    $(".pagination").css({
                        "display": "none"
                    })
                } else {
                    $(".pagination").css({
                        "display": "flex"
                    })
                }

            }
        })
    }
    //创建渲染导航栏函数
    function fn2(t1) {
        var lists = [['vivo NEX', 'vivo X', 'vivo Y', 'iQOO 旗舰', 'iQOO Neo', 'iQOO Z', 'iQOO U']
            , ['手机充电', '手机壳膜', '音乐设备', '智能硬件', '游戏摄影', '日用出行']
            , ['碎屏宝', '后盖宝', 'V享无忧', '延保']]
        var str = `
        <li>
                    <a  class="tag-active" href="javascript:;">全部</a>
                </li>
        `
        if (t1 == "1") {
            for (var i in lists[0]) {
                str += `
                        <li>
                                    <a href="javascript:;">${lists[0][i]}</a>
                                </li>
                        `


            }
            $(".filter-tag ul").html(str)
        } else if (t1 == "2") {
            for (var i in lists[1]) {
                str += `
                        <li>
                        <a href="javascript:;">${lists[1][i]}</a>
                                </li>
                        `


            }
            $(".filter-tag ul").html(str)
        } else if (t1 == "3") {
            for (var i in lists[2]) {
                str += `
                        <li>
                        <a href="javascript:;">${lists[2][i]}</a>
                                </li>
                        `


            }
            $(".filter-tag ul").html(str)
        }

    }
    async function fn3(aa) {
        //获取操作对象
        var product = document.querySelector('.product');
        var pagination1 = document.querySelector('.pagination');
        var dt = await promiseAjax({
            url: '../php/list/list2.php',
            datatype: 'json',
            data: `type="${aa}"`
        })

        //创建分页器对象
        new Pagination(pagination1, {
            pageInfo: {
                pagenum: 1,
                pagesize: 12,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 12)
            },
            textInfo: {
                prev: "上一页",
                next: "下一页",
            }, cb(m) {
                //获取当前页需要显示的数据
                var ar1 = dt.slice((m - 1) * 12, m * 12)
                //创建拼接所有数据的字符串
                var str = ''
                //遍历当前ar1数组中所有的数据
                ar1.forEach(item => {
                    str += `
                    <div class="item box-shadow1 ">
                    <a href="../html/product.html?id=${item.id}">
                        
                        <div class="img-box">
                            <img
                            src="${item.img1}">
                        </div>
                        <div class="prodinfo">
                            <p class="name">${item.name}</p>
                            <p class="feature2">${item.title}</p>
                            <p class="price">￥<span>${item.price}</span></p>
                        </div>
                    </a>

                </div>  
                `
                })
                //把当前拼接好的字符串，添加到盒子中
                product.innerHTML = str
                if (dt.length <= 12) {
                    $(".pagination").css({
                        "display": "none"
                    })
                } else {
                    $(".pagination").css({
                        "display": "flex"
                    })
                }

            }
        })
    }


    function fn4(a3) {
        $(".filter-tab a").removeClass("tab-active")
        $(".filter-tab a").eq(a3 - 1).addClass("tab-active")
        var a5 = $(".filter-tab a").eq(a3 - 1).html()
        $(".crumbs").html(
            `
                
                <a href="../html/index.html">商城首页</a>
                <span class="nav-online">
                    <i class="iconfont icon-jiantou-r"></i>${a5}
                </span>
                `
        )
    }

})

