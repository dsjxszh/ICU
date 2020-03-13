<template>
    <div class="layout">
        <top-bar />
        <tabs />
    </div>
</template>

<script>
import TopBar from './component/TopBar';
import Tabs from './component/Tabs';
import LayoutMixins from '@/mixins/layout';
export default {
    components: {
        TopBar,
        Tabs
    },
    mixins: [LayoutMixins],
}
</script>

<style lang="scss" scoped>
.layout {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .el-menu-vertical-demo {
        width: 100%;
        height: 56px;
    }
}

</style>