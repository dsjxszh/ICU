<template>
  <el-select
    v-model="farther.form[keyName]"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading"
    size="mini"
    style="width:200px;"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
  </el-select>
</template>

<script>
export default {
  inject: ["farther"],
  props: {
    keyName: {
      type: String
    },
  },
  data() {
    return {
      options: [],
      loading:false,
    };
  },
  methods: {
    async remoteMethod() {
      this.loading = true
    //   this.options = await remoteSearch(query,this.keyName,this.$route.meta.asset_id && this.$route.meta.asset_id)
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>