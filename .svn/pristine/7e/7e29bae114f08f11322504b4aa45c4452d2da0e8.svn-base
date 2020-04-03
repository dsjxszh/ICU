<template>
    <div class="pagination-container">
        <el-pagination 
            style="padding: 8px 26px 12px 0;" 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :current-page="currentPage" 
            :page-sizes="[20, 50, 100]" 
            :page-size="20" 
            layout="total, sizes, prev, pager, next, jumper" 
            :total="total">
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
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.$emit("handleCurrentChange", val);
        },
        handleSizeChange(val) {
            this.$emit("handleSizeChange", val);
        }
    }
};
</script>

<style lang="scss" scoped>
.pagination-container {
    position: fixed;
    bottom: 10px;
    background-color: white;
    width: 100%;
    // border: 1px solid #CCD2D8;
    border-top: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
</style>