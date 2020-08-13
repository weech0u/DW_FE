<template>
    <div>
        <div class="dw-header clearfix">
            <div class="container-fluid header-grid">
                <div class="row-fluid">
                    <div>
                        <header id="site-header" class="site-header">
                            <div class="logo-grid">
                                <h1 class="site-logo">
                                    <a href="/"></a>
                                </h1>
                            </div>
                            <div class="site-header-content">
                                <div class="menu-grid">
                                    <ul class="main-menu">
                                        <li><a href="/shopping">ONLINE STORE</a></li>
                                        <li><a href="/collection">COLLETION</a></li>
                                        <!-- <li><a href="/journal">JOURNAL</a></li> -->
                                        <li><a href="/shop">SHOP</a></li>
                                    </ul>
                                </div>
                                <div class="tool-gird">
                                    <ul>
                                        <li class="account">
                                            <span class="icon">
                                                <transition name="fade">
                                                    <ul v-if="!show">
                                                        <li>
                                                            <a href="/register">注册</a>
                                                        </li>
                                                        <li>
                                                            <a href="/login">登录</a>
                                                        </li>
                                                    </ul>
                                                    <ul v-if="show">
                                                        <li>
                                                            <a href="/profile">个人信息</a>
                                                        </li>
                                                        <!-- <li>
                                                            <a href="#">浏览历史</a>
                                                        </li> -->
                                                        <li>
                                                            <a @click="sign_out()">登出</a>
                                                        </li>
                                                    </ul>
                                                </transition>
                                            </span>
                                        </li>
                                        <li class="bookmark">
                                            <a @click.prevent="checkPermission(1)" href="/bookmark" class="icon">
                                                <span></span>
                                            </a>
                                        </li>
                                        <li class="cart">
                                            <a @click.prevent="checkPermission(2)" href="/cart" class="icon">
                                                <span></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dwHeader',
        data() {
            return {
                login_showa: ''
            }
        },
        computed: {
            show() {
                return this.login_show||this.login_showa
            }
        },
        mounted() {
            let lm = localStorage.getItem('login_message')
            if(!lm) return
            if(lm.length) {
                this.login_showa = true
            }
        },
        methods: {
            checkPermission(t) {
                let lm = JSON.parse(localStorage.getItem("login_message"))
                if (!lm) {
                    this.$alert('请先登录', '提示', {
                        type: 'warning',
                        confirmButtonText: '确定',
                    });
                    return
                }else {
                    if(t === 1) {
                        window.location.href = '/bookmark'
                        return
                    }
                    window.location.href = '/cart'
                }
            },
            load_completed() {
                document.querySelector('.dw-header').classList.add('load-completed')
            },
            sign_out() {
                localStorage.clear()
                window.location.href = '/'
            }
        },
        props: ['login_show']
    }
</script>

<style lang="less" scoped>
.dw-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 0 60px;
    border-bottom: 1px solid #e9e9e9;
    background-color: #f4f0e9;
    .row-fluid {
        width: 100%;
    }
    // logo part
    .logo-grid {
        opacity: 0;
        transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
        .site-logo {
            position: absolute;
            left: 23px;
            top: 45px;
            width: 375px;
            height: 170px;
            transform: scale(.8);
            background: url("~assets/img/logo.png") no-repeat left top / contain;
            margin: 0;
            transition: all 0.6s;
            a {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        @media (min-width: 992px) {
            .site-logo {
                width: 21vw;
            }
        }
    }

    .site-header-content {
        display: table;
        height: 140px;
        margin-left: 35%;
        width: 65%;
        background-color: #f4f0e9;
        // menu part
        .menu-grid {
            display: table-cell;
            vertical-align: middle;
            font-weight: bold;
            letter-spacing: 0.2em;
            .main-menu {
                overflow: hidden;
            }
            li {
                float: left;
                margin: 0 20px;
            }
        }
        // tool part
        .tool-gird {
            display: table-cell;
            vertical-align: middle;
            ul {
                float: right;
                display: table;
                height: 100%;
                .icon span {
                    position: absolute;
                    left: 18px;
                    font-size: 16px;
                    &::before {
                        // content: '(';
                    }
                    &::after {
                        // content: ')';
                    }
                }
                li {
                    display: table-cell;
                    vertical-align: middle;
                }
                .account {
                    position: relative;
                }
                .account .icon {
                    background-image: url("~assets/img/header-icon-account.svg");
                }
                .account .icon:hover ul {
                    opacity: 1;
                    pointer-events: all;
                }
                .account ul {
                    position: absolute;
                    display: block;
                    border: 1px solid #aaa;
                    background-color: #fff;
                    top: 100%;
                    left: -14px;
                    height: auto;
                    padding: 8px 0;
                    transition: opacity 0.4s;
                    pointer-events: none;
                    opacity: 0;
                    li {
                        display: block;
                        line-height: 1.7142857142857;
                        a {
                            min-width: 160px;
                            display: block;
                            text-align: left;
                            padding: 3px 14px;
                            white-space: nowrap;
                        }
                    }
                }
                .bookmark .icon {
                    background-size: 24px auto;
                    background-image: url("~assets/img/header-icon-bookmark.svg");
                    & span {
                        left: 24px;
                    }
                }
                .cart .icon {
                    background-image: url("~assets/img/header-icon-cart.svg");
                }
                .icon {
                    position: relative;
                    display: block;
                    min-width: 72px;
                    min-height: 40px;
                    line-height: 40px;
                    background-size: 17px auto;
                    background-position: left center;
                    background-repeat: no-repeat;
                    cursor: pointer;
                }
                @media (max-width: 1200px) {
                    .account .icon {
                        min-width: 62px;
                    }
                    .bookmark .icon {
                        min-width: 58px;
                    }
                    .cart .icon {
                        min-width: 22px;
                    }
                }
            }
        }
    }
    @media (max-width: 1500px) {
        .site-header-content {
            margin-left: 35%;
            width: 65%;
        }
    }
    @media (max-width: 1300px) {
        .site-header-content {
            margin-left: 30%;
            width: 70%;
        }
    }
    @media (max-width: 1100px) {
        .site-header-content {
            margin-left: 25%;
            width: 75%;
        }
    }
}

.load-completed .logo-grid {
    opacity: 1;
}
// header end
</style>