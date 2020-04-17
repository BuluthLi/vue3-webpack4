const state = {
    count: 0
}
const getters = {
    value: (state, getters, rootState) => {
        console.log(state.count);
        return state.count
    }
}
const actions = {
    acAdd: ({ commit, state }, data) => {
        commit('add', data);
    },
    acDecrease: ({ commit, state }, data) => {
        commit('decrease', data);
    },
}
const mutations = {
    add: (state, data) => {
        state.count += data;
    },
    decrease: (state, data) => {
        state.count -= data;
    },
}
export default {
    // 暴露命名空间
    namespaced: true,
    state, getters, actions, mutations
}