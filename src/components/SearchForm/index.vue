<template>
  <div class="setting-form">
    <el-form :inline="true" :model="farther.form" class="demo-form-inline">
      <el-form-item
        v-for="(item, index) in params"
        :key="index"
        :label="item.label"
        size="mini"
      >
        <component :is="item.componentName" v-bind="item" />
      </el-form-item>
      <button class="search-btn" @click.prevent="search">查询</button>
      <button class="reset-btn" @click.prevent="reset">重置</button>
    </el-form>
  </div>
</template>

<script>
import AllComponents from '@/utils/components'
export default {
    inject: ["farther"],
    components: {
        ...AllComponents
    },
    props: {
        params: {
        type: Array
        }
    },
    methods: {
        search() {
            this.$emit("search");
        },
        reset() {
            this.$emit("rest");
        }
    }
};
</script>

<style lang="scss" scoped>
.setting-form {
  width:100%;
  border: 1px solid #ccd2d8;
  padding: 16px 0 6px 16px;
  font-size: 12px;
  background-color: #ffffff;
}
.el-form-item {
  margin-bottom: 10px !important;
}
.el-form-item__content {
  line-height: none;
}
.search-btn {
  cursor: pointer;
  margin-top: 3px;
  width:52px;
  height:24px;
  background:linear-gradient(0deg,#3a7cdb,#5a9ce6);
  border:1px solid #2968b3;
  border-radius:2px;
  color: white;
  &:focus {
    outline: 0;
  }
}
.reset-btn {
  cursor: pointer;
  width:52px;
  height:24px;
  background:linear-gradient(0deg,#6d8093,#8497a8);
  border:1px solid #576c82;
  border-radius:2px;
  color: white;
  margin-left: 4px;
  &:focus {
    outline: 0;
  }
}
</style>
