<template>
    <div class="nursinglist">
        <input 
            ref="input" 
            class="holder" 
            @keyup.left="left"
            @keyup.right="right"
            @keyup.up="top"
            @keyup.down="down" 
            @keyup.enter="enter" />
        <div class="bedbrowse">
            <div>
                <div class="left" v-for="(item, index) in menu" :key="index">
                    <div :class="['parent', item.list ? 'parent-children': '']" :style="{height: leftHeight(item.list) + 'px'}">
                        <p>{{item.value}}</p>
                    </div>
                    <template v-if="item.list">
                        <ul :key="item.value">
                            <li class="li" v-for="child in item.list" :key="child.value">
                                
                                <p>{{child.value}}</p>
                                <template v-if="child.list" >
                                    <p v-for="grand in child.list" :key="grand.key">
                                        {{grand.value}}
                                    </p>
                                </template>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
            <div class="nursing-list">
                <nursing-form :params="params" v-for="i in 12" :key="i + new Date()" :idx="i"></nursing-form>
            </div>
        </div>
    </div>
</template>

<script>
import NursingForm from './NursingForm';
import EventBus from '@/utils/event-bus';
import NursingMixins from '@/mixins/nursing';
export default {
    provide() {
        return {
            farther: this
        }
    },
    mixins: [NursingMixins],
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
    mounted() {
        EventBus.$on('focus', 'nursinglist',({ x, y }) => {
            console.log('***---选中的组件位置为:', x, y, this.$refs.input);
            this.$refs.input.focus();
        });
    },
    data() {
        return {
            form: {},
            hasChildren: '',
            columns: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    },
    methods: {
        leftHeight(children) {
            let length = children ? children.length : 1;
            return 30 * length
        },
        left() {
            const { x, y } = this.position;
            if (x === 1) return;
            this.setPosition({x: x-1, y: y })
        },
        right() {
            const { x, y } = this.position;
            if (x === 12) return;
            this.setPosition({x: x+1, y: y })
        },
        top() {
            const { x, y } = this.position;
            if (y === 1) return;
            this.setPosition({x: x, y: y-1 })
        },
        down() {
            const { x, y } = this.position;
            if (y === 47) return;
            this.setPosition({x: x, y: y+1 })
        },
        enter() {
            const { x, y } = this.position;
            console.log(`位置在x:${x}, y:${y}的组件按下了enter键` )
        }
    },
}
</script>

<style lang="scss" scoped>
.nursinglist {
    width: 100%;
    height: 100%;
    .holder {
        position: absolute;
        top: -1000px;
    }
    .nursing-list {
        // max-width: 1200px;
        overflow-x: scroll;
        // overflow-y: none;
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