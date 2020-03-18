<template>
    <div class="single-select" @mouseover="showSelect" @mouseleave="hideSelect">
        <img :src="selectIcon" :class="imgStyle" />
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <span class="clear" @click="clear" :class="imgStyle">X</span>
    </div>
</template>

<script>
import selectIcon from '@/assets/image/f-selecticon@2x.png';
export default {
    props: {
        options: []
    },
    data() {
        return {
            value: '',
            selectIcon,
            showImg: false,
            imgStyle: 'img'
        }
    },
    methods: {
        clear() {
            this.value = ''
        },
        showSelect() {
            this.imgStyle = '';
        },
        hideSelect() {
            this.imgStyle = 'img';
        }
    }
}
</script>

<style lang="scss">
.el-select {
    .el-input {
        width: 100px;
    }
} 
.el-input__suffix {
    width: 0;
    display: none;
}

.el-input__inner {
    height: 25px;
    line-height: 25px;
    border-width: 0;
}
</style>

<style lang="scss" scoped>
.single-select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    img {
        width: 15px;
        height: 15px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .clear {
        cursor: pointer;
    }
    .img {
        visibility: hidden;
    }
}
</style>