<template>
    <div class="app-container">
        <search-form :params="params" :paramsbutton="paramsbutton" @search="search" @rest="rest" />
        <business-table :columns="tableColumns"></business-table>
        <pagination :currentPage="1" :total="500"></pagination>
    </div>
</template>

<script>
import AllComponents from '@/utils/components'
export default {
    provide() {
        return {
            farther: this
        }
    },
    props: {
        params: {
            type: Array,
            default() {
                return []
            }
        },
        paramsbutton: {
            type: Array,
            default() {
                return []
            }
        },
        tableColumns: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        ...AllComponents
    },
    data() {
        return {
            form: {}
        }
    },
    methods: {
        search() {},
        rest() {}
    }
}
</script>

<style lang="scss" scoped>

</style>