import { ITodoItem } from '@/typings';
interface ILocalStorageResult {
  getLocalStorage: () => ITodoItem[];
  setLocalStorage: (list: ITodoItem[]) => void;
}
export function useLocalStorage(): ILocalStorageResult {
  const getLocalStorage = (): ITodoItem[] => {
    return JSON.parse(localStorage.getItem('ToDoList') || '[]')
  }
  const setLocalStorage = (list: ITodoItem[]) => {
    return localStorage.setItem('ToDoList', JSON.stringify(list))
  }
  return {
    getLocalStorage,
    setLocalStorage
  }
}