<template>
    <div class="header">
        <div class="info">
            <label>性别:</label>
            <span>男</span>
            <label>年龄:</label>
            <span>53岁</span>
            <label>住院号:</label>
            <span></span>
            <label>入ICU时间:</label>
            <span></span>
            <label>病情:</label>
            <span></span>
            <label>护理等级:</label>
            <span></span>
            <label>诊断:</label>
            <span></span>
            <label>过敏史:</label>
            <span></span>
        </div>
        <el-select v-model="value" placeholder="请选择" style="marginRight: 10px" size="mini">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // box-shadow: 0px 1px 0px 0px #EDEDED;
    border-bottom: 1px solid #ccd2d8;
    .info {
        height: 46px;
        line-height: 46px;
        margin-left: 150px;
        color: #00A4FF !important;
        font-size: 14px;
        span {
            margin: 0 4px;
        }
    }
    
}
</style>