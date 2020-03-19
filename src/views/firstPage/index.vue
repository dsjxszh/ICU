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
                roomName: '1',
                patientName: '王进玉',
                inpNo: '王小虎',
                sex: '上海',
                diagnose: '普陀区',
                inTime: '上海市普陀区金沙江路 1518 弄',
                },
            ],
        }
    },
    methods:{
        rowdblclick(row){
            console.log(row)
            this.addNewRouter({
                name: row.roomName+row.inpNo,
            });
         
            this.setTab({
                name: row.roomName+row.inpNo,
                title: row.roomName+row.inpNo,  
            });
                
            
        }
    }
    
}
</script>