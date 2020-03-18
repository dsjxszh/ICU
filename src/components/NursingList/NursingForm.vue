<template>
    <div class="nursing-form">
        <dl>
            <dd
                v-for="(item, index) in params"
                :key="index"
            >
                <component :is="item.componentName" v-bind="item" />
            </dd>
        </dl>
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
    
}
</style>