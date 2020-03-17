<template>
    <div class="bedbrowse">
        <nursing-time></nursing-time>
    </div>
</template>

<script>
import NursingTime from '@/components/NursingList/NursingTime.vue';
export default {
    components: {
        NursingTime
    }
}
</script>

<style lang="scss" scoped>
.bedbrowse {
    margin-left: 330px;
}
</style>