<template>
    <div>
        <div class="ty-grid-list__item">
            <!-- -------->
            <h1 @click.stop="cancel_wish" class="cancel_wish" v-if="!ifWish">
                <span>取消喜爱</span>
            </h1>
            <form action="post" class="cm-processed-form">
                <input type="hidden" />
                <div class="dw-grid-list__image">
                    <!-- 面上三张图,渐变 -->
                    <div class="dw-color__main" :id="color_main_id">
                        <div
                            class="dw-color-main__item color-image"
                            data-hash
                            v-for="(cover, index) in covers_list"
                            :key="index"
                        >
                            <div :id="cover.id">
                                <a>
                                    <img class="dw-pict" :src="cover.url" alt />
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- 轮播图片 -->
                    <div
                        class="dw-center-block"
                        @mouseenter="
                            slideNext($event);
                            controlsDisplay_flag = !controlsDisplay_flag;
                        "
                        @mouseleave="
                            slideFirst($event);
                            controlsDisplay_flag = !controlsDisplay_flag;
                        "
                    >
                        <div
                            class="slick-wrapper banner_swiper clearfix"
                            :id="swiperId"
                        >
                            <div
                                class="slick-track slick-pagination-bullet-clickable clearfix"
                            >
                                <div class="slick-slide">
                                    <div>
                                        <a href="#">
                                            <img
                                                src="http://localhost:8000/images/da19001-01.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="owl-controls"
                                v-show="controlsDisplay_flag"
                            >
                                <div class="owl-buttons clearfix banner_info">
                                    <div
                                        @click.stop="slidePrev($event)"
                                        class="slick-prev"
                                    >
                                        <i></i>
                                    </div>
                                    <div
                                        @click.stop="slideNext($event)"
                                        class="slick-next"
                                    >
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 色块 -->
                    <div class="dw-color-icons">
                        <ul>
                            <li
                                @mouseenter="a($event)"
                                @mouseleave="b($event)"
                                v-for="(item, index) in covers_list"
                                :key="index"
                            >
                                <a class="product-color-icon" data-hash href>
                                    <img
                                        :data-coloricon="item.id"
                                        :src="item.iconUrl"
                                        alt
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- 添加入我的喜爱 -->
                    <div class="dw-list-control">
                        <div class="wish_list">
                            <a
                                @click.stop="toggle_wish($event)"
                                class="dw-add-to-wish"
                                v-if="ifWish"
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="dw-grid-list__item-brand">
                    <a href="#">WARMA LINN</a>
                </div>
                <div class="dw-grid-list__item-name">
                    <a href="#">
                        <font>Python pattern</font>
                    </a>
                </div>
                <div class="dw-grid-list__price">
                    <span>
                        <span class="dw-price">
                            <span class="dw-price-num">
                                <font>¥&nbsp;</font>
                            </span>
                            <span class="dw-price-num">
                                <font>{{ price }}</font>
                            </span>
                        </span>
                    </span>
                </div>
            </form>
            <!-- ------ -->
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";
import qs from "qs";
export default {
    data() {
        return {
            controlsDisplay_flag: false,
            covers_list: [], // 封面，色块 一对一对应
            showImg_list: [],
            swiper_list: [],
            color_main_id: "",
        };
    },
    methods: {
        // 触发轮播图next
        slideNext(e) {
            // this.swiper_list.map(item=>item.slideNext());
        },
        // 触发轮播图slideTo
        slideFirst(e) {
            this.swiper_list.map((item) => item.slideTo(0, 400, false));
        },
        // 初始化轮播图
        initSwiper() {
            let swiper = new Swiper("#" + this.swiperId, {
                wrapperClass: "slick-track",
                slideClass: "slick-slide",
                navigation: {
                    nextEl: ".banner_info .slick-next",
                    prevEl: ".banner_info .slick-prev",
                },
            });
            this.swiper_list.push(swiper);
        },
        a(e) {
            let iconSrc = e.target.querySelector("img").dataset.coloricon;
            document.querySelector("#" + iconSrc).parentNode.style.zIndex = 2;
            document.getElementById(this.color_main_id).style.opacity = 1;
        },
        b(e) {
            let iconSrc = e.target.querySelector("img").dataset.coloricon;
            document.querySelector("#" + iconSrc).parentNode.style.zIndex = 1;
            document.getElementById(this.color_main_id).style.opacity = 0;
        },
        // 处理url
        deal_url() {
            var list = this.covers.split(",");
            list.forEach((v, i) => {
                this.covers_list.push({
                    id: this.name + "-" + v,
                    url:
                        "http://localhost:8000/images/" +
                        this.name +
                        "-" +
                        v +
                        ".jpg",
                    iconUrl:
                        "http://localhost:8000/images/" +
                        this.name +
                        "-" +
                        v +
                        ".png",
                });
            });
            var list = Object.keys([...Array(parseInt(this.imgRange))]).map(
                (item) => {
                    return "0" + (parseInt(item) + 1);
                }
            );
            var html = "";
            list.forEach((v, i) => {
                html +=
                    '<div class="slick-slide" style="float:left">' +
                    '<a href="#">' +
                    '<img style="width:100%;float:left;" src="' +
                    "http://localhost:8000/images/" +
                    this.name +
                    "-" +
                    v +
                    '.jpg" alt />' +
                    "</a>" +
                    "</div>";
                this.showImg_list.push(this.name + "-" + v + ".jpg");
            });

            document
                .getElementById(this.swiperId)
                .querySelector(".slick-track").innerHTML = html;
        },
        toggle_wish(e) {
            let lm = JSON.parse(localStorage.getItem("login_message"));
            if (!lm) {
                this.$alert("请先登录", "提示", {
                    type: "warning",
                    confirmButtonText: "确定",
                });
                return;
            } else {
                this.$alert("添加成功", "提示", {
                    confirmButtonText: "确定",
                });
            }
            let uid = lm.id;
            if (e.target.classList.contains("is-favorite")) {
                e.target.classList.remove("is-favorite");
                this.$axios
                    .delete("/togglecollections", {
                        params: { uid: uid, pid: this.swiperId },
                    })
                    .then((res) => {
                        console.log(res);
                    });
            } else {
                e.target.classList.add("is-favorite");
                this.$axios
                    .post(
                        "/togglecollections",
                        qs.stringify({ uid: uid, pid: this.swiperId })
                    )
                    .then((res) => {
                        console.log(res);
                    });
            }
        },
        cancel_wish() {
            let uid = JSON.parse(localStorage.getItem("login_message")).id;
            this.$axios
                .delete("/togglecollections", {
                    params: { uid: uid, pid: this.swiperId },
                })
                .then((res) => {
                    console.log(res);
                    window.location.reload();
                });
        },
    },
    mounted() {
        this.deal_url();

        // this.swiper_id = "swiper" + this.swiperId;
        this.color_main_id = "color_" + this.swiperId;

        this.initSwiper();
        // console.log(this.name);
    },
    props: ["name", "price", "covers", "imgRange", "swiperId", "ifWish"],
};
</script>

<style lang="less" scoped>
// 表单
.cancel_wish {
    text-align: center;
    height: 18px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #d2c2a5;
    padding-left: 5px;
    vertical-align: middle;
    font-weight: normal;
    span {
        cursor: pointer;
    }
    &::before {
        content: "X";
        padding-right: 2px;
    }
}
.cm-processed-form {
    position: relative;
    // 色块
    .dw-color-icons {
        position: absolute;
        z-index: 10;
        right: 8px;
        bottom: 8px;
        ul li {
            float: left;
            padding: 3px;
            line-height: 0;
            img {
                width: 18px;
                max-width: 100%;
                vertical-align: middle;
                height: auto;
            }
        }
    }
}

// 轮播
.dw-column3 {
    width: 33.333333%;
    vertical-align: top;
    display: inline-block;
    margin-right: -0.25em;
}
.ty-grid-list__item {
    margin: 0px 10px 25px 10px;
    .dw-grid-list__image {
        position: relative;
        margin-bottom: 12px;
    }
    .dw-grid-list__item-name,
    .dw-grid-list__item-brand,
    .dw-grid-list__price {
        padding: 0 5px;
        line-height: 1.7;
    }
    .dw-grid-list__item-name {
        margin: 4px 0;
        letter-spacing: 0.1em;
    }
    .dw-grid-list__item-brand {
        letter-spacing: 0.2em;
    }
    .dw-grid-list__price {
        font-size: 1.2em;
    }
}
.dw-color__main {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    .dw-color-main__item {
        position: absolute;
        width: 100%;
        img {
            height: auto;
            max-width: 100%;
            font-size: 0;
            vertical-align: middle;
        }
    }
}
.dw-center-block {
    .slick-wrapper {
        width: 100%;
        overflow: hidden;
        position: relative;
        .slick-track {
            width: 1000%;
            .slick-slide {
                overflow: hidden;
                float: left;
            }
        }
        // 控制器
        .owl-controls {
            position: absolute;
            top: 50%;
            margin-top: -16px;
            left: 0;
            width: 100%;
            i {
                width: 16px;
                height: 32px;
                display: inline-block;
                cursor: pointer;
            }
            .slick-next {
                position: absolute;
                right: 10px;
                i {
                    background: url("~assets/img/shopping/slider-next.png")
                        no-repeat;
                    background-size: contain;
                }
            }
            .slick-prev {
                position: absolute;
                left: 10px;
                i {
                    background: url("~assets/img/shopping/slider-prev.png")
                        no-repeat;
                    background-size: contain;
                }
            }
        }
    }
}
.dw-list-control {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 3;
    width: auto;
    .dw-add-to-wish.is-favorite {
        background: url("~assets/img/shopping/signs/header-icon-bookmark-on.svg")
            center center no-repeat;
    }
    .dw-add-to-wish {
        cursor: pointer;
        display: inline-block;
        margin: 0;
        padding: 0;
        width: 40px;
        height: 40px;
        background: url("~assets/img/shopping/signs/favorite-off.png") center
            center no-repeat;
        background-size: 21px auto;
        white-space: nowrap;
        overflow: hidden;
        text-indent: 40px;
    }
}
img {
    width: 100%;
}
</style>
