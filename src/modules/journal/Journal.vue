<template>
    <div>
        <dw-header ref="header"></dw-header>
        <div class="dw-content">

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
    padding: 60px 0;
}
</style>