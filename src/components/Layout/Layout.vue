<template>
  <div class="dk_layout">
    <a-layout class="dk-main-content" id="components-layout-demo-custom-trigger">
      <DKSider/>
      <a-layout>
        <DKHeader/>
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

          }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
.dk_layout {
  height: 100vh;
}
</style>
