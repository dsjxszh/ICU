<template>
    <div :class="['single-select', active]" @mouseover="showSelect" @mouseleave="hideSelect">
        <img :src="selectIcon" :class="imgStyle" />
        <el-select ref="select" :value="selectItem" @change="change"  @focus="focus" placeholder="" @keydown.enter.native="enter">
            <el-option
                ref="options"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <span class="clear" @click="clear" :class="imgStyle">X</span>
    </div>
</template>

<script>
import selectIcon from '@/assets/image/f-selecticon@2x.png';
import EventBus from '@/utils/event-bus';
import NursingMixins from '@/mixins/nursing';
export default {
    inject: ['farther'],
    props: {
        // options: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // },
        x: {
            type: Number
        }, 
        y: {
            type: Number
        },
        z: {
            type: Number
        },
        keyName: {
            type: String
        }
    },
    watch: {
        position: {
            immediate: true,
            handler(val) {
                if ((val.x === this.x) || (val.y === this.y && val.z === this.z)) {
                    this.active = 'active';
                } else {
                    this.active = ''
                }
               
                if (val.x !== this.x || val.y !== this.y) { //当不是焦点时，就要弹出下拉框
                    this.$refs.select && this.$refs.select.blur();
                } 

                if (val.x === this.x && val.y === this.y && val.z === this.z) { //
                    this.active = 'z-active';
                }
            }
        },
        enterClick: {
            immediate: true,
            handler(val, oldVal) {
                if (val && !oldVal) {
                    if (this.position.x === this.x && this.position.y === this.y && this.position.z === this.z) { // 要同时按下enter键并且位置相同才能触发
                        if (this.$refs.select) {
                            this.$refs.select.$el.click();
                            this.$refs.select.setSoftFocus();
                            this.setEnter(false);
                        }
                    }
                }
            }
        },
        formData: {
            immediate: true,
            deep: true,
            handler(val) {
                if (val[this.x-1] && val[this.x-1][this.keyName]) {
                    this.selectItem = val[this.x-1][this.keyName]
                } 

                if (val[this.x -1]) {
                    this.xid = val[this.x - 1].xid;
                } else {
                    this.xid = null;
                }
            }
        }
    },
    mixins: [NursingMixins],
    data() {
        return {
            selectItem: '',
            selectIcon,
            showImg: false,
            imgStyle: 'img',
            active: '',
            options: [
                {
                    label: '选项一',
                    value: '选项一'
                },
                {
                    label: '选项二',
                    value: '选项二'
                }
            ],
            xid: null //保存当前列对应的id
        }
    },
    methods: {
        clear() {
            if (this.selectItem === '') return;
            this.farther.currentFormData.xid = this.xid
            this.farther.currentFormData[this.keyName] = '';
            console.log('获取到的表单数据为:', this.farther.currentFormData)
            this.selectItem = '';
        },
        showSelect() {
            this.imgStyle = '';
        },
        hideSelect() {
            this.imgStyle = 'img';
        },
        focus() {
            this.setPosition({ x: this.x, y: this.y, z: this.z });
            EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y, z: this.z })
        },
        enter() {
            this.$refs.select && this.$refs.select.blur();

            setTimeout(() => {
                EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
            }, 500)
            
        },
        change(val) {
            this.farther.currentFormData.xid = this.xid
            this.farther.currentFormData[this.keyName] = val;
            console.log('获取到的表单数据为:', this.farther.currentFormData)
            this.selectItem = val;
        }
    },
    mounted() {
        // this.selectItem = this.value;
    }
}
</script>

<style lang="scss">
.single-select {
    .el-select {
        .el-input {
            width: 100px;
        }
    } 
    .el-input__suffix {
        width: 0;
        display: none;
    }

    .el-input__inner {
        height: 25px;
        line-height: 25px;
        border-width: 0;
        background-color: transparent;
    }
}

</style>

<style lang="scss" scoped>
.single-select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 30px;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    &.active {
        background-color: #FFE9CF;
    }
    &.z-active {
        background-color: #fff;
        border:2px solid rgba(0,164,255,1);
    }
    img {
        width: 15px;
        height: 15px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .clear {
        cursor: pointer;
    }
    .img {
        visibility: hidden;
    }
}
</style>