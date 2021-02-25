$(function () {
    //获取账号cookie
    var name1 = getCookie("user")
    //获取对象
    var content = document.querySelector(".content")
    var product = document.querySelector(".shopcart-product")

    //获取地址栏中的地址
    var url = location.href
    //获取localStorage中的cartList3
    var cartList = localStorage.getItem("cartList3")
    //把当前cartList字符串转为数组对象
    cartList = JSON.parse(cartList) || []
    //判断当前cookie是否存在
    if (name1) {

        show()
    } else {
        alert("你还没登录，请登录在进入")
        location = "../html/login.html?pathUrl=" + url
    }

    function show() {
        //判断当前localStorage中是否有内容
        if (cartList.length > 0) {
            //获取全选框是否被选中
            var aa = cartList.every(item => {
                //判断当前商品是否被选中
                return item.is_select == 1
            })


            // //获取当前被选中商品的种类和价格
            var sum = total()
            var str = `
            <ul>
                    <li class="check-li">
                    <i id="quan" ></i>
                    <span>全选</span>
                    </li>
                    <li class="name-li">
                        商品名称
                    </li>
                    <li class="price-li">
                        价格（元）
                    </li>
                    <li>
                        数量
                    </li>
                    <li>
                        优惠
                    </li>
                    <li>
                        小计（元）
                    </li>
                    <li>
                        操作
                    </li>
                </ul>
        `
            $(".cart-head").html(str)

            var str2 = ``
            //遍历数组中所有商品
            cartList.forEach(item => {
                str2 += `
            <div class="shopcart-container">
                    <ul>
                        <li class="pro-check">
                            <i data-check="${item.is_select}" data-id="${item.id}"></i>
                        </li>
                        <li>
                            <img src="${item.img1}"
                                alt="">
                        </li>
                        <li class="pro-name">
    
                        <a href="../html/product.html?id=${item.id}">${item.name}</a>
                            <br>
                            <span>颜色：星际蓝</span>
    
                        </li>
                        <li class="pro-price">
                        ${item.price}
                        </li>
                        <li>
                            <div class="pro-btn">
                                <button data-id="${item.id}">-</button>
                                <button>${item.num1}</button>
                                <button data-id="${item.id}">+</button>
                            </div>
                        </li>
                        <li>
                            0.00
                        </li>
                        <li class="pro-price2">
                        ${(item.price * item.num1).toFixed(2)}
                        </li>
                        <li >
                            <a href="#">加入收藏夹</a>
                            
                            <button data-id="${item.id}">删除</button>
                        </li>
                    </ul>
                    <p>
                        <span>【赠品】：</span>
                        <img src="https://topicstatic.vivo.com.cn/f5ZUD0HxhQMn3J32/wukong/img/51c7afb4-864e-4cdd-bd84-43ceb67e07fd.png"
                            alt="">
                        购物送积分
                    </p>
                </div>
            `
            })




            //最后把拼接好的内容添加到box大盒子中
            $(".shopcart-product").html(str2)



            var str3 = `
        <ul>
        <li class="cart-all">
            
        </li>
        <li class="del-all">
            删除选中的商品
        </li>
        <li class="cart-coll">
            移入收藏夹
        </li>
        <li>
            <p>
                已选商品
                <em>${sum[0]}</em>件，合计（不含运费）：
                <b>¥<span>${sum[1]}</span></b>
                <br>
            </p>
            <p>
                ( 商品总价：
                <span>¥<span>${sum[1]}</span></span>
                优惠：
                <span>¥<span>0.00</span></span> )
            </p>
        </li>
        <li>
            <button>去结算</button>
        </li>
    </ul>

        `

            //最后把拼接好的内容添加到box大盒子中
            $(".cart-bar").html(str3)


            if (aa) {
                $("#quan").addClass("check")
            }
           
    
            for (i = 0; i < $(".pro-check i").length; i++) {
                if ($(".pro-check i").eq(i).attr("data-check") == 1) {
                    $(".pro-check i").eq(i).addClass("check")
                } else {
                    $(".pro-check i").eq(i).removeClass("check")
    
                }
            }



        } else {
            var str1 = `
            <div class="empty">
            <div>            <img src="https://shopstatic.vivo.com.cn/vivoshop/spaweb/static/img/no-result.50507a32.png" alt="">
            </div>
            <p>哎呀, 购物车为空</p>
            <span><a href="../html/list.html">去选购逛逛</a></span>
        </div>
        `
            //把当前内容添加到box盒子中

            product.innerHTML = str1
            $(".cart-head").html('')
            $(".cart-bar").html('')

        }
        
    }

    //给box大盒子对象绑定点击事件
    content.onclick = function (e) {
        var e = e || window.event
        //获取点击对象
        var target = e.target || e.srcElement
        //判断当前点击的是否为+
        if (target.innerHTML == "+") {
            //获取当前对象中的id属性
            var id = target.getAttribute("data-id")
            //遍历cartList数组对象
            cartList.forEach(item => {
                //判断遍历出来的商品是否为当前操作商品
                if (item.id == id) {
                    if (item.num1 < 5) {
                        item.num1++
                    }
                }
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
        //判断当前点击的是否为减法按钮
        if (target.innerHTML == '-') {
            //获取当前对象中的id属性
            var id = target.getAttribute("data-id")
            //遍历cartList数组对象
            cartList.forEach(item => {
                //判断遍历出来的商品是否为当前操作商品
                if (item.id == id) {
                    if (item.num1 > 1) {
                        item.num1--
                    }
                }
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
        //删除
        if (target.innerHTML == "删除") {
            //获取当前点击对象的id
            var id = target.getAttribute("data-id")
            cartList = cartList.filter(item => {
                //过滤被删除的商品
                return item.id != id
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
        //全删
        if (target.innerText == "删除选中的商品") {
            //获取所有选中商品id

            cartList = cartList.filter(item => {
                return item.is_select != 1
            })

            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
        //全选
        if (target.id == "quan") {
            $("#quan").toggleClass("check")
            //遍历所有商品
            cartList.forEach(item => {
                //判断当前全选框是否被选中
                if (target.className == "check") {
                    item.is_select = 1
                } else {
                    item.is_select = 0
                }
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
        //选中框
        if (target.nodeName == "I") {
            //获取当前商品对应的id 

            var id = target.getAttribute("data-id")
            //遍历数组中所有的商品对象
            cartList.forEach(item => {
                if (item.id == id) {
                    //   //判断当前选中框是否被选中
                    //   if(item.is_select==1){
                    //       item.is_select=0
                    //   }else{
                    //       item.is_select=1
                    //   }
                    item.is_select = item.is_select == 1 ? "0" : "1"
                }
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
        //去结算
        if (target.innerHTML == "去结算") {
            //添加确认框
            if (confirm("你确定要购买吗？")) {
                alert("你需要支付：￥" + total()[1])
                cartList = cartList.filter(item => {
                    return item.is_select != 1
                })
                //重新把当前操作完毕的数组添加到localStorage中
                localStorage.setItem("cartList3", JSON.stringify(cartList))
                //调用show方法，重新把页面再次渲染
                show()
            }
        }
        //清空购物车
        if (target.innerHTML == "清空购物车") {
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify([]))
            //调用show方法，重新把页面再次渲染
            show()
        }

    }


    //统计所选商品种类和价格
    function total() {
        var num = 0 //所选商品种类
        var price = 0 //所选商品总价格
        //遍历cartList数组对象
        cartList.forEach(item => {
            //判断当前商品是否被选中
            if (item.is_select == 1) {
                num++
                price += item.num1 * item.price
            }
        })
        return [num, price]
    }
    fn2()
    async function fn2() {

        var dt = await promiseAjax({
            url: '../php/shopcart/shopcart.php',
            datatype: 'json'
        })

        var ar1 = []

        for (i = 0; i < 8; i++) {
            var a = parseInt(Math.random() * 450)
            ar1[i] = dt[a]
        }
        var str5 = ``
        ar1.forEach(function (item) {
            str5 += `
        <li class="box-shadow1">
        <a href="../html/product.html?id=${item.id}">
        <img src="${item.img1}"
                alt="">
            <p>
            ${item.name}
            </p>
            <p>
            ${item.title}
            </p>
            <span>
                ￥${item.price}
            </span></a>

            
        </li>
        `
        })
        $(".like ul").html(str5)
    }

})