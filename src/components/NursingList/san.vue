<template>
    <div :class="['ErJi']">
        <div @click="showM" class="ErJiTitle" :class="[ErJiTitlezhankai,active, 'border']">三级</div> 
        <div class="ZiJiBeiJing" v-show="show">
            <template v-for="(com, index) in list">
                <div :class="com.componentName" :key="com.keyName">
                    <component :is="com.componentName" v-bind="{y: y, x: x, z: index + 1, attr: com.attr || {}, keyName: com.key}" />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import AllComponents from '@/utils/components';
import NursingMixins from '@/mixins/nursing';
// import EventBus from '@/utils/event-bus';
import InputTemplate from '@/components/BusinessSearchComponents/InputTemplate';
export default {
    inject: ['farther'],
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
                if(this.show) this.ErJiTitlezhankai="ErJiTitlezhankai"
                else this.ErJiTitlezhankai=""
            }
        },
        position: {
            immediate: true,
            handler(val) {
                if ((val.x === this.x) || (val.y === this.y && val.z === this.z)) {
                    this.active = 'active';
                } else {
                    this.active = ''
                }
                if (val.x === this.x && val.y === this.y && val.z === this.z) {
                    // this.setCurrentCom(true);
                    // // 这里要设置当前节点下面一共要有多少个子节点(y, length)
                    // this.setSubDomLength(this.list.length);
                    this.active = 'z-active';
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
            active: '',
            ErJiTitlezhankai:""
        }
    },
    methods: {
        showM() {
            this.setPosition({ x: this.x, y: this.y,z:this.z });
            // EventBus.$emit('focus', 'nursinglist', { x: this.x, y: this.y })
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
.ErJi {
    .ErJiTitle{
        height: 30px;
        line-height: 30px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            top:0px;
            left: 5px;
            width: 14px;
            height: 30px;
            background-image: url(../../assets/image/hebing@2x.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
        &.ErJiTitlezhankai::before{
            background-image: url(../../assets/image/zhankai@2x.png);
        }
    }
    .border {
        border-bottom: 1px solid lightgray;
        border-right: 1px solid lightgray;
        box-sizing: border-box;
    }
    .sub {
        display: none;
    }
    .show {
        display: block;
    }
    .active {
        background-color: #FFE9CF;
    }
    .z-active{
        background-color: #fff;
        border:2px solid rgba(0,164,255,1);
    }
    .ZiJiBeiJing{
        background:rgba(233,247,255,1);
        
        .SelectSearchNursing,.SingleSelect{
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top:0px;
                left: 5px;
                width: 14px;
                height: 30px;
                background-image: url(../../assets/image/xialakuang@2x.png);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }
        }
    }
}
</style>