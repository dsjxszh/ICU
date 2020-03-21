const state = {
    position: {
        x: 0,
        y: 0
    },
    enterClick: false
};

const mutations = {
    SET_POS: (state, pos) => {
        state.position = pos;
    },
    SET_ENTER: (state, enter) => {
        state.enterClick = enter;
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
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  