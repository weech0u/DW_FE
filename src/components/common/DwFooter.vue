<template>
    <div>
        <!-- 尾部 -->
        <div class="dw-footer clearfix">
            <div class="container-fluid footer-grid clearfix">
                <div class="row-fluid clearfix">
                    <section class="home-section home-section-instagram">
                        <header class="section-header">
                            <h1 class="section-title">
                                <a href="" target="_blank">INSTAGRAM</a>
                            </h1>
                            <div class="section-more">
                                <a href="" target="_blank">
                                    all instagram >
                                </a>
                            </div>
                        </header>
                        <div class="section-body">
                            <div class="instagram-list hover-group clearfix">
                                <ul>
                                    <li>
                                        <div class="instagram-item hover-item">
                                            <div class="image">
                                                <img
                                                    src="~assets/img/home/ins-01.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="instagram-item hover-item">
                                            <div class="image">
                                                <img
                                                    src="~assets/img/home/ins-02.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="instagram-item hover-item">
                                            <div class="image">
                                                <img
                                                    src="~assets/img/home/ins-03.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="instagram-item hover-item">
                                            <div class="image">
                                                <img
                                                    src="~assets/img/home/ins-04.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="instagram-item hover-item">
                                            <div class="image">
                                                <img
                                                    src="~assets/img/home/ins-05.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="instagram-item hover-item">
                                            <div class="image">
                                                <img
                                                    src="~assets/img/home/ins-06.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="row-fluid clearfix">
                    <div class="footer-newsletter-grid">
                        <div class="dw-footer-form-block">
                            <form action="" method="post" name="subcribe_form">
                                <input
                                    type="hidden"
                                    name="redirect_url"
                                    value
                                />
                                <input
                                    type="hidden"
                                    name="newsletter_format"
                                    value
                                />
                                <h3 class="dw-footer-block-title">订阅</h3>
                                <div class="dw-footer-block-form-container">
                                    <input
                                        type="text"
                                        name="hint_subscribe_email"
                                        id="subscr_email"
                                        value="EMAIL"
                                        size="20"
                                        class="dw-input-text cm-hint" 
                                    />
                                    <button
                                        title="go"
                                        class="dw-btn-go"
                                        type="submit"
                                        @click.prevent="check();open();send_email();"
                                        :plain="true"
                                    ></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row-fluid clearfix">
                    <div class="footer-support-grid">
                        <div class="footer-support">
                            <ul>
                                <li class="shipping">
                                    <h3 class="title">
                                        <font style="">运送中</font>
                                    </h3>
                                    <p>
                                        享受全国全地区包邮，享受全国全地区包邮
                                    </p>
                                </li>
                                <li class="shipping">
                                    <h3 class="title title2">
                                        <font style="">退换货</font>
                                    </h3>
                                    <p>
                                        我们接受抵达后7天内购买的商品的退货和换货。
                                    </p>
                                </li>
                                <li class="shipping">
                                    <h3 class="title title3">
                                        <font style="">维修保养</font>
                                    </h3>
                                    <p>
                                        提供维修服务（收费），使您可以长时间使用购买的产品
                                    </p>
                                </li>
                                <li class="shipping">
                                    <h3 class="title title4">
                                        <font style="">返还优惠</font>
                                    </h3>
                                    <p>
                                        返还购买价的1％（1点可作为1日元）
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row-fluid clearfix">
                    <div class="footer-menu-grid">
                        <div class="footer-nav">
                            <ul>
                                <li>
                                    <a href="">SHOPPING GUIDE</a>
                                </li>
                                <li>
                                    <a href="">TEAM & CONDITIONS</a>
                                </li>
                                <li>
                                    <a href="">PRIVACY POLICY</a>
                                </li>
                                <li>
                                    <a href="">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-copyright">
                            <p>
                                <small>&copy; daniella&warma</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DwFooter",
    mounted() {
        this.home_ins_imgMouseOver()
        this.subscribe_onfocus()
    },
    methods: {
        open() {
            if (!this.check()) {
                 this.$alert('请输入正确的邮箱', '提示', {
                    type: 'warning',
                    confirmButtonText: '确定',
                });
                return
            }
            this.$alert('订阅成功', '提示', {
                confirmButtonText: '确定',
            });
        },
        check() {
            let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
            let obj = document.getElementById('subscr_email').value
            return reg.test(obj)
        },
        send_email() {
            if (!this.check()) return
            this.$axios.post('/sendemail',{email: document.getElementById('subscr_email').value})
            .then(res=> {
                console.log(res)
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
};
</script>

<style lang="less" scoped>
.dw-footer {
    min-height: 0;
    padding: 0 60px;
    .container-fluid {
        background: none;
        .row-fluid {
            width: 100%;
        }
        .home-section.home-section-instagram {
            position: relative;
            padding: 0;
            margin: 90px 0 0;
            .section-header {
                position: absolute;
                right: 0;
                top: -25px;
                width: 480px;
                overflow: hidden;
                text-align: left;
                .section-title {
                    font-size: 50px;
                    line-height: 1;
                    letter-spacing: 0.2em;
                    margin: 0;
                }
                .section-more {
                    padding: 6px 0;
                    font-weight: bold;
                }
            }
            .section-body {
                .instagram-list.active {
                    img {
                        opacity: .4;
                    }
                }
                .instagram-list {
                    padding: 130px 60px 0;
                    text-align: center;
                    li {
                        width: 16.666666%;
                        float: left;
                        padding: 0 6px;
                        box-sizing: border-box;
                        img {
                            width: 100%;
                            height: auto;
                            font-size: 0;
                            vertical-align: middle;
                            transition: opacity .8s;
                            
                        }
                    }
                }
            }
        }
        .footer-newsletter-grid {
            padding: 118px 0;
            text-align: center;
            .dw-footer-block-title {
                display: block;
                font-size: 50px;
                font-weight: bold;
                line-height: 1.2;
                margin-bottom: 1.2em;
                letter-spacing: .2em;
            }
            .dw-footer-block-form-container {
                display: block;
                margin: 0 auto;
                width: auto;
                max-width: 676px;
                position: relative;
                .dw-input-text  {
                    text-align: center;
                    padding: 4px 8px;
                    padding-right: calc(25% + 8px);
                    height: 40px;
                    border-color: #191919;
                    background-color: transparent;
                    outline: none;
                    width: 100%;
                    border-width: 1px;
                    letter-spacing: .2em;
                }
                .dw-btn-go {
                    position: absolute;
                    top: 1px;
                    right: 1px;
                    padding: 0 10px;
                    min-width: 32px;
                    border: 0;
                    cursor: pointer;
                    box-sizing: border-box;
                    width: 25%;
                    height: 38px;
                    background-color: #191919;
                    &::after {
                        content: 'ENTER';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        text-align: center;
                        color: #fff;
                        line-height: 38px;
                    }
                }

            }
        }
        .footer-support {
            background-color: #fff;
            padding: 80px 1.5vw;
            text-align: center;
            ul {
                display: inline-block;
                margin: 0 auto;
                li {
                    float: left;
                    width: 25%;
                    max-width: 300px;
                    padding: 0 1.5vw;
                    box-sizing: border-box;
                }
                .shipping {
                    .title {
                        margin: 0 0 1.5em;
                        padding-top: 60px;
                        background: url('~assets/img/home/support-01.png') no-repeat;
                        background-position: top center;
                        background-size: 60px 60px;
                    }
                    .title2 {
                        margin: 0 0 1.5em;
                        background: url('~assets/img/home/support-02.png') no-repeat;
                        background-position: top center;
                        background-size: 60px 60px;
                    }
                    .title3 {
                        margin: 0 0 1.5em;
                        background: url('~assets/img/home/support-03.png') no-repeat;
                        background-position: top center;
                        background-size: 60px 60px;
                    }
                    .title4 {
                        margin: 0 0 1.5em;
                        background: url('~assets/img/home/support-04.png') no-repeat;
                        background-position: top center;
                        background-size: 60px 60px;
                    }
                }
            }
        }
        .footer-nav {
            background-color: #8290a7;
            position: relative;
            z-index: 2;
            margin-left: -60px;
            margin-right: -60px;
            ul {
                text-align: center;
                li {
                    display: inline-block;
                    margin: 0 38px;
                    padding: 38px 0;
                    a {
                        color: #fff;
                    }
                }
            }
        }
        .footer-copyright {
            background-color: #8290a7;
            position: relative;
            z-index: 2;
            margin-left: -60px;
            margin-right: -60px;
            p {
                text-align: center;
                padding-bottom: 16px;
                small {
                    color: #fff;
                }
            }
        }
    }
}
</style>
