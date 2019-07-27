/*
 * @Author: hzq
 * @Date: 2018-09-08 12:20:40
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-25 21:36:17
 * @文件说明: 按钮
 */
<template>
    <div class='h-button' :style="{width:width}" @click="gopage">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'h-button',
        props: {
            width: {
                type: String,
                default: ''
            },
            router: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        methods: {
            gopage() {
                if (this.router) this.$to(this.router)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .h-button {
        position: relative;
        width: 280px;
        height: 88px;
        line-height: 80px;
        text-align: center;
        font-size: 36px;
        color: #22ddbb;
        border-radius: 88px;
        box-sizing: border-box;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(135deg, #fff, #fff),
            linear-gradient(-40deg, #13d79d, #22ddbb, #ffaabb);
        border: 4px transparent solid;
        cursor: pointer;
        transition: all 0.15s linear;
        &:hover {
            transform: scale(1.1, 1.1);
        }
    }
</style>
