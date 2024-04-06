interface NumStateType {
  num: number
}
export default {
  state: {
    num: 10
  },
  action: {
    add1(state: NumStateType) {
      state.num++
    },
    add2(state: NumStateType, action: { type: string, val: number }) {
      state.num += action.val
    }
  }
}