<template>
    <div id="register">
        <dw-header ref="header"></dw-header>
        <div class="dw-content clearfix">
            <div class="container-fluid content-grid">
                <div class="row-fluid">
                    <div class="dw-registerbox-container clearfix">
                        <h1 class="dw-registerbox-title">REGISTER</h1>
                        <div class="dw-registerbox-body">
                            <div class="fl">
                                <div class="dw-register">
                                    <form id="register_form" @submit.prevent="register_submit($event)" method="POST" autocomplete="new-password">
                                        <div class="dw-control-group">
                                            <label class="dw-register_label" for="register_main_register">账号</label>
                                            <input class="dw-register_input" type="text" name="user_register" size="30">
                                            <p>{{ username_error_message }}</p>
                                        </div>
                                        <div class="dw-control-group">
                                            <label class="dw-register_label" for="register_main_register">密码</label>
                                            <input class="dw-register_input" type="password" id="register_pwd" name="pwd_register" size="30">
                                            <p>{{ pwd_error_message }}</p>
                                        </div>
                                        <div class="dw-control-group">
                                            <label class="dw-register_label" for="register_main_register">确认密码</label>
                                            <input class="dw-register_input" type="password" id="register_pwd2" name="pwd_register" size="30">
                                            <p>{{ pwd2_error_message }}</p>
                                        </div>
                                        <div class="dw-control-group">
                                            <label class="dw-register_label" for="register_main_register">电子邮箱</label>
                                            <input class="dw-register_input" type="text" name="email_register" size="30">
                                            <p>{{ email_error_message }}</p>
                                        </div>
                                        <div class="button-container clearfix">
                                            <div class="fc">
                                                <button @click="register_confirm" class="dw-register_btn" type="submit" id="register_btn">
                                                    <font>点击注册</font>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="fl">
                                <div class="dw-register-info">
                                    <div class="dw-register-info_txt">
                                        <p><font>通过注册, 您可以:</font></p>
                                        <ul>
                                            <li><font>查看订单状态和历史记录</font></li>
                                            <li><font>通过第二次输入地址, 购买过程很顺利</font></li>
                                            <li><font>仅限会员的广告系列等</font></li>
                                        </ul>
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
import dwHeader from 'components/common/DwHeader'
import dwFooter from 'components/common/DwFooter'
    export default {
        name: "register",
        components: {
            dwHeader,
            dwFooter
        },
        data() {
            return {
                username_error_message: '',
                pwd_error_message: '',
                pwd2_error_message: '',
                email_error_message: ''
            }
        },
        mounted() {
          this.$nextTick(function() {
              setTimeout(()=> {
                document.querySelector('.dw-content').classList.add('content-loaded')
              },100)
          })  
          this.$refs.header.load_completed()
        },
        methods: {
            register_submit() {
                if (this.register_confirm() == true) {
                    let input_obj = document.querySelectorAll('#register_form input[type="text"],#register_form input[type="password"]')
                    let upload_info = {}
                    input_obj.forEach((v,i) => {
                        upload_info[v.name] = v.value
                    })
                    this.$axios({
                        method: 'POST',
                        url: '/register',
                        data: upload_info
                    })
                    .then(res => {
                        window.location.href = '/login'
                    })
                }
            },
            register_confirm() {
                let input_obj = document.querySelectorAll('.dw-register_input')
                // 把字符串中所有的空格替换为空
                if (input_obj[0].value.replace('/\s/g') == '') {
                    this.username_error_message = '用户名不能为空'
                    return false
                }
                else if (input_obj[1].value.replace('/\s/g') == '') {
                    this.pwd_error_message = '密码不能为空'
                    return false
                }
                else if (input_obj[2].value.replace('/\s/g') == '') {
                    this.pwd2_error_message = '请确认密码'
                    return false
                }
                else if (input_obj[1].value != input_obj[2].value) {
                    this.pwd2_error_message = '两次密码不一, 请重新输入'
                    return false
                }
                else if (input_obj[3].value.replace('/\s/g') == '') {
                    this.email = '请填写电子邮箱'
                    return false
                }
                return true
            }
        },
    }
</script>

<style lang='less' scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
.row-fluid {
    width: 100%;
}
input[type="text"],input[type="password"] {
    border-color: #191919;
    background-color: transparent;
    border-radius: 0;
    height: 32px;
    padding: 4px 8px;
    border: 1px solid #191919;
    outline: none;
}
.dw-content {
    margin-top: 180px;
    padding: 0 60px;
    /* background-color: yellow; */
    opacity: 0;
    transition: all .4s;
    .content-grid {
        max-width: 1000px;
        margin: 0 auto;
        .fc {
            text-align: center;
            .dw-register_btn {
                background-color: #191919;
                color: #fff;
                padding: 10px 32px;
                cursor: pointer;
            }
        }
        .fl {
            width: 49%;
            float: left;
            // left part
            .dw-control-group {
                margin-bottom: 12px;
                p {
                    margin-top: 10px;
                    font-weight: bold;
                    color: red;
                }
            }
            .dw-register_label {
                display: inline-block;
                padding: 6px 0;
                position: relative;
                &::after {
                    content: '*';
                    color: #a83032;
                    padding-left: 3px;
                    font-size: 13px;
                    line-height: 1px;
                }
            }
            .dw-register_input {
                width: 100%;
                margin: 0;
                display: inline-block;
            }

            // right part
            .dw-register-info {
                // margin: 46px 0 0 59px;
                margin-left: 80px;
                .dw-register-info_txt {
                    h4 {
                        padding-bottom: 10px;
                        margin: 0;
                        font-size: 19px;
                        color: #191919;
                    }
                    p {
                        padding: 16px 0;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    ul {
                        line-height:1.7142857142857;
                    }
                    li {
                        padding: 10px 0; 
                        list-style-type: disc;
                    }
                    a {
                        display: inline-block;
                        color: #fff;
                        background-color: #191919;
                        outline: none;
                        text-align: center;
                        margin-top: 20px;
                        padding: 14px 32px;
                        border:none;
                        font-size: 12px;
                    }
                }
            }
        }
        .dw-registerbox-title {
            margin: 0 0 60px;
            font-size: 50px;
            font-weight: bold;
            letter-spacing: .2em;
            line-height: 1;
            text-align: center;
        }
    }
}
.dw-content.content-loaded {
    opacity: 1;
}
</style>