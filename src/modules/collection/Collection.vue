<template>
    <div>
        <dw-header ref="header"></dw-header>
        <div class="dw-content clearfix">
            <div class="container-fluid content-grid">
                <div class="dw-mainbox-body">
                    <div class="collection-page">
                        <div class="collection-list hover-group">
                            <ul v-for="i in 30" :key="i">
                                <li>
                                    <div class="hover-item">
                                        <img :src="'http://localhost:8000/imagesc/20ss_'+i+'.jpg'" alt="">
                                    </div>
                                </li>
                            </ul>
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
    name: 'Collection',
    data() {
        return {
            img_list: []
        }
    },
    components: {
        DwHeader,
        DwFooter
    },
    mounted() {
        this.$refs.header.load_completed();
    },
}
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
.dw-content {
    margin-top: 180px;
    padding: 0 60px;
    .collection-list {
        margin: 32px 0;
        li {
            // clear: left;
            float: left;
            width: 33.33333%;
            padding: 16px;
            box-sizing: border-box;
            .hover-item {
                cursor: pointer;
                position: relative;
                overflow: hidden;
                
                img {
                    transform: none;
                    width: 100%;
                    transition: all .5s;
                }
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    border: 0px solid #f5f0e9;
                    transition: all .5s;
                    
                }
                &:hover::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    border: 15px solid #f5f0e9;
                }
                &:hover {
                    img {
                        transform: scale(1.1);
                    }
                }
            }
           
        }
    }
}
</style>