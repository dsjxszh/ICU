<template>
    <div :class="['cc']">
        <div @click="showM" style="height:30px" :class="[select, 'border']">三级</div> 
        <div v-show="show">
            <template v-for="(com, index) in list">
                <component :is="com.componentName" :key="com.keyName" v-bind="{y: y, x: x, z: index + 1, attr: com.attr || {}, keyName: com.key}" />
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
        x: {
            type: Number
        }, 
        y: {
            type: Number
        },
        z: {
            type: Number
        }
    },
    watch: {
        sanShow: {
            immediate: true,
            deep: true,
            handler(val) {
                this.show = val[this.y];
            }
        },
        position: {
            immediate: true,
            handler(val) {
                if ((val.x === this.x) || (val.y === this.y && val.z === this.z)) {
                    this.select = 'select';
                } else {
                    this.select = ''
                }
                if (val.x === this.x && val.y === this.y && val.z === this.z) {
                    // this.setCurrentCom(true);
                    // // 这里要设置当前节点下面一共要有多少个子节点(y, length)
                    // this.setSubDomLength(this.list.length);
                    this.select = 'z-select';
                }
            }
        },
        enterClick: {
            immediate: true,
            handler(val) {
                if (val && this.position.x === this.x && this.position.y === this.y && this.position.z === this.z) { // 要同时按下enter键并且位置相同才能触发
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
        }
    },
    methods: {
        showM() {
            EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
            this.setSanShow({
                [this.y]: !this.show
            })
        }
    },
    mounted() {
        let obj = {
            y: this.y,
            len: this.list.length,
        }
        if (this.sanArray.length === 0) {
            this.setSanArray([obj]);
        } else {
            let duplicate = false;
            this.sanArray.forEach(element => {
                if (element.y === this.y) {
                    duplicate = true;
                }
            });
            !duplicate && this.setSanArray([obj, ...this.sanArray]);
        }
        this.setSanShow({
            [this.y]: this.show
        })
    }
}
</script>

<style lang="scss" scoped>
.select {
    background-color: #FFE9CF;
}

.z-select {
    background-color: lightskyblue;
}
.cc {
    // background-color: lightcoral;
    // display: none;
    .border {
        border-bottom: 1px solid lightgray;
        border-right: 1px solid lightgray;
    }
    .sub {
        display: none;
    }
    .show {
        display: block;
    }
}
</style>