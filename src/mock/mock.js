let json = [
    {
        key: 'SZ',
        value: '神志',
        list: [{
            key: 'ys',
            value: '意识'
        },{
            key: 'rass',
            value: 'RASS镇静评分'
        },{
            key: 'gcs',
            value: 'GCS昏迷评分'
        },{
            key: 'tky',
            value: '瞳孔右'
        },{
            key: 'tkz',
            value: '瞳孔左'
        },{
            key: 'zdgfy',
            value: '左对光反应'
        },{
            key: 'ydgfy',
            value: '右对光反应'
        }]
    },
    {
        key: 'TZ',
        value: '生命体征',
        list: [{
            key: 'tw',
            value: '体温'
        },{
            key: 'xl',
            value: '心率'
        },{
            key: 'xll',
            value: '心律'
        },{
            key: 'ssywc',
            value: '收缩压(无创)'
        },{
            key: 'szywc',
            value: '舒张压(无创)'
        },{
            key: 'ssyyc',
            value: '收缩压(有创)'
        },{
            key: 'szyyc',
            value: '舒张压(有创)'
        },{
            key: 'map',
            value: 'MAP'
        },{
            key: 'cvp',
            value: 'CVP'
        },{
            key: 'bjsz',
            value: '报警设置'
        },{
            key: 'bjtl',
            value: '报警调零'
        },{
            key: 'hx',
            value: '呼吸'
        },{
            key: 'spo2',
            value: 'SPO2'
        },{
            key: 'gyfs',
            value: '给氧方式'
        },{
            key: 'yll',
            value: '氧流量'
        },{
            key: 'lldw',
            value: '流量单位'
        }]
    },
    {
        key: 'jxtq',
        value: '机械通气'
    },
    {
        key: 'ysqm',
        value: '医生签名'
    },
    {
        key: 'rl',
        value: '入量'
    },
    {
        key: 'cl',
        value: '出量',
        list: [{
            key: 'yly',
            value: '引流液'
        },{
            key: 'dbys',
            value: '大便颜色'
        },{
            key: 'dbl',
            value: '大便量'
        },{
            key: 'nyys',
            value: '尿液颜色'
        },{
            key: 'msnl',
            value: '每时尿量'
        }]
    },
    {
        key: 'fxpg',
        value: '风险评估',
        list: [{
            key: 'bardenpf',
            value: 'Braden评分'
        },{
            key: 'ddzcpf',
            value: '跌倒坠床评分'
        },{
            key: 'ADLpf',
            value: 'ADL评分'
        },{
            key: 'nrsttpf',
            value: 'NRS疼痛评分'
        },{
            key: 'cpotttpf',
            value: 'Cpot疼痛评分'
        },{
            key: 'vtepfwk',
            value: 'VTE评分-外科'
        },{
            key: 'vtepfnk',
            value: 'VTE评分-内科'
        },{
            key: 'yypf',
            value: '营养评分'
        },{
            key: 'aldretepf',
            value: 'Aldrete评分'
        },{
            key: 'ylxssyhpf',
            value: '压力性损伤愈合评分'
        }]
    },
    {
        key: 'hlxm',
        value: '护理项目'
    },
    {
        key: 'jchl',
        value: '血气分析'
    },
    {
        key: 'msxt',
        value: '末梢血糖'
    },
    {
        key: 'bqgc',
        value: '病情观察'
    },
    {
        key: 'qm',
        value: '签名'
    }
]

export const mock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(json);
        }, 1000)
    }); 
}