<template>
    <div class="bedbrowse">
        <div class="left" v-for="(item, index) in menu" :key="index">
            <div :class="['parent', item.children ? 'parent-children': '']">
                <p>{{item.parent}}</p>
            </div>
            <template v-if="item.children">
                <ul :key="item.parent">
                    <li class="li" v-for="child in item.children" :key="child">{{child}}</li>
                </ul>
            </template>
        </div>
        <!-- <nursing-list></nursing-list> -->
    </div>
</template>

<script>
// import NursingList from '@/components/NursingList';
import { mock } from '@/mock/mock';
export default {
    components: {
        // NursingList
    },
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            menu: [],
            hasChildren: ''
        }
    },
    mounted() {
        mock().then(res => {
            console.log('***获取到的数据为:', res);
            this.menu = res.map(item => {
                if (item.list && item.list.length > 0) {
                    let children = item.list.map(child => {
                        return child.value;
                    })
                    return {
                        parent: item.value,
                        children
                    }
                } else {
                    return {
                        parent: item.value
                    }
                }
            })
            console.log('获取的menu为:', this.menu);
        })
    }
}
</script>

<style lang="scss" scoped>
.bedbrowse {
    // margin-left: 330px;
    display: flex;
    flex-direction: column;
    .left {
        display: flex;
        flex-direction: row;
        .parent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 192px;
            min-height: 30px;
            line-height: 100%;
            border: 1px solid lightgray;
            p{
                display: table-cell;
                vertical-align: middle;
            }
        }
        .parent-children {
            width: 40px;
        }
        ul {
            padding: 0;
            margin: 0;
        }
        .li {
            height: 30px;
            line-height: 30px;
            border: 1px solid lightgray;
            list-style-type: none;
            width: 150px;
        }
    }
}
</style>