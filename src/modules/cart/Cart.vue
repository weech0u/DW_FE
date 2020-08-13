<template>
    <div>
        <dw-header ref="header"></dw-header>
        <div class="dw-container clearfix">
            <div class="container-fluid clearfix">
                <div class="row-fluid" style="width:100%" >
                    <form action="">
                        <div class="dw-mainbox-container clearfix">
                            <h1 class="dw-mainbox-title">
                                SHOPPING CART
                            </h1>
                            <div class="mainbox_empty" v-if="!ifEmpty">
                                Empty
                            </div>
                            <div class="dw-mainbox-cart__body" v-if="ifEmpty">
                                <div id="cart_items">
                                    <table class="dw-cart-content dw-table">
                                        <thead>
                                            <tr>
                                                <th class="t-left">商品</th>
                                                <th class="empty"></th>
                                                <th class="t-right">单价</th>
                                                <th class="t-right">数量</th>
                                                <th class="t-right">总金额</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,i) in products_list" :key="i">
                                                <td
                                                    class="dw-cart-content__product-elem dw-cart-content__image-block"
                                                >
                                                    <div
                                                        class="dw-cart-content__image"
                                                        id="img1"
                                                    >
                                                        <a href="#">
                                                            <img
                                                                :src="item.cover"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td
                                                    class="dw-cart-content__product-elem dw-cart-content__description"
                                                    style="width:50%"
                                                >
                                                    <a
                                                        href=""
                                                        class="dw-cart-content__product-title"
                                                        >{{ item.name }}</a
                                                    >
                                                    <a
                                                        href=""
                                                        class="ty-cart-content__product-delete"
                                                        style="color: red;font-weight:bold;margin-left:10px;"
                                                        @click.prevent="del_cart(item.id)"
                                                        >X</a
                                                    >
                                                    <div
                                                        class="dw-cart-content__sku"
                                                    >
                                                        编码：{{ item.number }}
                                                    </div>
                                                    <div class="dw-product-options">
                                                        <div
                                                            class="dw-product-options__option-info"
                                                        >
                                                            <strong>颜色:</strong>
                                                            <span>{{ item.color }}</span>
                                                        </div>
                                                        <div
                                                            class="dw-product-options__option-info"
                                                        >
                                                            <strong>尺寸:</strong>
                                                            <span>{{ item.size }}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    class="dw-cart-content__product-elem dw-cart-content__price"
                                                >
                                                    <bdi>{{ item.price }}元</bdi>
                                                </td>
                                                <td
                                                    class="dw-cart-content__product-elem dw-cart-content__qty"
                                                >
                                                    <div>{{ item.count }}</div>
                                                </td>
                                                <td
                                                    class="dw-cart-content__product-elem dw-cart-content__price"
                                                >
                                                    <bdi>{{ item.price * item.count }}</bdi>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="dw-cart-total" v-if="ifEmpty">
                        <div class="ty-cart-total__wrapper clearfix" id="checkout_totals">
                            <ul class="dw-cart-statistic dw-statistic-list">
                                <li class="dw-cart-statistic__item dw-statistic-list-subtotal">
                                    <span class="ty-cart-statistic__title">小计</span>
                                    <span class="ty-cart-statistic__value">{{total_price}} 元</span>
                                </li>
                                <li class="dw-cart-statistic__item dw-statistic-list-shipping-method">
                                    <span class="ty-cart-statistic__title">邮费</span>
                                    <span class="ty-cart-statistic__value">{{mailfee}} 元</span>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                            <ul class="dw-cart-statistic__total-list">
                                <li class="dw-cart-statistic__item ty-cart-statistic__total">
                                    <span class="ty-cart-statistic__total-title">总金额</span>
                                    <span class="ty-cart-statistic__total-value">
                                        <span class="ty-price">{{total_price+mailfee}}</span> 元
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="buttons-container dw-cart-content__bottom-buttons clearfix" v-if="ifEmpty">
                        <div class="dw-float-left dw-cart-content__left-buttons">
                            <a href="/shopping" class="dw-btn"><font>继续购物</font></a>
                        </div>
                        <div class="dw-float-right dw-cart-content__right-buttons">
                            <a @click.prevent="to_pay(total_price+mailfee)" href="" class="dw-btn"><font>提交订单</font></a>
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

export default {
    data() {
        return {
            ifEmpty: true,
            products_list: [],
            mailfee: 10
        };
    },
    components: {
        dwFooter,
        dwHeader
    },
    mounted() {
        this.$refs.header.load_completed();

        
        this.$axios.get('/cart',{params:{
            id: JSON.parse(localStorage.getItem('login_message')).id,
        }})
        .then(res=>{
            if(res.data.data.length!=0) {
                this.ifEmpty = true
                this.products_list = res.data.data
            }else {
                this.ifEmpty = false
            }
            console.log(res)
            
        })
    },
    methods: {
        to_pay(amount) {
            var id = JSON.parse(localStorage.getItem('login_message')).id
            this.$axios.post('/alipay',{id:id, amount: amount})
            .then(res=> {
                location.href = res.data.url
            })
        },
        del_cart(pid) {
            this.$axios.delete('/cart',{params:{pid:pid}})
            .then(res=> {
                if (res.data.code == 200) {
                    location.reload()
                }
            })
        }
    },
    computed: {
        total_price() {
            let total_price = 0
            for (let i of this.products_list) {
                total_price += i.price*i.count
            }
            return total_price
        }
    },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";


.dw-container {
    margin-top: 180px;

    .container-fluid {
        max-width: 1000px;
        margin: 0 auto;
        .dw-mainbox-title {
            margin: 0 0 60px;
            font-size: 50px;
            font-weight: bold;
            letter-spacing: 0.2em;
            line-height: 1;
            text-align: center;
        }
        .mainbox_empty {
            background-color: #fff;
            padding-top: 100px;
            height: 230px;
            color: gray;
            font-size: 30px;
            text-align: center;
            width: 100%;
        }
        .dw-mainbox-cart__body {
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }
            .dw-cart-content {
                margin-top: 30px;
                width: 100%;
                thead {
                    .t-left {
                        text-align: left;
                    }
                    .t-right {
                        text-align: right;
                    }
                    .empty {
                        padding: 18px;
                    }
                }
                th,
                td {
                    font-weight: normal;
                    padding: 18px;
                    background: none;
                    color: #191919;
                    font-weight: normal;
                    border-bottom: 1px solid #191919 !important;
                }
                tbody {
                    td {
                        text-align: right;
                        min-width: 100px;
                        .dw-cart-content__sku {
                            padding: 5px 0;
                            font-size: 90%;
                        }
                        .ty-cart-content__product-delete {
                            margin-left: 5px;
                        }
                        .dw-cart-content__product-title {
                            font-size: 115%;
                        }
                        .ty-product-options__option-info {
                            height: 70px;
                        }
                        &:nth-of-type(2) {
                            line-height: 2.77777;
                            text-align: left;
                        }
                    }
                    img {
                        width: 100%;
                    }
                }
            }
        }
        .dw-cart-total {
            .ty-cart-total__wrapper {
                padding: 17px 20px;
                .dw-cart-statistic {
                    float: right;
                    padding-top:10px;
                    li {
                        clear: both;
                        overflow: hidden;
                        padding: 0 0 15px 0;
                        font-size: 16px;
                        .ty-cart-statistic__title {
                            position: relative;
                            margin-right: 20px;
                            width: 220px;
                            text-align: right;
                            white-space: normal;
                        }
                        .ty-cart-statistic__value {
                            position: relative;
                            display: inline-block;
                            width: 140px;
                            text-align: right;
                        }
                    }
                }
                .dw-cart-statistic__total-list {
                    margin: 15px -20px 0;
                    padding: 0 20px;
                    border-top: 1px solid #191919;
                    .ty-cart-statistic__total {
                        padding: 9px 0 0;
                        text-align: right;
                        font-weight: bold;
                        font-size: 138%;
                        .ty-cart-statistic__total-title {
                            margin-right: 50px;
                        }
                        .ty-cart-statistic__total-value {
                            .ty-price {
                                letter-spacing: .3em;
                            }
                        }
                    }
                }
            }
        }
        .buttons-container {
            margin: 25px 0;
            .dw-float-left {
                float: left;
            }
            .dw-float-right {
                float: right;
            }
            .dw-btn {
                color: #191919;
                border: 1px solid #191919;
                background: transparent;
                padding: 10px 32px;
                font-size: 12px;
            }
            .dw-cart-content__right-buttons {
                .dw-btn {
                    background-color: #191919;
                    color: #fff;
                }
            }
        }
    }
}
</style>
