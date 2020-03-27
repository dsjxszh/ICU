<template>
    <div class="nursinglist">
        <div class="list">
            <button @click="getData">获取数据</button>
            <nursing-list :menu="menu" :params="params"></nursing-list>
        </div>
    </div>
</template>

<script>
import NursingList from '@/components/NursingList';
import { mock, getResponse } from '@/mock/mock';
import NursingMixins from '@/mixins/nursing';
export default {
    provide() {
        return {
            farther: this
        }
    },
    components: {
        NursingList
    },
    mixins: [NursingMixins],
    data() {
        return {
            menu: [],
            params: [],
            // formData: []
            currentFormData: {}
        }
    },
    watch: {
        position: {
            immediate: true,
            handler(val, old) {
                if ((val.x && old.x) && (val.x !== old.x)) {
                    console.log('换行了!')
                    if (Object.keys(this.currentFormData).length === 0) {
                        console.log('没有更新数据')
                    } else {
                        console.log(this.currentFormData)
                        this.currentFormData = {}
                    }
                }
            }
        }
    },
    methods: {
        getData() {
            getResponse().then(response => {
                this.setFormData(response)
                // console.log('获得的数据为:', response);
            })
        },
        saveData() {

        }
    },
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
                            attr: child.attr||{},
                            list: child.list || []
                        })
                    })
                } else {
                    params.push({
                        componentName: item.componentName,
                        attr: item.attr||{},
                        key: item.key
                    })
                }
            })
            this.params = params;
            // console.log('**********params:', params);
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