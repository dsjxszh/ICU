<template>
    <div class="checkbox" :class="active" @click="focus" >
        <el-checkbox
            v-for="(item,index) in arrayData" 
            :key="index" :name="item.name" 
            :label="item.value" 
            v-model="checked"
            @keydown.enter.native="enter"
            >{{item.label}}</el-checkbox>
    </div>
</template>

<script>
//  护理单表格中的复选框
import NursingMixins from '@/mixins/nursing';
import EventBus from '@/utils/event-bus';
    export default {
        props:{
            value: {
                type: String,
                default: '0'
            }, 
            x: {
                type: Number
            }, 
            y: {
                type: Number
            },
            ControlAttribute:{
                type:Object,
            }
        },
        mounted(){
            const{arrayData=[]}=this.ControlAttribute;
            this.arrayData=arrayData
        },
        watch: {
            value: {
                immediate: true,
                handler(val) {
                    if("0"===val)
                        this.checked = false;
                    else
                        this.checked = true;
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
                }
            },
            enterClick: {
                immediate: true,
                handler(val, oldVal) {
                    if (val && !oldVal) {
                        if (val === true && this.position.x === this.x && this.position.y === this.y) { // 要同时按下enter键并且位置相同才能触发
                        // console.log("打开对话框：val"+val+"*****oldVal"+oldVal)
                        // console.log("this.position.x："+this.position.x+"*****this.position.y："+this.position.y)
                        // console.log("this.x："+this.x+"*****this.position.y："+this.x)
                            this.checked =  !this.checked;//选中复选框
                            this.setEnter(false);
                        }
                    }
                }
            }
        },
        mixins: [NursingMixins],
        data(){
            return{
                arrayData:[],
                eee:[],
                active: '',
                checked:false,
                checked2:false,
                checked1:true
            }
        },
        methods:{
            focus() {
                this.setPosition({ x: this.x, y: this.y });
                EventBus.$emit('focus', 'nursinglist',{ x: this.x, y: this.y });
            },
            enter() {
                setTimeout(() => {
                    EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
                }, 500)
                
            }
        }
    }
</script>

<style lang="scss">
.el-checkbox__inner{
    height: 18px;
    width: 18px;
    border-radius: 4px;
    border: 1px solid #D2D2D2;
    &:after{
        left: 6px;
        height: 10px;
        width: 4px;
    }
    
}
.el-checkbox__input.is-focus{
    .el-checkbox__inner{
        border-color: #D2D2D2;
    }
}
.is-checked.is-focus{
    .el-checkbox__inner{
        background-color: #00A4FF;
        border-color: #00A4FF;
    }
    
}
</style>

<style lang="scss" scoped>
.checkbox{
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    background: transparent;
    &.active {
        background-color: #FFE9CF;
    }
}
</style>