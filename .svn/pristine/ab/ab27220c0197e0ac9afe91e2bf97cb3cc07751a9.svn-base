<template>
  <div class="setting-buttons">
    <div v-for="(item,index) in buttons" :key="index">
      <i :class="icon(item.type)" style="color: rgba(57,124,222,1)"></i><button class="setting-button" @click="handleClick(item.event)">{{item.label}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    inject:['farther'],
    props:{
      buttons:{
        type:Array
      },
      dataId:{
        type:Number
      },
    },
    methods:{
      handleClick(eventName){
        this.farther[eventName](this.dataId);
      },
      icon(type) {
        switch(type) {
          case 'search':
            return 'el-icon-zoom-in';
          case 'delete':
            return 'el-icon-circle-close';
          case 'add':
            return 'el-icon-circle-plus-outline';
          default: return '';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.setting-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .setting-button {
    cursor: pointer;
    border-width: 0;
    font-size:12px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(57,124,222,1);
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
}

</style>