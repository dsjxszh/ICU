<template>
    <div>
        <el-button type="text" ref="button" class="button" :class="active" @click="focus" @keydown.enter.native="enter">123</el-button>
    </div>
</template>

<script>
import EventBus from '@/utils/event-bus';
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
            list:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(val) {
                    console.log('外部传入的value:', val)
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
                
                    // if (val.x !== this.x || val.y !== this.y) { //当是焦点时，就要弹出下拉框
                    //     this.$refs.button && this.$refs.button.blur();
                    // } 
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
                            this.OpenPopup1 =  Popups(DialogPFHL, {x:this.x,y:this.y});//打开对话框
                            this.setEnter(false);
                        }
                    }
                }
            }
        },
        mixins: [NursingMixins],
        mounted() {
            // EventBus.$on('ClosePopup', 'nursinglist',() => {
                
            //     if(this.OpenPopup1!=null){
            //         console.log("关闭模态框")
            //         this.OpenPopup1.remove();
            //         this.OpenPopup1=null;
            //     }
                
                    
            // });
        },
        data(){
            return{
                active:"",
                OpenPopup1:null
            }
        },
        methods: {
            focus() {
                this.setPosition({ x: this.x, y: this.y });
                EventBus.$emit('focus', 'nursinglist',{ x: this.x, y: this.y });
                this.OpenPopup1 =  Popups(DialogPFHL, {x:this.x,y:this.y});
            },
            enter() {
                // console.log('本地enter键入', { x: this.x, y: this.y });
                setTimeout(() => {
                    EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
                }, 500)
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.button{
    padding: 0px;
    height: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid lightgray;
    width: 100%;
    border-right: 1px solid lightgray;
    border-radius: 0px;
    color: #666;
    &.active {
        background-color: #FFE9CF;
    }
}

</style>