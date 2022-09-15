import { IState, ITodoItem, ToDoStatus } from '@/typings';
import { ADD_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from './actionTypes';
export default {
  [ADD_TODO](state: IState, item: ITodoItem): void {
    //state.list.push(item)
    const list = Object.assign([], state.list)
    list.unshift(item)
    state.list = list
    console.log(state.list)
  },
  [SET_TODO_LIST](state: IState, list: ITodoItem[]): void {
    state.list = list
  },
  [REMOVE_TODO](state: IState, id: number): void {
    state.list = state.list.filter(item => { return item.id !== id })
  },
  [SET_STATUS](state: IState, id: number): void {
    state.list = state.list.map(item => {
      if (item.id === id) {
        switch (item.status) {
          case ToDoStatus.FINISH:
            item.status = ToDoStatus.WILLDO;
            break;
          default:
            item.status = ToDoStatus.FINISH
            break;
        }
      }
      return item;
    })
  },
  [SET_DOING](state: IState, id: number): void {
    state.list = state.list.map(item => {
      if (item.id === id) {
        item.status = (item.status === ToDoStatus.WILLDO) ? ToDoStatus.DOING : ToDoStatus.WILLDO
      } else {
        item.status = ToDoStatus.WILLDO
      }
      return item;
    })
  },
}