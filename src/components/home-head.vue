/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-27 20:38:34
 * @文件说明: 首页-头部组件
 */
<template>
    <div class='home-header flex-b'>
        <div class="left cursor" @click="$to('/')">
            <p class="wel c6 f28">welcome to</p>
            <img class="title-name db" src="~home/title-name.png">
            <div class="ui flex-s f36 c3">
                <span>ui - designer</span>
                <span class="line ml25"></span>
            </div>
        </div>

        <img class="close cursor" v-if="about" src="~common/close.png" @click="$to('/')">
        <div v-else class="right">
            <h-button router="/about">关于我</h-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home-header',
        props: {
            about: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang='scss' scoped>
    .home-header {
        position: relative;
        margin-top: 153px;
        .left {
            .wel {
                text-transform: uppercase;
            }
            .title-name {
                width: 330px;
                margin-bottom: 50px;
                margin-top: 30px;
            }
            .ui {
                text-transform: uppercase;
                .line {
                    width: 100px;
                    height: 4px;
                    background-color: #22ddbb;
                }
            }
        }
        .close {
            position: absolute;
            top: 100px;
            right: 0;
            width: 88px;
            height: 88px;
            transition: all 0.15s linear;
            &:hover {
                transform: scale(1.1, 1.1);
            }
        }
        .right {
            margin-top: 120px;
        }
    }
</style>
