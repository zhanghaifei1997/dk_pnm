/**
 * Editor by duya
 * Date by 2019/4/30
 */
export default {
  menu: [
    {
      key: "person",
      menuName: "个人中心",
      icon: "user",
      isHasChild: false
    },
    {
      key: "menu",
      menuName: "菜单管理",
      icon: "menu-unfold",
      isHasChild: true,
      child: [
        {
          key: "menu-list",
          menuName: "菜单列表"
        }
      ]
    },
    {
      key: "staff",
      menuName: "员工管理",
      icon: "team",
      isHasChild: true,
      child: [
        {
          key: "staff-list",
          menuName: "员工列表"
        }
      ]
    }
  ]
}
