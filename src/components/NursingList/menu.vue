<template>
    <div>
        <div class="left">
            <!-- <div :class="['parent', item.list ? 'parent-children': '']" :style="{height: leftHeight(item.list) + 'px'}">
                <p>{{item.value}}</p>
            </div> -->
            <!-- <template v-if="item.list"> -->
                <ul>
                    <li class="li">
                        <p>时间</p>
                    </li>
                    <li class="li" v-for="(item, index) in menuList" :key="index">
                        <p>{{item.value}}</p>
                        <template v-if="item.list">
                            <p style="background-color:rgba(233,247,255,1)" v-for="grand in item.list" :key="grand.key" v-show="sanShow[item.idx] || false">
                                {{grand.value}}
                            </p>
                        </template>
                    </li>
                </ul>
            <!-- </template> -->
        </div>
    </div>
</template>

<script>
import NursingMixins from '@/mixins/nursing';
export default {
    props: {
        menu: {
            type: Object,
            default() {
                return []
            }
        },
        keyNameZ: {
            type: String,
        }
    },
    mixins: [NursingMixins],
    watch: {
        keyNameZ: {
            immediate: true,
            handler(val) {
                
                if (this.menu[val]) {
                    if(this.menu[val].list){
                        this.menuList=this.menu[val].list.map(item => {
                            return {
                                ...item
                            }
                        });
                    }else{
                        this.menuList = [{value: this.menu[val].value}]
                    }
                }
            }
        },
    },
    data() {
        return {
            show: {},
            y:0,
            menuList:[]
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
        list-style-type: none;
        width: 151px;
        box-sizing: border-box;
        p {
            height: 30px;
            margin: 0px;
            box-sizing: border-box;
            border-bottom: 1px solid lightgray;
            border-right: 1px solid lightgray;
        }
    }
}
</style>