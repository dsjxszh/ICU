<template>
  <el-select v-model="farther.form[keyName]" size="mini" placeholder="请选择" style="width:200px;">
    <el-option
      v-for="item in []"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  inject: ["farther"],
  props: {
    keyName: {
      type: String
    },
    renderOptions:{
      type:String
    }
  }
};
</script>

<style lang="scss" scoped></style>