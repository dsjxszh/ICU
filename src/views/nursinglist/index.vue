<template>
    <div class="nursinglist">
        <div class="list">
            <nursing-list :menu="menu" :params="params"></nursing-list>
        </div>
    </div>
</template>

<script>
import NursingList from '@/components/NursingList';
import { mock } from '@/mock/mock';
export default {
    components: {
        NursingList
    },
    data() {
        return {
            menu: [],
            params: [],
        }
    },
    methods: {},
    mounted() {
        mock().then(res => {
            this.menu = res
            let params = [];
            this.menu.forEach(item => {
                if (item.list) {
                    item.list.forEach(child => {
                        params.push({
                            componentName: child.componentName,
                            keyName: child.keyName
                        })
                    })
                } else {
                    params.push({
                        componentName: item.componentName,
                        keyName: item.keyName
                    })
                }
            })
            this.params = params;
            // console.log('params:', this.params)
        })
    }
}
</script>

<style lang="scss" scoped>
.nursinglist {
    width: 100%;
    height: 100%;
  
}

</style>