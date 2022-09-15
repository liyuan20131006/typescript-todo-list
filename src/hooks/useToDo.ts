import { ADD_TODO, REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO_LIST } from '../store/actionTypes';
import { ToDoStatus, ITodoItem } from '@/typings';
import { useStore } from 'vuex';
import { watch } from 'vue';
import { useLocalStorage } from './useLocalStorage'

interface IResult {
  addToDo: (content: string) => void;
  setToDoList: () => void;
  removeToDo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}
export function useToDo(): IResult {
  const store = useStore()
  const { getLocalStorage, setLocalStorage } = useLocalStorage()
  const _list: ITodoItem[] = getLocalStorage()
  watch(() => store.state.list, (newValue) => {
    console.log(200)
    setLocalStorage(newValue)
  })
  const addToDo = (content: string) => {
    const _data: ITodoItem = {
      id: new Date().getTime(),
      content: content,
      status: ToDoStatus.WILLDO
    }
    store.dispatch(ADD_TODO, _data)
  }
  const setToDoList = () => {
    store.dispatch(SET_TODO_LIST, _list)
  }
  const removeToDo = (id: number): void => {
    store.dispatch(REMOVE_TODO, id)
  }
  const setStatus = (id: number): void => {
    store.dispatch(SET_STATUS, id)
  }
  const setDoing = (id: number): void => {
    store.dispatch(SET_DOING, id)
  }

  return {
    addToDo,
    setToDoList,
    removeToDo,
    setStatus,
    setDoing
  }
}