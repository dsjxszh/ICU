<template><div class="select" :class="active">
  <el-select ref="select" class="selectyangshi" v-model="selectItem" 
    :placeholder="placeholder" 
    :disabled="disabled" 
    :allow-create="allowcreate"
    clearable="clearable" 
    filterable="filterable"
    :filter-method="filterByPY"
    @focus="focus"
    @change="change"
    @keydown.enter.native="enter">
    <template v-if="identical">
      <el-option
        v-for="item in salepreInfo"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      ></el-option>
    </template>
    <template v-else>
      <el-option
      v-for="item in salepreInfo"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    ></el-option>
    </template>
  </el-select>
  </div>
</template>

<script>
//  护理单表格中的搜索下拉框
import EventBus from '@/utils/event-bus';
import NursingMixins from '@/mixins/nursing';
export default {
  props: {
        value: {
            type: String,
            default: ''
        }, 
        x: {
            type: Number
        }, 
        y: {
            type: Number
        },
        z: {
            type: Number
        },
        attr:{
          type:Object
        }
  },
  watch: {
        position: {
            immediate: true,
            handler(val) {
                if ((val.x === this.x) || (val.y === this.y && val.z === this.z)) {
                    this.active = 'active';
                } else {
                    this.active = ''
                }
                if (val.x === this.x && val.y === this.y && val.z === this.z) {
                    //this.$refs.select&&this.$refs.select.focus()
                    this.active = 'z-active';
                }
            }
        },
        enterClick: {
            immediate: true,
            handler(val, oldVal) {
                if (val && !oldVal) {
                    if (this.position.x === this.x && this.position.y === this.y && this.position.z === this.z) { // 要同时按下enter键并且位置相同才能触发
                        if (this.$refs.select) {
                            this.$refs.select.$el.click();
                            this.$refs.select.setSoftFocus();
                            this.setEnter(false);
                        }
                        
                    }
                }
            }
        },
        selectItem:{
          immediate:true,
          handler(val){
            console.log("$$$$$$$$selectItem："+val)
          }
        }
    },
    mixins: [NursingMixins],
  data(){
    return{
      clearable:true,
      filterable:true,
      reservekeyword:true,
      salepreInfo: [],
      arrayData: [],
      placeholder:"请选择",
      allowcreate:false,
      disabled:false,
      identical:false,
      active:"",
      selectItem:[]
    }
  },
  mounted(){
    // placeholder: {//提示内容
    // allowcreate: {//是否允许用户创建新条目
    // disabled: {//是否禁用
    // identical:{//判断选项value与text值是否一样
    const{arrayData=[],placeholder="请选择",allowcreate=false,disabled=false,identical=false}=this.attr;
    console.log("请选择",arrayData)
      this.salepreInfo=arrayData;
      this.arrayData=arrayData;
      this.placeholder=placeholder;
      this.allowcreate=allowcreate;
      this.disabled=disabled;
      this.identical=identical;
  },
  methods:{
    filterByPY(val){
      let PinyinMatch = this.$pinyinmatch;
      if (val) {
        let result = [];
        this.arrayData.forEach(i => {
          let m = PinyinMatch.match(i.name, val);
          if (m) {
            result.push(i);
          }
        });
        this.salepreInfo = result;
      }
    },
        focus() {
            this.setPosition({ x: this.x, y: this.y, z: this.z });
            EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y, z: this.z })
        },
        enter() {
            this.$refs.select && this.$refs.select.blur();
            setTimeout(() => {
                EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
            }, 500)
            
        },
        change(val){
            console.log("************"+val)
        }
  },
  
};
</script>
<style lang="scss">
.selectyangshi{
    &.el-select{
      width: 100%;
      height: 100%;
      .el-input{
        height: 100%;
        .el-input__inner {
            border: 0px !important;
            box-shadow: 0px 1px 1px 0px #fff, 0px 1px 3px 0px rgba(0,0,0,0.5) inset !important;
            background: transparent !important;
            border-radius: 6px;
          height: 100%;
        }
      }
    }
}

.selectyangshi.el-select{
    width: 90%;
    height: 80%;
    .el-input__icon {
        line-height: 23px;
    }
}
</style>
<style lang="scss" scoped>
.select{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    box-sizing: border-box;
    background: transparent;
    &.active {
        background-color: #FFE9CF;
    }
    &.z-active{
        background-color: #37B8FF;
    }
}
</style>