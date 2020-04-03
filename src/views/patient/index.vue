<template>
    <div>
        <Menu :data="menuItems" @select="select" @selectItem="selectItem"></Menu>
        <div class="header">
            <Header></Header>
        </div>
        <div class="view">
            <keep-alive>
                <component :is="name"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu';
import Header from './component/header';
import { getMenuList } from '@/mock/mock';
import Patients from '@/utils/patient';
import PatientMixins from '@/mixins/patient';
export default {
    mixins: [PatientMixins],
    components: {
        Menu,
        Header,
        ...Patients
    },
    mounted() {
        getMenuList().then(res => {
            this.menuItems = res.map(item => {
                return {
                    show: false,
                    clickItem: '',
                    ...item
                }
            })
            this.initalMenu = [...this.menuItems]
        })
    },
    watch: {
        $route: {
            handler: function(val) {
                let newPerson = val.params.name;
                let obj = this.patient.filter(item => item.name === newPerson)[0]
                if (obj) {
                    this.name = obj.currentPage
                    this.menuItems = obj.menuItems
                } else {
                    this.name = 'brxx'
                    this.menuItems = this.initalMenu
                }
            },
            // 深度观察监听
            deep: true
        }
    },
    methods: {
        select({id, children}, menus) {
            this.name = id;
            if (children.length === 0) {
                let obj = {
                    name: this.$route.params.name,
                    currentPage: id,
                    menuItems: menus
                }
                this.saveState(obj);
            }
        },
        selectItem(id, menus) {
            this.name = id;
            // console.log('选中的子菜单为:', this.$route.params.name)
            let obj = {
                name: this.$route.params.name,
                currentPage: id,
                menuItems: menus
            }
            this.saveState(obj)
        },
        saveState(obj) {
            // console.log('要保存的数据为:', obj, this.patient)
            if (this.patient.length === 0) {
                this.setPatient([obj])
            } else {
                let has = false;
                let arr = [];
                arr = this.patient.map(item => {
                    if (item.name === obj.name) {
                        has = true;
                        return obj;
                    } else {
                        return item;
                    }
                })
                if (!has) {
                    this.setPatient([...this.patient, obj])
                } else {
                    this.setPatient(arr)
                }
            }
        }
    },
    data() {
        return {
            menuItems: [],
            name: 'brxx',
            initalMenu:[]
        }
    }
}
</script>

<style lang="scss" scoped>

.view {
    margin-left: 125px;
}
</style>