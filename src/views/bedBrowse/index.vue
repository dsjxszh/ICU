<template>
    <div class="bedbrowse">
        <nursing-time></nursing-time>
        <single-select :options="options"></single-select>
    </div>
</template>

<script>
import NursingTime from '@/components/NursingList/NursingTime.vue';
import SingleSelect from '@/components/NursingList/SingleSelect.vue';
export default {
    components: {
        NursingTime,
        SingleSelect
    },
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.bedbrowse {
    margin-left: 330px;
}
</style>