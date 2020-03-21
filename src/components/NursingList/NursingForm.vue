<template>
    <div class="nursing-form">
        <div
            class="component"
            v-for="(item, index) in formList"
            :key="idx + index + item.componentName"
            @keyup.left="left"
            @keyup.right="right"
            @keyup.up="top"
            @keyup.down="down"
            @focus="parentfocus"
        >
            <template v-if="item.componentName != 'NursingTime' && item.show === false">
                <seize-input :x="idx" :y="index" :componentName="item.componentName" @focus="focus"></seize-input>
            </template>
            <template v-else>
                <component :is="item.componentName" v-bind="{value: item.value, x: idx, y: index, ...item}" />
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
        },
        parentfocus() {
            // 父组件监听
            console.log('父组件获得焦点')
        }
    }
}
</script>

<style lang="scss" scoped>
.nursing-form {
    width: 140px;
    // background-color: firebrick;
    .component {
        &:nth-child(even) {
            background-color: #F7F7F7;
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