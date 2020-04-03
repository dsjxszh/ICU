<template>
    <el-radio-group v-model="farther.form[keyName]" size="mini">
      <el-radio-button  v-for="(item,index) in arrayData" :key="index" :label="item.value">{{item.label}}</el-radio-button>
    </el-radio-group>
</template>

<script>
  export default {
    inject:['farther'],
    props:{
      keyName:{
        type:String
      },
      arrayData:{
        type:Array
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>