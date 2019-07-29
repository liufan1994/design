/*
 * @Author: hzq
 * @Date: 2019-07-20 18:25:08
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-30 00:01:48
 * @文件说明: 页面头部组件
 */
<template>
    <div class="h-head" :style="{backgroundColor:headBgColor}">
        <h-tab/>
        <div class="text-content mt16 align-r f">
            <div class="big-title">{{currDesignRouter.name}}</div>
            <template v-if="currRouterTab.head">
                <div class="f24 mb30">{{currRouterTab.head.h2}}</div>
                <div class="flex-e">
                    <p class="info f18">{{currRouterTab.head.p}}</p>
                </div>
            </template>
        </div>
        <template v-if="currRouterTab.head">
            <img v-if="currRouterTab.head.img" :key="currRouterTab.head.img" class="head-img" :src="require('design/'+currRouterTab.head.img)">
        </template>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'h-head',
        computed: {
            ...mapState(['currDesignRouter', 'currRouterTab']),
            headBgColor() {
                let bgcolor =
                    this.currRouterTab.bgcolor || this.currDesignRouter.bgcolor

                return bgcolor
            }
        }
    }
</script>
<style lang="scss" scoped>
    .h-head {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        height: 592px;
        background-color: #22ddbb;
        border-radius: 0px 0px 10px 10px;
        .text-content {
            padding-right: 60px;
            .big-title {
                font-size: 44px;
                margin-bottom: 50px;
            }
            .info {
                width: 530px;
                line-height: 1.6em;
                text-align: justify;
                text-align-last: right;
                opacity: 0.6;
            }
        }
        .head-img {
            position: absolute;
            bottom: -300px;
            left: -200px;
            width: 900px;
        }
    }
</style>
