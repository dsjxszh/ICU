<template>
    <div class="app-container">
        <search-form :params="params" @search="search" @rest="rest" />
    </div>
</template>

<script>
import SearchForm from '@/components/SearchForm';
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
        }
    },
    components: {
        SearchForm
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