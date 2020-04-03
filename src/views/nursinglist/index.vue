<template>
    <div class="nursinglist" style="padding-left:20px">
        <div class="list">
            <div class="form">
                <date-template keyName="timerange" :defaultValue="defaultTime" valueformat="yyyy-MM-dd hh:mm:ss"></date-template>
                <button-template style="marginLeft: 15px;marginRight: 420px" className="buttonPrimary" text="查询" :func="search"></button-template>
                <button-template
                    v-for="(item) in paramsbutton"
                    :key="item.text"
                    v-bind="item"
                >
                </button-template>
            </div>
            <div class="body Left-fixation Left-fixation40">
                <div class="sidebar Left-fixation">
                    <side-bar :tabs="tabs" @active="OneTitle"></side-bar>
                </div>
                <div class="Right-fixation">
                    <div class="Right-fixation-content">
                        <nursing-list :menu="menu" :params="params" :keyNameZ="keyNameZ"></nursing-list>
                    </div>
                </div>
            </div>
            <div class="footer">
                <button-template
                    v-for="(item) in footerButtons"
                    :key="item.text"
                    v-bind="item"
                >
                </button-template>
                <pagination></pagination>
            </div>
        </div>
    </div>
</template>

<script>
import NursingList from '@/components/NursingList';
import AllComponents from '@/utils/components';
import { mock, getResponse } from '@/mock/mock';
import NursingMixins from '@/mixins/nursing';
import SideBar from './component/SideBar';
export default {
    provide() {
        return {
            farther: this
        }
    },
    components: {
        ...AllComponents,
        SideBar,
        NursingList,
    },
    mixins: [NursingMixins],
    data() {
        return {
            menu: {},
            defaultTime: {
                startTime: null,
                endTime: null
            },
            params: {},
            form: {},   //查询表单的条件
            keyNameZ:"",
            currentFormData: {},
            tabs: [],
            paramsbutton:[
                {
                    text: "导管配置",
                    iconName: "peizhi",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "提交病案",
                    iconName: "tijiao",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "护理复制",
                    iconName: "fuzhi",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "批量复制",
                    iconName: "fuzhi",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "采集间隔",
                    iconName: "caiji",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "查阅病历",
                    iconName: "chayue",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "上传护理单",
                    iconName: "shangchuan",
                    className: "buttonIcon",
                    func: this.sear
                },
                {
                    text: "上传体征数据",
                    iconName: "shangchuan",
                    className: "buttonIcon",
                    func: this.sear
                }
            ],
            footerButtons: [
                {
                    iconName: "baocun",
                    single:true,
                    className: "singleClass30",
                    func: this.sear
                },
                {
                    iconName: "yulan",
                    single:true,
                    className: "singleClass30",
                    func: this.sear
                },
                {
                    iconName: "dayin",
                    single:true,
                    className: "singleClass30",
                    func: this.sear
                },
                {
                    iconName: "shanchu",
                    single:true,
                    className: "singleClass30",
                    func: this.sear
                },
                {
                    iconName: "shuaxin",
                    single:true,
                    className: "singleClass30",
                    func: this.sear
                },
            ]
        }
    },
    watch: {
        position: {
            immediate: true,
            handler(val, old) {
                if (val === undefined || old === undefined) return;
                if ((val.x && old.x) && (val.x !== old.x)) {
                    console.log('换行了!')
                    if (Object.keys(this.currentFormData).length === 0) {
                        console.log('没有更新数据')
                    } else {
                        console.log(this.currentFormData)
                        this.currentFormData = {}
                    }
                }
            }
        }
    },
    methods: {
        sear() {
           
        },
        search() {
            getResponse().then(response => {
                this.setFormData(response)
                // console.log('获得的数据为:', response);
            })
        },
        saveData() {

        },
        OneTitle(val){
            this.keyNameZ=val;
        },
        // encode(menu) {
        //     // 对menu中的各项进行编码
        //     Object.keys(menu).forEach(key=>{
        //         let num = 0;
        //         if (menu[key].list) {
        //             // 说明下面会有多个二级菜单
        //             let originList = [menu[key].list ];
        //             originList = originList.map(child => {
        //                 return {
        //                     idx: num++,
        //                     ...child
        //                 }
        //             })
        //             return {
        //                 ...menu[key],
        //                 list: originList
        //             }
        //         } else {
        //             return {    //说明是一级
        //                 idx: num++,
        //                 ...menu[key]
        //             }
        //         }
        //     })
        //      console.log('编码出来的菜单为menu:',menu)
        // },
    },
    mounted() {
        // 这里获取表单数据
        mock().then(res => {
            let params = {};
            let menu = {};
            let tabs=[];
            res.forEach((item) => {
                params[item.key]=[];
                if (item.list) {
                    item.list.forEach(child => {
                        params[item.key].push({
                            componentName: child.componentName,
                            key: child.key,
                            attr: child.attr||{},
                            list: child.list || []
                        })
                    })
                } else {
                    params[item.key].push({
                        componentName: item.componentName,
                        attr: item.attr||{},
                        key: item.key
                    });
                }
                if(item.key!=="SJ"&&item.key!=="qm"){
                    tabs.push({
                        title:item.value,
                        key:item.key
                    })
                    menu[item.key]={};
                    menu[item.key] = item;
                } 
            })
            this.params = params;
            this.tabs = tabs;
            this.menu = menu;
            this.keyNameZ=tabs[0].key
            // this.encode(menu);
        })

        setTimeout(() => {
            this.defaultTime = {
                startTime: new Date(),
                endTime: new Date()
            }
        }, 1000)
    }
}
</script>

<style lang="scss" scoped>
.nursinglist {
    .form {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        // width:100%;
        // border: 1px solid #ccd2d8;
        padding: 16px 0 16px 4px;
        font-size: 12px;
        background-color: #ffffff;
    }
    .body {
        width: 1758px;
        height: 682px;
        background:rgba(247,247,247,1);
        border: 1px solid lightgray;
        border-bottom: 0;
        .sidebar {
            height: 676px;
            width: 40px;
            box-sizing: border-box;
            border-right: 1px solid lightgray;
        }

    }
    .footer {
        padding-left: 5px;
        padding-right: 5px;
        display: flex;
        flex-direction: row;
        height: 40px;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        bottom: 10px;
        left: 145px;
        right: 14px;
        background-color: white;
        border:1px solid rgba(211, 211, 211, 1);
    }
}

.Left-fixation{
    &.Left-fixation40{
        .Left-fixation {
            width: 40px;
            margin-right: -40px;
        }
        .Right-fixation-content {
            margin-left: 40px;
        }
    } 
    .Left-fixation {
        float: left;
        position: relative;
        box-sizing: border-box;
    }
    .Right-fixation {
        width: 100%;
        float: left;
    }
}
</style>