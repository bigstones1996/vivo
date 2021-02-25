$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        // direction: 'vertical', // 垂直切换选项
        speed: 1000,
        loop: true, // 循环模式选项
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
        // 如果需要分页器
        //    pagination: {
        //        el: '.swiper-pagination',
        //        type: 'progressbar',
        //    },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     hide: true,
        // },
    })
    fn1()
    async function fn1() {

        var dt = await promiseAjax({
            url: '../php/first/first.php',
            datatype: 'json'
        })
        var dt2 = await promiseAjax({
            url: '../php/first/first2.php',
            datatype: 'json'
        })
        
        var str = ""
        for (var i = 0; i < 3; i++) {
            str += `
            <div class="item box-shadow1 ">
                <a class="box-img" href="../html/product.html?id=${dt[i].id}">
                
                <img
                        src="${dt[i].img1}"></a>
                <div class="prodinfo">
                    <p class="name">${dt[i].name}</p>
                    <p class="feature2">${dt[i].title}</p>
                    <p class="price">￥<span>${dt[i].price}</span></p>
                </div>
            </div>
            `
        }
        $(".boutique-zone").html(str)

        var str2 =
            `
        <div class="item box-shadow1 ">
            <a href="../html/product.html?id=412"><img
                src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20201119/2020111915484026389_original.jpg"></a>
        </div>
        `
        for (var i = 10; i < 16; i++) {
            str2 += `
            <div class="item box-shadow1 ">
            <a class="box-img" href="../html/product.html?id=${dt[i].id}">
                
                <img
                        src="${dt[i].img1}"></a>
                <div class="prodinfo">
                    <p class="name">${dt[i].name}</p>
                    <p class="feature2">${dt[i].title}</p>
                    <p class="price">￥<span>${dt[i].price}</span></p>
                </div>
            </div>
            `
        }
        $(".boutique-phone").html(str2)

        var str3 =
            `
        `
        for (var i = 20; i < 28; i++) {
            str3 += `
            <div class="item box-shadow1 ">
            <a class="box-img" href="../html/product.html?id=${dt2[i].id}">
                
                <img
                        src="${dt2[i].img1}"></a>
                <div class="prodinfo">
                    <p class="name">${dt2[i].name}</p>
                    <p class="feature2">${dt2[i].title}</p>
                    <p class="price">￥<span>${dt2[i].price}</span></p>
                </div>
            </div>
            `
        }
        $(".boutique-parts").html(str3)

        var str4 =
            `
        `
        for (var i = 20; i < 36; i++) {
            str4 += `
            <li class="box-shadow1">
            <img src="https://vivoshop-vivofs.vivo.com.cn/vivoshop/actcorner/20190523/af66e7f1b94841b9ad1afde83e679a50.png_w530-h530.png"
                alt="">
                <a class="box-img" href="../html/product.html?id=${dt[i].id}">
                <img
                    src="${dt[i].img1}"></a>
            <div class="prod-info">
                <p class="name">${dt[i].name}</p>
                <p class="desc">五折秒杀，限量一台</p>
                <p class="price">
                    <span class="text">￥<b>${dt[i].price / 2}</b></span>
                    <span class="text disabled">￥<b>${dt[i].price}</b></span>
                </p>
            </div>
        </li>
            `
        }
        $(".hide ul").html(str4)

        var n3 =0
        $(".promotiop-left").click(function () {
            if (n3 > 0) {
                n3--
                $(".hide ul").css({
                    "left": n3 * -1200

                })

            }


        })
        $(".promotiop-right").click(function () {
            if (n3 < 3) {
                n3++
                $(".hide ul").css({
                    "left": n3 * -1200


                })
            }


        })

    }

})