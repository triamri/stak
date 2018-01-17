import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stakList: [],
    stak: null
  },
  mutations: {
    setList (state, payload) {
      state.stakList = payload
    },
    setStak (state, payload) {
      state.stak = payload
    },
    setAnswer (state, payload) {
      state.stak.answers.push(payload)
    },
    removeData (state, payload) {
      let index = state.stakList.indexOf(payload)
      state.stakList.splice(index, 1)
    }
  },
  actions: {
    getListAll ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/questions/all`)
        .then(({ data }) => {
          console.log(data.data)
          commit('setList', data.data)
        })
        .catch(err => console.log(err))
    },
    getListAllUser ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/questions/alluser`)
        .then(({ data }) => {
          console.log(data.data)
          commit('setList', data.data)
        })
        .catch(err => console.log(err))
    },
    getDetailStak ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/questions/detail/${payload}`)
        .then(({ data }) => {
          commit('setStak', data.data)
        })
        .catch(err => console.log(err))
    },
    submitQuestion ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/questions/create`, payload)
        .then(({ data }) => {
          router.push({
            name: 'About'
          })
        })
        .catch(err => console.log(err))
    },
    submitEditQuestion ({ commit }, payload) {
      axios.put(`http://localhost:3000/api/questions/update/${payload.id}`, {
        question: payload.question,
        desc: payload.desc
      })
        .then(({ data }) => {
          router.push({
            name: 'About'
          })
        })
        .catch(err => console.log(err))
    },
    removeList ({ commit }, payload) {
      axios.delete(`http://localhost:3000/api/questions/remove/${payload._id}`)
        .then(({ data }) => {
          commit('removeData', payload)
        })
        .catch(err => console.log(err))
    },
    submitAnswer ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/answers/create/${payload.idQuestion}`, {
        answer: payload.answer
      })
        .then(({ data }) => {
          console.log(data.data)
          let sendData = {
            userID: data.data,
            answer: payload.answer,
            votes: []
          }
          commit('setAnswer', sendData)
        })
        .catch(err => console.log(err))
    }
  }
})
export default store
