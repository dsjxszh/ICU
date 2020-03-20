<template>
    <div class="nursing-form">
        <div
            class="component"
            v-for="(item, index) in params"
            :key="index + item.componentName + new Date()"
        >
            <!-- <component :is="item.componentName" v-bind="item" /> -->
            <div class="c"></div>
        </div>
    </div>
</template>

<script>
import AllComponents from '@/utils/components'
export default {
    inject: ["farther"],
    components: {
        ...AllComponents
    },
    props: {
        params: {
          type: Array
        },
        idx: {
            type: Number
        }
    },
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
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    box-sizing: border-box;
}
</style>