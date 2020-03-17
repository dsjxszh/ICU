<template>
    <el-button :class="[className, currencyClass]" @click="func">
        <template v-if="iconName!=''"><img :src="imgSrc"/></template>
        {{text}}
    </el-button>
</template>

<script>
    import Icons from '@/utils/icon';
    export default {
        props:{
            text:{
                type:String
            },
            iconName:{
                type:String,
                default:""//赋值默认值
            },
            className:{
                type:String
            },
            func:{
                type:Function
            }
        },
        computed: {
            imgSrc() {
                return Icons[this.iconName]
            }
        },
        data() {
            return {
                ...Object.values(Icons),
                currencyClass:"button"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button{
        color: #666;
        background: #fff;
        border: 1px solid #D2D2D2;
        height: 30px;
        line-height: 28px;
        padding: 0 14px;
        font-size: 12px;
        border-radius:6px;
        &.buttonIcon{
            padding: 0 10px;
        }
        &:hover{
            border:1px solid #00A4FF;
            color:#00A4FF ;
        }
        &.buttonPrimary{
            background:linear-gradient(0deg,rgba(0,164,255,1),rgba(116,203,255,1));
            border:1px solid #00A4FF;
            color: #fff;
        }
        &.buttonPrimary:hover{
            background:linear-gradient(0deg,rgba(0,164,255,1),rgba(0,164,255,1));
        }
        &.buttonIcon.buttonPrimary{
            img{
                width: 13px;
                margin-top: 8px;
            }
        }
        img{
            width: 18px;
            margin-top: 6px;
            float: left;
            padding-right: 5px;
        }
    }
</style>