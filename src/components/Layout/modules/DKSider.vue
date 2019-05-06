<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    theme="light"
    v-model="$store.getters.CommonStatus.collapsed"
    class="dk_sider">
    <div class="dk_header_logo">
      <img :src="github" class="dk_header_img"/>
      <div class="dk_header_desc">
        <p class="dk_header_desc_name">Ya Du</p>

      </div>
    </div>
    <a-menu :theme="themeConfig.color" mode="inline" :defaultSelectedKeys="['person']">
      <template v-for="menu in menuLists">
        <a-menu-item :key="menu.key" v-if="!menu.isHasChild" >
          <router-link :to="menu.path">
            <a-icon :type="menu.icon" />
            <span>{{menu.menuName}}</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu :key="menu.key" v-else>
          <span slot="title">
            <a-icon :type="menu.icon" />
            <span>{{menu.menuName}}</span>
          </span>
          <template v-for="childItem in menu.child">
            <a-menu-item :key="childItem.key" >
              <router-link :to="childItem.path">
                {{childItem.menuName}}
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
      <!--<a-menu-item key="2">-->
        <!--<a-icon type="video-camera" />-->
        <!--<span>nav 2</span>-->
      <!--</a-menu-item>-->
    </a-menu>
  </a-layout-sider>
</template>

<script>
  import github from '@/assets/images/github.jpg'
  import Menulists from '@/assets/jsons/menuLists'
    export default {
        name: "DKSider",
        props: {

        },
        data() {
          return {
            github: github,
            themeConfig: {
              color: null
            },
            // 配置menu
            menuLists: Menulists.menu
          }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
  .dk_sider {
    height: 100vh;
    .dk_header_logo {
      display: flex;
      /*margin: 20px 0;*/
      padding: 20px 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #fff;
      .dk_header_img {
        width: 50%;
        max-height: 100px;
        border-radius: 100%;
      }
      .dk_header_desc {
        box-sizing: border-box;
        color: #333;
        >.dk_header_desc_name {
          padding: 10px 0 0 0;
          font-size: 1.6vh;
        }
      }
    }
  }
</style>
