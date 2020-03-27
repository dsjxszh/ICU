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
                // this.focus();
                this.$refs.Numininput&&this.$refs.Numininput.focus()

                if (this.formData[this.x] && this.formData[this.x][this.keyName]) {
                    console.log('******', this.formData[this.x][this.keyName])
                    this.inputText = this.formData[this.x][this.keyName]
                }
            }
        },
        watch: {
            inputText: {
                immediate: true,
                handler(val) {
                    console.log('inputText:', val)
                    this.clearNoNum(val)
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
                    }
                }
            },

            formData: {
                immediate: true,
                deep: true,
                handler(val) {
                    // console.log('全局数据池中的数据为:', val);
                    if (val[this.x] && val[this.x][this.keyName]) {
                        this.inputText = val[this.x][this.keyName]
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
            // DuoJiGaoJin:{//多级告警数组min,max,color
            // precision:{//小数位数
            // XieGang:{//允不允许输入/
            // JaJian:{//是否可-或+
            // Ja:{//是否可+或数字
            // Jian:{//是否可-或数字
            // FuShu:{//是否可输入负数
            // WenBen:{
            clearNoNum(value){
                //console.log('+++++++:', this.attr)
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
                this.setPosition({ x: this.x, y: this.y, z: this.z });
            },
            left() {
                if (this.x === 1) {
                    this.setPosition({
                        x: 12,
                        y: this.y,
                        z:this.z
                    })
                    return
                }
                this.setPosition({x: this.x-1, y: this.y, z:this.z })
              
            },
            right() {
                if (this.x === 12) {
                    this.setPosition({
                        x: 1,
                        y: this.y,
                        z:this.z
                    })
                    return;
                }
                this.setPosition({x: this.x+1, y: this.y, z:this.z })
               
            },
            top() {
                if (this.z === 0) {
                    let info = this.sanArray.filter(item => item.y === this.y - 1)
                    if (info.length > 0) {
                        if (this.sanShow[this.y-1]) {
                            this.setPosition({x:this.x, y: this.y - 1, z: info[0].len});
                           EventBus.$emit('focus', 'nursinglist', {x:this.x, y: this.y - 1, z: info[0].len})
                            return
                        }
                    }
                    if (this.y === 1) return;
                    this.setPosition({x: this.x, y: this.y-1, z: 0 });
                    EventBus.$emit('focus', 'nursinglist', {x: this.x, y: this.y-1, z: 0 })
                } else {
                    if (this.z > 0) {
                        this.setPosition({x: this.x, y: this.y, z: this.z-1 });
                        EventBus.$emit('focus', 'nursinglist', {x: this.x, y: this.y, z: this.z-1 })
                    }
                }

            },
            down() {
                let info = this.sanArray.filter(item => item.y === this.y) //筛选并判断是否是多级组件
                if (info.length > 0) {  //说明当前的位置在多级组件的位置中
                    // console.log('*******info:', info, this.sanShow, this.z);
                    if (this.sanShow[this.y] && this.z < info[0].len) { //当是展开状态并且长度小于指定的长度时
                        this.setPosition({x:this.x, y:this.y, z: this.z + 1});
                        EventBus.$emit('focus', 'nursinglist',{x:this.x, y:this.y, z: this.z + 1});
                        return;
                    }
                }
                if (this.y === 47) return;
                this.setPosition({x: this.x, y: this.y+1, z: 0 });
                EventBus.$emit('focus', 'nursinglist',{x: this.x, y: this.y+1, z: 0 })
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