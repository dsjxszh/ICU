<template>
  <el-input size="mini" v-model="farther.form[keyName]" placeholder="请输入内容" style="width:200px;"></el-input>
</template>

<script>
export default {
  inject:['farther'],
  props:{
    keyName:{
      type:String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>