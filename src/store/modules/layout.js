import AllPages from '@/utils/pages';

const state = {
    editableTabs:[],
    currentTab: 'first-page',
    closable: true, //tabs是否可关闭
    // 其他用户信息
    pages: {
        ...AllPages
    },
};
  
const mutations = {
    SET_TAB: (state, tab) => {
        state.currentTab = tab.name;
        let duplicate = false;
        state.editableTabs.forEach(element => { //去重判断
            if (element.name === tab.name) {
                duplicate = true;
                return;   
            }
        });
        if (!duplicate) {
            state.editableTabs.push(tab);
        }
        if (state.editableTabs.length > 0) {
            state.closable = true;
        }
    },
    REMOVE_TAB: (state, tab) => {
        state.editableTabs = state.editableTabs.filter((item, index) => {
            if (item.name != tab) { //返回不需要删除的项目
                return item
            } else {
                if (tab === state.currentTab) { //如果删除的是被选中的项，则要切换选中的项
                    state.currentTab = (state.editableTabs[--index] || state.editableTabs[++index]).name
                    console.log('删除后的当前项目是:', state.currentTab)
                }
            }
        })
        if (state.editableTabs.length === 0) {
            state.currentTab = 'first-page';
            state.closable = false;
        }
    },
    SET_CURRENT_TAB: (state, tab) => {
        state.currentTab = tab;
    },
    SET_NEW_NURSING_LIST: (state, obj) => { //新增护理表单路由接口
        const { name, cb } = obj;
        state.pages[name] = 'nursinglist';
        console.log('pages:', state.pages);
        cb && cb();
    }
};

const actions = {
    // 添加标签
    setTab({ commit }, tab) {
        commit("SET_TAB", tab);
    },
  
    // 删除标签
    removeTab({ commit }, tab) {
        commit("REMOVE_TAB", tab);
    },

    // 切换当前标签
    changeCurrentTab({ commit }, tab) {
        commit("SET_CURRENT_TAB", tab);
    },

    // 新增路由
    addNewRouter({ commit }, obj) {
        commit("SET_NEW_NURSING_LIST", obj);
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  