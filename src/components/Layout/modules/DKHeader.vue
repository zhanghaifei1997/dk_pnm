<template>
  <a-layout-header class="dk_header">
    <a-icon
      class="trigger"
      :type="$store.getters.CommonStatus.collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="change"
    />
  </a-layout-header>
</template>

<script>
    export default {
        name: "DKHeader",
        props: {
        },
        data() {
          return {

          }
        },
        methods: {
          change() {
            this.$store.dispatch("updateCollapsed")
          }
        },
        watch: {

        },
        created() {

        }
    }
</script>

<style lang="less" scoped>
.dk_header {
  padding: 0 20px;
  border-left: 1px solid #efefef;
  background: #fff!important;
  .anticon {
    padding: 20px 0;
  }
}
</style>
