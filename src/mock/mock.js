let json = [
    {
        key: 'SJ', //key值
        value: '时间',//菜单名字
        componentName: "NursingTime",//引用组件名NursingTime时间组件
    },
    {
        key: 'SZ',
        value: '神志',
        list: [{//二级菜单list
            key: 'rass',
            value: 'RASS镇静评分',
            componentName: "NuminputNursing",//数值输入框和文本输入框组件
            attr:{//数值输入框和文本输入框属性对象
                WenBen:true//文本输入框WenBen属性传true，数值可以不传
            }
        },{
            key: 'gcs',
            value: 'GCS昏迷评分',
            componentName: "NuminputNursing",
            attr:{
                DuoJiGaoJin:[//数值输入框控制多级校验数组
                    {
                        min:2,
                        max:5,
                        color:"#000"
                    }
                ],
                XieGang:true
            }
        },{
            key: 'tky',
            value: '瞳孔右',
            componentName: "NuminputNursing",
            attr:{
                precision:2,//数值输入框控制输入小数位数
                // XieGang:{//允不允许输入/
                // JaJian:{//是否可-或+
                // Ja:{//是否可+或数字
                // Jian:{//是否可-或数字
                // FuShu:{//是否可输入负数
            }
        },{
            key: 'ys',
            value: '意识',
            componentName: "PopupInput",//弹出框组件
            attr:{
                PopupName:"DialogPFHL"
            }
        },{
            key: 'tkz',
            value: '瞳孔左',
            componentName: "CheckboxNursing",//复选框组件
            attr:{
                arrayData:[
                    {
                        name:"tkz",
                    }
                ]
            }
        },{
            key: 'zdgfy',
            value: '左对光反应',
            componentName: "san",//有子级的组件
            list: [{//三级list
                value: '意识一', 
                componentName: 'SingleSelect',
                key: 'ys1'
            },{
                value: '意识一', 
                componentName: 'SelectSearchNursing',
                keyName: 'ys4',
                attr:{
                    arrayData:[//下拉框选项数组
                        {
                            id:"1",
                            name:"选项一",
                            fields1:"青霉素1",
                    
                        },{
                            id:"2",
                            name:"选项2",
                            fields1:"青霉素2",
                    
                        }
                    ]
                }
            },{
                value: '意识二',
                componentName: 'NuminputNursing',
                key: 'ys2'
            },{
                value: '意识二',
                componentName: 'CheckboxNursing',
                key: 'ys3',
                attr:{
                    arrayData:[
                        {
                            value:"1",
                            name:"name1",
                            label:"",
                            fiesdlname:"青霉素1",
                    
                        }
                    ]
                }
            }]
        },{
            key: 'ydgfy',
            value: '右对光反应',
            componentName: "SingleSelect",
        }]
    },
    {
        key: 'TZ',
        value: '生命体征',
        list: [{
            key: 'tw',
            value: '体温',
            componentName: "SelectSearchNursing",
            attr:{
                arrayData:[
                    {
                        id:"1",
                        name:"选项一",
                        fields1:"青霉素1",
                
                    },{
                        id:"2",
                        name:"选项2",
                        fields1:"青霉素2",
                
                    }
                ]
            }
        },{
            key: 'xl',
            value: '心率',
            componentName: "PopupInput",//弹出框组件
            attr:{
                PopupName:"DialogPFHLwww"
            }
        },{
            key: 'xll',
            value: '心律',
            componentName: "SingleSelect",
        },{
            key: 'ssywc',
            value: '收缩压(无创)',
            componentName: "SingleSelect",
        },{
            key: 'szywc',
            value: '舒张压(无创)',
            componentName: "SingleSelect",
        },{
            key: 'ssyyc',
            value: '收缩压(有创)',
            componentName: "SingleSelect",
        },{
            key: 'szyyc',
            value: '舒张压(有创)',
            componentName: "SingleSelect",
        },{
            key: 'map',
            value: 'MAP',
            componentName: "SingleSelect",
        },{
            key: 'cvp',
            value: 'CVP',
            componentName: "SingleSelect",
        },{
            key: 'bjsz',
            value: '报警设置',
            componentName: "SingleSelect",
        },{
            key: 'bjtl',
            value: '报警调零',
            componentName: "SingleSelect",
        },{
            key: 'hx',
            value: '呼吸',
            componentName: "SingleSelect",
        },{
            key: 'spo2',
            value: 'SPO2',
            componentName: "SingleSelect",
        },{
            key: 'gyfs',
            value: '给氧方式',
            componentName: "SingleSelect",
        },{
            key: 'yll',
            value: '氧流量',
            componentName: "SingleSelect",
        },{
            key: 'lldw',
            value: '流量单位',
            componentName: "SingleSelect",
        }]
    },
    {
        key: 'jxtq',
        value: '机械通气',
        componentName: "SingleSelect",
    },
    {
        key: 'ysqm',
        value: '医生签名',
        componentName: "SingleSelect",
    },
    {
        key: 'rl',
        value: '入量',
        componentName: "SingleSelect",
    },
    {
        key: 'cl',
        value: '出量',
        list: [{
            key: 'yly',
            value: '引流液',
            componentName: "SingleSelect",
        },{
            key: 'dbys',
            value: '大便颜色',
            componentName: "SingleSelect",
        },{
            key: 'dbl',
            value: '大便量',
            componentName: "SingleSelect",
        },{
            key: 'nyys',
            value: '尿液颜色',
            componentName: "SingleSelect",
        },{
            key: 'msnl',
            value: '每时尿量',
            componentName: "SingleSelect",
        }]
    },
    {
        key: 'fxpg',
        value: '风险评估',
        list: [{
            key: 'bardenpf',
            value: 'Braden评分',
            componentName: "SingleSelect",
        },{
            key: 'ddzcpf',
            value: '跌倒坠床评分',
            componentName: "SingleSelect",
        },{
            key: 'ADLpf',
            value: 'ADL评分',
            componentName: "SingleSelect",
        },{
            key: 'nrsttpf',
            value: 'NRS疼痛评分',
            componentName: "SingleSelect",
        },{
            key: 'cpotttpf',
            value: 'Cpot疼痛评分',
            componentName: "SingleSelect",
        },{
            key: 'vtepfwk',
            value: 'VTE评分-外科',
            componentName: "SingleSelect",
        },{
            key: 'vtepfnk',
            value: 'VTE评分-内科',
            componentName: "SingleSelect",
        },{
            key: 'yypf',
            value: '营养评分',
            componentName: "SingleSelect",
        },{
            key: 'aldretepf',
            value: 'Aldrete评分',
            componentName: "SingleSelect",
        },{
            key: 'ylxssyhpf',
            value: '压力性损伤愈合评分',
            componentName: "SingleSelect",
        }]
    },
    {
        key: 'hlxm',
        value: '护理项目',
        componentName: "SingleSelect",
    },
    {
        key: 'jchl',
        value: '血气分析',
        componentName: "SingleSelect",
    },
    {
        key: 'msxt',
        value: '末梢血糖',
        componentName: "SingleSelect",
    },
    {
        key: 'bqgc',
        value: '病情观察',
        componentName: "SingleSelect",
    },
    {
        key: 'qm',
        value: '签名',
        componentName: "SingleSelect",
    }
]

export const mock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(json);
        }, 100)
    }); 
}

let response = [
    {
        recordId: 1,
        SJ: '08:00',
        gcs: '12',
        xl: '选项一'
    },
    {
        recordId: 2,
        SJ: '10:00',
        gcs: '13',
        xl: '选项一'
    },
    {
        recordId: 3,
        SJ: '09:00',
        gcs: '19',
        xl: '选项一'
    }
]


export const getResponse = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response)
        }, 100)
    })
}

let menuList = [{
                id: "dzbl",
                title: "电子病历",
                icon: 'DZBL',
                children: [
                    { id: "brxx", title: "病人信息", icon: "BRXX" },
                    { id: "jc", title: "检查", icon: "JC" },
                    { id: "jy", title: "检验", icon: "JY" },
                    { id: "bc", title: "病程", icon: "BC" }
                ]
            },{
                id: "hlz",
                title: "护理站",
                icon: "HLZ",
                children: [
                    { id: "zzhld", title: "重症护理单", icon: "HL" },
                    { id: "ybhld", title: "一般护理单", icon: "HL" },
                    { id: "yz", title: "医嘱", icon: "YZ" },
                    { id: "tw", title: "体温", icon: "TW" },
                    { id: "dgpz", title: "导管配置", icon: "DGPZ" },
                    { id: "cbphld", title: "CBP护理单", icon: "CBP" },
                    { id: "zljl", title: "治疗记录", icon: "CBP" },
                    { id: "pfhld", title: "皮肤护理单", icon: "DGPZ" },
                    { id: "crytj", title: "出入液统计", icon: "CRYTJ" },
                    { id: "crytjq", title: "出入液统计(全)", icon: "CRYTJ" },
                    { id: "brzlqk", title: "病人治疗情况", icon: "BRZLQK" },
                    { id: 'yzlsb', title: "医嘱(流速版)", icon: "YZ" },
                    { id: "pfhl3d", title: "皮肤护理(3D)", icon: "HZGL"}
                ]
            },{
                id: "pfyl",
                title: "评分一览",
                icon: "PFYL"
            },{
                id: "hlpg",
                title: "护理评估",
                icon: "HLPG"
            }]

export const getMenuList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menuList)
        }, 100)
    })
}

