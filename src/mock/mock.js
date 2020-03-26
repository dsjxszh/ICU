let json = [
    {
        key: 'SJ', 
        value: '时间',
        componentName: "NursingTime",
        keyName: "time"
    },
    {
        key: 'SZ',
        value: '神志',
        list: [{
            key: 'ys',
            value: '意识',
            componentName: "PopupInput",
            keyName: "time",
            list:[
                {
                    key: 'rass1',
                    value: 'RASS镇静评分1',
                    componentName: "DialogPFHL",
                    keyName: "rass1",
                }
            ]
        },{
            key: 'rass',
            value: 'RASS镇静评分',
            componentName: "NuminputNursing",
            keyName: "rass",
            attr:{
                WenBen:true
            }
        },{
            key: 'gcs',
            value: 'GCS昏迷评分',
            componentName: "NuminputNursing",
            keyName: "rass",
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
            keyName: "rass",
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
            keyName: "rass",
            list: [{
                value: '意识一', 
                componentName: 'SingleSelect',
                keyName: 'ys1'
            },{
                value: '意识一', 
                componentName: 'SelectSearchNursing',
                keyName: 'ys4',
                attr:{
                    arrayData:[
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
                }
            },{
                value: '意识二',
                componentName: 'NuminputNursing',
                keyName: 'ys2'
            },{
                value: '意识二',
                componentName: 'CheckboxNursing',
                keyName: 'ys3',
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
            keyName: "rass"
        }]
    },
    {
        key: 'TZ',
        value: '生命体征',
        list: [{
            key: 'tw',
            value: '体温',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'xl',
            value: '心率',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'xll',
            value: '心律',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'ssywc',
            value: '收缩压(无创)',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'szywc',
            value: '舒张压(无创)',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'ssyyc',
            value: '收缩压(有创)',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'szyyc',
            value: '舒张压(有创)',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'map',
            value: 'MAP',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'cvp',
            value: 'CVP',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'bjsz',
            value: '报警设置',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'bjtl',
            value: '报警调零',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'hx',
            value: '呼吸',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'spo2',
            value: 'SPO2',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'gyfs',
            value: '给氧方式',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'yll',
            value: '氧流量',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'lldw',
            value: '流量单位',
            componentName: "SingleSelect",
            keyName: "rass"
        }]
    },
    {
        key: 'jxtq',
        value: '机械通气',
        componentName: "SingleSelect",
        keyName: "rass"
    },
    {
        key: 'ysqm',
        value: '医生签名',
        componentName: "SingleSelect",
        keyName: "rass"
    },
    {
        key: 'rl',
        value: '入量',
        componentName: "SingleSelect",
        keyName: "rass"
    },
    {
        key: 'cl',
        value: '出量',
        list: [{
            key: 'yly',
            value: '引流液',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'dbys',
            value: '大便颜色',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'dbl',
            value: '大便量',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'nyys',
            value: '尿液颜色',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'msnl',
            value: '每时尿量',
            componentName: "SingleSelect",
            keyName: "rass"
        }]
    },
    {
        key: 'fxpg',
        value: '风险评估',
        list: [{
            key: 'bardenpf',
            value: 'Braden评分',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'ddzcpf',
            value: '跌倒坠床评分',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'ADLpf',
            value: 'ADL评分',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'nrsttpf',
            value: 'NRS疼痛评分',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'cpotttpf',
            value: 'Cpot疼痛评分',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'vtepfwk',
            value: 'VTE评分-外科',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'vtepfnk',
            value: 'VTE评分-内科',
            componentName: "SingleSelect",
            keyName: "rass"
        },{
            key: 'yypf',
            value: '营养评分',
            componentName: "SingleSelect",
            keyName: "rass",
        },{
            key: 'aldretepf',
            value: 'Aldrete评分',
            componentName: "SingleSelect",
            keyName: "rass",
        },{
            key: 'ylxssyhpf',
            value: '压力性损伤愈合评分',
            componentName: "SingleSelect",
            keyName: "rass",
        }]
    },
    {
        key: 'hlxm',
        value: '护理项目',
        componentName: "SingleSelect",
        keyName: "rass",
    },
    {
        key: 'jchl',
        value: '血气分析',
        componentName: "SingleSelect",
        keyName: "rass"
    },
    {
        key: 'msxt',
        value: '末梢血糖',
        componentName: "SingleSelect",
        keyName: "rass"
    },
    {
        key: 'bqgc',
        value: '病情观察',
        componentName: "SingleSelect",
        keyName: "rass"
    },
    {
        key: 'qm',
        value: '签名',
        componentName: "SingleSelect",
        keyName: "rass"
    }
]

export const mock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(json);
        }, 100)
    }); 
}