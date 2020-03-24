<template>
    <div :class="['single-select', select]" @mouseover="showSelect" @mouseleave="hideSelect">
        <img :src="selectIcon" :class="imgStyle" />
        <el-select ref="select" v-model="selectItem" @focus="focus" placeholder="" @keydown.enter.native="enter">
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
    props: {
        // options: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // },
        value: {
            type: String,
            default: ''
        }, 
        x: {
            type: Number
        }, 
        y: {
            type: Number
        },
        suby: {
            type: String,
            default: '-1'
        }
    },
    watch: {
        value: {
            immediate: true,
            handler() {
                // console.log('外部传入的值为:', val)
                // this.selectItem = val;
            }
        },
        suby: {
            immediate: true,
            handler(val) {
                if (val !== '-1') {
                    console.log('子坐标的位置为:',val);
                }
                
            }
        },
        position: {
            immediate: true,
            handler(val) {
                if (val.x === this.x || val.y === this.y) {
                    this.select = 'select';
                } else {
                    this.select = ''
                }
               
                if (val.x !== this.x || val.y !== this.y) { //当是焦点时，就要弹出下拉框
                    this.$refs.select && this.$refs.select.blur();
                } else {
                    this.setCurrentCom(false);
                }

            }
        },
        enterClick: {
            immediate: true,
            handler(val, oldVal) {
                if (val && !oldVal) {
                    if (val === true && this.position.x === this.x && this.position.y === this.y) { // 要同时按下enter键并且位置相同才能触发
                        if (this.$refs.select) {
                            this.$refs.select.$el.click();
                            this.$refs.select.setSoftFocus();
                            this.setEnter(false);
                        }
                        
                    }
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
            select: '',
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
        }
    },
    methods: {
        clear() {
            this.selectItem = ''
        },
        showSelect() {
            this.imgStyle = '';
        },
        hideSelect() {
            this.imgStyle = 'img';
        },
        focus() {
            this.setPosition({ x: this.x, y: this.y });
            EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
        },
        enter() {
            // console.log('本地enter键入', { x: this.x, y: this.y });
           
            this.$refs.select && this.$refs.select.blur();

            setTimeout(() => {
                EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
            }, 500)
            
        }
    },
    mounted() {

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
.select {
    background-color: #FFE9CF;
}
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