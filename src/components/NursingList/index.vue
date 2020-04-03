<template>
    <div class="nursinglist">
        <!-- <input 
            ref="ginput" 
            class="holder" 
            
            @keyup.left="left"
            @keyup.right="right"
            @keyup.up="top"
            @keyup.down="down" 
            @keyup.enter="enter" /> -->
        <div class="bedbrowse">
            <div>
                <nursing-menu :menu="menu" :keyNameZ="keyNameZ" />
            </div>
            <div class="nursing-list">
                <nursing-form :params="params" v-for="i in 12" :keyNameZ="keyNameZ" :key="i + new Date()" :idx="i"></nursing-form>
            </div>
        </div>
    </div>
</template>

<script>
import NursingMenu from './menu';
import NursingForm from './NursingForm';
// import EventBus from '@/utils/event-bus';
import NursingMixins from '@/mixins/nursing';
export default {
    mixins: [NursingMixins],
    components: {
        NursingForm,
        NursingMenu
    },
    props: {
        menu: {
            type: Object,
            default() {
                return []
            }
        },
        params: {
            type: Object,
            default() {
                return []
            }
        },
        keyNameZ:{
            type:String
        }
    },
    watch: {
        position: {
            immediate: true,
            handler(val) {
                console.log('位置发生改变:', val)
            }
        },
    },
    mounted() {
        window.onkeydown = this.keyDown;  
    },
    destroyed() {
        window.onkeydown = null;
    },
    data() {
        return {
            hasChildren: '',
            currentX: -1
        }
    },
    methods: {
        keyDown(e) {
            const { code, key } = e;
            console.log('keyDown:');
            if (code || key) {
                switch(code || key) {
                    case 'ArrowRight':
                        this.right();
                        break;
                    case 'ArrowLeft':
                        this.left();
                        break;
                    case 'ArrowUp':
                        this.top();
                        break;
                    case 'ArrowDown':
                        this.down();
                        break;
                    case 'Enter':
                        // console.log('@@@@')
                        this.enter();
                        break;
                    default:
                        break;
                }
            }
        },
        left() {
            const { x, y, z } = this.position;
            // console.log('position:', x, y, z);
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
                if (y === 0) return;
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
    overflow: hidden;
    background: #fff;
    .holder {
        position: absolute;
        top: -1px;
    }
    .bedbrowse {
        display: flex;
        flex-direction: row;
        border: 1px solid lightgray;
        width: 100%;
        .nursing-list {
            overflow-x: hidden;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            left: 0;
            margin: 0;
            padding: 0;
            width: calc(100% - 151px);
            .nursing-form{
                width: calc(100%/12);
            }
        }
    }
}

</style>