<template>
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    @close="ClosePopup1">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
    </span>
    </el-dialog>
</template>

<script>
import EventBus from '@/utils/event-bus';
import NursingMixins from '@/mixins/nursing';
    export default {
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
        },
        mixins: [NursingMixins],
        data(){
            return{
                dialogVisible:true
            }
        },
        methods: {
            ClosePopup1(){//关闭模态框
                EventBus.$emit('ClosePopup', 'nursinglist');
                // console.log("this.x："+this.x+"*****this.position.y："+this.y);
                // console.log(this.setPosition)
                // this.setPosition({ x:  this.x, y:  this.y });
                EventBus.$emit('focus', 'nursinglist', { x:  this.x, y: this.y,z:this.z });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>