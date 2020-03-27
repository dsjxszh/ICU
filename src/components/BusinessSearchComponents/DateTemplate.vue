<template>
  
  <div class="">
    <el-date-picker
      v-model="farther.form[start]"
      type="datetime"
      :end-placeholder="end"
      @change="startchange"
      :picker-options="pickerOptions"
      ></el-date-picker>
    <el-date-picker
      v-model="farther.form[end]"
      type="datetime"
      :start-placeholder="start"
      @change="endchange"
    ></el-date-picker>
  </div>
</template>

<script>
export default {
  inject: ["farther"],
  props: {
    start: {
      type: String,
    },
    end: {
      type: String,
    }
  },
  data(){
    return{
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    }
  },methods:{
    startchange(time){
      // console.log(time)
      this.start=time;
    },
    endchange(time){
      // console.log(time)
      this.end=time;
    },
  }
};
</script>

<style lang="scss" scoped>
</style>