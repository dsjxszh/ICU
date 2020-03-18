<template>
    <input v-model="inputText" />
</template>

<script>
    export default {
        inject:['farther'],
        props:{
            keyName:{
                type:String
            },
            DuoJiGaoJin:{//多级告警数组min,max,color
                type:Array,
                default(){
                    return []
                }
            },
            precision:{//小数位数
                type:Number,
                default:0
            },
            XieGang:{//允不允许输入/
                type:Boolean,
                default:false
            },
            JaJian:{//是否可-或+
                type:Boolean,
                default:false
            },
            FuShu:{//是否可输入负数
                type:Boolean,
                default:false
            },
        },
        watch:{
           inputText: {
               immediate: true,
               handler(val) {
                   console.log('监听中...',  val)
                   this.clearNoNum(val)
               }
           }
        },
        data() {
            return {
                inputText:''
            }
        },
        methods:{
            clearNoNum(value){
                if(this.precision==0){
                    if(this.XieGang ==true)
                        value = value.replace(/[^\d/]/g, "");//清除“数字”,和“/”以外的字符
                    else if(this.JaJian==true)
                        value = value.replace(/[^\d\-+]/g, "");//清除“数字”和“-”和“+”以外的字符
                    else if(this.FuShu==true)
                        value = value.replace(/[^\d-]/g, "");//清除“数字”和“-”以外的字符，可以输入负数
                    else
                        value = value.replace(/[^\d]/g, "");//清除“数字”以外的字符，只能输入正整数
                }else{
                    if(this.FuShu==true)
                        value = value.replace(/[^\d.-]/g, "");//清除“数字”和“.”和“-”以外的字符，可以输入负数
                    else if(this.JaJian==true)
                        value = value.replace(/[^\d.\-+]/g, "");//清除“数字”和“.”和“-”和“+”以外的字符
                    else if(this.XieGang ==true)
                        value = value.replace(/[^\d./]/g, "");//清除“数字”,和“/”和“.”以外的字符
                    else
                        value = value.replace(/[^\d.]/g, "");//清除“数字”和“.”以外的字符
                    
            
                    value = value.replace(/^\./g, "");//验证第一个字符是数字而不是.
                    value = value.replace(/^\//g, "");//验证第一个字符是数字而不是/
                    value= value.replace(/\.{2,}/g, ".");//只保留第一个. 清除多余的.
                    value = value.replace(".", "$#$").replace(/\./g,"").replace("$#$", ".");
                    value= value.replace(/\/{2,}/g,"/");//只保留第一个/ 清除多余的/
                    value = value.replace("/","$#$").replace(/\//g,"").replace("$#$","/");
                    if(this.FuShu==true)
                        value= value.replace(new RegExp("^((-)?\\d+\\.\\d{"+this.precision+"}).+"), "$1");//控制输入几位小数
                    else
                        value= value.replace(new RegExp("^(\\d+\\.\\d{"+this.precision+"}).+"), "$1");//控制输入几位小数
                    
                }
                    
                this.inputText = value;
                this.$nextTick(() => {
                    this.farther.form[this.keyName] = value;
                })
                
                // console.log('外界绑定的表单为:', this.farther.form)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>