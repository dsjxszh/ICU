const state = {
    position: {
        x: 0,
        y: 0
    },
    subPosition: {  //子坐标
        x: 0,
        y: '-1'
    },
    currentComIsSan: false, //判断当前聚焦的组件是否为多级组件
    enterClick: false,
    sanshow: {}
};

const mutations = {
    SET_POS: (state, pos) => {
        state.position = pos;
    },
    SET_ENTER: (state, enter) => {
        state.enterClick = enter;
    },
    SET_SHOW: (state, show) => {
        state.sanshow = show;
    },
    SET_CURRENT: (state, current) => {
        state.currentComIsSan = current;
    }
};

const actions = {
    // 添加标签
    setPosition({ commit }, pos) {
        commit("SET_POS", pos);
    },
    // 设置enter是否按下
    setEnter({ commit }, enter) {
        commit("SET_ENTER", enter);
    },
    // 设置三级标题是否展开
    setSanShow({ commit }, show) {
        commit("SET_SHOW", show);
    },
    // 设置当前组件是否为多级组件
    setCurrentCom({ commit }, current) {
        commit("SET_CURRENT", current);
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  