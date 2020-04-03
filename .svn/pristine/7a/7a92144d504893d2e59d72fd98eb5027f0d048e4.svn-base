<template>
    <div class="header">
        <a>
            <img src="../../../assets/image/logo@2x.png" />
            <span>重症监护系统6.0</span>
        </a>
        <Menu @handleSelect="selectItem" />
        <div class="right">
            <img class="logo" src="../../../assets/image/logo.jpg" />
            <span class="admin">管理员</span> 
            <a>
                <img src="../../../assets/image/YJ@2x.png" />
            </a>
            <a>
                <img src="../../../assets/image/XGMM@2x.png" />
            </a>
            <a>
                <img src="../../../assets/image/TC@2x.png" />
            </a>
            <a>
                <img src="../../../assets/image/JBDL@2x.png" />
            </a>
        </div>
    </div>
</template>

<script>
import Menu from './menu';
import LayoutMixins from '@/mixins/layout';
export default {
    mixins: [LayoutMixins],
    components: {
        Menu
    },
    methods: {
        selectItem(e) {
            // console.log('选中的项目为:', e)
            this.setTab({
                name: e,
                title: e,
                content: 'Entry'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    a {
        position: relative;
        line-height: 56px;
        img {
            width: 159px;
            margin-top: -5px;
            margin-left: 12px;
            vertical-align: middle;
            display: inline-block;
        }
        span {
            position: absolute;
            width:90px;
            height:11px;
            font-size:12px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(0,97,193,1);
            text-shadow:0px 1px 0px rgba(255,255,255,0.3);
            margin-left: 11px;
            top: 4px;
        }
    }

    .right {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .logo {
            cursor: pointer;
            width:36px;
            height:36px;
            border-radius:18px;
            margin-right: 9px;
        }
        .admin {
            width: 60px;
            font-size:12px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(0,97,193,1);
            text-shadow:0px 1px 0px rgba(255,255,255,0.3);
        }
        a {
            cursor: pointer;
            &::before {
                content: '';
                width: 2px;
                height: 20px;
                position: absolute;
                left: 0px;
                top: 18px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url('../../../assets/image/layuinavitem@2x.png');
            }
            &:first-child {
                &::before {
                    width: 0;
                }
            }
            img {
                width: 24px;
                height: 24px;
                margin-right: 10px;
                border-radius: 50%;
                z-index: 2000;
            }
        }
        
    }
    
    width: 100%;
    height:56px;
    background:linear-gradient(90deg,rgba(116,203,255,1),rgba(55,184,255,1));
    z-index: 1001;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        height: 56px;
        width: 100%;
        background-size: contain;
        background-position: left;
        background-repeat: no-repeat;
        background-image: url('../../../assets/image/headerbg@2x.png');
        z-index: -1;
    }
}
</style>