import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {

  },
  state: {
    isFold: false, // 是否默认展开
    detailsData: {},  // 当前选中的公告数据
    token:'',
    sign:'',
    isClick:false,
    ip:'http://192.168.50.112:10001/',
    instructionsList:{},
    instructions:{},
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
});
