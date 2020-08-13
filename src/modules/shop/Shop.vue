<template>
    <div>
        <dw-header ref="header"></dw-header>
        <div class="dw-content">
            <div class="container-fluid content-grid">
                <div class="row-fluid">
                    <div class="dw-mainbox-container clearfix">
                        <div class="dw-mainbox-title">
                            <h1>
                                <span><font>线下店铺</font></span>
                            </h1>
                        </div>
                        <div class="dw-mainbox-body">
                            <div class="shop-list-page">
                                <article class="shop">
                                    <h2 class="shop-name">
                                        NIKE(湖滨银泰in77C区店)
                                    </h2>
                                    <p class="shop-info">
                                        地址:延安路258号湖滨银泰in77C3区3F号
                                        <br>
                                        电话: 0571-85870322
                                        <br>
                                        营业时间: 周一至周日 10:00-22:00
                                    </p>
                                </article>
                                <article class="shop">
                                    <h2 class="shop-name">
                                        NIKE(杭州大厦店)
                                    </h2>
                                    <p class="shop-info">
                                        地址:环城北路47号杭州大厦购物城C座5层
                                        <br>
                                        电话: 0571-85270712
                                        <br>
                                        营业时间: 周一至周四 09:30-21:30 周五,周六 09:30-22:00
                                    </p>
                                </article>
                                <article class="shop">
                                    <h2 class="shop-name">
                                        NIKE(杭州奥特莱斯换季优惠店)
                                    </h2>
                                    <p class="shop-info">
                                        地址: 对外经济开发区启潮路199号宝大祥1层
                                        <br>
                                        电话: 0571-87358111
                                        <br>
                                        营业时间: 周一至周日 09:30-21:30
                                    </p>
                                </article>
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
import DwHeader from 'components/common/DwHeader'
import DwFooter from 'components/common/DwFooter'
export default {
    mounted() {
        this.$refs.header.load_completed()
    },
    components: {
        DwFooter,
        DwHeader
    }
}
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
.dw-content {
    margin-top: 180px;
    padding: 0 60px;
    .container-fluid {
        max-width: 1000px;
        margin: 0 auto;
        .dw-mainbox-title {
            margin-top: 0;
            margin-bottom: 60px;
            font-size: 25px;
            letter-spacing: .2em;
            line-height: 1;
            text-align: center;
        }
        .dw-mainbox-body {
            .shop-list-page {
                .shop {
                    &:last-of-type {
                        border: 0;
                    }
                    letter-spacing: .2em;
                    padding-bottom: 40px;
                    border-bottom: 1px solid #191919;
                    margin-bottom: 40px;
                    .shop-title {
                        font-weight: bold;
                        margin: 0;
                        line-height: 2.7;
                    }
                    .shop-info {
                        padding: 0;
                        margin: 2em 0 0 0;
                        line-height: 2.7;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>