<template>
    <div class="pagination-container">
        <span>共 {{total}} 条</span>
        <span style="padding-left:10px">第{{currentPage}}/{{Math.ceil(pages/size)}}页</span>
        <el-pagination 
            @current-change="handleCurrentChange" 
            :current-page="currentPage" 
            :page-size="size" 
            layout="total, prev, pager, next, jumper" 
            :total="pages">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default () {
                return 1;
            }
        },
        total: {
            type: Number,
            default () {
                return 0;
            }
        },
        pages: {
            type: Number,
            default () {
                return 0;
            }
        },
        size:{
            type: Number,
            default () {
                return 20;
            }
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.$emit("handleCurrentChange", val);
            this.currentPage=val
        }
    }
};
</script>
<style lang="scss">
.el-pagination__total{
    display: none !important;
}
.el-pager li {
    padding: 0 5px;
    font-size: 12px;
    vertical-align: middle;
    min-width: 6px;
    height: 16px;
    line-height: 16px;
    margin: 0px 8px;
    border-radius: 4px;
    &.active {
        color: #fff;
        background: #00A4FF;
    }
    &.btn-quicknext, &.btn-quickprev {
        line-height: 16px;
    }
}
.el-pager .more::before {
    line-height: 16px;
}
.el-pagination__jump {
    margin-left: 10px;
    color: #666;
    vertical-align: middle !important;
}
.el-pagination__editor.el-input {
    width: 32px;
    font-size: 12px;
    margin: 0px 10px;
    .el-input__inner {
        height: 22px;
        border-radius: 4px;
        border: 0px;
        box-shadow: 0px 1px 1px 0px #fff, 0px 1px 3px 0px rgba(0,0,0,0.5) inset;
    }
}
.el-pagination button {
    vertical-align: middle;
}
</style>
<style lang="scss" scoped>
.pagination-container{
    line-height: 40px;
    height: 40px;
    font-size: 12px;
    font-family: SimSun;
    font-weight: 400;
    color: rgba(102,102,102,1);
    width: 100%;
    text-align: right;
    .el-pagination{
        display: inline-block;
        font-weight: normal;
        button {
            vertical-align: middle;
        }
    }
}
</style>