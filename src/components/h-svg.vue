<template>
    <svg :class="svgClass" aria-hidden="true" preserveAspectRatio="none" viewBox="0,0,2,1" width="100%" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
    export default {
        name: 'SvgIcon',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: ''
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`
            },
            svgClass() {
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .svg-icon {
        @extend .db;
        fill: currentColor;
        overflow: hidden;
    }
</style>
