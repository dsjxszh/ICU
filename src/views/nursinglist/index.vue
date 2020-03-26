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
    // mixins: [NursingMixins],
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
                            key: child.key,
                            ControlAttribute: child.ControlAttribute||{},
                            list: child.list || []
                        })
                    })
                } else {
                    params.push({
                        componentName: item.componentName,
                        ControlAttribute: item.ControlAttribute||{},
                        key: item.key
                    })
                }
            })
            this.params = params;
            console.log('**********params:', params);
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