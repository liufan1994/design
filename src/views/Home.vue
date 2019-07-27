/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-27 20:58:37
 * @文件说明: 首页页面
 */
<template>
    <div class="home">
        <div class="content">
            <home-head/>
            <div class="f12 dn">
                {{$designCurrRouterData}}
            </div>
            <div class="five-module">
                <div class="module">
                    <div v-for="i in $designCurrRouterData.slice(0,2)" :key="i.routerName" class="m" :class="i.routerName" :style="{background:`linear-gradient(${i.deg},${i.color1},${i.color2})`}" @click="$to(i.routerName)">
                        <div class="title">{{i.name}}</div>
                        <div class="line" />
                        <img :src="require('home/m-'+i.routerName+'.png')" class="img">
                    </div>
                </div>
                <div class="module">
                    <div v-for="i in $designCurrRouterData.slice(2)" :key="i.routerName" class="m" :class="i.routerName" :style="{background:`linear-gradient(${i.deg},${i.color1},${i.color2})`}" @click="$to(i.routerName)">
                        <div class="title">{{i.name}}</div>
                        <div class="line" />
                        <img :src="require('home/m-'+i.routerName+'.png')" class="img">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default { name: 'home' }
</script>

<style lang='scss' scoped>
    .home {
        @include bgi('~home/home-bg.png', cover, left, bottom);
        overflow: hidden;
        .content {
            width: 1200px;
            margin: 0 auto;
            .five-module {
                margin: 160px 0;
                .module {
                    @include flex-b;
                    &:last-child {
                        margin-top: 64px;
                    }
                    .m {
                        position: relative;
                        box-shadow: 4px 0px 20px rgba(10, 198, 164, 0.2);
                        border-radius: 10px;
                        .title {
                            position: absolute;
                            font-size: 56px;
                            color: #fff;
                            font-weight: bold;
                            transition: all 0.4s;
                        }
                        .line {
                            position: absolute;
                            width: 40px;
                            height: 4px;
                            background-color: #fff;
                            transition: all 0.4s;
                        }
                        .img {
                            position: absolute;
                            opacity: 0;
                            transition: all 0.4s;
                        }
                        &:hover {
                            @extend .cursor;
                            .title {
                                font-size: 44px;
                                transform: translateX(-20px);
                            }
                            .line {
                                transform: translateX(-25px);
                            }
                            .img {
                                opacity: 1;
                                transform: translateX(-30px);
                            }
                        }
                    }
                    .web {
                        width: 664px;
                        height: 340px;
                        &:hover {
                            .title {
                                font-size: 48px;
                            }
                        }
                        .title {
                            top: 120px;
                            left: 90px;
                        }
                        .line {
                            top: 103px;
                            left: 249px;
                        }
                        .img {
                            left: 262px;
                            top: -29px;
                            width: 353px;
                            height: 374px;
                        }
                    }
                    .app {
                        width: 480px;
                        height: 296px;

                        .title {
                            top: 54px;
                            left: 107px;
                            font-size: 52px;
                        }
                        .line {
                            top: 118px;
                            left: 45px;
                        }

                        .img {
                            left: 158px;
                            top: 86px;
                            width: 372px;
                            height: 234px;
                        }
                    }
                    .plane {
                        width: 430px;
                        height: 332px;

                        .title {
                            top: 166px;
                            left: 122px;
                            width: 55px;
                            font-size: 52px;
                        }
                        .line {
                            top: 124px;
                            left: 76px;
                        }
                        .img {
                            left: 208px;
                            top: 62px;
                            width: 280px;
                            height: 294px;
                        }
                    }
                    .hand {
                        width: 434px;
                        height: 280px;

                        &:hover {
                            .line {
                                transform: translateX(-40px);
                            }
                        }
                        .title {
                            top: 75px;
                            left: 64px;
                            font-size: 52px;
                        }
                        .line {
                            top: 132px;
                            left: 186px;
                        }
                        .img {
                            left: 222px;
                            top: 67px;
                            width: 294px;
                            height: 234px;
                        }
                    }
                    .logo {
                        width: 212px;
                        height: 356px;

                        &:hover {
                            .title {
                                font-size: 48px;
                            }
                        }
                        .title {
                            top: 28px;
                            left: 56px;
                            width: 50px;
                            font-size: 52px;
                            word-break: break-all;
                        }
                        .line {
                            bottom: 35px;
                            right: 69px;
                        }
                        .img {
                            left: 113px;
                            top: -38px;
                            width: 148px;
                            height: 336px;
                        }
                    }
                }
            }
        }
    }
</style>
