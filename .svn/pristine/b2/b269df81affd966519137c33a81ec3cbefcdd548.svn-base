<template>
    <div class="sidebar">
        <template v-for="(item, index) in tabArray">
            <div :key="index" :class="['tab', item.active]" @click="activeItem(item.key)">
                <span>{{item.title}}</span>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array
        }
    },
    data() {
        return {
            tabArray: [],
            active: ''
        }
    },
    watch: {
        tabs: {
            immediate: true,
            handler(val) {
                this.tabArray = val.map((item,i) => {
                    return {
                        active: i===0?"active":'',
                        ...item
                    }
                });
            }
        }
    },
    methods: {
        activeItem(key) {
            this.tabArray = this.tabArray.map(item => {
                return {
                    ...item,
                    active: item.key === key ? 'active' : ''
                    
                }
            })
            this.$emit('active', key);
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display:none
    }
    .tab {
        width: 35px;
        min-height: 73px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(210, 210, 210, 1);
        border-radius:4px;
        margin: 3px 0 2px 2px;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius:4px;
        span {
            width: 10px;
            font-size:12px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(102,102,102,1);
            padding: 25px 0 25px 0;
        }
        &.active {
            background:linear-gradient(0deg,rgba(0,164,255,1),rgba(116,203,255,1));
            span {
                color: white;
            }
            
        }
        &::-webkit-scrollbar {
            display:none
        } 
    } 
}
  
</style>