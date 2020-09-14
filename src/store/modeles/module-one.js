export default {
  state: {
    messageFromVuex: "Hello from Vuex"
  },
  action: {},
  mutation: {},
  getters: {
    getmessage(state) {
      return state.messageFromVuex;
    }
  }
};
