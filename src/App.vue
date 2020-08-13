<template>
    <div id="app">
        <!-- 开场动画 -->
        <div class="preloader" id="preloader">
            <transition name="fade" appear @after-enter="afterEnter">
                <div class="logo" v-show="show"></div>
            </transition>
        </div>
        <div class="container">
            <!-- 头部 -->
            <dw-header ref="header" :login_show="login_show"></dw-header>
            <!-- 欢迎模态框-->
            <div id="welcome-modal"></div>
            <!-- 主要部分 -->
            <div class="dw-content clearfix">
                <div class="container-fluid content-grid clearfix">
                    <!-- part1 -->
                    <div class="row-fluid clearfix">
                        <div class="home-slider-container">
                            <div class="home-slider">
                                <div class="slick-wrapper">
                                    <div class="slick-track slick-pagination-bullet-clickable">
                                        <div class="slick-slide">
                                            <div>
                                                <a href="#">
                                                    <div class="background b01"></div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="slick-slide">
                                            <div>
                                                <a href="#">
                                                    <div class="background b02"></div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="slick-slide">
                                            <div>
                                                <a href="#">
                                                    <div class="background b03"></div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="slick-slide">
                                            <div>
                                                <a href="#">
                                                    <div class="background b02"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- part2 -->
                    <div class="row-fluid clearfix">
                        <div class="home-section-container">
                            <section class="home-section home-section-item">
                                <header class="section-header">
                                    <h1 class="section-title">
                                        <a href="">ITEM</a>
                                    </h1>
                                </header>
                                <div class="section-body">
                                    <div class="grid">
                                        <div class="grid-col">
                                            <div class="grid-item item">
                                                <div class="image-wrapper">
                                                    <div class="hover-item">
                                                        <div class="image">
                                                            <a href="#">
                                                                <img class="asd" src="~assets/img/home/item-01.jpg" alt="">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-item item">
                                                <div class="image-wrapper">
                                                    <div class="hover-item">
                                                        <div class="image">
                                                            <a href="#">
                                                                <img src="~assets/img/home/item-02.jpg" alt="">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-col">
                                            <div class="grid-item item">
                                                <div class="image-wrapper">
                                                    <div class="hover-item">
                                                        <div class="image">
                                                            <a href="#">
                                                                <img src="~assets/img/home/item-03.jpg" alt="">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-item item">
                                                <div class="image-wrapper">
                                                    <div class="hover-item">
                                                        <div class="image">
                                                            <a href="#">
                                                                <img src="~assets/img/home/item-04.jpg" alt="">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-item item">
                                                <div class="image-wrapper">
                                                    <div class="hover-item">
                                                        <div class="image">
                                                            <a href="#">
                                                                <img src="~assets/img/home/item-05.jpg" alt="">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="home-section home-section-journal">
                                <header class="section-header">
                                    <h1 class="section-title">
                                        <a href="#">JOURNAL</a>
                                    </h1>
                                </header>
                                <div class="section-body">
                                    <div class="journal-list hover-group swiper-container">
                                        <ul class="swiper-wrapper">
                                            <li class="swiper-slide">
                                                <div class="hover-item">
                                                    <a href="#" class="journal-item hover-item">
                                                        <span class="image">
                                                            <img src="~assets/img/home/journal-01.jpg" alt="">
                                                        </span>
                                                        <h2 class="j2-tooltip">
                                                            <mark>2/21(金)～2/24(月)　SALE ITEMS 2BUY 10%OFF</mark>
                                                        </h2>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="swiper-slide">
                                                <div class="hover-item">
                                                    <a href="#" class="journal-item hover-item">
                                                        <span class="image">
                                                            <img src="~assets/img/home/journal-02.jpg" alt="">
                                                        </span>
                                                        <h2 class="j2-tooltip">
                                                            <mark>2/21(金)～2/24(月)　SALE ITEMS 2BUY 10%OFF</mark>
                                                        </h2>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="swiper-slide">
                                                <div class="hover-item">
                                                    <a href="#" class="journal-item hover-item">
                                                        <span class="image">
                                                            <img src="~assets/img/home/journal-03.jpg" alt="">
                                                        </span>
                                                        <h2 class="j2-tooltip">
                                                            <mark>2/21(金)～2/24(月)　SALE ITEMS 2BUY 10%OFF</mark>
                                                        </h2>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section class="home-section home-section-collection">
                                <header class="section-header">
                                    <h1 class="section-title">
                                        <a href="">COLLECTION</a>
                                    </h1>
                                </header>
                                <div class="section-body">
                                    <div class="collection-item">
                                        <div class="image-wrapper">
                                            <a href="#">
                                                <img src="~assets/img/home/collection-01.jpg" alt="">
                                            </a>
                                        </div>
                                        <h2 class="title">
                                            Collection
                                            <br>
                                            2020 Summer and Spring
                                        </h2>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <dw-footer></dw-footer>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import DwHeader from 'components/common/DwHeader'
import DwFooter from 'components/common/DwFooter'

export default {
    name: "App",
    components: {},
    data() {
        return {
            show: true,
            login_show: false,
            now_login_user_data: localStorage['login_message'],
            len_cart: 0,
            len_mark: 0
        };
    },
    mounted() {
        this.home_journal_imgMouseOver()
        this.home_ins_imgMouseOver()
        this.subscribe_onfocus()

        let token = localStorage.getItem('token')   
        if (token){
            this.$axios.get('/getuserinfo',{
            headers: {
                'Authorization': 'Bearer ' + token
            }
            }).then(res => {
                console.log(res)
                if(res.data.code != 407) {
                    this.login_show = true
                    localStorage.setItem('login_message',JSON.stringify(res.data.login_message.data))
                }else {
                    localStorage.removeItem('login_message')
                }
            })
        }
    },
    methods: {
        initSwiper() {
            new Swiper(".slick-wrapper", {
                wrapperClass: 'slick-track',
                slideClass: 'slick-slide',
                // 自动切换
                autoplay: {
                    // 解决点击, 拖动后不自动切换
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // 切换类型
                effect: 'fade',
                speed: 800,
                // 导航栏设置
                pagination: {
                    el: '.slick-pagination',
                    bulletClass: 'slick-pagination-bullet',
                    bulletActiveClass: 'slick-pagination-bullet-active',
                    clickable: true,
                    clickableClass : 'slick-pagination-bullet-clickable',
                },
            });
        },
        // 钩子函数
        afterEnter() {
            document.querySelector("#app").classList.add("preloader-complete");
            this.initSwiper();
            this.$refs.header.load_completed()
        },
        home_journal_imgMouseOver() {
            let Obj = document.querySelectorAll('.swiper-slide')
            Obj.forEach(item => {
                item.childNodes[0].addEventListener('mouseover',() => {
                    item.parentNode.parentNode.classList.add('active')
                    item.querySelector('img').style.opacity = 1
                })
                item.childNodes[0].addEventListener('mouseout',() => {
                    item.parentNode.parentNode.classList.remove('active')
                    item.querySelector('img').style = ''
                })
            })
        },
        home_ins_imgMouseOver() {
            let Obj = document.querySelectorAll('.instagram-item')
             Obj.forEach(item => {
                item.addEventListener('mouseover',() => {
                    document.querySelector('.instagram-list').classList.add('active')
                    item.querySelector('img').style.opacity = 1
                })
                item.addEventListener('mouseout',() => {
                    document.querySelector('.instagram-list').classList.remove('active')
                    item.querySelector('img').style = ''
                })
            })
        },
        subscribe_onfocus() {
            let obj = document.querySelector('#subscr_email')
            obj.onfocus = () => {
                if (obj.value == 'EMAIL') {
                    obj.value = ''
                }
            }
            obj.onblur = () => {
                if (obj.value == '') {
                    obj.value = 'EMAIL'
                }
            }
        }
    },
    components: {
        DwHeader,
        DwFooter
    },
    created() {

    }
};
</script>

<style lang="less" scope>
@import "assets/css/base.css";
@import "assets/css/normalize.css";
@import "../node_modules/swiper/css/swiper.css";
// vue transition
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
// vue transition end
.preloader {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background-color: #f4f0e9;
    .logo {
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: 375px auto;
        background-repeat: no-repeat;
        background-image: url("~assets/img/logo.png");
    }
}
// content
.dw-content {
    position: relative;
    z-index: 9;
    padding: 0 60px;
    .home-slider {
        position: relative;
        width: 100%;
        height: calc(100vh - 180px);
        overflow: hidden;
        margin-top: 180px;
        .slick-wrapper {
            height: calc(100vh - 180px);
            position: relative;
            .slick-track {
                //
                opacity: 1;
                width: 6600px;
                height: 100%;
                //
                position: relative;
                left: 0;
                top: 0;
                display: block;
                margin: 0 auto;
                .slick-slide {
                    width: 1320px;
                    position: relative;
                    left: 0;
                    top: 0;
                    z-index: 999;
                    height: 100%;
                    float: left;
                    .background {
                        width: 100%;
                        height: calc(100vh - 180px - 60px);
                        background: #fff url('~assets/img/home/pc-02.jpg') no-repeat center center / cover;
                        background-size: cover;
                    }
                    .b02 {
                        background: #fff url('~assets/img/home/pc-03.jpg') no-repeat center center / cover;
                    }
                    .b03 {
                        background: #fff url('~assets/img/home/pc-sale.jpg') no-repeat center center / cover;
                    }
                }
            }
            .slick-pagination {
                position: absolute;
                bottom: 30px;
                left: 0;
                text-align: center;
                z-index: 99999;
                .slick-pagination-bullet {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    margin: 0 10px;
                    cursor: pointer;
                    border: 1px solid #000;
                    background-color: transparent;
                }
                .slick-pagination-bullet-active {
                    background-color: #000;
                }
            }
        }
    }
    .home-section-container {
        .home-section {
            position: relative;
            margin-top: 90px;
            .section-header {
                position: absolute;
                width: 480px;
                overflow: hidden;
                 .section-title {
                    font-size: 50px;
                    letter-spacing: .2em;
                    line-height: 1;
                    margin: 0;  
                }
                .section-more {
                    font-weight: bold;
                    padding: 6px;
                    padding-right: 14px;
                }
            }
        }
        .home-section-item {
            position: relative;
            margin-top: 90px;
            .section-header {
                text-align: right;
                left: 0;
            }
            .section-body {
                max-width: 1000px;
                margin: 0 auto;
                height: 100%;
                .grid {
                    height: 100%;
                    overflow: hidden;
                    .grid-col {
                        float: left;
                        width: 50%;
                        height: 100%;
                        .grid-item {
                            .image-wrapper {
                                position: relative;
                                display: inline-block;
                                &::after {
                                    content: '';
                                    position: absolute;
                                    left: -5px;
                                    top: -5px;
                                    right: -5px;
                                    bottom: -5px;
                                    pointer-events: none;
                                    // border: 30px solid #f4f0e9;
                                    border: 0 solid #f4f0e9;
                                    transition: border-width 1s cubic-bezier(.09,.25,.38,.99);
                                }
                                // &.in_view::after {
                                //     border-width: 0;
                                // }
                                &:hover::after {
                                    border-width: 30px;
                                    transition-duration: .5s;
                                }      
                                &:hover .hover-item .image img {
                                    transform: scale3d(1.1,1.1,1.1);
                                    transition-duration: .5s;
                                }
                                .hover-item {
                                    display: inline-block;
                                    .image {
                                        overflow: hidden;
                                        img {
                                            transform: scale3d(1,1,1);
                                            max-width: 100%;
                                            height: auto;
                                            vertical-align: middle;
                                            font-size: 0;
                                            transition: transform .5s;
                                        }
                                    }
                                }
                            }
                            
                            padding: 15px;
                            width: auto;
                            margin-bottom: 0;
                        }
                    }
                    .grid-col:first-child {
                        margin-top: 180px ;
                        .grid-item:first-child {
                            text-align: left;
                        }
                        .grid-item:last-child {
                            text-align: right;
                        }
                    }
                    .grid-col:last-child {
                        .grid-item {
                            text-align: center;
                        }
                        .grid-item:nth-of-type(1) {
                            text-align: left;
                        }
                    } 
                }
            }
        }
        .home-section-journal {
            background-color: #fff;
            padding: 170px 60px 140px;
            .section-header {
                right: 0;
                top: -25px;
            }
            .section-body {
                .journal-list.active img{
                    opacity: .2;
                }
                .journal-list {
                    text-align: center;
                    .image {
                        display: block;
                        line-height: 0;
                        img {
                            max-width: 100%;
                            height: auto;
                            vertical-align: middle;
                            font-size: 0;
                            transition: all .4s;
                        }
                    }
                    .swiper-wrapper {
                        display: inline-block;
                        overflow: hidden;
                        width: auto;
                        .swiper-slide {
                            float: left;
                            width: 33.33333%;
                            max-width: 320px;
                            padding: 0 5px;
                            box-sizing: border-box;
                            .j2-tooltip {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .home-section-collection {
            .section-header {
                text-align: right;
            }
            .section-body {
                padding: 120px 60px;
                .collection-item {
                    position: relative;
                    margin: 0 auto;
                    max-width: 1000px;
                    .title {
                        position: absolute;
                        font-size: 40px;
                        font-weight: bold;
                        line-height: 1.7;
                        bottom: -60px;
                        left: -50px;
                        margin: 0;
                    }
                    .image-wrapper{
                        line-height: 0;
                        overflow: hidden;
                        &:hover::after {
                            border-width: 30px;
                        }
                        &:hover img {
                            transform: scale3d(1.1,1.1,1.1);
                        }
                        &::after {
                            content: '';
                            position: absolute;
                            left: -5px;
                            right: -5px;
                            top: -5px;
                            bottom: -5px;
                            pointer-events: none;
                            border: 0 solid #f4f0e9;
                            transition: border-width 1s cubic-bezier(.09,.25,.38,.99);
                        }
                        img {
                            width: 100%;
                            transform: scale3d(1,1,1);
                            transition: all .6s;
                        }
                    }
                }
            }
        }
    }
}
// content end



.preloader-complete .preloader {
    animation: fadeout-hide 0.5s ease forwards;
    pointer-events: none;
}
// .preloader-complete .logo-grid {
//     opacity: 1;
// }
@keyframes fadeout-hide {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
