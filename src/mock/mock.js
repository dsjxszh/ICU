let json = [
    {
        key: 'SJ', 
        value: '时间',
        componentName: "NursingTime",
    },
    {
        key: 'SZ',
        value: '神志',
        list: [{
            key: 'rass',
            value: 'RASS镇静评分',
            componentName: "NuminputNursing",
            keyName: "rass",
            attr:{
                WenBen:true
            }
        },{
            key: 'ys',
            value: '意识',
            componentName: "PopupInput",
            attr:{
                DuoJiGaoJin:[
                    {
                        min:2,
                        max:5,
                        color:"#000"
                    }
                ],
            }
        },{
            key: 'gcs',
            value: 'GCS昏迷评分',
            componentName: "NuminputNursing",
            attr:{
                DuoJiGaoJin:[
                    {
                        min:2,
                        max:5,
                        color:"#000"
                    }
                ],
            }
        },{
            key: 'tky',
            value: '瞳孔右',
            componentName: "NuminputNursing",
        },{
            key: 'tkz',
            value: '瞳孔左',
            componentName: "CheckboxNursing",
            keyName: "rass",
            attr:{
                arrayData:[
                    {
                        value:"name1",
                        name:"name1",
                        label:"",
                        fiesdlname:"青霉素1",
                
                    }
                ]
            }
        },{
            key: 'zdgfy',
            value: '左对光反应',
            componentName: "san",
            list: [{
                value: '意识一', 
                componentName: 'SingleSelect',
                key: 'ys1'
            },{
                value: '意识一', 
                componentName: 'SelectSearchNursing',
                keyName: 'ys4',
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
            componentName: "SingleSelect",
        },{
            key: 'xl',
            value: '心率',
            componentName: "SingleSelect",
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
        xid: 1,
        SJ: '08:00',
        gcs: '12',
        xl: '选项一'
    },
    {
        xid: 2,
        SJ: '10:00',
        gcs: '13',
        xl: '选项一'
    },
    {
        xid: 3,
        SJ: '09:00',
        gcs: '19',
        xl: '选项一'
    }
]

let newRes = [
    {
        SJ: '08:00',
        gcs: '12',
        xl: '选项一'
    },
    {
        SJ: '10:00',
        gcs: '13',
        xl: '选项一'
    },
    {
        SJ: '09:00',
        gcs: '19',
        xl: '选项一'
    },
    {
        xl: '选项二'
    }
]

export const getResponse = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response)
        }, 100)
    })
}

export const save = () => {
    return new Promise((resolve) => {
        resolve(newRes);
    }, 100)
}