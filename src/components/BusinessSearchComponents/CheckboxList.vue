<template>
    <el-checkbox-group v-model="farther.form[keyName]">
        <el-checkbox class="checkbox" :indeterminate="indeterminate" v-for="(item,index) in arrayData" :key="index" :name="item.name" :label="item.value">{{item.label}}</el-checkbox>
    </el-checkbox-group>
</template>

<script>
    export default {
        inject:['farther'],
        props:{
            keyName:{
                type:String
            },
            arrayData:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                indeterminate:false
            }
        }
    }
</script>

<style lang="scss" scoped>
.checkbox{
    color: red;
    &::after{
        left: 5px;
        top: 2px;
    }
    &.is-checked{
        .el-checkbox__inner{
            background-color: #00A4FF;
            border-color: #00A4FF;
        }
        .el-checkbox__label{
            color: #666;
        }
        
    }
    .el-checkbox__inner{
        height: 16px;
        width: 16px;
        border-radius: 4px;
        border: 1px solid #D2D2D2;
    }
}
</style>