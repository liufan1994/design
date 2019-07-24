/*
 * @Author: hzq
 * @Date: 2019-07-20 16:35:15
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-24 20:54:49
 * @文件说明: 作品内页
 */
<template>
    <div class="design-page">
        <h-head/>
        <div class="img-warp align-c">
            <img v-for="i in currRouterTab.imgSrc" :key="i" :src="require('design/'+i)" :alt="i">
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'design',
        computed: mapState(['currRouterTab'])
    }
</script>
<style lang="scss" scoped>
    .design-page {
        .img-warp {
            margin-top: 500px;
            img {
                display: block;
                max-width: 100%;
            }
        }
    }
</style>
