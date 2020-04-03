const state = {
    position: {
        x: 1,
        y: 0,
        z: 0
    },
    enterClick: false,
    sanArray: [], //保存所有三级组件的y轴坐标系
    sanshow: {},
    formData: [], //保存当前页所有的数据
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
    SET_ARRAY: (state, arr) => {
        state.sanArray = arr;
    },
    SET_DATA: (state, data) => {
        state.formData = data;
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
    //保存当前坐标轴相关信息
    setSanArray({ commit }, arr) {
        commit("SET_ARRAY", arr);
    },
    // 保存接口返回的数据
    setFormData({ commit }, data) {
        commit("SET_DATA", data)
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  