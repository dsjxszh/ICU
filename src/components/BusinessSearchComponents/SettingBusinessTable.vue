<template>
    <div>
        <el-table 
            :data="tableData" 
            :row-class-name="tableRowClassName" 
            stripe
            border 
            v-loading="loading" 
            ref="settingTable" 
            style="width: 100%;marginTop: 10px"
            @select="handleSelect" 
            @select-all="handleSelectAll" 
            :header-cell-style="getRowClass"
            :max-height="tableHeight"
            @row-dblclick="rowdblclick"
        >
            <el-table-column 
                :header-align="item.column_align ? item.column_align:'left'" 
                :align="item.column_align ? item.column_align:'left'" 
                v-for="(item, index) in columns" 
                :key="index" 
                :label="item.label" 
                :width="item.width" 
                :sortable="item.sort || false" 
                :fixed="item.fixed"
                :prop="item.prop"
            >
                <template v-slot:scope>
                    <template v-if="item.prop === 'buttons'">
                        <operation-buttons :buttons="item.buttons" />
                    </template>
                    <template v-else-if="item.component">
                        <component :is="item.component" v-bind="{...scope.row}" />
                    </template>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import AllComponents from '@/utils/components'
export default {
    props: {
        tableData: {
            type: Array,
            default () {
                return [];
            }
        },
        tableHeight: {
            type: Number,
            default () {
                return 700;
            }
        },
        loading: {
            type: Boolean,
            default () {
                return false;
            }
        },
        columns: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    components: {
        ...AllComponents
    },
    watch:{
        tableData:{
            immediate: true,
            handler(val) {
                console.log(val)
            }
        }
    },
    methods: {
        handleSelect(selection) {
            this.$emit("select", selection);
        },
        handleSelectAll(selection) {
            this.$emit("select", selection);
        },
        getRowClass({
            rowIndex
        }) {
            if (rowIndex === 0) {
                return 'background: #EDEDED;' +
                        'position: relative;padding: 9px 5px;minHeight: 20px;'+ 
                        'lineHeight: 20px;fontSize: 14px;border: 1px solid #D2D2D2;' + 
                        'textAlign: left;fontWeight: 400;borderRight: 1px;color: #666'
            } else {
                return 'color:#2c3e50'
            }
        },

        tableRowClassName({
            rowIndex
        }) {
            if (rowIndex % 2 === 0) {
                return "warning-row";
            }
            return "normal-row";
        },
        rowdblclick(row){
             this.$emit("rowdblclick", row);
        }
    }
};
</script>

<style lang="scss" scoped>
    .simple-linear {
        background: linear-gradient(0deg, #f2f2f2, #f9f9f9);
    }

    .el-table /deep/ .warning-row {
        background: #FCFCFC;
    }

    .el-table /deep/ .normal-row {
        background: white;
    }
</style>