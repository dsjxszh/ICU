<template>
    <div>
        <el-tabs :value="currentTab" @tab-click="changeTab" type="card" :closable="closable" @tab-remove="remove" style="margin-top: 5px;">
            <el-tab-pane
                key="首页"
                label="首页"
                name="first-page"
                :closable="false"
            >
                <div class="content first-page">
                    <component :is="FirstPage" />
                </div>
            </el-tab-pane>
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            ></el-tab-pane>
            <div class="content">
                <router-view></router-view>
            </div>
        </el-tabs>
    </div>
</template>

<script>
import LayoutMixins from '@/mixins/layout';
import AllPages from '@/utils/pages';
import FirstPage from '@/views/firstPage';
export default {
    mixins: [LayoutMixins],
    components: {
        FirstPage
    },
    data() {
        return {
            FirstPage: 'FirstPage'
        }
    },
    watch: {
        currentTab: {
            immediate: true,
            handler(val) {
                console.log('当前显示的tab为:',AllPages, val,  AllPages[val])
                this.$router.push(`/dashboard/${AllPages[val]}`);
            }
        }
    },
    created() {
        console.log(AllPages);
    },
    methods: {
        remove(targetName) {
            // console.log('你要移除的项目为:', targetName);
            this.removeTab(targetName);
        },
        changeTab(tab) {
            const { name } = tab;
            this.changeCurrentTab(name);
            console.log('改变tab:', name);
        }
    }
}
</script>

<style lang="scss">
.el-tabs__header {
    margin: 0;
}

.el-tabs__item {
    margin: 0 5px 0 10px;
    cursor: pointer;
    padding-left: 10px;
    width: 140px;
    height: 34px;
    line-height: 34px;
    // float: left;
    border-radius: 4px 4px 0px 0px;
    background: #EDEDED;
    border: 1px solid #D2D2D2;
    color: #666;
    text-shadow: 0px 1px 0px #fff;
    margin: 4px 4px 0px 4px;
    border-bottom: 0px;
    &:hover {
        color: #69666A; 
        background: rgba(237,237,237, 0.5);
    }
    &.is-active {
        background-color: white;
        color: #69666A; 
    }
}

.el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: 0px;
}

.content {
    width: 100%;
    min-height: 835px;
    background-color: white;
}

#tab-first-page {
    .el-icon-close {
        &::before {
            content: '';
        }
    }
}
</style>