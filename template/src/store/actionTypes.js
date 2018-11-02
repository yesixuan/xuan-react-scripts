/**
 * 很蛋疼的一点是 saga 发射出来的同步 action 是根据名字来发射的，所以我们不能定义同名的 action 名字
 * */

// demo 模块
export const DEMO_ADD_NUM = 'DEMO_ADD_NUM'
export const DEMO_MINUS_NUM = 'DEMO_MINUS_NUM'
export const DEMO_INCREMENT_ASYNC = 'DEMO_INCREMENT_ASYNC'

export const ADD_NUM = 'ADD_NUM'
export const MINUS_NUM = 'MINUS_NUM'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'