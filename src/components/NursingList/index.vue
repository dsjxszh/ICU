<template>
    <div class="nursinglist">
        <input 
            ref="ginput" 
            class="holder" 
            @keyup.left="left"
            @keyup.right="right"
            @keyup.up="top"
            @keyup.down="down" 
            @keyup.enter="enter" />
        <div class="bedbrowse">
            <div>
                <nursing-menu :menu="menu" />
            </div>
            <div class="nursing-list">
                <nursing-form :params="params" v-for="i in 12" :key="i + new Date()" :idx="i"></nursing-form>
            </div>
        </div>
    </div>
</template>

<script>
import NursingMenu from './menu';
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
        NursingForm,
        NursingMenu
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
        EventBus.$on('focus', 'nursinglist',({x, y, z}) => {
            console.log('***---选中的组件位置为:', x, y, z);
            this.$refs.ginput.focus();
        });
        EventBus.$on('blur', 'nursinglist',() => {
            this.$refs.ginput.blur();
        });
    },
    data() {
        return {
            form: {},
            hasChildren: '',
        }
    },
    methods: {
        left() {
            const { x, y, z } = this.position;
            if (x === 1) {
                this.setPosition({
                    x: 12,
                    y,
                    z
                })
                return
            }
            this.setPosition({x: x-1, y: y, z })
        },
        right() {
            const { x, y, z } = this.position;
            if (x === 12) {
                this.setPosition({
                    x: 1,
                    y,
                    z
                })
                return;
            }
            this.setPosition({x: x+1, y, z })
        },
        // 判断上下时的策略
        top() {
            const { x, y, z } = this.position;
            if (z === 0) {
                let info = this.sanArray.filter(item => item.y === y - 1)
                if (info.length > 0) {
                    if (this.sanShow[y-1]) {
                        this.setPosition({x, y: y - 1, z: info[0].len})
                        return
                    }
                }
                if (y === 1) return;
                this.setPosition({x: x, y: y-1, z: 0 })
            } else {
                if (z > 0) {
                    this.setPosition({x: x, y: y, z: z-1 })
                }
            }
        },
        down() {
            const { x, y, z } = this.position;
            let info = this.sanArray.filter(item => item.y === y) //筛选并判断是否是多级组件
            if (info.length > 0) {  //说明当前的位置在多级组件的位置中
                if (this.sanShow[y] && z < info[0].len) { //当是展开状态并且长度小于指定的长度时
                    this.setPosition({x, y, z: z + 1})
                    // console.log('*********')
                    return;
                }
            }
            if (y === 47) return;
            this.setPosition({x: x, y: y+1, z: 0 })
        },
        enter() {
            // console.log('监听到enter事件了，实在有点意外....')
            this.setEnter(true);
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
        
    }
}

</style>