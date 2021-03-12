import { createStore } from "vuex";
export default createStore({
    state: {
        listData: { 1: 10 },
        isCurrem: false,
        num: 10
    },
    mutations: {
        setData(state, value) {
            state.listData = value
        },
        addNum(state, value) {
            state.num = state.num + 10,
                state.isCurrem = value
        }
    },
    actions: {
        setData(context, value) {
            console.log(context)
            // context.commit('setData', value),
            context.commit('addNum', value)
        },
    },
    modules: {}
});