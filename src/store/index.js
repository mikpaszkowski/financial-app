import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);




export default new Vuex.Store({
    state: {
        currentName: 'Nicolas',
        currentSurename: 'Kowalsky',
        currentPhoneNumber: '+48 985 652 332',
        currentBirthDate: '24/05/1994',
        currentAddress: '25 Union Square W, New York, NY 10003, USA',
    },
    mutations: {
        setCurrentName(state, payLoad) {
            state.currentName = payLoad;
        },
        setCurrentSurname(state, payLoad) {
            state.currentSurename = payLoad;
        },
        setCurrentPhoneNumber(state, payLoad) {
            state.currentPhoneNumber = payLoad;
        },
        setCurrentAddress(state, payLoad) {
            state.currentAddress = payLoad;
        },
        setCurrentBirthDate(state, payLoad) {
            state.currentBirthDate = payLoad;
        }
    },
    actions: {
        updateCurrentName({ commit }, payLoad) {
            commit('setCurrentName', payLoad);
        },
        updateCurrentSurname({ commit }, payLoad) {
            commit('setCurrentSurname', payLoad);
        },
        updateCurrentBirthDate({ commit }, payLoad) {
            commit('setCurrentBirthDate', payLoad);
        },
        updateCurrentPhoneNumber({ commit }, payLoad) {
            commit('setCurrentPhoneNumber', payLoad);
        },
        updateCurrentAddress({ commit }, payLoad) {
            commit('setCurrentAddress', payLoad);
        },

    },
    modules: {},
    getters: {
        getCurrentName: state => state.currentName,
        getCurrentSurename: state => state.currentSurename,
        getCurrentPhoneNumber: state => state.currentPhoneNumber,
        getCurrentAddress: state => state.currentAddress,
        getCurrentBirthDate: state => state.currentBirthDate,
    },
})