<template>
    <div :class="['c', select]">
        <div @mouseover="focus">{{value}}</div>
    </div>
</template>

<script>
import NursingMixins from '@/mixins/nursing';
// import EventBus from '@/utils/event-bus';
export default {
    inject: ['farther'],
    props: {
        x: {
            type: Number,
        },
        y: {
            type: Number
        },
        z: {
            type: Number
        },
        keyName: {
            type: String
        },
        componentName: {
            type: String
        }
    },
    watch: {
        position: {
            immediate: true,
            handler(val) {
                if (val.y === this.y || val.x === this.x) {
                    this.select = 'select';
                } else {
                    this.select = ''
                }
            }
        },
        value: {
            immediate: true,
            handler() {
                // if (this.farther.formData && this.x && this.keyName) {
                //     this.farther.formData[this.x][this.keyName] = val;
                // }
                // console.log('选中的项目名称为:', this.farther.formData, this.keyName, val);
            }
        },
        formData: {
            immediate: true,
            deep: true,
            handler(val) {
                if (val[this.x - 1] && val[this.x - 1][this.keyName]) {
                    this.value = val[this.x - 1][this.keyName]
                }
            }
        }
    },
    mixins: [NursingMixins],
    data() {
        return {
            select: 'select',
            value: ''
        }
    },
    methods: {
        focus() {
            this.$emit('focus', { x: this.x, y: this.y, componentName: this.componentName });
        }
    }
}
</script>

<style lang="scss" scoped>
.select {
    background-color: #FFE9CF;
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
    div {
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