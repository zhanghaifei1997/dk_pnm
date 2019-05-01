/**
 * Editor by duya
 * Date by 2019/5/1
 */
const CommonStatus = {
  state: {
    collapsed: false
  },
  mutations: { //改变状态 --- 执行
    UPDATE_COLLAPSED: (state, actions) => {
      state.collapsed = !state.collapsed;
    }
  },
  actions: { // 行为
    updateCollapsed({ commit }, actions) {
      commit('UPDATE_COLLAPSED', actions)
    }
  }
}

export default CommonStatus
