<template>
  <a-layout-header class="dk_header">
    <a-icon
      class="trigger"
      :type="$store.getters.CommonStatus.collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="change"/>
    <div>
      <a-dropdown>
        <a-avatar shape="square" size="large" :style="{backgroundColor: color, verticalAlign: 'middle'}">{{avatarValue}}</a-avatar>
        <a class="ant-dropdown-link" href="#">
          Click me <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">3rd menu item</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
    export default {
        name: "DKHeader",
        props: {
        },
        data() {
          return {
            avatarValue: "duYa",
            color: "#7265e6"
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-left: 1px solid #efefef;
  background: #fff!important;
  .anticon {
    padding: 20px 0;
  }
}
</style>
