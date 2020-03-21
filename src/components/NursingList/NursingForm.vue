<template>
    <div class="nursing-form"> 
        <input 
            ref="input" 
            class="holder" 
            @keyup.left="left"
            @keyup.right="right"
            @keyup.up="top"
            @keyup.down="down" 
            @keyup.enter="enter" />
        <div
            tabindex="0"
            class="component"
            v-for="(item, index) in formList"
            :key="idx + index + item.componentName"
            @click="cellClick"
            
        >   
            <template v-if="item.componentName != 'NursingTime' && item.show === false">
                <seize-input :x="idx" :y="index" :componentName="item.componentName" @focus="focus"></seize-input>
            </template>
            <template v-else>
                <component :is="item.componentName" v-bind="{value: item.value, x: idx, y: index, list: item.list || [],  ...item}" />

            </template>
        </div>

    </div>
</template>

<script>
import AllComponents from '@/utils/components';
import SeizeInput from './SeizeInput';
import NursingMixins from '@/mixins/nursing';
export default {

    inject: ["farther"],
    mixins: [NursingMixins],
    components: {
        ...AllComponents,
        SeizeInput
    },
    props: {
        params: {
          type: Array
        },
        idx: {
            type: Number
        },
    },
    watch: {
        params: {
            immediate: true,
            handler(val) {
                this.formList = val.map(item => {
                    return {
                        show: false,
                        ...item
                    }
                });
            }
        },
        position: {
            immediate: true,
            handler(val) {
                if (val.x === this.idx) {
                    // console.log('位置为:', val)
                    this.formList[val.y].show = true;
                } 
            }
        }
    },
    mounted() {
        // EventBus.$on('focus', 'nursinglist',({ x, y }) => {
        //     console.log('选中的组件位置为:', x, y, this.idx)
        //     if (x === this.idx) {
        //         this.select = 'select';
        //     }
        // });
    },
    data() {
        return {
            hot: false,
            x: 0,
            y: 0,
            keyName: '',
            formList: [],
            select: ''
        }
    },
    methods: {
        focus(e) {
            const { x, y } = e;
            this.formList[y].show = true;
            this.x = x;
            this.y = y;
        },
        componentFocus() {
            // console.log('我被选中啦...!');
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
            if (y === this.formList.length) return;
            this.setPosition({x: x, y: y+1 })
<<<<<<< HEAD
        },
        enter() {
            const { x, y } = this.position;
            console.log(`位置在x:${x}, y:${y}的组件按下了enter键` )
        },
        cellClick() {
            // this.$refs.input.focus();
            console.log('我被点击了')
=======
>>>>>>> 247e0a13526458bebdb15e91c850eae63887a75e
        }
    }
}
</script>

<style lang="scss" scoped>
.nursing-form {
    position: relative;
    .holder {
        position: absolute;
        top: -100px;
    }
    width: 140px;
    // background-color: firebrick;
    .component {
        position: relative;
        &:nth-child(even) {
            background-color: #F7F7F7;
        }
        .hidden {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            box-sizing: border-box;
            display: none;
            // z-index: -1;
        }
    }
}

.c {
    // background-color: lightgray;
    width: 140px;
    height: 30px;
    border-width: 0px;
    box-sizing: border-box;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    &:nth-child(even) {
        background-color: #F7F7F7;
    }
    input {
        width: 100%;
        height: 100%;
        // border-bottom: 1px solid lightgray;
        // border-right: 1px solid lightgray;
        border-width: 0px;;
        box-sizing: border-box;
        background-color: transparent;
    }
}
</style>