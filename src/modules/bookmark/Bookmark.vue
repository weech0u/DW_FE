<template>
    <div>
        <dw-header ref="header"></dw-header>
        <div class="dw-container clearfix">
            <div class="container-fluid clearfix">
                <div class="row-fluid" style="width:100%">
                    <div class="dw-mainbox-container clearfix">
                        <h1 class="dw-mainbox-title">
                            BOOKMARK
                        </h1>
                        <div class="dw-mainbox-body">
                            <div class="mainbox_empty" v-if="ifEmpty">
                                Empty
                            </div>
                            <div
                                v-for="item in products_list"
                                :key="item.id"
                                class="dw-column4"
                            >
                                <transition appear name="fade">
                                    <dw-column
                                        v-if="!ifEmpty"
                                        @click.prevent.native="
                                            goToDetail(item.p_iid)
                                        "
                                        :swiperId="item.id"
                                        :name="item.p_iid"
                                        :price="item.p_oripcice"
                                        :covers="item.p_cover"
                                        :imgRange="item.p_pics_url"
                                    >
                                    </dw-column>
                                </transition>
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
    data() {
        return {
            ifEmpty: true,
            products_list: []
        };
    },
    components: {
        dwFooter,
        dwHeader,
        dwColumn
    },
    mounted() {
        this.$refs.header.load_completed();

        const login_message = localStorage.getItem("login_message");
        const token = localStorage.getItem('token')
        // 获取列表
        if (login_message) {
        this.$axios
            .get("/getbookmark", {
                params: { uid: JSON.parse(login_message).id },
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(res => {
                console.log(res.data)
                if (res.data.p_list.length == 0) {
                    this.ifEmpty = true
                } else {
                    this.ifEmpty = false
                    this.products_list = res.data.p_list
                    console.log(this.products_list)
                }
            });
        }
    },
    methods: {
        goToDetail(iid) {
            window.location.href = '/details?'+iid;
        }
    },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
@import "../../../node_modules/swiper/css/swiper.css";

.dw-container {
    margin-top: 180px;

    .container-fluid {
        max-width: 1000px;
        margin: 0 auto;
        .dw-mainbox-container {
            
            .dw-mainbox-title {
                margin: 0 0 60px;
                font-size: 50px;
                font-weight: bold;
                letter-spacing: 0.2em;
                line-height: 1;
                text-align: center;
            }
            .dw-mainbox-body {
                width: 100%;
                display: table;
                .mainbox_empty {
                    background-color: #fff;
                    display: table-cell;
                    vertical-align: middle;
                    height: 230px;
                    color: gray;
                    font-size: 30px;
                    text-align: center;
                }
                .dw-column4 {
                    width: 25%;
                    display: inline-block;
                    vertical-align: top;
                    margin-right: -.25em;
                    // border: 1px solid #191919;
                }
            }
            
        }
    }
}
</style>
