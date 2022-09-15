<!--  -->
<template>
  <div>
    <input type="checkbox"
           :checked="item.status===FINISH"
           @click="setStatus(item.id)" />
    <span :class="item.status===FINISH?'line-through':''">{{item.content}}</span>
    <button class="del"
            @click="removeToDo(item.id)">删除</button>
    <button :class="item.status===WILL?'will':'doing'"
            v-if="item.status!==FINISH"
            @click="setDoing(item.id)">{{item.status===WILL?'开始':'正在做...'}}</button>
  </div>
</template>

<script lang="ts">
import { ITodoItem, ToDoStatus } from '@/typings'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'todoItem',
  props: {
    item: Object as PropType<ITodoItem>
  },
  setup(prop, { emit }) {
    const status = {
      WILL: ToDoStatus.WILLDO,
      DOING: ToDoStatus.DOING,
      FINISH: ToDoStatus.FINISH
    }
    const setStatus = (id: number): void => {
      emit('setStatus', id)
    }
    const removeToDo = (id: number): void => {
      emit('removeToDo', id)
    }
    const setDoing = (id: number): void => {
      emit('setDoing', id)
    }
    return {
      ...status,
      setStatus,
      removeToDo,
      setDoing
    }
  }
})
</script>
<style  scoped>
.del {
  background-color: red;
  border: none;
}
.line-through {
  text-decoration: line-through;
}
.will {
  background-color: yellow;
}
.doing {
  background-color: gray;
}
</style>