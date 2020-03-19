<template>
    <div>
        <common-table :params="params" :paramsbutton="paramsbutton" :tableColumns="tableColumns" :tableData="tableData"></common-table>
    </div>
</template>

<script>
import CommonTable from '@/components/CommonTable';

const arrayData = [
    {
        value:"name1",
        name:"name1",
        label:"复选1",
        fiesdlname:"青霉素1",

    },{
        value:"name2",
        name:"name2",
        fiesdlname:"青霉素",
        label:"复选2"

    }
]
const selectData = [
    {
        id:"1",
        name:"选项一",
        fields1:"青霉素1",

    },{
        id:"2",
        name:"选项2",
        fields1:"青霉素2",

    },{
        id:"3",
        name:"选项3",
        fields1:"青霉素3",

    },{
        id:"4",
        name:"选项4",
        fields1:"青霉素4",

    },{
        id:"5",
        name:"选项5",
        fields1:"青霉素3",

    },{
        id:"6",
        name:"选项6",
        fields1:"青霉素4",

    }
]
// const tableData=[{
//         objectType: 200333,
//         acknowledged: '王小虎',
//     }, {
//         objectType: 200333,
//         acknowledged: '王小虎',
//     }, {
//         objectType: 200333,
//         acknowledged: '王小虎',
//     }, {
//         objectType: 200333,
//         acknowledged: '王小虎',
//     }]
export default {
    provide() {
        return {
            farther: this
        }
    },
    components: {
        CommonTable
    },
    data() {
        return {
            form: {
                fuxuan: [],
                name:"",
                period:"",
                shuzhi:"",
            },
            
            params: [
                {
                    componentName: "InputTemplate",
                    keyName: "name",
                    label: "姓名:"
                },{
                    componentName: "InputTemplate",
                    keyName: "period",
                    label: "住院号:",
                },{
                    componentName: "NuminputTemplate",
                    keyName: "shuzhi",
                    label: "",
                    precision: 2,
                },{
                    componentName: "CheckboxList",
                    keyName: "fuxuan",
                    label: "",
                    arrayData: arrayData
                },{
                    componentName: "SelectTemplate",
                    keyName: "yongyao1",
                    label: "",
                    arrayData: selectData
                },{
                    componentName: "SelectTemplate",
                    keyName: "yongyao2",
                    multiple:true,
                    identical:true,
                    label: "",
                    arrayData: selectData
                }
            ],
            paramsbutton:[
                {
                    text: "查询1",
                    func: this.sear
                },
                {
                    text: "查询2",
                    className: "buttonPrimary buttonIcon",
                    iconName: "YLZH",
                    func: this.sear
                },
                {
                    text: "查询3",
                    className: "buttonPrimary",
                    func: this.sear
                },
                {
                    text: "查询4",
                    iconName: "SS",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "查询5",
                    iconName: "BJ",
                    single:true,
                    func: this.sear
                },
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
            ],
            tableData:[
                {
                acknowledged: '上海市普陀区金沙江路 1518 弄',
                // bqzt: '2016-05-02',
                // hljb: '王小虎',
                // yksch: '上海',
                // previousDepartment: '普陀区',
                // chuangwei: '上海市普陀区金沙江路 1518 弄',
                // name: 200333,
                // createDate: '家',
                // objectType: 200333,
                // severityName: '家'
                },
                {
                acknowledged: '上海市普陀区金沙江路 1518 弄',
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
            select:[],

        }
    },
    methods:{
        sear (){
            this.form['fuxuan'].forEach(element => {
                const {value,name, fiesdlname } = arrayData.filter(item => {
                    return item.value === element
                })[0]
                let k=name+"fiesd";
                let item = {
                   name:value,
                    [k]: fiesdlname
                }
                this.select.push(item)
            });
                console.log(this.select)
                console.log(this.form)
            // delete this.form[keyName]

            // return {
            //     name,period,shuzhi,fuxuan
            // }
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>