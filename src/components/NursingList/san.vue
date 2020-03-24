<template>
    <div @click="showM" :class="['cc']">
        <InputTemplate style="height:30px" :class="[select]">三级</InputTemplate> 
        <div v-show="show" :class="[subSelect]">
            <template v-for="(com, index) in list">
                <component :is="com.componentName" :key="com.keyName" v-bind="{suby: y + '-' + index, x: x}" />
            </template>
        </div>
    </div>
</template>

<script>
import AllComponents from '@/utils/components';
import NursingMixins from '@/mixins/nursing';
import EventBus from '@/utils/event-bus';
import InputTemplate from '@/components/BusinessSearchComponents/InputTemplate';
export default {
    components: {
        ...AllComponents,
        InputTemplate
    },
    mixins: [NursingMixins],
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        },
        keyTab: {
            type: String
        },
        x: {
            type: Number
        }, 
        y: {
            type: Number
        }
    },
    watch: {
        sanShow: {
            immediate: true,
            deep: true,
            handler(val) {
                // console.log('外界传入的值为:', val);
                this.show = val[this.keyTab];

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
                if (val.x === this.x) {
                    this.subSelect = 'select';
                } else {
                    this.subSelect = '';
                }
                if (val.x === this.x && val.y === this.y) {
                    this.setCurrentCom(true);
                }
            }
        },
        enterClick: {
            immediate: true,
            handler(val) {
                if (val && this.position.x === this.x && this.position.y === this.y) { // 要同时按下enter键并且位置相同才能触发
                    this.showM();
                    this.setEnter(false);
                }
            }
        }
    },
    data() {
        return {
            ss: '',
            show: false,
            select: '',
            subSelect: ''
        }
    },
    methods: {
        showM() {
            // this.ss = this.ss ==='show' ? '' : 'show';
            EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
            this.setSanShow({
                [this.keyTab]: !this.show
            })
        }
    },
    mounted() {
        // console.log('加载完成:', this.$props)
        this.setSanShow({
            [this.keyTab]: false,
            ...this.sanShow
        })
    }
}
</script>

<style lang="scss" scoped>
.select {
    background-color: #FFE9CF;
}
.cc {
    // background-color: lightcoral;
    // display: none;
    .sub {
        display: none;
    }
    .show {
        display: block;
    }
}
</style>