<template>
  <div class="dk_layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <DKSider :collapsed.sync="collapsed"/>
      <a-layout>
        <DKHeader :collapsed.sync="collapsed" @changeCollapsed="changeCollapsed"/>
        <DKContent />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import DKHeader from './modules/DKHeader'
  import DKFooter from './modules/DKFooter'
  import DKSider from './modules/DKSider'
  import DKContent from './modules/DKContent'
    export default {
        name: "Layout",
        components: {
          DKHeader,
          DKFooter,
          DKSider,
          DKContent
        },
        data() {
          return {
            collapsed: false
          }
        },
        methods: {
          changeCollapsed() {
            this.collapsed != this.collapsed;
          }
        }
    }
</script>

<style lang="less" scoped>
.dk_layout {
  height: 100vh;
}
</style>
