<template>
  <el-date-picker
    v-model="farther.form[keyName]"
    size="mini"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    style="width:330px;"
  ></el-date-picker>
</template>

<script>
export default {
  inject: ["farther"],
  props: {
    keyName: {
      type: String,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>