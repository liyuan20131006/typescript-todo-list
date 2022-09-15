interface ITodoItem {
  id: number
  content: string
  status: ToDoStatus
}
interface IState {
  list: ITodoItem[]
}
enum ToDoStatus {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISH = 'finished'
}
export {
  ITodoItem,
  ToDoStatus,
  IState
}