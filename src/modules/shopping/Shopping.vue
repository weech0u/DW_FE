<template>
    <div>
        <dw-header ref="header"></dw-header>
        <div class="dw-content clearfix">
            <div class="row-fluid clearfix">
                <div class="side-grid">
                    <div class="dw-sidebox-import">
                        <div class="dw-sidebox-important__body">
                            <div class="dw-product-filters__wrapper">
                                <div class="dw-sidebox-inner__title">
                                    <font>品牌</font>
                                </div>
                                <div class="dw-sidebox-inner__body">
                                    <ul class="dw-product-filter">
                                        <li class="dw-product-filter-item">
                                            <a @click.prevent="getProInfo(0,$event)" href="#" class="active">
                                                <u>全部</u>
                                            </a>
                                        </li>
                                        <!-- <li class="dw-product-filter-item">
                                            <a href="#"
                                                >丹妮拉·谭（Daniella Tam）</a
                                            >
                                        </li>
                                        <li class="dw-product-filter-item">
                                            <a href="#">杰玛·林恩</a>
                                        </li> -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="dw-sidebox-important__body">
                            <div class="dw-product-filters__wrapper">
                                <div class="dw-sidebox-inner__title">
                                    <font>类别</font>
                                </div>
                                <div class="dw-sidebox-inner__body">
                                    <ul class="dw-product-filter">
                                        <li class="dw-product-filter-item">
                                            <a @click.prevent="getProInfo(0,$event,'','',all_conditions['color'],all_conditions['priceRange'])" href="#" class="active">
                                                <font>全部</font>
                                            </a>
                                        </li>
                                        <li class="dw-product-filter-item">
                                            <a @click.prevent="getProInfo(0,$event,'','平底鞋',all_conditions['color'],all_conditions['priceRange'])" href="#">
                                                <font>平底鞋</font>
                                            </a>
                                        </li>
                                        <li class="dw-product-filter-item">
                                            <a @click.prevent="getProInfo(0,$event,'','运动鞋',all_conditions['color'],all_conditions['priceRange'])" href="#">
                                                <font>运动鞋</font>
                                            </a>
                                        </li>
                                        <li class="dw-product-filter-item">
                                            <a @click.prevent="getProInfo(0,$event,'','凉鞋',all_conditions['color'],all_conditions['priceRange'])" href="#">
                                                <font>凉鞋</font>
                                            </a>
                                        </li>
                                        <li class="dw-product-filter-item">
                                            <a @click.prevent="getProInfo(0,$event,'','靴子',all_conditions['color'],all_conditions['priceRange'])" href="#">
                                                <font>靴子</font>
                                            </a>
                                        </li>
                                        <li class="dw-product-filter-item">
                                            <a @click.prevent="getProInfo(0,$event,'','特价',all_conditions['color'],all_conditions['priceRange'])" href="#">
                                                <font>特价</font>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dw-sidebox-important__body">
                        <div class="dw-product-filters__wrapper">
                            <div class="dw-sidebox-inner__title">
                                <font>色彩</font>
                            </div>
                            <div class="dw-sidebox-inner__body">
                                <ul class="dw-product-filter">
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'',all_conditions['priceRange'])" href="#" class="active"><font>全部</font></a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'黑色',all_conditions['priceRange'])" href="#">
                                            <font>黑色/灰色</font>
                                        </a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'米色#棕色',all_conditions['priceRange'])" href="#">
                                            <font>米色/棕色</font>
                                        </a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'白色#象牙色',all_conditions['priceRange'])" href="#">
                                            <font>白色/象牙色</font>
                                        </a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'粉色#橙色',all_conditions['priceRange'])" href="#">
                                            <font>粉色/橙色</font>
                                        </a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'蓝色#绿色',all_conditions['priceRange'])" href="#">
                                            <font>蓝色/绿色</font>
                                        </a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'红色#紫色',all_conditions['priceRange'])" href="#">
                                            <font>红色/紫色</font>
                                        </a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'金#银',all_conditions['priceRange'])" href="#">
                                            <font>金/银</font>
                                        </a>
                                    </li>
                                    <li class="dw-product-filter-item">
                                        <a @click.prevent="getProInfo(0,$event,'',all_conditions['classify'],'图案',all_conditions['priceRange'])" href="#">
                                            <font>图案</font>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="dw-sidebox-important__body">
                        <div class="dw-product-filters__wrapper">
                            <div class="dw-sidebox-inner__title">
                                <font>价格</font>
                            </div>
                            <div class="dw-sidebox-inner__body">
                                <div class="dw-price-slider">
                                    <div class="dw-sidebox-inner__input">
                                        <bdi>
                                            <input @blur="getProInfo(0,$event,'',all_conditions['classify'],all_conditions['color'],$event)" class="p_low" type="text" value="400" />
                                            <font>&nbsp;¥</font>
                                        </bdi>
                                        <font>&nbsp;- </font>
                                        <bdi>
                                            <input @blur="getProInfo(0,$event,'',all_conditions['classify'],all_conditions['color'],$event)" class="p_high" type="text" value="1500" />
                                            <font>&nbsp;¥</font>
                                        </bdi>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-content-grid">
                    <div class="category_products">
                        <div class="dw-content">
                            <div class="category-image">
                                <img
                                    src="~assets/img/shopping/item_all_pc.jpg"
                                />
                            </div>
                            <div class="category-description">
                                <p>
                                    <font>
                                        The elegant design and imported-like
                                        shape attracted Daniella Tam, casual and
                                        stylish casual shoes GEMMA LINN. A
                                        modest collection of footwear that can
                                        go from basic to fun designs every day,
                                        with two different shoe cabinet images.
                                    </font>
                                </p>
                            </div>
                            <div class="dw-pagination-container">
                                <div class="dw-sort-container clearfix">
                                    <div class="dw-sort-dropdown">
                                        <a
                                            @click.prevent="showDropdown"
                                            href="#"
                                            id="sw_elm_sort_fields"
                                        >
                                            <font class="dropdown_item0">注册日期的最新日期</font>
                                        </a>
                                        <ul
                                            v-show="showDropdown_flag"
                                            id="elm_sort_fields"
                                            class="ty-sort-dropdown__content"
                                        >
                                            <li>
                                                <a @click.prevent="downFontChange" href="#">
                                                    <font class="dropdown_item1">价格从低到高</font>
                                                </a>
                                            </li>
                                            <li>
                                                <a @click.prevent="downFontChange" href="#">
                                                    <font class="dropdown_item2">价格从高到低</font>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="grid-list">
                                    <div
                                        v-for="item in products_list"
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
                                <div class="dw-pagination__bottom">
                                    <div class="dw-pagination">
                                        <a href="#"  class="dw-pagination__item" @click.prevent="goPrev($event)">
                                            <i class="left-arrow"></i>
                                            &nbsp;
                                            <a>PREV</a>
                                        </a>
                                        <div class="dw-pagination__items">
                                            <a
                                                v-for="count in pagination_length"
                                                :key="count"
                                                :class="{'page-num':true,'dw-pagination__item':true,'dw_panigation__selected':count==1}"
                                                @click="getProInfo(count - 1,$event)"
                                                >{{ count }}</a
                                            >
                                        </div>
                                        <a href="#" class="dw-pagination__item" @click.prevent="goNext($event)">
                                            <a>NEXT</a>
                                            <i class="right-arrow"></i>
                                            &nbsp;
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    name: "Shopping",
    data() {
        return {
            showDropdown_flag: false,
            colorIcon_list: [],
            products_list: [],
            pagination_length: 0,
            columnShow: true,
            count_now: 0,
            all_conditions: {
                classify: '',
                color: '',
                priceRange_l: 0,
                priceRange_h: 1500,
                sort_flag:''
            }
        };
    },
    components: {
        dwHeader,
        dwFooter,
        dwColumn
    },
    methods: {
        // 切换下拉框文字
        downFontChange(e) {
            let item0 = document.getElementsByClassName('dropdown_item0')[0]
            let temp_ = item0.innerText

            let sort_flag = ''
            if (e.target.innerText.indexOf('高') == 3) {
                sort_flag = 'p_h'
            }else if (e.target.innerText.indexOf('高') == 5) {
                sort_flag = 'p_l'
            }else {
                sort_flag = 'time'
            }

            item0.innerText = e.target.innerText
            e.target.innerText = temp_
            
            this.showDropdown_flag = !this.showDropdown_flag;

            this.count_now = 0
            this.getProInfo(0,'','',this.all_conditions['classify'],this.all_conditions['color'],'',sort_flag)
            
        },
        // 切换上一页
        goPrev(e) {
            if (this.count_now!=0) {
                this.count_now -= 1
                this.getProInfo(this.count_now,e)
            }
        },
        // 切换下一页
        goNext(e) {
            if (this.count_now!=this.pagination_length-1) {
                this.count_now += 1
                this.getProInfo(this.count_now,e)
            }
        },
        // 打开分类下拉框
        showDropdown(e) {
            this.showDropdown_flag = !this.showDropdown_flag;
        },
        // 请求商品数据
        getProInfo(offset_,e=null,brandName=null,classify=null,color=null,priceRange_e=null,sort_flag=null) {
            const axios = this.$axios;

            this.count_now == 1 || this.count_now == this.pagination_length?false:0

            let conditions = {}
            conditions['offset'] = offset_
            conditions['limit'] = 6

            if (e && e.target.parentNode.parentNode.classList.contains('dw-product-filter-item')) {
                let element = e.target.parentNode.parentNode.parentNode
                for (let item of element.querySelectorAll('.active')) {
                    item.classList.remove('active')
                }
                console.log(e.target)
                e.target.parentNode.classList.add('active')
            }
            if (brandName) conditions['brandName'] = brandName
            // 商品标签参数
            if (classify) conditions['classify'] = classify
            // 颜色参数
            if (color) conditions['color'] = color
            // 排序方式参数
            if (sort_flag) conditions['sort_flag'] = sort_flag
            if (priceRange_e) {
                let this_ = priceRange_e.target
                if (this_.className == 'p_low') {
                    this.all_conditions['priceRange_l'] = priceRange_e.target.value
                }
                if (this_.className == 'p_high') {
                    this.all_conditions['priceRange_h'] = priceRange_e.target.value
                }
            }
            let price_l = this.all_conditions['priceRange_l']
            let price_h = this.all_conditions['priceRange_h']
            const priceRange = `${price_l},${price_h}`
            conditions['priceRange'] = priceRange

            // 发送请求
            axios
                .get(
                    "/initlist",{
                        params: conditions
                    },
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                .then(res => {
                    let data = res.data;
                    if (data.code == 200) {
                        let l_res = data.list_result;
                        this.products_list = l_res;

                        // 分页导航长度
                        this.pagination_length = data.res_length;

                        // 改变页码样式
                        if (e && e.target.classList.contains('page-num')){
                            if (parseInt(e.target.innerText)-1 == offset_) {
                                for (let item of document.querySelectorAll('.dw-pagination__items a')) {
                                    item.classList.remove('dw_panigation__selected')
                                }   
                                e.target.classList.add('dw_panigation__selected')
                                // 全局当前页与偏移量同步
                                this.count_now = offset_
                            }
                        }
                        if (e && !e.target.classList.contains('page-num')) {
                            for (let item of document.querySelectorAll('.dw-pagination__items a')) {
                                item.classList.remove('dw_panigation__selected')
                                if (parseInt(item.innerText)-1 == offset_) {
                                    item.classList.add('dw_panigation__selected')
                                }
                            }
                        }
                      
                    }
                });
        }, 
        goToDetail(iid) {
            window.location.href = '/details?'+iid
        }

    },
    mounted() {
        this.$refs.header.load_completed();
        this.getProInfo(0); 
    }
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
@import "../../../node_modules/swiper/css/swiper.css";

// vue transition
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
// end

.dw-column3 {
    width: 33.333333%;
    vertical-align: top;
    display: inline-block;
    margin-right: -0.25em;
}
.dw-content {
    margin-top: 180px;
    padding: 0 60px;
    // height: 1400px;
    .side-grid {
        margin-top: 120px;
        width: 300px;
        height: 500px;
        float: left;
        .dw-product-filters__wrapper {
            line-height: 24px;
            .dw-sidebox-inner__title {
                font-size: 17px;
                padding: 7px 0;
                font {
                    font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑",
                        "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti,
                        "黑体", sans-serif;
                    color: #515151;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    line-height: 19px;
                    position: relative;
                    padding-right: 40px;
                    &::after {
                        content: "";
                        display: block;
                        width: 19px;
                        height: 1px;
                        position: absolute;
                        right: 0;
                        top: calc(50% - 1px);
                        background-color: #191919;
                    }
                }
            }
            .dw-sidebox-inner__body {
                font-size: 14px;
                margin: 2px 0 0 18px;
                padding: 0;
                .dw-price-slider {
                    margin-bottom: 20px;
                    color: #909598;
                    input {
                        border-color: #191919;
                        background-color: transparent;
                        height: 32px;
                        border-radius: 0;
                        border-width: 1px;
                        padding: 4px 8px;
                        margin: 0 0 5px 0;
                        width: 74px;
                    }
                }
                a.active {
                    text-decoration: underline;
                }
                .dw-product-filter-item {
                    padding: 7px 0;
                    letter-spacing: 0.2em;
                }
            }
        }
    }
    .main-content-grid {
        width: auto;
        margin-left: 340px;
        // height: 500px;
        .dw-content {
            padding: 0;
        }
        //   商品列表
        .grid-list {
            min-height: 300px;
        }
        .dw-pagination-container {
            margin-top: 0;
            padding-left: 10px;
            margin: 28px 0;
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            //   分类
            .dw-sort-container {
                .dw-sort-dropdown {
                    position: relative;
                    float: right;
                    margin-bottom: 20px;
                    ul {
                        position: absolute;
                        min-width: 200px;
                        border: 1px solid #97a0a5;
                        z-index: 100;
                        a {
                            display: inline-block;
                            background-color: #fff;
                            width: 100%;
                            padding: 10px 14px;
                            color: #191919;
                            display: block;
                            transition: all 0.3s;
                            &:hover {
                                background-color: #191919;
                                color: #fff;
                            }
                        }
                    }
                    a#sw_elm_sort_fields {
                        padding: 4px 0;
                        border-bottom: 1px solid #191919;
                        min-width: 220px;
                        padding-right: 40px;
                        position: relative;
                        display: inline-block;
                        &::after {
                            content: "〓";
                            position: absolute;
                            right: 0;
                        }
                        &::before {
                            content: "SORT：";
                            position: absolute;
                            right: 100%;
                            width: 60px;
                            text-align: right;
                            padding: 4px 4px 0 0;
                            top: 0;
                        }
                    }
                }
            }
        }
        .category-image {
            img {
                width: 100%;
            }
        }
        .category-description {
            margin: 70px 5%;
            text-align: center;
            p {
                font-size: 14px;
                text-align: left;
                line-height: 2.5;
            }
        }
    }
    // 分页导航
    .dw-pagination__bottom {
        border-top: 1px solid #dedede;
        .dw-pagination {
            text-align: center;
            margin: 10px 0;
            padding: 10px 0;
            .dw-pagination__item {
                &.dw_panigation__selected {
                    color: white;
                    background-color: #191919;
                    font-size: inherit;
                }
                // color: white;
                display: inline-block;
                padding: 3px 7px;
                min-width: 12px;
                text-align: center;
                text-decoration: none;
                text-transform: uppercase;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                -webkit-transition: all 200ms;
                -moz-transition: all 200ms;
                -o-transition: all 200ms;
                transition: all 200ms;
            }
            .dw-pagination__items {
                display: inline-block;
            }
            & > a {
                display: inline-block;
                min-width: 12px;
                text-align: center;
                text-decoration: none;
                padding: 5px 7px;
                margin: 0 4px;
                width: auto;
                i {
                    line-height: 10px;
                    font-size: 16px;
                    line-height: 10px;
                    font-style: normal;
                    &.left-arrow::before {
                        content: "←";
                    }
                    &.right-arrow::after {
                        content: "→";
                    }
                }
            }
        }
    }
}
</style>
