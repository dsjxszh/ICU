const state = {
    patient: [],
    currentMenus: []
};

const mutations = {
    SET_PATIENT: (state, patient) => {
        // console.log('改变坐标的节点:', pos)
        state.patient = patient;
    },
    SET_MENUS: (state, menus) => {
        state.currentMenus = menus;
    }
};

const actions = {
    // 保存病人信息
    setPatient({ commit }, patient) {
        commit("SET_PATIENT", patient);
    },
    // 保存当前的菜单
    setMenus({ commit }, menus) {
        commit("SET_MENUS", menus);
    }
};
  
export default {
    namespaced: true,
    state,
    mutations,
    actions
};
  