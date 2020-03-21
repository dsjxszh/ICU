<template>
    <div @click="showM" class="cc">
       <div style="height:30px">三级</div> 
        <div :class="['sub', ss]">
            <template v-for="com in list">
                <component :is="com.componentName" :key="com.keyName" />
            </template>
        </div>
        
    </div>
</template>

<script>
import AllComponents from '@/utils/components';
    export default {
        components: {
            ...AllComponents
        },
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                ss: ''
            }
        },
        methods: {
            showM() {
                this.ss = this.ss ==='show' ? '' : 'show';
            }
        },
        mounted() {
            console.log('加载完成:', this.$props)
        }
    }
</script>

<style lang="scss" scoped>
.cc {
    background-color: aqua;
    // display: none;
    .sub {
        display: none;
    }
    .show {
        display: block;
    }
}
</style>