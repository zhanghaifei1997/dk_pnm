<template>
  <a-layout-header class="dk_header">
    <a-icon
      class="trigger"
      :type="childCollapsed ? 'menu-unfold' : 'menu-fold'"
      @click="change"
    />
  </a-layout-header>
</template>

<script>
    export default {
        name: "DKHeader",
        props: {
          collapsed: {
            type: Boolean,
            default: false
          }
        },
        data() {
          return {
            childCollapsed: this.collapsed
          }
        },
        methods: {
          change() {
            this.childCollapsed = !this.childCollapsed;
            this.$emit("changeCollapsed", this.childCollapsed)
          }
        },
        watch: {
          collapsed(val) {
            this.childCollapsed = !val
          }
        }
    }
</script>

<style lang="less" scoped>
.dk_header {
  padding: 0 20px;
  border-left: 1px solid #efefef;
  background: #fff!important;
}
</style>
