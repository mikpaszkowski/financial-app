import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);




export default new Vuex.Store({
    state: {
        currentName: 'Nicolas',
        currentSurename: 'Kowalsky',
        currentPhoneNumber: '+48 985 652 332',
        additionalPhoneNumber: "+48 654 887 965",
        currentEmailAddress: "myEmail@gmail.com",
        additionalEmailAddress: "mySecondEmailAddress@gmail.com",
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
        },
        setCurrentEmailAddress(state, payLoad) {
            state.currentEmailAddress = payLoad;
        },
        setAdditionalPhoneNumber(state, payLoad) {
            state.additionalPhoneNumber = payLoad;
        },
        setAdditionalEmailAddress(state, payLoad) {
            state.additionalEmailAddress = payLoad;
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
        updateCurrentEmailAddress({ commit }, payLoad) {
            commit('setAdditionalEmailAddress', payLoad);
        },
        updateAdditionalEmailAddress({ commit }, payLoad) {
            commit('setAdditionalEmailAddress', payLoad);
        },
        updateAdditionalPhoneNumber({ commit }, payLoad) {
            commit('setAdditionalPhoneNumber', payLoad);
        }

    },
    modules: {},
    getters: {
        getCurrentName: state => state.currentName,
        getCurrentSurename: state => state.currentSurename,
        getCurrentPhoneNumber: state => state.currentPhoneNumber,
        getCurrentAddress: state => state.currentAddress,
        getCurrentBirthDate: state => state.currentBirthDate,
        getAdditionalEmailAddress: state => state.additionalEmailAddress,
        getAdditionalPhoneNumber: state => state.additionalPhoneNumber,
        getCurrentEmailAddress: state => state.currentEmailAddress,
    },
})