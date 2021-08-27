export default {
  namespace: 'demo',
  state: {
    num: 1,
  },
  effects: {},
  reducers: {
    add(state, action) {
      return {
        ...state,
        num: state.num + action.payload,
      }
    },
  },
  subscriptions: {},
}
