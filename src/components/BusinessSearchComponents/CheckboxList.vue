<template>
    <el-checkbox-group v-model="farther.form[keyName]">
        <el-checkbox v-for="(item,index) in arrayData" :key="index" :name="item.name" :label="item.value">{{item.label}}</el-checkbox>
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

</style>