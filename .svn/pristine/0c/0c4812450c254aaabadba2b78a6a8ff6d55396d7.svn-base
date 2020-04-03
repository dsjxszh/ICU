<template>
    <div>
        <div class="left" v-for="(item, index) in menu" :key="index">
            <div :class="['parent', item.list ? 'parent-children': '']" :style="{height: leftHeight(item.list) + 'px'}">
                <p>{{item.value}}</p>
            </div>
            <template v-if="item.list">
                <ul :key="item.value">
                    <li class="li" v-for="(child) in item.list" :key="child.value">
                        <p>{{child.value}}</p>
                        <template v-if="child.list">
                            <p v-for="grand in child.list" :key="grand.key" v-show="sanShow[child.idx] || false">
                                {{grand.value}}
                            </p>
                        </template>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
import NursingMixins from '@/mixins/nursing';
export default {
    props: {
        menu: {
            type: Array,
            default() {
                return []
            }
        }
    },
    mixins: [NursingMixins],
    data() {
        return {
            show: {},
            y:0
        }
    },
    methods: {
        leftHeight(children) {
            let length = children ? children.length : 1;
            return 30 * length
        },
    }
}
</script>

<style lang="scss" scoped>
.left {
    display: flex;
    flex-direction: row;
    .parent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 192px;
        height: 30px;
        line-height: 100%;
        border-bottom: 1px solid lightgray;
        border-right: 1px solid lightgray;
        box-sizing: border-box;
    }
    .parent-children {
        width: 40px;
        height: 100%;
        padding: 0 20px;
        line-height: 30px;
        box-sizing: border-box;
    }
    ul {
        padding: 0;
        margin: 0;
    }
    .li {
        line-height: 30px;
        // border: 1px solid lightgray;
        border-right: 1px solid lightgray;
        list-style-type: none;
        width: 151px;
        box-sizing: border-box;
        p {
            height: 30px;
            margin: 0px;
            box-sizing: border-box;
            border-bottom: 1px solid lightgray;
        }
    }
}
</style>