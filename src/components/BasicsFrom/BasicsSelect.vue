<template><div style="height:40px">
  <el-select class="selectyangshi" v-model="valuetext"
    :placeholder="placeholder" 
    :disabled="disabled" 
    :allow-create="allowcreate"
    :multiple="multiple" 
    :multiple-limit="multipleLimit"
    clearable="clearable" 
    filterable="filterable"
    :filter-method="filterByPY"
    @visible-change="arrayDataF"
    @change="selectChang">
    <template v-if="identical">
      <el-option v-if="multiple" :value="selectChangF">{{selectChangF}}</el-option>
      <el-option
        v-for="item in salepreInfo"
        :key="item.id"
        :label="item.name"
        :value="item.name"
      ></el-option>
    </template>
    <template v-else>
      <el-option v-if="multiple" :value="selectChangF">{{selectChangF}}</el-option>
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
export default {
  props: {
    value:{
        type:String
    },
    arrayData:{
        type:Array,
        default(){
            return []
        }
    },
    attribute:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  created(){//进入组件只执行一次
    this.arrayData.map(item => {
      if(this.identical) this.selectData.push(item.name);
      else this.selectData.push(item.id);
      const {multiple,multipleLimit=0,placeholder="请选择",allowcreate=false,disabled=false,identical=false}=this.attribute;
      this.multiple=multiple;//是否多选
      this.multipleLimit=multipleLimit; //多选的最多条目控制
      this.placeholder=placeholder; //提示内容
      this.allowcreate=allowcreate;//是否允许用户创建新条目
      this.disabled=disabled;//是否禁用
      this.identical=identical;//判断选项value与text值是否一样
    });
  },
  watch:{
      value: {
          immediate: true,
          handler(val) {
              if(this.attribute.multiple) this.valuetext=val.split(",")
              else this.valuetext=val;
          }
      }
  },
  data(){
    return{
      clearable:true,
      filterable:true,
      reservekeyword:true,
      selectChangF:"全选",
      selectData:[],
      salepreInfo: [],
      multiple: null,//是否多选
      multipleLimit:0, //多选的最多条目控制
      placeholder:"请选择", //提示内容
      allowcreate: false,//是否允许用户创建新条目
      disabled: false,//是否禁用
      identical:false,//判断选项value与text值是否一样
      valuetext: null
    }
  },
  mounted(){
    this.salepreInfo=this.arrayData;
  },
  methods:{
    arrayDataF(t){
      if(t) this.salepreInfo=this.arrayData;
    },
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
    selectChang(value){
        if(this.multiple){
          let q=value.filter(item => {
              return item === "全选" || item === "取消全选"   
          })
          let valueNEW=value.filter(item => {
              return item != "全选" || item != "取消全选"   
          })
          const result = valueNEW.length === this.selectData.length && valueNEW.every(a => this.selectData.some(b => a === b)) && this.selectData.every(_b => valueNEW.some(_a => _a === _b));
          if(q[0]=="全选"){
            this.valuetext =this.selectData;
            this.selectChangF ="取消全选";
          }else if(q[0]=="取消全选"){
            this.valuetext =[];
            this.selectChangF ="全选";
          }else if(!result){
            this.selectChangF ="全选";
          }else if(result){
            this.selectChangF ="取消全选";
          }
          this.salepreInfo=this.arrayData;
        }
    }
  },
  
};
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
.selectyangshi{
    &.el-select{
      width: 100px;
      height: 100%;
      .el-input{
        height: 100%;
      overflow-y: auto;
        .el-input__inner {
            border: 0px !important;
            box-shadow: 0px 1px 1px 0px #fff, 0px 1px 3px 0px rgba(0,0,0,0.5) inset !important;
            background: transparent !important;
            border-radius: 6px;
          height: 100%;
      overflow-y: auto;
        }
      }
    }
}

</style>