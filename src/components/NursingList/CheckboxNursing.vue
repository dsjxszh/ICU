<template>
    <div class="checkbox" :class="active" @click="focus" >
        <el-checkbox
            v-for="(item,index) in arrayData" 
            :key="index" :name="item.name" 
            v-model="checked"
            @keydown.enter.native="enter"
            >{{item.label}}</el-checkbox>
    </div>
</template>

<script>
//  护理单表格中的复选框
import NursingMixins from '@/mixins/nursing';
// import EventBus from '@/utils/event-bus';
    export default {
        props:{
            value: {
                type: String,
            }, 
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
            }
        },
        mounted(){
            const{arrayData=[]}=this.attr;
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
                    if ((val.x === this.x) || (val.y === this.y && val.z === this.z)) {
                        this.active = 'active';
                    } else {
                        this.active = ''
                    }
                    if (val.x === this.x && val.y === this.y && val.z === this.z) {
                        this.active = 'z-active';
                    }
                }
            },
            enterClick: {
                immediate: true,
                handler(val, oldVal) {
                    if (val && !oldVal) {
                        if (this.position.x === this.x && this.position.y === this.y&& this.position.z === this.z) { // 要同时按下enter键并且位置相同才能触发
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
                active: '',
                checked:false,
            }
        },
        methods:{
            focus() {
                this.setPosition({ x: this.x, y: this.y,z:this.z });
                // EventBus.$emit('focus', 'nursinglist',{ x: this.x, y: this.y,z:this.z });
            },
            
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
    text-align: left;
    padding-left: 5px;
    &.active {
        background-color: #FFE9CF;
    }
    &.z-active{
        background-color: #fff;
        border:2px solid rgba(0,164,255,1);
    }
}
</style>