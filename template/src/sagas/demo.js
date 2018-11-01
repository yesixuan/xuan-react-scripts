import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
const INCREMENT_ASYNC = 'INCREMENT_ASYNC'


// 我们的干活的 Saga: 将执行 异步加一 。
function* incrementAsync(action) {
  console.log('action', action) // 这里可以拿到 action 传参
  for(let i = 0; i < 3; i++) {
    yield call(delay, 1000)
    yield put({type: 'ADD_NUM'})
  }
}

// 我们监视的 Saga: 每个调用 INCREMENT_ASYNC 的动作将触发 异步加一 的5毛特效。
export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}