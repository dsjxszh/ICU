<template>
   <el-button type="text" ref="button" class="button" :class="active" @click="focus" @keydown.enter.native="enter"></el-button>
</template>

<script>
// import EventBus from '@/utils/event-bus';
import NursingMixins from '@/mixins/nursing';
import Popups from '@/utils/Popup';
import DialogPFHL from './DialogPFHL';
    export default {
        props:{
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
            z: {
                type: Number
            }
        },
        watch: {
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
                        if (this.position.x === this.x && this.position.y === this.y && this.position.z === this.z) { // 要同时按下enter键并且位置相同才能触发
                            this.OpenPopup1 =  Popups(DialogPFHL, {x:this.x,y:this.y,z:this.z});//打开对话框
                            this.setEnter(false);
                        }
                    }
                }
            }
        },
        mixins: [NursingMixins],
        data(){
            return{
                active:"",
                OpenPopup1:null
            }
        },
        methods: {
            focus() {
                this.setPosition({ x: this.x, y: this.y,z:this.z });
                // EventBus.$emit('focus', 'nursinglist',{ x: this.x, y: this.y,z:this.z });
                this.OpenPopup1 =  Popups(DialogPFHL, {x:this.x,y:this.y,z:this.z});
            }
        }
    }
</script>

<style lang="scss" scoped>
.button{
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-radius: 0px;
    padding-left: 24px;
    text-align: left;
    width: 100%;
    color: #666;
    cursor: pointer;
    &.active {
        background-color: #FFE9CF;
    }
    &.z-active{
        background-color: #fff;
        border:2px solid rgba(0,164,255,1);
    }
}
</style>