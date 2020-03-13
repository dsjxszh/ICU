import { asyncRoutes, constRoutes } from "@/router";

const state = {
  routes: [], // 完整路由表
  addRoutes: [] // 用户可访问路由表
};

const mutations = {
  SET_ROUTES: (state, routes) => {
      // addRoutes是用户可以访问的权限页面
    state.addRoutes = routes;
    // routes是完整的路由表
    state.routes = constRoutes.concat(routes);
  }
};

const actions = {
  // 动态路由生成：在得到用户角色后会第一时间调用
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes;
      //   用户是管理员则拥有完整访问权限
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes || [];
      } else {
        //   否则需要根据角色做过滤处理
        // accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};