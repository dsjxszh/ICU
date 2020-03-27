<template>
    <div :class="['time',active]">
        <div class="clock">
            <input v-model="hour" ref="hour" @blur="handleHour" @focus="focus($event)" class="input"  />
            :
            <input v-model="minute" ref="min" @blur="handleMinute" @focus="focus($event)" class="input" />
        </div>
        <el-date-picker
            class="picker"
            v-model="value1"
            type="datetime"
            ref="datePicker"
            :default-value="defaultValue"
            @change="selectDate"
            >
        </el-date-picker>
        <i class="el-icon-date" @click="showDate" />
    </div>
</template>

<script>
import { isNumber } from '@/utils/validate'
import NursingMixins from '@/mixins/nursing';
export default {
    inject: ["farther"],
    mixins: [NursingMixins],
    props: {
        x: {
            type: Number
        }, 
        y: {
            type: Number
        },
        z: {
            type: Number
        },
        keyName: {
            type: String
        }
    },
    data() {
        return {
            hour: '',
            minute: '',
            active: '',
            value1: '',
            defaultValue: new Date(),
            inputByDate: false
        }
    },
    watch: {
        position: {
            immediate: true,
            handler(val) {
                if ((val.x === this.x) || (val.y === this.y && val.z === this.z)) {
                    this.active = 'active';
                } else {
                    this.active = ''
                }

                if (val.x === this.x && val.y === this.y && val.z === this.z) { //
                    this.active = 'z-active';
                    this.$refs.hour.focus();
                }
            }
        },
        hour: {
            immediate: true,
            handler(val,oldValue) {
                if (!this.inputByDate) {
                    // 数值校验
                    if (!isNumber(val) || parseInt(val) > 23) {
                        // 还要对数值的大小进行校验(0-23)
                        this.hour = oldValue
                        return
                    }
                    if (val.length === 2 && this.minute === '') {
                        this.minute = '00';
                        this.$refs.min.focus();
                    }
                    // 长度校验(如果原先的值为两位数，添加不可，删除则可)
                    if (oldValue && oldValue.length === 2 && val.length >= 2 ) {
                        // this.$refs.min.focus();
                        this.hour =oldValue;
                    }
                }
                
            }
        },
        minute: {
            immediate: true,
            handler(val, oldValue) {
                // 数值校验
                if (!isNumber(val) || parseInt(val) > 59) {
                    this.minute = oldValue
                    return
                }
                // 长度校验(如果原先的值为两位数，添加不可，删除则可)
                if (oldValue && oldValue.length === 2 && val.length >= 2 && val != '00' ) {
                    this.minute =oldValue;
                }
            }
        }
    },
    methods: {
        focus:function(event){
            event.currentTarget.select();
            this.setPosition({ x: this.x, y: this.y, z: this.z });
        },
        handleHour() {
            if (parseInt(this.hour) <= 9 && this.hour != '') {
                this.hour = '0' + this.hour;
                return;
            }
            if (this.hour === '') {
                this.hour = '00'
            }
        },
        handleMinute() {
            if (parseInt(this.minute) <= 9 && this.minute != '') {
                this.minute = '0' + this.minute;
            }
            
        },
        showDate() {
            //当打开时间选取器后，可以向其中设定最新的时间
            this.hour = this.hour === '' ? '00' : this.hour;
            this.minute = this.minute === '' ? '00' : this.minute;
            let date = new Date();
            date.setHours(parseInt(this.hour));
            date.setMinutes(parseInt(this.minute));
            date.setSeconds(0);
            this.value1 = date;
            this.$refs.datePicker.pickerVisible = true
        },
        selectDate(e) {
            //选定日期后重新设置时分
            let hour = e.getHours();
            let minute = e.getMinutes();
            this.inputByDate = true;
            this.hour = parseInt(hour) < 10 ? '0' + hour : hour;
            this.minute = parseInt(minute) < 10 ? '0' + minute : minute;
            this.inputByDate = false;
        },
    }
}
</script>

<style lang="scss" scoped>
.time {
    position: relative;
    width: 140px;
    height: 30px;
    // border-top: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    &.active {
        background-color: #FFE9CF;
    }
    &.z-active {
        background-color: #fff;
        border:2px solid rgba(0,164,255,1);
    }
    .picker {
        width: 0;
        height: 0;
        z-index: -999;
    }
    i {
        margin-top: 4px;
        margin-left: 3px;
        cursor: pointer;
        font-size: 14px;
        color: #666666;
    }
    .input {
        &:focus {
            outline: 0;
        }
        width: 20px;
        border: 0;
        text-align: center;
        background-color: transparent;
    }
}

</style>