<template>
    <el-button :class="[className, (single?singleClass:currencyClass)]" @click="func">
        <template v-if="single"><img :src="icon(iconNameNew)" :title="text" @mouseover="switchImgOver()" @mouseout="switchImgOut()"></template>
        <template v-else>
            <template v-if="iconName!=''"><img :src="icon(iconNameNew)"/></template>
            {{text}}
        </template>
    </el-button>
</template>

<script>
    export default {
        props:{
            text:{
                type:String
            },
            iconName:{
                type:String,
                default:""//赋值默认值
            },
            single:{
                type:Boolean,
                default:false//赋值默认值
            },
            className:{
                type:String,
                default:""//赋值默认值
            },
            func:{
                type:Function
            }
        },
        data() {
            return {
                currencyClass:"button",
                singleClass:"singleClass",
                iconNameNew:this.iconName
            }
        },
        methods:{
            switchImgOver (){
                return this.iconNameNew=this.iconName+"_hover";
            },
            switchImgOut (){
                return this.iconNameNew=this.iconName;
            },
            icon(name) {
                return require(`@/assets/image/${name}@2x.png`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .singleClass{
        border: 0px;
        padding: 0px;
        background: transparent;
        img{
            height: 24px;
        }
        &.singleClass30{
            img{
                height: 30px;
            }
        }
    }
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
            width: 13px;
            margin-top: 8px;
            float: left;
            padding-right: 5px;
        }
    }
</style>