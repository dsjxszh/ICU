<template>
    <div>
        <common-table :params="params" :tableColumns="tableColumns"></common-table>
    </div>
</template>

<script>
import CommonTable from '@/components/CommonTable';
export default {
    components: {
        CommonTable
    },
    data() {
        return {
            params: [
                {
                    componentName: "InputTemplate",
                    keyName: "name",
                    label: "姓名:"
                },{
                    componentName: "InputTemplate",
                    keyName: "period",
                    label: "住院号:",
                }
            ],
            tableColumns: [
                {
                    label: "姓名",
                    prop: "acknowledged",
                    width: 180
                },
                {
                    label: "住院号",
                    prop: "objectType",
                    width: 180
                },
                {
                    label: "性别",
                    prop: "severityName",
                    width: 180
                },
                {
                    label: "年龄",
                    prop: "createDate",
                    width: 180
                },
                {
                    label: "入科时间",
                    prop: "name"
                },
                {
                    label: "出科时间",
                    prop: "outTime"
                },
                {
                    label: "床位",
                    prop: "chuangwei"
                },
                {
                    label: "原科室",
                    prop: "previousDepartment"
                },
                {
                    label: "原科室床号",
                    prop: 'yksch'
                },
                {
                    label: "护理级别",
                    prop: 'hljb'
                },
                {
                    label: "病情状态",
                    prop: 'bqzt'
                },
                {
                    label: "操作",
                    prop: 'op'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>