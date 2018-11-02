const ADD_NUM = 'ADD_NUM'
const MINUS_NUM = 'MINUS_NUM'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

const initialState = {
  count: 0
}

// reducer
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_NUM:
      return { count: state.count + 1 }
    case MINUS_NUM:
      return { count: state.count - payload }
    default:
      return state
  }
}

// action creators
export function add() { // 无参action
  return {
    type: ADD_NUM
  }
}
export function minus(data = 3) { // 带参action
  return {
    type: MINUS_NUM,
    payload: data
  }
}

export const addAsync = params => ({
  type: INCREMENT_ASYNC,
  payload: params
})

