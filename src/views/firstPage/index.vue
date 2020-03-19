<template>
    <div>
        <business-table :columns="tableColumns" :tableData="tableData" @rowdblclick="rowdblclick"></business-table>
    </div>
</template>

<script>
import AllComponents from '@/utils/components'
import LayoutMixin from '@/mixins/layout'
export default {
    mixins: [LayoutMixin],
    components: {
        ...AllComponents
    },
    data(){
        return{
            tableColumns: [
                {
                    label: "床位",
                    prop: "roomName",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "patientName",
                    width: 180
                },
                {
                    label: "住院号",
                    prop: "inpNo",
                    width: 180
                },
                {
                    label: "性别",
                    prop: "sex",
                    width: 180
                },
                {
                    label: "入科诊断",
                    prop: "diagnose"
                },
                {
                    label: "入科时间",
                    prop: "inTime"
                }
            ],
            tableData:[
                {
                roomName: '上海市普陀区金沙江路 1518 弄',
                patientName: '2016-05-02',
                inpNo: '王小虎',
                sex: '上海',
                diagnose: '普陀区',
                inTime: '上海市普陀区金沙江路 1518 弄',
                },
                {
                roomName: '上海市普陀区金沙江路 1518 弄',
                // bqzt: '2016-05-02',
                // hljb: '王小虎',
                // yksch: '上海',
                // previousDepartment: '普陀区',
                // chuangwei: '上海市普陀区金沙江路 1518 弄',
                // name: 200333,
                // createDate: '家',
                // objectType: 200333,
                // severityName: '家'
                }
            ],
        }
    },
    methods:{
        rowdblclick(row){
            console.log(row)
            // this.$router.push('nursinglist')
            this.setTab('test');

        }
    }
    
}
</script>