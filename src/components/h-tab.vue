/*
 * @Author: hzq
 * @Date: 2019-07-20 18:25:08
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-24 20:57:02
 * @文件说明: 页面头部--tab组件
 */
<template>
    <ul class="h-tab flex-s f22 f">
        <template v-if="currTabArr.length">
            <li v-for="(i,index) in currTabArr" :key="i.key" :class="{isCurrTab:currTabIndex===index}" @click="currTabIndex=index">
                <div>{{i.zhName}}</div>
                <div class="line" />
            </li>
        </template>
        <div class="dn">{{currTabArrItem}}</div>
    </ul>
</template>
<script>
    export default {
        name: 'h-tab',
        data() {
            return {
                currTabIndex: 0
            }
        },
        computed: {
            currTabArr() {
                const { name } = this.$route
                const currDesignRouter = this.$designCurrRouterData.find(d => {
                    return d.routerName === name
                })
                console.warn('currDesignRouter:======================')
                console.log(currDesignRouter)
                console.warn('currDesignRouter:======================')

                let currTabArr = []
                if (currDesignRouter) {
                    this.$store.commit('save', [
                        'currDesignRouter',
                        currDesignRouter
                    ])
                    const currAllTab = currDesignRouter.children || {}
                    if (this.$objHasVal(currAllTab)) {
                        const currRouterImg = this.$designImgSrc[name]
                        for (const key in currRouterImg) {
                            if (currRouterImg.hasOwnProperty(key)) {
                                currTabArr.push({
                                    key,
                                    imgSrc: currRouterImg[key],
                                    ...currAllTab[key]
                                })
                            }
                        }
                    }
                } else {
                    throw new Error(`no find currDesignRouter in 【h-tab】`)
                }
                console.warn('currTabArr:======================')
                console.log(currTabArr)
                console.warn('currTabArr:======================')

                return currTabArr
            },
            currTabArrItem() {
                const currTabArrItem = this.currTabArr[this.currTabIndex] || {}

                if (!this.$objHasVal(currTabArrItem)) {
                    // 当currTabArrItem为{}时，表明不需要子tab，所以将head、imgSrc等信息直接放入currRouterTab
                    const { name } = this.$route
                    const { currDesignRouter } = this.$store.state
                    if (currDesignRouter.head) {
                        currTabArrItem.head = currDesignRouter.head
                        currTabArrItem.imgSrc = this.$designImgSrc[name]
                    }
                }
                console.warn('currTabArrItem:======================')
                console.log(currTabArrItem)
                console.warn('currTabArrItem:======================')
                if (currTabArrItem.head && currTabArrItem.head.img) {
                    currTabArrItem.imgSrc = currTabArrItem.imgSrc.filter(img => {
                        return !img.match(currTabArrItem.head.img)
                    })
                    if (currTabArrItem.head.img.split('/').length === 1) {
                        currTabArrItem.head.img = currTabArrItem.imgSrc[0].replace(
                            'img1',
                            currTabArrItem.head.img
                        )
                    }
                }

                this.$store.commit('save', ['currRouterTab', currTabArrItem])
                return currTabArrItem
            }
        }
    }
</script>
<style lang="scss" scoped>
    .h-tab {
        padding-left: 60px;
        padding-top: 54px;
        li {
            margin-right: 110px;
            @extend .cursor;
            &:hover {
                .line {
                    @extend .op1;
                }
            }
            &:last-child {
                margin-right: 0;
            }
            .line {
                @extend .op0;
                width: 55px;
                height: 2px;
                margin: 20px auto 0;
                background-color: #fff;
                transition: 0.3s linear;
            }
        }
        .isCurrTab {
            .line {
                @extend .op1;
            }
        }
    }
</style>
