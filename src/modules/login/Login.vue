<template>
    <div id="login">
        <dw-header ref="header"></dw-header>
        <div class="dw-content clearfix">
            <div class="container-fluid content-grid">
                <div class="row-fluid">
                    <div class="dw-loginbox-container clearfix">
                        <h1 class="dw-loginbox-title">LOGIN</h1>
                        <div class="dw-loginbox-body">
                            <div class="fl">
                                <div class="dw-login">
                                    <form
                                        id="login_form"
                                        action=""
                                        autocomplete="new-password"
                                    >
                                        <div class="dw-control-group">
                                            <label
                                                class="dw-login_label"
                                                for="login_main_login"
                                                >账号</label
                                            >
                                            <input
                                                class="dw-login_input"
                                                type="text"
                                                id="login_main_login"
                                                name="user_login"
                                                size="30"
                                            />
                                        </div>
                                        <div class="dw-control-group">
                                            <label
                                                class="dw-login_label"
                                                for="login_main_login"
                                                >密码</label
                                            >
                                            <input
                                                class="dw-login_input"
                                                type="password"
                                                id="login_main_pwd"
                                                name="pwd_login"
                                                size="30"
                                            />
                                        </div>
                                        <div
                                            style="color:red;font-weight:bold;"
                                        >
                                            {{ this.login_error_info }}
                                        </div>
                                        <div class="button-container clearfix">
                                            <div class="fr">
                                                <button
                                                    @click="login_confirm"
                                                    class="dw-login_btn"
                                                    type="button"
                                                    id="login_btn"
                                                >
                                                    <font>登录</font>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="fl">
                                <div class="dw-login-info">
                                    <div class="dw-login-info_txt">
                                        <h4><font>未注册的用户:</font></h4>
                                        <p><font>通过注册, 您可以:</font></p>
                                        <ul>
                                            <li>
                                                <font
                                                    ><u
                                                        >查看订单状态和历史记录</u
                                                    ></font
                                                >
                                            </li>
                                            <li>
                                                <font
                                                    ><u
                                                        >通过第二次输入地址,
                                                        购买过程很顺利</u
                                                    ></font
                                                >
                                            </li>
                                            <li>
                                                <font
                                                    ><u
                                                        >仅限会员的广告系列等</u
                                                    ></font
                                                >
                                            </li>
                                        </ul>
                                        <a href="register">
                                            <font>新会员注册</font>
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
export default {
    name: "login",
    components: {
        dwHeader,
        dwFooter,
    },
    data() {
        return {
            login_error_info: "",
        };
    },
    mounted() {
        this.$nextTick(function() {
            setTimeout(() => {
                document
                    .querySelector(".dw-content")
                    .classList.add("content-loaded");
            }, 100);
        });
        this.$refs.header.load_completed();
    },
    methods: {
        login_verify() {
            let input_obj = document.querySelectorAll("#login_form input");
            input_obj.forEach((v, i) => {
                if (v.value == "") {
                    this.login_error_info = "请将信息填写完整";
                    return false;
                }
            });
            return true;
        },
        login_confirm() {
            if (this.login_verify() == true) {
                let input_obj = document.querySelectorAll(
                    '#login_form input[type="text"],#login_form input[type="password"]'
                );
                let upload_info = {};
                input_obj.forEach((v, i) => {
                    upload_info[v.name] = v.value;
                });
                this.$axios({
                    method: "post",
                    url: "/login",
                    data: upload_info,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    responseType: "json",
                }).then((res) => {
                    console.log(res)
                    // return
                    if (parseInt(res.data.code/100) == 4) {
                        this.login_error_info = res.data.msg;
                    } else {
                        localStorage.setItem("token", res.data.token);
                        window.location.href = "/";
                    }
                });
            }
        },
    },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
.row-fluid {
    width: 100%;
}
input[type="text"],
input[type="password"] {
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
    transition: all 0.4s;
    .content-grid {
        max-width: 1000px;
        margin: 0 auto;
        .fr {
            float: right;
            .dw-login_btn {
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
            }
            .dw-login_label {
                display: inline-block;
                padding: 6px 0;
                position: relative;
                &::after {
                    content: "*";
                    color: #a83032;
                    padding-left: 3px;
                    font-size: 13px;
                    line-height: 1px;
                }
            }
            .dw-login_input {
                width: 100%;
                margin: 0;
                display: inline-block;
            }

            // right part
            .dw-login-info {
                // margin: 46px 0 0 59px;
                margin-left: 80px;
                .dw-login-info_txt {
                    h4 {
                        padding-bottom: 10px;
                        margin: 0;
                        font-size: 19px;
                        color: #191919;
                    }
                    p {
                        padding: 6px 0;
                    }
                    ul {
                        line-height: 1.7142857142857;
                    }
                    li {
                        padding: 2px 0;
                    }
                    a {
                        display: inline-block;
                        color: #fff;
                        background-color: #191919;
                        outline: none;
                        text-align: center;
                        margin-top: 20px;
                        padding: 14px 32px;
                        border: none;
                        font-size: 12px;
                    }
                }
            }
        }
        .dw-loginbox-title {
            margin: 0 0 60px;
            font-size: 50px;
            font-weight: bold;
            letter-spacing: 0.2em;
            line-height: 1;
            text-align: center;
        }
    }
}
.dw-content.content-loaded {
    opacity: 1;
}
</style>
