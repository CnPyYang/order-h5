import numState from "./numState"
const defaultState = {
  ...numState.state
}
let reducer = (state = defaultState, action: { type: string, val: number }) => {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'add1':
      numState.action.add1(newState)
      break;
    case 'add2':
      numState.action.add2(newState, action)
      break;

    default:
      break;
  }
  return newState
}

export default reducer