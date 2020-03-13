<template>
    <div>
        <el-menu
            class="menu"
            default-active="2"
            @select="handleSelect"
            mode="horizontal"
        >
            <template v-for="item in list">
                <template v-if="item.children.length > 0">
                    <el-submenu :index="item.name" :key="item.name" class="menuTitle">
                        <template slot="title">
                            <i :class="['icon',item.icon]"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item-group class="submenu">
                            <el-menu-item v-for="sub in item.children" :index="sub.name" :key="sub.name" class="subMenuItem">
                                <i :class="['sub_icon', sub.icon]"></i>
                                <span class="subItem">{{sub.name}}</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.name" :key="item.name" class="singleMenu">
                        <li >
                            <i :class="['icon',item.icon]"></i>
                            <span slot="title" class="title">{{item.name}}</span>
                        </li>
                    </el-menu-item>
                </template>
                
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        mounted() {
            const { HeadMenuList } = this.json;
            this.list = HeadMenuList.map(item => {
                const children = item.childMenuList.map(child => {
                    return {
                        name: child.menuName,
                        icon: child.smallIcon
                    }
                });
                return {
                    name: item.menuName,
                    icon: item.smallIcon,
                    children
                }
            });
            console.log('list:', this.list);
        },
        data() {
            return {
                list: [],
                json: {
                    "HeadMenuList":[
                        {
                            "menuCode":"301",
                            "menuLabel":"301",
                            "parentCode":"3",
                            "menuName":"患者管理",
                            "icon":null,
                            "runUrl":null,
                            "levelIn":1,
                            "menuType":"1",
                            "helpUrl":null,
                            "openMode":null,
                            "sortNum":1,
                            "isValid":1,
                            "systemId":"MEDICAL",
                            "note":null,
                            "showBanner":1,
                            "linkMenu":null,
                            "smallIcon":"HZGL",
                            "shortCuts":null,
                            "reservd1":"NWS",
                            "reservd2":null,
                            "childMenuList":[
                                {
                                    "menuCode":"30101",
                                    "menuLabel":"30101",
                                    "parentCode":"301",
                                    "menuName":"入科",
                                    "icon":null,
                                    "runUrl":"patientmanager/IcuPatientInDepartment",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":1,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"RK",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },
                                {
                                    "menuCode":"30102",
                                    "menuLabel":"30102",
                                    "parentCode":"301",
                                    "menuName":"床位一览",
                                    "icon":null,
                                    "runUrl":"doctorworkstation/BedManager",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":2,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"CWYL",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                }
                            ]
                        },{
                            "menuCode":"302",
                            "menuLabel":"302",
                            "parentCode":"3",
                            "menuName":"质控指标",
                            "icon":null,
                            "runUrl":"doctorworkstation/QualityControlIndex",
                            "levelIn":1,
                            "menuType":"1",
                            "helpUrl":null,
                            "openMode":null,
                            "sortNum":2,
                            "isValid":1,
                            "systemId":"MEDICAL",
                            "note":null,
                            "showBanner":1,
                            "linkMenu":null,
                            "smallIcon":"ZKZB",
                            "shortCuts":null,
                            "reservd1":"NWS",
                            "reservd2":null,
                            "childMenuList":[]
                        },{
                            "menuCode":"303",
                            "menuLabel":"303",
                            "parentCode":"3",
                            "menuName":"科室管理",
                            "icon":null,
                            "runUrl":null,
                            "levelIn":1,
                            "menuType":"1",
                            "helpUrl":null,
                            "openMode":null,
                            "sortNum":3,
                            "isValid":1,
                            "systemId":"MEDICAL",
                            "note":null,
                            "showBanner":1,
                            "linkMenu":null,
                            "smallIcon":"KSGL",
                            "shortCuts":null,
                            "reservd1":"NWS",
                            "reservd2":null,
                            "childMenuList":[
                                {
                                    "menuCode":"30301",
                                    "menuLabel":"30301",
                                    "parentCode":"303",
                                    "menuName":"公告设置",
                                    "icon":null,
                                    "runUrl":"nurseworkstation/IcuBoard",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":1,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"GGSZ",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30302",
                                    "menuLabel":"30302",
                                    "parentCode":"303",
                                    "menuName":"统计查询",
                                    "icon":null,
                                    "runUrl":"statistics",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":2,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"TJCX",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                }
                            ]
                        },{
                            "menuCode":"304",
                            "menuLabel":"304",
                            "parentCode":"3",
                            "menuName":"基础数据",
                            "icon":null,
                            "runUrl":null,
                            "levelIn":1,
                            "menuType":"1",
                            "helpUrl":null,
                            "openMode":null,
                            "sortNum":4,
                            "isValid":1,
                            "systemId":"MEDICAL",
                            "note":null,
                            "showBanner":1,
                            "linkMenu":null,
                            "smallIcon":"JCSJ",
                            "shortCuts":null,
                            "reservd1":"NWS",
                            "reservd2":null,
                            "childMenuList":[
                                {
                                    "menuCode":"30401",
                                    "menuLabel":"30401",
                                    "parentCode":"304",
                                    "menuName":"医嘱属性",
                                    "icon":null,
                                    "runUrl":"nurseworkstation/IcuOrderAttr",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":1,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"YZSX",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30402",
                                    "menuLabel":"30402",
                                    "parentCode":"304",
                                    "menuName":"导管维护",
                                    "icon":null,
                                    "runUrl":"nurseworkstation/CatheterInfo",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":2,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"DGWH",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30403",
                                    "menuLabel":"30403",
                                    "parentCode":"304",
                                    "menuName":"床位管理",
                                    "icon":null,
                                    "runUrl":"nurseworkstation/BedManager",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":3,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"CWGL",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30404",
                                    "menuLabel":"30404",
                                    "parentCode":"304",
                                    "menuName":"设备维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/DeviceMonitor",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":4,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"SBWH",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30405",
                                    "menuLabel":"30405",
                                    "parentCode":"304",
                                    "menuName":"基础字典",
                                    "icon":null,
                                    "runUrl":"sysmanager/SysDict",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":5,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"JCZD",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30406",
                                    "menuLabel":"30406",
                                    "parentCode":"304",
                                    "menuName":"监控项目维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/ItemMonitor",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":6,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"JKXMWH",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30407",
                                    "menuLabel":"30407",
                                    "parentCode":"304",
                                    "menuName":"评分项目维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/ScoreType",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":7,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"PFXMWH",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30408",
                                    "menuLabel":"30408",
                                    "parentCode":"304",
                                    "menuName":"护理措施",
                                    "icon":null,
                                    "runUrl":"nurseworkstation/IcuNurseTemplete",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":8,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"HLCS",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30409",
                                    "menuLabel":"30409",
                                    "parentCode":"304",
                                    "menuName":"护理项目分组",
                                    "icon":null,
                                    "runUrl":"sysmanager/DataGroup",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":9,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"HLXMFZ",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30410",
                                    "menuLabel":"30410",
                                    "parentCode":"304",
                                    "menuName":"护理项目",
                                    "icon":null,
                                    "runUrl":"sysmanager/DataItem",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":10,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"HLXM",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30411",
                                    "menuLabel":"30411",
                                    "parentCode":"304",
                                    "menuName":"统计类型维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/StatisticsType",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":11,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"TJLX",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                }
                            ]
                        },{
                            "menuCode":"305",
                            "menuLabel":"305",
                            "parentCode":"3",
                            "menuName":"系统设置",
                            "icon":null,
                            "runUrl":null,
                            "levelIn":1,
                            "menuType":"1",
                            "helpUrl":null,
                            "openMode":null,
                            "sortNum":5,
                            "isValid":1,
                            "systemId":"MEDICAL",
                            "note":null,
                            "showBanner":1,
                            "linkMenu":null,
                            "smallIcon":"SystemSetup",
                            "shortCuts":null,
                            "reservd1":"NWS",
                            "reservd2":null,
                            "childMenuList":[
                                {
                                    "menuCode":"30501",
                                    "menuLabel":"30501",
                                    "parentCode":"305",
                                    "menuName":"科室维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/DeptInfo",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":1,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"KSWH",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30502",
                                    "menuLabel":"30502",
                                    "parentCode":"305",
                                    "menuName":"ICU床位",
                                    "icon":null,
                                    "runUrl":"sysmanager/OperatingRoom",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":2,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"SSS",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30503",
                                    "menuLabel":"30503",
                                    "parentCode":"305",
                                    "menuName":"角色维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/SysRole",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":3,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"JSGL",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30504",
                                    "menuLabel":"30504",
                                    "parentCode":"305",
                                    "menuName":"人员维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/UserInfo",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":4,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"RYWH",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                },{
                                    "menuCode":"30505",
                                    "menuLabel":"30505",
                                    "parentCode":"305",
                                    "menuName":"工作站维护",
                                    "icon":null,
                                    "runUrl":"sysmanager/WorkStation",
                                    "levelIn":2,
                                    "menuType":"1",
                                    "helpUrl":null,
                                    "openMode":null,
                                    "sortNum":5,
                                    "isValid":1,
                                    "systemId":"MEDICAL",
                                    "note":null,
                                    "showBanner":1,
                                    "linkMenu":null,
                                    "smallIcon":"SSSWH",
                                    "shortCuts":null,
                                    "reservd1":"NWS",
                                    "reservd2":null,
                                    "childMenuList":null
                                }
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            handleSelect(e) {
                // console.log(e)
                this.$emit('handleSelect', e);
            }
        } 
    }
</script>


<style lang="scss">
.el-menu.el-menu--horizontal {
    border-width: 0px;
}

.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid transparent;
    color: #303133;
}

.el-menu--horizontal > .el-menu-item {
    border-radius: 6px;
    height: 36px;
    line-height: 36px;
    margin-top: 12px;
}

.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 36px;
    line-height: 36px;
    border-bottom-width: 0;
    color: #303133;
    margin-top: 12px;
}

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    height: 36px;
    line-height: 36px;
    border-bottom-width: 0;
    color: #303133;
    margin-top: 12px;
}

.el-submenu__icon-arrow {
    display: none;
}

.el-menu-item-group__title {
    padding: 0;
}

.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: transparent;
    float: none;
    height: 36px;
    line-height: 36px;
    /* padding: 0 10px; */
    color: #909399;
}

.menuTitle {
    position: relative;
    &::before {
        content: '';
        width: 2px;
        height: 20px;
        position: absolute;
        left: 0px;
        top: 22px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../../../assets/image/layuinavitem@2x.png');
    }
     &:first-child {
        &::before {
            width: 0;
        }
        
    }
}


.el-submenu {
    width: 120px;
    margin: 0 10px 0 10px;
    &:hover {
        span {
            color: #878787;
        }
        .HZGL {
            background-image: url('../../../assets/image/HZGL_hover@2x.png');
        }
        .KSGL {
            background-image: url('../../../assets/image/KSGL_hover@2x.png');
        }
        .JCSJ {
            background-image: url('../../../assets/image/JCSJ_hover@2x.png');
        }
        .SystemSetup {
            background-image: url('../../../assets/image/Systemsetup_hover@2x.png');
        }

    }
    .el-submenu__title {
        border-radius: 6px;
        margin-left: 5px;
        padding: 0;
        &:hover {
            span {
                color: #666666 !important;
            }
        }
        span {
            color: #0061C1;
        }
    }
}


.title {
    color: #0061C1;
}

.menu {
    width: 750px;
    background-color: transparent;
    height: 56px;
    i {
        &.icon {
            margin-top: 7px;
            margin-bottom: 18px;
            width: 24px;
            height: 24px;
            float: left;
            // margin-right: 5px;
            margin-left: 15px;
            background-repeat: no-repeat;
            background-size: contain;
            object-fit: contain;
        }
        
        &.HZGL {
            background-image: url('../../../assets/image/HZGL@2x.png');
        }

        &.ZKZB {
            background-image: url('../../../assets/image/ZKZB@2x.png');
        }

        &.KSGL {
            background-image: url('../../../assets/image/KSGL@2x.png');
        }

        &.JCSJ {
            background-image: url('../../../assets/image/JCSJ@2x.png');
        }

        &.SystemSetup {
            background-image: url('../../../assets/image/Systemsetup@2x.png');
        }

        
    }
}

.el-menu--popup {
    min-width: 130px;
    border-radius: 6px;
    background-color: #F9F9F9;
    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 38%;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }
}


.el-menu-item {
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background:transparent;
    // box-shadow:0px 1px 2px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(255,255,255,1);
    &:last-child {
        border-bottom-width: 0px;
    }
    &:hover {
        background-color: #C5E9FF;
    }
    &.singleMenu {
        width: 120px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
        // background-color: chocolate;
        &::before {
            content: '';
            width: 2px;
            height: 20px;
            position: absolute;
            left: -8px;
            top: 10px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url('../../../assets/image/layuinavitem@2x.png');
        }
        i {
            margin-top: 6px;
            margin-left: 0;
            margin-right: 8px;
            margin-bottom: 0;
        }
       
        &:hover {
            span {
                color: #666666 !important;
            }
            .ZKZB {
                background-image: url('../../../assets/image/ZKZB_hover@2x.png');
            }
        }
    }
    

    &.subMenuItem {
        &:hover {
            background-color: #C5E9FF !important;
            span {
                color: #0061C1;
            }
            .RK, .SSS {
                background-image: url('../../../assets/image/RK_hover@2x.png');
            }

            .CWYL {
                background-image: url('../../../assets/image/CWYL_hover@2x.png');
            }

            .GGSZ {
                background-image: url('../../../assets/image/GGSZ_hover@2x.png');
            }

            .TJCX {
                background-image: url('../../../assets/image/TJCX_hover@2x.png');
            }

            .YZSX {
                background-image: url('../../../assets/image/YZSX_hover@2x.png');
            }
            .DGWH {
                background-image: url('../../../assets/image/DGWH_hover@2x.png');
            }

            .CWGL {
                background-image: url('../../../assets/image/CWYL_hover@2x.png');
            }

            .SBWH {
                background-image: url('../../../assets/image/JHSB_hover@2x.png');
            }

            .JCZD {
                background-image: url('../../../assets/image/JCZD_hover@2x.png');
            }

            .JKXMWH {
                background-image: url('../../../assets/image/JKXMWH_hover@2x.png');
            }

            .PFXMWH {
                background-image: url('../../../assets/image/PFXMWH_hover@2x.png');
            }

            .HLCS {
                background-image: url('../../../assets/image/RK_hover@2x.png');
            }

            .KSWH {
                background-image: url('../../../assets/image/KSWH_hover@2x.png');
            }

            .JSGL {
                background-image: url('../../../assets/image/JSGL_hover@2x.png');
            }

            .RYWH {
                background-image: url('../../../assets/image/YHGL_hover@2x.png');
            }

            .SSSWH {
                background-image: url('../../../assets/image/SSSWH_hover@2x.png');
            }

        }
    }
    i {
        background-image: url('../../../assets/image/RK@2x.png');
        &:hover {
            background-image: url('../../../assets/image/RK_hover@2x.png');
        }
        &.sub_icon  {
            height: 36px;
            width: 18px;
            position: absolute;
            top: 0px;
            margin-left: 5px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        &.RK, &.SSS {
            background-image: url('../../../assets/image/RK@2x.png');
        }

        &.CWYL {
            background-image: url('../../../assets/image/CWYL@2x.png');
        }

        &.GGSZ {
            background-image: url('../../../assets/image/GGSZ@2x.png');
        }

        &.TJCX {
            background-image: url('../../../assets/image/TJCX@2x.png');
        }

        &.YZSX {
            background-image: url('../../../assets/image/YZSX@2x.png');
        }

        &.DGWH {
            background-image: url('../../../assets/image/DGWH@2x.png');
            
        }

        &.CWGL {
            background-image: url('../../../assets/image/CWYL@2x.png');
            
        }

        &.SBWH {
            background-image: url('../../../assets/image/JHSB@2x.png');
            
        }

        &.JCZD {
            background-image: url('../../../assets/image/JCZD@2x.png');
            
        }

        &.JKXMWH {
            background-image: url('../../../assets/image/JKXMWH@2x.png');
            
        }

        &.PFXMWH {
            background-image: url('../../../assets/image/PFXMWH@2x.png');
            
        }

        &.HLCS {
            background-image: url('../../../assets/image/RK@2x.png');
            
        }

        &.KSWH {
            background-image: url('../../../assets/image/KSWH@2x.png');
            
        }

        &.JSGL {
            background-image: url('../../../assets/image/JSGL@2x.png');
            
        }

        &.RYWH {
            background-image: url('../../../assets/image/YHGL@2x.png');
           
        }

        &.SSSWH {
            background-image: url('../../../assets/image/SSSWH@2x.png');
            
        }

    }
    span.subItem {
        margin-left: 25px;
    }
}



</style>