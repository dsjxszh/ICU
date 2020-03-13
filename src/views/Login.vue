<template>
    <div class="login">
        <div class="loginbg">
            <img src="../assets/image/loginleft@2x.png" />
            <img src="../assets/image/loginleft2@2x.png" />
            <img src="../assets/image/loginright@2x.png" />
        </div>
        <el-form 
            ref="loginForm" 
            class="form"
        >
            <dl class="systemname">
                <dt><img src="../assets/image/login-logo@2x.png" /></dt>
                <dd style="display: inline-block;">
                    <p class="name">{{ HospitalName }}</p>
                    <p class="Eng">{{ HospitalEnglishName }}</p>
                </dd>
            </dl>
            <ul class="loginfromxinxi">
                <li :class="useron">
                    <i class="user-icon"></i>
                    <input autocomplete="off" type="text" placeholder="用户名" v-model="form.username" @focus="userFocus" />
                    <s class="user-caozuo" @click="clearName"></s>
                </li>
                <li :class="pwdon">
                    <i class="password-icon"></i>
                    <input :type="pwdType" placeholder="密码" v-model="form.password" @focus="pwdFocus" />
                    <s :class="[password, display]" @click="toggle"></s>
                </li>
                <li v-if="verification" :class="codeon">
                    <i class="password-icon"></i>
                    <input :type="codeType" placeholder="授权码" v-model="form.code" @focus="codeFocus" />
                    <s :class="[password, codeDisplay]" @click="codeToggle"></s>
                </li>
            </ul>
            <button
                class="btnlogin"
                @click.prevent="handleLogin"
            >
                登录
            </button>
        </el-form>
        <div class="footer">
            <p>版权所有：江苏达实久信数字医疗科技有限公司</p>
        </div>
    </div>
</template>

<script>
// import logo from '@/assets/image/logo.png';
// import Cookies from "js-cookie";
export default {
    name: "Login",
    methods: {
        handleLogin() {
            console.log(this.form);
            this.$router.push({ path: '/dashboard' })
        },
        clearName() {
            this.form.username = '';
        },
        toggle() {
            this.display = this.display === 'DisplayPassword' ? '' : 'DisplayPassword';
            this.pwdType = this.display === 'DisplayPassword' ? '' : 'password';
        },
        codeToggle() {
            this.codeDisplay = this.codeDisplay === 'CodeDisplayPassword' ? '' : 'CodeDisplayPassword';
            this.codeType = this.codeDisplay === 'CodeDisplayPassword' ? '' : 'password';
        },
        userFocus() {
            this.useron = 'useron';
            this.pwdon = '';
            this.codeon = '';
        },
        pwdFocus() {
            this.useron = '';
            this.pwdon = 'pwdon';
            this.codeon = '';
        },
        codeFocus() {
            this.useron = '';
            this.pwdon = '';
            this.codeon = 'codeon';
        }
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
                code: ''
            },
            user: 'user-icon',
            useron: '',
            pwdon: '',
            codeon: '',
            password: 'password-caozuo',
            display: '',
            codeDisplay: '',
            pwdType: 'password',
            codeType: 'password',
            verification: false,
            HospitalName: '常州江南医院',
            HospitalEnglishName: 'Das JiuXin Intelligence Hospital'
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:linear-gradient(90deg,rgba(116,203,255,1),rgba(55,184,255,1));
    .loginbg {
        img {
            position: fixed;
            z-index: -1;
        }
        img:first-child{
            position: fixed;
            top: 0px;
            left: 0px;
            height: 52%;
        }
        img:nth-child(2){
            bottom: 0px;
            left: 0px;
            height: 23%;
        }
        img:nth-child(3){
            bottom: 0px;
            right: 0px;
            height: 88%;
        }
    }

    .loginfromxinxi{
        width: 260px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        li{
            height:46px;
            line-height: 46px;
            background:#F7F7F7;
            box-shadow:0px 1px 3px 0px rgba(0,0,0,0.5) inset;
            border-radius:23px;
            margin: 18px 0px;
            list-style-type: none;
            padding: 0;
            i {
                float: left;
                margin-left: 16px;
                height: 46px;
                width: 24px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url('../assets/image/usert@2x.png');
                cursor: pointer;
                &.password-icon {
                    background-image: url('../assets/image/passwordt@2x.png');
                }
            }
            &.useron {
                i {
                    background-image: url('../assets/image/usert_hover@2x.png');
                }
            }
            &.pwdon {
                i {
                    background-image: url('../assets/image/passwordt_hover@2x.png');
                }
            }
            &.codeon {
                i {
                    background-image: url('../assets/image/passwordt_hover@2x.png');
                }
            }
            s {
                float: left;
                height: 46px;
                width: 24px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                cursor: pointer;
                &.user-caozuo {
                    background-image: url('../assets/image/Rectangle2@2x.png');
                    &:hover {
                        background-image: url('../assets/image/Rectangle2_hover@2x.png');
                    }
                }
                &.password-caozuo {
                    background-image: url('../assets/image/password@2x.png');
                    &:hover {
                        background-image: url('../assets/image/password_hover@2x.png');
                    }
                }
                &.DisplayPassword {
                    background-image: url('../assets/image/DisplayPassword@2x.png');
                    &:hover {
                        background-image: url('../assets/image/DisplayPassword_hover@2x.png');
                    }
                }
                &.CodeDisplayPassword {
                    background-image: url('../assets/image/DisplayPassword@2x.png');
                    &:hover {
                        background-image: url('../assets/image/DisplayPassword_hover@2x.png');
                    }
                }
            }
            input {
                float: left;
                height: 34px;
                line-height: 34px;
                border:0px;
                background: transparent;
                margin-top: 4px;
                padding-left: 10px;
                color: #999;
                &:focus {
                    outline: none;
                }
            }
        }
        
    }

    .form {
        background-color: white;
        width: 40%;
        min-height: 420px;
        box-shadow:0px 0px 20px 0px rgba(0,164,255,0.5);
        border-radius:4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .systemname {
            dt {
                height: 78px;
                display: inline-block;
            }
            img {
                height: 100%;
                float: left;
            }
            .name {
                font-size:36px;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(0,164,255,1);
                margin: 0;
            }
            .Eng {
                font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,164,255,1);
                margin: 8px;
            }
        }
        
        .btnlogin{
            width:260px;
            height:54px;
            line-height: 54px;
            background: linear-gradient(0deg,rgba(116,203,255,1),rgba(55,184,255,1));
            border:1px solid #00A4FF;
            box-shadow:0px 4px 0px 0px #00A4FF;
            border-radius:6px;
            color: #fff;
            font-weight:bold;
            text-shadow:0px 1px 1px #00A4FF;
            cursor: pointer;
            margin-bottom: 50px;
            &:hover {
                background: linear-gradient(0deg, #37B8FF, #74CBFF);
            }
        }
    }

    .footer{
        font-size:18px;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        color:#008AFF;
        text-shadow:0px 1px 0px rgba(255,255,255,0.5);
        width: 70%;
        margin: 0px auto;
        text-align: center;
        p {
            padding: 10px;
        }
        p:first-child {
            border-bottom: 1px solid #008AFF;
            box-shadow:0px 1px 0px 0px rgba(255,255,255,0.5);
        }
    }
}
</style>

