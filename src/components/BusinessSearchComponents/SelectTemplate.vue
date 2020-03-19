<template>
  <el-select v-model="farther.form[keyName]" 
    :placeholder="placeholder" 
    :disabled="disabled" 
    :allow-create="allowcreate"
    :multiple="multiple" 
    :multiple-limit="multipleLimit"
    clearable="clearable" 
    filterable="filterable"
    @change="selectChang">
    <template v-if="identical">
      <el-option v-if="multiple" :value="selectChangF">{{selectChangF}}</el-option>
      <el-option
        v-for="item in arrayData"
        :key="item.id"
        :label="item.name"
        :value="item.name"
      ></el-option>
    </template>
    <template v-else>
      <el-option v-if="multiple" :value="selectChangF">{{selectChangF}}</el-option>
      <el-option
      v-for="item in arrayData"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    ></el-option>
    </template>
  </el-select>
</template>

<script>
export default {
  inject: ["farther"],
  props: {
    keyName: {
      type: String
    },
    arrayData:{
        type:Array,
        default(){
            return []
        }
    },
    multiple: {//是否多选
      type: Boolean,
      default:false
    },
    multipleLimit: {//多选的最多条目控制
      type: Number,
      default:0
    },
    placeholder: {//提示内容
      type: String,
      default:"请选择"
    },
    allowcreate: {//是否允许用户创建新条目
      type: Boolean,
      default:false
    },
    disabled: {//是否禁用
      type: Boolean,
      default:false
    },
    identical:{//判断选项value与text值是否一样
        type:Boolean,
        default:false
    }
  },
  data(){
    return{
      clearable:true,
      filterable:true,
      selectChangF:"全选",
      selectData:[]
    }
  },
  created(){//进入组件只执行一次
    this.arrayData.map(item => {
      if(this.identical) this.selectData.push(item.name);
      else this.selectData.push(item.id);
    });
  },
  methods:{
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
          this.farther.form[this.keyName] =this.selectData;
          this.selectChangF ="取消全选";
        }else if(q[0]=="取消全选"){
          this.farther.form[this.keyName] = [];
          this.selectChangF ="全选";
        }else if(!result){
          this.selectChangF ="全选";
        }else if(result){
          this.selectChangF ="取消全选";
        }
        //  console.log("result"+result)
        //  console.log("valueNEW:"+valueNEW)
        //  console.log("value:"+value)
        //  console.log("selectData:"+this.selectData)
      }
    }
  }
};
</script>
<style lang="scss">

.el-select{
  width: 100%;
  .el-input__inner {
      border: 0px !important;
      box-shadow: 0px 1px 1px 0px #fff, 0px 1px 3px 0px rgba(0,0,0,0.5) inset !important;
      background: transparent !important;
      border-radius: 6px;
  }
}
 
</style>
<style lang="scss" scoped>

</style>