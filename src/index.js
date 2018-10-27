//js入口
import './lib/swiper/swiper.min'
import './lib/zepto/zepto'
import './lib/zepto/event'
import './lib/zepto/fx'
import './lib/zepto/fx_methods'

import './lib/swiper/swiper.min.css'
import './style/reset/normalize.css'
import './style/reset/base.css'
import './style/index.styl'

//解决移动端点击300ms延迟
import fastClick from 'fastclick'



$(function () {
    fastClick.attach(document.body);

    //rem手机屏幕适配
    var width = window.screen.width
    $('html').css('font-size', width / 16)

    //调试用
    window.onresize = function () {
        var width = window.screen.width
        $('html').css('font-size', width / 16)
    }

    //swiper配置
    new Swiper('.swiper-container', {
        speed: 400,
        direction: 'vertical',
        onSlideChangeEnd: function () {
            //当前滑到的页面
            var activeSlide = $('.swiper-slide-active')

            //添加并开始动画
            $('.swiper-slide').removeClass('animate')
            activeSlide.addClass('animate')

            //page4页面特别动画控制
            //添加一次性点击事件, 并禁止滑动
            //动画完毕开启滑动, 并初始化动画状态
            if (activeSlide.hasClass('page4')) {

                //初始化元素状态, hide()之后重播动画需使display显示
                //ps: 由于animate动画的存在, 不能使用过渡动画
                //ps: 使用opacity属性显示隐藏时, 无法正常重新开始动画
                $('.page4 .full').css('display', 'block')
                $('.page4 .bear1').css('display', 'block')
                $('.page4 .broken').removeClass('cardsDisappear')

                activeSlide
                    //禁用滑动
                    .addClass('swiper-no-swiping')
                    //添加一次性点击事件
                    .one('click', function () {
                        //点击开启踢牌动画
                        startAnimation(function () {
                            //添加牌子消失动画
                            $('.page4 .broken').addClass('cardsDisappear')
                            activeSlide.removeClass('swiper-no-swiping')
                        })
                    })

            } else {
                //初始化元素状态, 页面滑出
                $('.page4 .broken').css('display', 'none')
                $('.page4 .bear4').hide()
            }
        }
    })

    //踢牌子动画, 添加回调函数fn
    function startAnimation(fn) {
        var index = 0,
            bears = $('.page4 [class^="bear"]'),
            fullCards = $('.page4 .full'),
            brokenCards = $('.page4 .broken')

        fn.timer = setInterval(function () {
            if (index <= 2) {
                bears.eq(index).hide()
                fullCards.eq(index).hide()
                brokenCards.eq(index).show()
                index++
                bears.eq(index).show()
            } else {
                clearInterval(fn.timer)
                fn()
            }
        }, 1000)
    }

    //loading及首页点击事件
    $('.loading').on('animationend', function () {
        $(this).fadeOut(function () {
            this.style.display = 'none'
            $('.page1').addClass('animate')
        })
    })

    $('.page1 .btn').click(function () {
        $('.page1').fadeOut(function () {
            this.style.display = 'none'
            $('.page2').addClass('animate')
        })
    })
})
