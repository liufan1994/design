/*
 * @Author: hzq
 * @Date: 2019-07-20 16:35:15
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-25 20:57:02
 * @文件说明: 侧导航组件
 */
<template>
    <div class="h-aside">
        <img class="db cursor lf-img" src="~common/LF.png" alt="LF" @click="$to('/')">
        <div class="router-ul">
            <li v-for="i in $designCurrRouterData" :key="i.routerName" @click="$to('/'+i.routerName)">
                <div class="color-block bdr4" :style="{background:`linear-gradient(${i.deg},${i.color1},${i.color2})`}"></div>
                <p class="name f24 align-c">{{i.name}}</p>
            </li>
        </div>
    </div>
</template>

<script>
    export default { name: 'h-aside' }
</script>
<style lang="scss" scoped>
    .h-aside {
        position: fixed;
        top: 100px;
        right: 220px;
        z-index: 99;
        .lf-img {
            width: 60px;
        }
        .router-ul {
            position: relative;
            margin-top: 44px;
            li {
                @extend .cursor;
                height: 50px;
                &:hover {
                    .color-block {
                        padding-right: 8px;
                        padding-bottom: 8px;
                        box-shadow: 4px 0px 10px rgba(34, 221, 187, 0.4);
                    }
                    .name {
                        @extend .db;
                    }
                }
                .color-block {
                    width: 32px;
                    height: 32px;
                    transition: 0.3s linear;
                }
                .name {
                    @extend .dn;
                    position: absolute;
                    top: -5px;
                    right: -30px;
                    width: 25px;
                    padding-bottom: 20px;
                    word-break: break-all;
                    border-bottom: 4px solid rgba(34, 221, 187, 0.52);
                }
            }
        }
    }
</style>
