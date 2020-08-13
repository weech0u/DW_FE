<template>
    <div id="login">
        <dw-header ref="header"></dw-header>
        <div class="dw-content clearfix">
            <div class="container-fluid content-grid">
                <div class="row-fluid">
                    <div class="breadcrumbs-grid">
                        <ul class="dw-text-links clearfix">
                            <li :class="{ 'link-active': toggle }">
                                <a @click="toggle = !toggle" href="#"
                                    ><font>编辑会员信息</font></a
                                >
                            </li>
                            <li :class="{ 'link-active': !toggle }">
                                <a @click="toggle = !toggle" href="#"
                                    ><font>订单记录</font></a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row-fluid">
                    <transition name="fade">
                        <div
                            v-show="toggle"
                            class="dw-loginbox-container clearfix"
                        >
                            <h1 class="dw-loginbox-title">会员信息</h1>
                            <div class="dw-loginbox-body">
                                <div class="fl">
                                    <div class="dw-login">
                                        <form
                                            method="POST"
                                            id="login_form"
                                            @submit.prevent="
                                                profile_edit($event)
                                            "
                                            autocomplete="off"
                                        >
                                            <div class="dw-control-group">
                                                <label
                                                    class="dw-login_label"
                                                    for="login_main_login"
                                                    >电子邮箱</label
                                                >
                                                <input
                                                    class="dw-login_input"
                                                    type="text"
                                                    id="edit_email"
                                                    name="edit_email"
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
                                                    id="edit_pwd"
                                                    name="edit_pwd"
                                                    size="30"
                                                />
                                            </div>
                                            <div class="dw-control-group">
                                                <label
                                                    class="dw-login_label"
                                                    for="login_main_login"
                                                    >密码(重新输入)</label
                                                >
                                                <input
                                                    class="dw-login_input"
                                                    type="password"
                                                    id="edit_pwd2"
                                                    name="edit_pwd2"
                                                    size="30"
                                                />
                                            </div>
                                            <div class="dw-control-group">
                                                <label
                                                    class="dw-login_label"
                                                    for="login_main_login"
                                                    >地址</label
                                                >
                                                <input
                                                    class="dw-login_input"
                                                    type="text"
                                                    id="edit_address"
                                                    name="edit_address"
                                                    size="30"
                                                />
                                            </div>
                                            <div class="dw-control-group">
                                                <label
                                                    class="dw-login_label"
                                                    for="login_main_login"
                                                    >邮编</label
                                                >
                                                <input
                                                    class="dw-login_input"
                                                    type="text"
                                                    id="edit_zip"
                                                    name="edit_zip"
                                                    size="30"
                                                />
                                            </div>
                                            <input
                                                class="dw-login_input"
                                                type="hidden"
                                                id="user_id"
                                                name="user_id"
                                                size="30"
                                            />
                                            <div class="button-container">
                                                <div class="fr">
                                                    <button
                                                        class="dw-login_btn"
                                                        type="submit"
                                                        id="save_btn"
                                                    >
                                                        <font>保存</font>
                                                    </button>
                                                    <button
                                                        @click="
                                                            completed_form()
                                                        "
                                                        class="dw-login_btn"
                                                        type="button"
                                                        id="login_btn"
                                                    >
                                                        <font>还原</font>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="fl">
                                    <div class="dw-login-info">
                                        <div class="dw-login-info_txt">
                                            <h4><font>更新会员信息:</font></h4>
                                            <p>
                                                <font
                                                    >在此页面上,
                                                    您可以更新您的注册会员信息</font
                                                >
                                            </p>
                                            <p>
                                                <font
                                                    >避免使用以下内容设置密码以提高安全性:</font
                                                >
                                            </p>
                                            <ul>
                                                <li>
                                                    <font>普通英文单词</font>
                                                </li>
                                                <li>
                                                    <font
                                                        >连续的数字或字符串，或重复相同的字符，例如：12345678、222222，abcdefg等</font
                                                    >
                                                </li>
                                                <li>
                                                    <font
                                                        >可以轻松联想到的个人信息。例如：姓名，生日，驾照号码，护照号码等。</font
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <transition name="fade">
                        <div v-show="!toggle">
                            <table class="dw-table dw-orders-search">
                                <thead>
                                    <tr>
                                        <th>订单号</th>
                                        <th>交易快照</th>
                                        <th>交易日期</th>
                                        <th>合计</th>
                                    </tr>
                                </thead>
                                <tbody v-if="ifEmpty">
                                    <tr>
                                        <td colspan="7">
                                            <p class="dw-no-items">
                                                empty
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody v-if="!ifEmpty">
                                    <tr v-for="(item,i) in order_list" :key="i">
                                        <td>{{item.o_iid}}</td>
                                        <td>
                                            <el-popover
                                                placement="right"
                                                :title="item.name"
                                                width="200"
                                                trigger="click">
                                                <img :src="item.img" alt="" style="width:100%">
                                                <p>收货地址:<b>{{item.address}}</b></p>
                                                <p>预计到货日期:<b>{{item.aTime}}</b></p>
                                                <p>商品参数:<b>{{item.args}}</b></p>
                                                <el-button slot="reference">查看</el-button>
                                            </el-popover>
                                        </td>
                                        <td>{{item.cTime}}</td>
                                        <td>{{item.pays}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </transition>
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
            origin_data: "",
            toggle: true,
            order_list: [],
            ifEmpty: false,
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

        this.get_orders()

        this.$refs.header.load_completed();
        this.completed_form();
    },
    methods: {
        get_orders() {
            this.$axios.get('/order',{}).then(res=>{
                console.log(res)
                this.order_list = res.data.order_list
                this.order_list.map(res=>{
                    var info = res.snapshot.split(',')
                    res.cTime = res.cTime.split('T').join(' ')
                    res.img = info[0]
                    res.name = info[1]
                    res.address = info[2]
                    res.aTime = info[3]
                    res.args = info[4]

                    console.log(res)
                    return res
                })
                // this.order_list.append()
            })
        },
        profile_edit() {
            let input_obj = document.querySelectorAll("#login_form input");
            let upload_info = {};
            input_obj.forEach((v, i) => {
                upload_info[v.name] = v.value;
            });
            this.$axios({
                method: "post",
                url: "/edit",
                data: upload_info,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                responseType: "json",
            }).then((res) => {
                localStorage.setItem(
                    "login_message",
                    JSON.stringify(res.data.login_message.data)
                );
                window.location.href = "/";
            });
        },
        completed_form() {
            let obj = document.querySelectorAll("#login_form input");
            let s_user_data = JSON.parse(localStorage.getItem("login_message"));
            obj[0].value = s_user_data.email;
            obj[1].value = obj[2].value = s_user_data.pwd;
            obj[3].value = s_user_data.address;
            obj[4].value = s_user_data.Zip;
            obj[5].value = s_user_data.id;
        },
    },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.css";
@import "~assets/css/normalize.css";
// 重写elementui样式
.el-popover__reference {
    border: none
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.row-fluid {
    width: 100%;
}
.dw-table {
    position: relative;
    width: 100%;
    margin-top: 30px;
    border: 1px solid #f4f0e9;
    border-width: 1px 0px 1px 1px;
    border-bottom: none;
    thead {
        tr {
            background-color: #fff;
            th {
                color: #404040;
                font-weight: bold;
                padding: 12px;
                border-right: 1px solid #f4f0e9;
                border-bottom: 1px solid #f4f0e9;
                background: #fbf9f7;
                text-align: left;
                text-transform: none;
                white-space: nowrap;
                font-weight: bold;
                line-height: normal;
            }
        }
    }
    tbody {
        tr {
            background-color: #fff;
            td {
                padding: 13px;
                border-right: 1px solid #ecf0f1;
                border-bottom: 1px solid #ecf0f1;
                p.dw-no-items {
                    padding: 60px 20px;
                    background: #f8f9f9;
                    color: #bdc3c7;
                    text-align: center;
                    font-size: 115%;
                    margin-bottom: 20px;
                }
            }
        }
    }
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

.dw-text-links {
    text-align: center;
    margin-bottom: 40px;
    li {
        display: inline-block;
        &:first-child {
            margin-right: 10px;
        }
        &.link-active a {
            background-color: #191919;
            color: #fff;
        }
        a {
            display: inline-block;
            border: 1px solid #191919;
            padding: 12px 48px;
            font-size: 12px;
            transition: all 0.3s;
            &:hover {
                background-color: #191919;
                color: #fff;
            }
        }
    }
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
            text-align: center;
            .dw-login_btn {
                &:first-child {
                    margin-right: 20px;
                }
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
                    line-height: 3em;
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
                        list-style: disc;
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
