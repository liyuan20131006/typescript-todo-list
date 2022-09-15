import { IState, ITodoItem } from '@/typings';
import { Commit } from 'vuex';
import { ADD_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from './actionTypes';
interface ICtx {
  commit: Commit,
  state: IState
}
export default {
  [ADD_TODO]({ commit }: ICtx, todo: ITodoItem): void {
    commit(ADD_TODO, todo)
  },
  [SET_TODO_LIST]({ commit }: ICtx, list: ITodoItem[]): void {
    commit(SET_TODO_LIST, list)
  },
  [REMOVE_TODO]({ commit }: ICtx, id: number): void {
    commit(REMOVE_TODO, id)
  },
  [SET_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_STATUS, id)
  },
  [SET_DOING]({ commit }: ICtx, id: number): void {
    commit(SET_DOING, id)
  },
}