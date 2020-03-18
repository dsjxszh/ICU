<template>
    <div class="nursing-list">
        <nursing-form :params="params" v-for="i in 12" :idx="i" :key="i"></nursing-form>
    </div>
</template>

<script>
import NursingForm from './NursingForm';
export default {
    provide() {
        return {
            farther: this
        }
    },
    components: {
        NursingForm
    },
    watch: {
        form: {
            immediate: true,
            handler(val) {
                console.log(val)
            }
        }
    },
    data() {
        return {
            form: {},
            params: [
                {
                    componentName: "NursingTime",
                    keyName: "time",
                },{
                    componentName: "SingleSelect",
                    keyName: "rass",
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.nursing-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 400px;
    // background-color: peru;
    left: 0;
}
</style>