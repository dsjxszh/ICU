<template>
    <input ref="Numininput" class="inputstlye" :class="active" @focus="focusss"
        :style="style"
        v-model="inputText"
        @input="change" />
</template>

<script>
    //  护理单表格中的数值校验文本输入框
import NursingMixins from '@/mixins/nursing';  
    export default {
        inject:['farther'],
        props:{
            x: {
                type: Number
            }, 
            y: {

                type: Number
            },
            z: {
                type: Number
            },
            attr:{
                type:Object,
            },
            keyName: {
                type: String
            }
        },
        mounted(){
            if (this.position.x === this.x && this.position.y === this.y && this.position.z === this.z) { //当是焦点时，就要获取光标
                this.$refs.Numininput&&this.$refs.Numininput.focus()
                if (this.formData[this.x - 1] && this.formData[this.x - 1][this.keyName]) {
                    this.inputText = this.formData[this.x - 1][this.keyName]
                }
            }
        },
        watch: {
            enterClick: {
                immediate: true,
                handler(val, oldVal) {
                    if (val && !oldVal) {
                        if (this.position.x === this.x && this.position.y === this.y && this.position.z === this.z) { // 要同时按下enter键并且位置相同才能触发
                            this.setEnter(false);
                        }
                    }
                }
            },
            position: {
                immediate: true,
                handler(val) {
                    if ((val.x === this.x) || (val.y === this.y && val.z === this.z)) {
                        this.active = 'active';
                    } else {
                        this.active = ''
                    }
                
                    if (val.x === this.x && val.y === this.y && val.z === this.z) {
                        this.$refs.Numininput&&this.$refs.Numininput.focus()
                        this.active = 'z-active';
                    } else {
                        this.$refs.Numininput&&this.$refs.Numininput.blur()
                    }
                }
            },
            formData: {
                immediate: true,
                deep: true,
                handler(val) {
                    if (val[this.x - 1] && val[this.x - 1][this.keyName]) {
                        this.inputText = val[this.x - 1][this.keyName]
                    }
                }
            }
        },
        mixins: [NursingMixins],
        data() {
            return {
                inputText:'',
                active: '',
                style:"color:#666"
            }
        },
        methods:{
            change(val) {
                console.log(val)
                this.clearNoNum(val.target.value)
                this.farther.currentFormData.xid = this.xid
                this.farther.currentFormData[this.keyName] = this.inputText;
            },
            // DuoJiGaoJin:{//多级告警数组min,max,color
            // precision:{//小数位数
            // XieGang:{//允不允许输入/
            // JaJian:{//是否可-或+
            // Ja:{//是否可+或数字
            // Jian:{//是否可-或数字
            // FuShu:{//是否可输入负数
            // WenBen:{//text输入框
            clearNoNum(val){
                const {DuoJiGaoJin=[],WenBen=false,precision=0,XieGang=false,Ja=false,Jian=false,JaJian=false,FuShu=false}=this.attr;
                console.log(WenBen)
                if(!WenBen){
                    if(precision==0){
                        if(XieGang ==true)
                            val = val.replace(/[^\d/]/g, "");//清除“数字”,和“/”以外的字符,并且第一个字符不可以是斜杠
                        else if(JaJian==true)
                            val = val.replace(/[^\d\-+]/g, "");//清除“数字”和“-”和“+”以外的字符(输入加减号就不可以输入数字)
                        else if(Ja==true){
                            val = val.replace(/[^+]/g, "");//清除“数字”和“+”以外的字符(输入加减号就不可以输入数字)
                        }else if(Jian==true)
                            val = val.replace(/[^\d||-]/g, "");//清除“数字”和“-”以外的字符(输入加减号就不可以输入数字)
                        else if(FuShu==true)
                            val = val.replace(/[^\d-]/g, "");//清除“数字”和“-”以外的字符，可以输入负数
                        else
                            val = val.replace(/[^\d]/g, "");//清除“数字”以外的字符，只能输入正整数
                    }else{
                        if(FuShu==true)
                            val = val.replace(/[^\d.-]/g, "");//清除“数字”和“.”和“-”以外的字符，可以输入负数
                        else if(JaJian==true)
                            val = val.replace(/[^\d.\-+]/g, "");//清除“数字”和“.”和“-”和“+”以外的字符(输入加减号就不可以输入数字)
                        else if(Ja==true)
                            val = val.replace(/[^\d.||+]/g, "");//清除“数字”和“.”和“+”以外的字符(输入加减号就不可以输入数字)
                        else if(Jian==true)
                            val = val.replace(/[^\d.||-]/g, "");//清除“数字”和“.”和“-”以外的字符(输入加减号就不可以输入数字)
                        else if(XieGang ==true)
                            val = val.replace(/[^\d./]/g, "");//清除“数字”,和“/”和“.”以外的字符
                        else
                            val = val.replace(/[^\d.]/g, "");//清除“数字”和“.”以外的字符
                        val = val.replace(/^\./g, "");//验证第一个字符是数字而不是.
                        val= val.replace(/\.{2,}/g, ".");//只保留第一个. 清除多余的.
                        val = val.replace(".", "$#$").replace(/\./g,"").replace("$#$", ".");
                        if(FuShu==true)
                            val= val.replace(new RegExp("^((-)?\\d+\\.\\d{"+this.precision+"}).+"), "$1");//控制输入几位小数
                        else
                            val= val.replace(new RegExp("^(\\d+\\.\\d{"+this.precision+"}).+"), "$1");//控制输入几位小数
                    }
                    val = val.replace(/^\//g, "");//验证第一个字符是数字而不是/
                    val= val.replace(/\/{2,}/g,"/");//只保留第一个/ 清除多余的/
                    val = val.replace("/","$#$").replace(/\//g,"").replace("$#$","/");
                }
                for(let i=0;i<DuoJiGaoJin.length;i++){
                    let min =parseFloat(DuoJiGaoJin[i].min);
                    let max = parseFloat(DuoJiGaoJin[i].max);
                    let color = DuoJiGaoJin[i].color;
                    if(parseFloat(val)>=min&&parseFloat(val)<=max){
                        this.style="color:"+(color==undefined?"red":color)
                        return false;
                    }else{
                        this.style="color:#666";
                    }
                }
                this.inputText = val;
            },
            focusss() {
                this.setPosition({ x: this.x, y: this.y, z: this.z });
            },
           
        }
    }
</script>

<style lang="scss" scoped>
.inputstlye{
    padding: 0px 5px;
    height: 30px;
    line-height: 30px;
    border: 0px;
    color: #666;
    font-size: 12px;
    box-sizing: border-box;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    background: transparent;
    width: 100%;
    &.active {
        background-color: #FFE9CF;
    }
    &.z-active{
        background-color: #fff;
        border:2px solid rgba(0,164,255,1);
    }
}
</style>