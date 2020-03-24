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
        EventBus.$on('focus', 'nursinglist',({x, y}) => {
            console.log('***---选中的组件位置为:', x, y, this.$refs.ginput);
            // this.$refs.input.click();
            this.$refs.ginput.focus();
        });
        EventBus.$on('blur', 'nursinglist',() => {
            // console.log('***---选中的组件位置为:', x, y, this.$refs.input);
            this.$refs.ginput.blur();
        });
        document.onkeydown = (e) => {
            console.log(e);
        }
    },
    destroyed() {
        document.onkeydown = null;
    },
    data() {
        return {
            form: {},
            hasChildren: '',
        }
    },
    watch: {
        currentComIsSan: {
            immediate: true,
            handler(val) {
                val && console.log('当前的组件为多级菜单...');

            }
        }
    },
    methods: {
        left() {
            const { x, y } = this.position;
            if (x === 1) {
                this.setPosition({
                    x: 12,
                    y
                })
                return
            }
            this.setPosition({x: x-1, y: y })
        },
        right() {
            const { x, y } = this.position;
            if (x === 12) {
                this.setPosition({
                    x: 1,
                    y
                })
                return;
            }
            this.setPosition({x: x+1, y: y })
        },
        top() {
            const { x, y } = this.position;
            if (y === 1) return;
            this.setPosition({x: x, y: y-1 })
        },
        down() {
            const { x, y } = this.position;
            // if (this.currentComIsSan) {

            //     return;
            // }
            
            if (y === 47) return;
            this.setPosition({x: x, y: y+1 })
        },
        enter() {
            // console.log('监听到enter事件了，实在有点意外....')
            this.setEnter(true);
        },
        isMainCor() {
            // 判断当前坐标是否为主坐标
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