<template>
    <div>
        <dw-header ref="header"></dw-header>
        <div class="dw-content clearfix">
            <div class="container-fluid content-grid">
                <div class="row-fluid">
                    <div class="main-content-grid">
                        <div class="dw-prodcut-block dw-product-detail">
                            <div class="dw-product-block__wrapper clearfix">
                                <div class="dw-product-block__img-wrapper">
                                    <div class="dw-product-block__img" id>
                                        <img :src="now_pic_url" alt />
                                        <div class="demo1-video" v-show="videoShow">   
                                            <video id="myVideo"       
                                                class="video-js vjs-default-skin vjs-big-play-centered" 
                                                controls   
                                                :poster="videoCover"
                                                >
                                                <source src="~assets/video/da19001.mp4" type="video/mp4" > 
                                            </video>
                                        </div>
                                    </div>
                                    <div class="product-thumb-slider__outer">
                                        <div class="swiper-container dw-swiper">
                                            <div class="swiper-wrapper">
                                                <div
                                                    :class="{
                                                        'swiper-slide': true,
                                                        active: index == 0
                                                    }"
                                                    v-for="(picUrl,
                                                    index) in p_data['pics']"
                                                    :key="index"
                                                    @click="
                                                        change_now_pic_url(
                                                            $event,index
                                                        )
                                                    "
                                                >
                                                    <div class="image">
                                                        <img
                                                            @load="swiper_init"
                                                            :src="picUrl"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="arrow swiper-button-next"
                                        ></div>
                                        <div
                                            class="arrow swiper-button-prev"
                                        ></div>
                                    </div>
                                </div>
                                <div class="dw-product-block__cart-wrapper">
                                    <div style="line-height:1.7">
                                        <div class="brand">
                                            <div class="dw-features-list">
                                                <span>
                                                    <font>
                                                        丹妮拉·谭（Daniella
                                                        Tam）
                                                    </font>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="dw-product-block-title">
                                            <bdi>
                                                <font>{{ p_data['name'] }}</font>
                                            </bdi>
                                        </div>
                                        <div
                                            class="prices-container price-wrap"
                                        >
                                            <div class="dw-product-prices">
                                                <div
                                                    class="ty-product-block__price-actual"
                                                >
                                                    <span
                                                        class="dw-price-update"
                                                    >
                                                        <font class="dw-price"
                                                            >{{ p_data['price'] }}&nbsp;元</font
                                                        >
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dw-product-block__option">
                                            <div
                                                class="dw-control-group dw-product-options--color"
                                            >
                                                <div>
                                                    <label>
                                                        <font
                                                            style="font-weight:bold;font-size:15px;"
                                                            >SELECT&nbsp;色彩</font
                                                        >
                                                    </label>
                                                    <ul
                                                        class="product-color-slider__outer clearfix"
                                                    >
                                                        <li
                                                            v-for="(cover,
                                                            index) in p_data[
                                                                'cover_pics'
                                                            ]"
                                                            :key="index"
                                                            :data-color="p_data['labels'][index]"
                                                            class="product-color-slider"
                                                            @click="
                                                                update_active(
                                                                    $event,
                                                                    '.product-color-slider'
                                                                )
                                                            "
                                                        >
                                                            <img
                                                                :src="cover"
                                                                alt
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div style="margin-top:40px">
                                                    <label>
                                                        <font
                                                            style="font-weight:bold;font-size:15px;"
                                                            >SELECT&nbsp;尺码</font
                                                        >
                                                    </label>
                                                    <ul
                                                        class="product-size-slider__outer clearfix"
                                                    >
                                                        <li
                                                            v-for="(size,
                                                            index) in p_data[
                                                                'sizes'
                                                            ]"
                                                            :key="index"
                                                        >
                                                            <label>
                                                                <span
                                                                    class="button"
                                                                    @click="
                                                                        update_active(
                                                                            $event,
                                                                            '.product-size-slider__outer .button'
                                                                        )
                                                                    "
                                                                >
                                                                    <font>
                                                                        {{
                                                                            size
                                                                        }}
                                                                    </font>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                class="dw-control-group dw-product-options--size"
                                            ></div>
                                            <div
                                                class="dw-product-block__footer"
                                            >
                                                <div
                                                    class="dw-product-block__field-group"
                                                >
                                                    <div class="change_num">
                                                        <label
                                                            style="padding-right:10px"
                                                        >
                                                            <font>数量</font>
                                                        </label>
                                                        <button
                                                            :disabled="
                                                                isDisabled
                                                            "
                                                            @click.stop="
                                                                reduceNum(
                                                                    $event
                                                                )
                                                            "
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            style="width:30px;margin:0 5px;"
                                                            type="text"
                                                            :value="globalNum"
                                                        />
                                                        <button
                                                            @click.stop="addNum"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    class="dw-product-block__field-button"
                                                >
                                                    <button @click="addToCart" id="button_cart">
                                                        加入购物车
                                                    </button>
                                                    <!-- <button
                                                        id="button_wishlist"
                                                    >
                                                        书签 -->
                                                    <!-- </button> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-details">
                            <div class="product-section-row">
                                <div class="product-section-column">
                                    <div class="product-section product-description">
                                        <h3 class="product-section-title">
                                            <font>产品详情</font>
                                        </h3>
                                    </div>
                                    <div class="product-section-content">
                                        <br>
                                        <br>
                                        <font>旨在迎接春节的表现形式跑步鞋</font>
                                        <br>
                                        <ul>
                                            <li>· 舒适袜套式贴合</li>
                                            <li>· 系带设计</li>
                                            <li>· adidas Primeknit织物面鞋</li>
                                            <li>· 运动表现型跑步鞋</li>
                                            <li>· Boost中底</li>
                                            <li>· Continentai™马牌橡胶Stretchweb网格外底</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-section-column">
                                    <div class="product-section product-features">
                                        <h3 class="product-section-title">
                                            <font>产品规格</font>
                                        </h3>
                                        <div class="procuct-section-content">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            <font>国家:</font>
                                                        </th>
                                                        <td>
                                                            <font>中国制造</font>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <font>材料:</font>
                                                        </th>
                                                        <td>
                                                            <font>皮革x合成纤维</font>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <font>鞋跟:</font>
                                                        </th>
                                                        <td>
                                                            <font>15mm</font>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <font>品牌:</font>
                                                        </th>
                                                        <td>
                                                            <font>丹妮拉·谭（Daniella Tam)</font>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <font>商品编号:</font>
                                                        </th>
                                                        <td>
                                                            <font>DA21111</font>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside class="product-content-aside">
                            <div class="related-products">
                                <h3 class="related-products__title">向你推荐</h3>
                                <div class="related-products-swiper__outer">
                                        <div class="related-products__list">
                                            <div
                                                v-for="item in recommend_list"
                                                :key="item.id"
                                                class="dw-column3"
                                            >
                                            <transition appear name="fade">
                                                <dw-column
                                                    @click.prevent.native="goToDetail(item.p_iid)"
                                                    :swiperId="item.id"
                                                    :name="item.p_iid"
                                                    :price="item.p_oripcice"
                                                    :covers="item.p_cover"
                                                    :imgRange="item.p_pics_url"
                                                    :ifWish="true"
                                                >
                                                </dw-column>
                                            </transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        <dw-footer></dw-footer>
    </div>
</template>

<script>
import dwHeader from "components/common/DwHeader";
import dwFooter from "components/common/DwFooter";
import dwColumn from "components/shopping/DwColumn";
import Swiper from "swiper";

export default {
    name: "detail",
    components: {
        dwHeader,
        dwFooter,
        dwColumn
    },
    data() {
        return {
            p_data: {
                name: "",
                sizes: "",
                covers: "",
                labels: "",
                pics: [],
                cover_pics: []
            },
            pid: 0,
            now_pic_url: "",
            globalNum: 0,
            isDisabled: "",
            videoCover: '',
            videoShow: true,
            recommend_list: []
        };
    },
    methods: {
        addToCart() {
            let lm = localStorage.getItem('login_message')
            if (!lm) {
                this.$alert('请先登录', '提示', {
                    type: 'warning',
                    confirmButtonText: '确定',
                });
                return
            } else {
                this.$alert('添加成功', '提示', {
                    confirmButtonText: '确定',
                    callback: action=> {
                        window.location.reload()
                    }
                });
            }

            let color = document.getElementsByClassName('product-color-slider active')[0] || ''
            let size = document.getElementsByClassName('button active')[0] || ''
            if (color == '' || size == '' || this.globalNum == 0) return 
            let buy = {
                gid: this.p_data['gid'],
                uid: JSON.parse(localStorage.getItem('login_message')).id,
                price: this.p_data['price'],
                color: color.getAttribute('data-color'),
                size: size.innerText,
                num: this.globalNum,
                cover: color.querySelector('img').src,
                name: this.p_data['name']
            }
            this.$axios.post('/cart',JSON.stringify(buy))
            .then(res=>{
                console.log(res)
            })
        },
        addNum() {
            this.globalNum = this.globalNum + 1;
            this.globalNum == 0
                ? (this.isDisabled = true)
                : (this.isDisabled = false);
        },
        reduceNum() {
            this.globalNum = this.globalNum - 1;
            this.globalNum == 0
                ? (this.isDisabled = true)
                : (this.isDisabled = false);
        },
        change_now_pic_url(e,i) {
            i==0?this.videoShow=true:this.videoShow=false
            if (e.target.classList.contains("active")) return;
            let sliders = document.querySelectorAll(
                ".product-thumb-slider__outer .swiper-slide"
            );
            for (let item of sliders) {
                item.classList.remove("active");
            }
            e.target.parentNode.parentNode.classList.add("active");
            let src = document.querySelector(".active img").src;
            this.now_pic_url = src;
        },
        swiper_init() {
            new Swiper(".dw-swiper", {
                slidesPerView: 5,
                slidesPerGroup: 1,
                direction: "vertical",
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
        },
        update_active(e, query) {
            // console.log(e.currentTarget);
            if (e.currentTarget.classList.contains("active")) return;
            let sliders = document.querySelectorAll(query);
            for (let item of sliders) {
                item.classList.remove("active");
            }
            if (query.indexOf("button") != -1) {
                e.currentTarget.classList.add("active");
            }
            e.currentTarget.classList.add("active");
        },
        // init_recommendlist() {
            
        // }
        goToDetail(iid) {
            window.location.href = '/details?'+iid;
        }
    },
    mounted() {
        const axios = this.$axios;
        this.$refs.header.load_completed();
        
        let pid = window.location.href.split("?").pop();
        this.pid = pid;
        axios
            .get(
                "/details/" + pid,
                {},
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            .then(res => {
                if (res.data.code == 200) {
                    let p_data = res.data.data;

                    this.p_data['price'] = p_data.oriprice
                    this.p_data['gid'] = p_data.gid
                    this.p_data['name'] = p_data.name
                    this.p_data["sizes"] = p_data.sizes.split(",");
                    this.p_data["covers"] = p_data.covers.split(",");
                    this.p_data["labels"] = p_data.labels.split("#").slice(1);
                    for (let i = 1; i <= p_data.picLength && i < 10; i++) {
                        this.p_data["pics"].push(
                            `http://localhost:8000/images/${this.pid}-0${i}.jpg`
                        );
                    }
                    for (let i of this.p_data["covers"]) {
                        this.p_data["cover_pics"].push(
                            `http://localhost:8000/images/${this.pid}-${i}_1.jpg`
                        );
                    }
                    this.now_pic_url = this.p_data["pics"][0];
                    this.videoCover = this.p_data['cover_pics'][0]
                    // console.log(this.p_data["pics"]);
                }
            });


            // video
            setTimeout(()=>{
                let player = this.$video('myVideo', {
                // muted: true,
                    controls : true/false,      
                    height:650, 
                    width:650,
                    loop : true,
                    paused: true,
                })
            },200)
            

            this.$axios.get('/recommendlist',{})
            .then(res=>{
                this.recommend_list = res.data.data
            })
    }
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
@import "../../../node_modules/swiper/css/swiper.css";
.dw-column3 {
    width: 25%;
    display: inline-block;
    vertical-align: top;
}
.dw-content {
    margin-top: 180px;
    padding: 0 60px;
    .dw-product-block__wrapper {
        padding: 0 5%;
        .demo1-video {
            position: absolute;
            left: 0;
            top: 0;
            // left: 50%;
            // top: 50%;
            // transform: translate(-50%,-50%);
            // z-index: 99;
        }
        .dw-product-block__img-wrapper {
            position: relative;
            float: left;
            width: calc(100% - 538px);
            margin-right: 20px;
            min-height: 282px;
            min-width: 282px;
            .dw-product-block__img {
                img {
                    width: 100%;
                    max-height: 650px;
                }
            }
            .product-thumb-slider__outer {
                top: calc(50% - 200px);
                height: 430px;
                position: absolute;
                right: -38px;
                width: 76px;
                .swiper-container {
                    margin: 0 auto;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    padding: 0;
                    z-index: 1;
                    .swiper-wrapper {
                        .swiper-slide {
                            height: 76px !important;
                            text-align: center;
                            position: relative;
                            a {
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                            }
                            img {
                                width: 100%;
                            }
                            &.active::before {
                                content: "";
                                left: 0;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                border: 1px solid #000;
                                position: absolute;
                            }
                        }
                    }
                }
                .arrow {
                    left: 50%;
                    outline: none;
                    color: #000;
                }
                .swiper-button-next {
                    position: absolute;
                    bottom: -20px;
                    top: auto;
                    transform: rotate(90deg) translateY(30%);
                }
                .swiper-button-prev {
                    position: absolute;
                    top: 0;
                    transform: rotate(90deg) translateY(30%);
                    z-index: 1;
                }
            }
        }
        .dw-product-block__cart-wrapper {
            height: 500px;
            padding: 20px;
            float: right;
            width: 460px;
            box-sizing: border-box;
            .dw-features-list {
                padding: 0;
                margin: 0 0 10px 0;
                font-size: 16px;
                letter-spacing: 0.2em;
                font-weight: normal;
            }
            .dw-product-block-title {
                margin: 10px 0;
                font-size: 16px;
                letter-spacing: 0.2em;
            }
            .prices-container {
                .dw-product-prices {
                    margin: 10px 0 50px;
                    .ty-product-block__price-actual {
                        font-size: 16px;
                        margin: 10px 0;
                        .dw-price-update {
                            letter-spacing: 0.2em;
                        }
                        .reward-points {
                            font-size: 0.7em;
                        }
                    }
                }
            }
            .dw-product-block__option {
                .product-color-slider__outer {
                    .product-color-slider {
                        width: 76px;
                        height: 76px;
                        float: left;
                        margin-top: 20px;
                        margin-right: 10px;
                        position: relative;
                        img {
                            width: 100%;
                        }
                        &.active::after {
                            content: "";
                            left: 0;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            position: absolute;
                            border: 1px solid #000;
                        }
                    }
                }
                .product-size-slider__outer {
                    li {
                        float: left;
                        width: 33.3333%;
                        padding: 4px;
                        box-sizing: border-box;
                        position: relative;
                        .button {
                            position: relative;
                            display: block;
                            border: 1px solid #c5c5c5;
                            text-align: center;
                            padding: 6px 4px;
                            letter-spacing: 0.2em;
                            font-size: 12px;
                            &.active {
                                border: 1px solid #000;
                            }
                        }
                    }
                }
                .dw-product-block__footer {
                    margin-top: 50px;
                    .dw-product-block__field-group {
                        float: left;
                    }
                    .dw-product-block__field-button {
                        float: right;
                        margin: 0;
                        width: calc(100% - 115px);
                        #button_cart {
                            width: 100%;
                            display: block;
                            margin: 0 0 4px 0;
                            padding: 15px 55px;
                            background-color: #191919;
                            color: #fff;
                            border: none;
                            font-size: 12px;
                        }
                        #button_wishlist {
                            padding: 6px 0;
                            display: block;
                            width: 100%;
                            margin: 0 0 4px 0;
                            font-size: 12px;
                            background-color: transparent;
                            border: 1px solid #191919;
                        }
                    }
                }
            }
        }
    }
    .product-details {
        clear: both;
        max-width: 1120px;
        margin: 100px auto 0;
        height: 300px;
        .product-section-column { 
            float: left;
            box-sizing: border-box;
            height: 100px;
            .product-section-title {
                font-size: inherit;
                font-weight: bold;
                margin-bottom: 15px;
            }
            .product-section-content {
                line-height: 1.4;
                letter-spacing: .2em;
            }
            &:nth-of-type(1) {
                width: 55%;
                font-size: 14px;
            }
            &:nth-of-type(2) {
                width: 45%;
                padding-left: 90px;
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th {
                    width: 30%;
                    white-space: nowrap;
                    padding: 10px 15px 10px 0;
                    border-bottom: 1px solid #191919;
                    text-align: justify;
                    font-family: 'Noto Serif',serif;
                    letter-spacing: 0.2em;
                    font-weight: normal;
                }
                td {
                    padding: 10px 0;
                    border-bottom: 1px solid #191919;
                    text-align: justify;
                }
            }
        }
    }
    .product-content-aside {
        .related-products {
            margin: 80px 30px 0;
            .related-products__title {
                font-size: 50px;
                line-height: 1;
                letter-spacing: .2em;
                margin: 0 0 15px 0;
            }
            .related-products-swiper__outer {
                margin-top: 60px;
                position: relative;
                padding: 0 130px;
                height: 400px;
            }
        }
    }
}
</style>
