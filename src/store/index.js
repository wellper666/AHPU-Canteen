import Vue from "vue";
import VueX from 'vuex'
Vue.use(VueX);

const store = new VueX.Store({
    state: {
        //localStorage是永久的， SessionStorage随着窗口消灭消失
        token: localStorage.getItem("token"),
        userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
    },

    getters: {
        getUser: state => {
            return state.userInfo
        },
        getToken: state => {
            return state.token
        }
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
            localStorage.setItem("token", token)
        },
    }
});

export default store