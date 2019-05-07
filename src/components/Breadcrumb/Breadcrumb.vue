<template>
  <div class="dy-breadcrumb">
    <span class="notNow">
      <router-link to="/dk">
        主页
      </router-link>
    </span>
    <span class="notNow dy-dd">/</span>
    <span class="now-breadcrumb">
      辅页
    </span>
  </div>
</template>

<script>
    export default {
        name: "Breadcrumb",
        data() {
          return {

          }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
.dy-breadcrumb {
  margin-top: -10px;
  padding: 10px 0;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: .5px;
  >span.notNow {
    display: inline-block;
    cursor: pointer;
    a {
      color: #999!important;
      text-decoration: none;
    }
  }
  >span.dy-dd {
    color: #999;
  }
  >.now-breadcrumb {
    display: inline-block;
    cursor: default;
    color: #333!important;
  }
}
</style>
