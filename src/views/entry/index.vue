<template>
    <div>
        <common-table :params="params"></common-table>
    </div>
</template>

<script>
import CommonTable from '@/components/CommonTable';
export default {
    components: {
        CommonTable
    },
    data() {
        return {
            params: [
                {
                    componentName: "InputTemplate",
                    keyName: "name",
                    label: "姓名:"
                },{
                    componentName: "InputTemplate",
                    keyName: "period",
                    label: "住院号:",
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>

</style>