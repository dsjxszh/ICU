<template>
    <input ref="Numininput" class="inputstlye" :class="active" @focus="focusss"
        :style="style"
        @keyup.left="left"
        @keyup.right="right"
        @keyup.up="top"
        @keyup.down="down"
        v-model="inputText" />
</template>

<script>
    //  护理单表格中的数值校验文本输入框
import NursingMixins from '@/mixins/nursing';
import EventBus from '@/utils/event-bus';
    export default {
        inject:['farther'],
        props:{
            // keyName:{
            //     type:String
            // },
            value: {
                type: String,
                default: ''
            }, 
            x: {
                type: Number
            }, 
            y: {
                type: Number
            },
            attr:{
                type:Object,
            }
        },
        mounted(){
            if (this.position.x === this.x && this.position.y === this.y) { //当是焦点时，就要获取光标
                // this.focus();
                this.$refs.Numininput&&this.$refs.Numininput.focus()
            }
        },
        watch: {
            inputText: {
                immediate: true,
                handler(val) {
                    this.clearNoNum(val)
                }
            },
            value: {
                immediate: true,
                handler(val) {
                    this.inputText = val;
                }
            },
            position: {
                immediate: true,
                handler(val) {
                    if (val.x === this.x || val.y === this.y) {
                        this.active = 'active';
                    } else {
                        this.active = ''
                    }
                
                    if (val.x === this.x && val.y === this.y) { //当是焦点时，就要获取光标
                        // this.focus();
                        this.$refs.Numininput&&this.$refs.Numininput.focus()
                    }
                }
            },
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
            // DuoJiGaoJin:{//多级告警数组min,max,color
            // precision:{//小数位数
            // XieGang:{//允不允许输入/
            // JaJian:{//是否可-或+
            // Ja:{//是否可+或数字
            // Jian:{//是否可-或数字
            // FuShu:{//是否可输入负数
            // WenBen:{
            clearNoNum(value){
                const {DuoJiGaoJin=[],WenBen=false,precision=0,XieGang=false,Ja=false,Jian=false,JaJian=false,FuShu=false}=this.attr;
                if(!WenBen){
                    if(precision==0){
                        if(XieGang ==true)
                            value = value.replace(/[^\d/]/g, "");//清除“数字”,和“/”以外的字符
                        else if(JaJian==true)
                            value = value.replace(/[^\d\-+]/g, "");//清除“数字”和“-”和“+”以外的字符(输入加减号就不可以输入数字)
                        else if(Ja==true){
                            value = value.replace(/[^+]/g, "");//清除“数字”和“+”以外的字符(输入加减号就不可以输入数字)
                        }else if(Jian==true)
                            value = value.replace(/[^\d||-]/g, "");//清除“数字”和“-”以外的字符(输入加减号就不可以输入数字)
                        else if(FuShu==true)
                            value = value.replace(/[^\d-]/g, "");//清除“数字”和“-”以外的字符，可以输入负数
                        else
                            value = value.replace(/[^\d]/g, "");//清除“数字”以外的字符，只能输入正整数
                    }else{
                        if(FuShu==true)
                            value = value.replace(/[^\d.-]/g, "");//清除“数字”和“.”和“-”以外的字符，可以输入负数
                        else if(JaJian==true)
                            value = value.replace(/[^\d.\-+]/g, "");//清除“数字”和“.”和“-”和“+”以外的字符(输入加减号就不可以输入数字)
                        else if(Ja==true)
                            value = value.replace(/[^\d.||+]/g, "");//清除“数字”和“.”和“+”以外的字符(输入加减号就不可以输入数字)
                        else if(Jian==true)
                            value = value.replace(/[^\d.||-]/g, "");//清除“数字”和“.”和“-”以外的字符(输入加减号就不可以输入数字)
                        else if(XieGang ==true)
                            value = value.replace(/[^\d./]/g, "");//清除“数字”,和“/”和“.”以外的字符
                        else
                            value = value.replace(/[^\d.]/g, "");//清除“数字”和“.”以外的字符
                        value = value.replace(/^\./g, "");//验证第一个字符是数字而不是.
                        value= value.replace(/\.{2,}/g, ".");//只保留第一个. 清除多余的.
                        value = value.replace(".", "$#$").replace(/\./g,"").replace("$#$", ".");
                        if(FuShu==true)
                            value= value.replace(new RegExp("^((-)?\\d+\\.\\d{"+this.precision+"}).+"), "$1");//控制输入几位小数
                        else
                            value= value.replace(new RegExp("^(\\d+\\.\\d{"+this.precision+"}).+"), "$1");//控制输入几位小数
                    }
                    value = value.replace(/^\//g, "");//验证第一个字符是数字而不是/
                    value= value.replace(/\/{2,}/g,"/");//只保留第一个/ 清除多余的/
                    value = value.replace("/","$#$").replace(/\//g,"").replace("$#$","/");
                }
                for(let i=0;i<DuoJiGaoJin.length;i++){
                    let min =parseFloat(DuoJiGaoJin[i].min);
                    let max = parseFloat(DuoJiGaoJin[i].max);
                    let color = DuoJiGaoJin[i].color;
                    if(parseFloat(value)>=min&&parseFloat(value)<=max){
                        this.style="color:"+(color==undefined?"red":color)
                        return false;
                    }else{
                        this.style="color:#666";
                    }
                }
                this.inputText = value;
                // this.$nextTick(() => {
                //     this.farther.form[this.keyName] = value;
                // })
                
                // console.log('外界绑定的表单为:', this.farther.form)
            },
            focusss() {
                this.setPosition({ x: this.x, y: this.y });
            },
            left() {
                if (this.x === 1) return;
                this.setPosition({x: this.x-1, y: this.y });
              
            },
            right() {
                if (this.x === 12) return;
                this.setPosition({x: this.x+1, y: this.y });
               
            },
            top() {
                if (this.y === 1) return;
                this.setPosition({x: this.x, y: this.y-1 });
                EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y-1 })
            },
            down() {
                if (this.y === 47) return;
                this.setPosition({x: this.x, y: this.y+1 });
                EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y+1 })
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
    box-sizing: border-box;
    background: transparent;
    width: 100%;
    &.active {
        background-color: #FFE9CF;
    }
}
</style>