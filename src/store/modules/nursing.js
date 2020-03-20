const state = {
    position: {
        x: 0,
        y: 0
    }
};

const mutations = {
    SET_POS: (state, pos) => {
        state.position = pos;
        
    }
};

const actions = {
    // 添加标签
    setPosition({ commit }, pos) {
        commit("SET_POS", pos);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  