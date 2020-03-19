<template>
    <div class="nursinglist">
        <div class="bedbrowse">
            <div>
                <div class="left" v-for="(item, index) in menu" :key="index">
                    <div :class="['parent', item.list ? 'parent-children': '']" :style="{height: leftHeight(item.list) + 'px'}">
                        <p>{{item.value}}</p>
                    </div>
                    <template v-if="item.list">
                        <ul :key="item.value">
                            <li class="li" v-for="child in item.list" :key="child.value">{{child.value}}</li>
                        </ul>
                    </template>
                </div>
            </div>
            <div class="nursing-list">
                <nursing-form :params="params" v-for="i in 12" :idx="i" :key="i"></nursing-form>
            </div>
        </div>
    </div>
</template>

<script>
import NursingForm from './NursingForm';
export default {
    provide() {
        return {
            farther: this
        }
    },
    components: {
        NursingForm
    },
    props: {
        menu: {
            type: Array,
            default() {
                return []
            }
        },
        params: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            form: {},
            hasChildren: '',
        }
    },
    methods: {
        leftHeight(children) {
            let length = children ? children.length : 1
            // console.log('children:', children, 'height:', 30 * length);
            return 30 * length
        }
    },
}
</script>

<style lang="scss" scoped>
.nursinglist {
    width: 100%;
    height: 100%;
    .nursing-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        // height: 400px;
        // background-color: peru;
        left: 0;
        margin: 0;
        padding: 0;
    }
    .bedbrowse {
        // margin-left: 330px;
        display: flex;
        flex-direction: row;
        border: 1px solid lightgray;
        // margin: 20px;
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
                height: 30px;
                line-height: 30px;
                // border: 1px solid lightgray;
                border-bottom: 1px solid lightgray;
                border-right: 1px solid lightgray;
                list-style-type: none;
                width: 151px;
                box-sizing: border-box;
            }
        }
    }
}

</style>