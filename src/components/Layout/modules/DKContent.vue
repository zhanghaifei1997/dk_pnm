<template>
  <a-layout-content class="dk_container">
    <router-view/>
  </a-layout-content>
</template>

<script>
    export default {
        name: "DKContent",
        data() {
          return {

          }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
.dk_container {
  margin: 20px;
}
</style>
