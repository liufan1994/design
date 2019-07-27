/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-27 21:16:56
 * @文件说明: 首页-尾部组件
 */
<template>
    <div class='home-footer'>
        <div class="contact-me flex-c bgf">
            <div class="me-text mr20 f36">联系我</div>
            <div class="me-line"></div>
        </div>
        <div class="contact-way flex-c">
            <ul class="left">
                <li class="left-li">电话：15283819858</li>
                <li class="left-li cursor">
                    <span>微信：627317307</span>
                    <img class="weixin" src="~common/weixin.jpg" alt="">
                </li>
                <li @click="copy" class="left-li email cursor" data-clipboard-text='liufan94@163.com' title="点击复制邮箱">邮箱：liufan94@163.com</li>
            </ul>
            <div class="right">
                <h-button width="1.66666rem" v-if="$route.name==='home'||$route.name==='about'" @click.native="gotoResume">我的简历</h-button>
                <div v-else class="to-top cursor" @click="toTop(10)">
                    <img class="img db" src="~common/to-top.png">
                    <div class="text">回到顶部</div>
                </div>
            </div>
        </div>
        <div class="flex-c mt24 f20">
            <span>如果刘帆的作品站没有带给你一个好心情，请通过上面的联系方式进行投诉哦</span>
            <img class="smile ml10" src="~common/smile.png">
        </div>
        <div class="copy-tips" v-if="showCopy">{{showCopy}}</div>
    </div>
</template>

<script>
    import Clipboard from 'clipboard'
    export default {
        name: 'h-footer',
        data() {
            return {
                showCopy: ''
            }
        },
        methods: {
            toTop(rate = 10) {
                let top1 = 0
                let scrollToptimer = setInterval(() => {
                    top1 =
                        document.body.scrollTop ||
                        document.documentElement.scrollTop
                    let speed = top1 / rate
                    if (document.body.scrollTop !== 0) {
                        document.body.scrollTop -= speed
                    } else {
                        document.documentElement.scrollTop -= speed
                    }

                    if (top1 === 0) {
                        clearInterval(scrollToptimer)
                    }
                }, 50)
            },
            gotoResume() {
                // window.open('https://liufan1994.github.io/resume/index.html')
            },
            copy() {
                var clipboard = new Clipboard('.email')
                clipboard.on('success', () => {
                    this.showCopy = '复制成功'
                    // 释放内存
                    clipboard.destroy()
                    setTimeout(() => {
                        this.showCopy = ''
                    }, 1000)
                })
                clipboard.on('error', () => {
                    // 不支持复制
                    this.showCopy = '该浏览器不支持自动复制'
                    // 释放内存
                    clipboard.destroy()
                    setTimeout(() => {
                        this.showCopy = ''
                    }, 1000)
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    .home-footer {
        position: relative;
        width: 1200px;
        margin: 100px auto;
        .contact-me {
            position: absolute;
            top: -23px;
            left: 50px;
            height: 50px;
            padding: 0 30px;
            .me-text {
                color: #22ddbb;
            }
            .me-line {
                width: 100px;
                height: 4px;
                background-color: #22ddbb;
            }
        }
        .contact-way {
            height: 240px;
            border-radius: 10px;
            border: 2px solid #ccc;
            .left {
                margin-right: 130px;
                .left-li {
                    position: relative;
                    margin-bottom: 20px;
                    font-size: 24px;
                    &:nth-child(2) {
                        margin-left: 70px;
                        &:hover {
                            .weixin {
                                display: block;
                            }
                        }
                        .weixin {
                            display: none;
                            position: absolute;
                            top: -210px;
                            left: 0;
                            width: 200px;
                            height: 200px;
                            box-shadow: 0 0 10px #ccc;
                        }
                    }
                    &:last-child {
                        margin-left: 140px;
                        margin-bottom: 0;
                    }
                }
            }
            .right {
                .to-top {
                    position: relative;
                    .img {
                        width: 250px;
                    }
                    .text {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        line-height: 1.5;
                        text-align: center;
                        font-size: 36px;
                        color: #22ddbb;
                        letter-spacing: 3px;
                    }
                }
            }
        }

        .smile {
            width: 50px;
        }

        .copy-tips {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100px;
            height: 30px;
            margin: auto;
            font-size: 24px;
            pointer-events: all;
            padding: 16px 48px;
            border-radius: 4px;
            color: #22ddbb;
            box-shadow: 0 0 1px 3px #22ddbb;
            background: #fff;
        }
    }
</style>
