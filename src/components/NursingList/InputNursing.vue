<template>
  <el-input size="mini" v-model="farther.form[keyName]" placeholder="请输入内容"></el-input>
</template>

<script>
//  护理单表格中的普通文本输入框
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
.input {
    width:92px;
    height:30px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 1px 0px rgba(255,255,255,1), 0px 1px 3px 0px rgba(0,0,0,0.5);
    border-radius:6px;
}
</style>