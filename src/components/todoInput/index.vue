<!--  -->
<template>
  <div>
    <input type="text"
           v-model.trim="todoValue"
           @keyup="addTodoValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useToDo } from '@/hooks/useToDo'
export default defineComponent({
  name: 'todoInput',
  data() {
    const { addToDo } = useToDo()
    const todoValue = ref<string>('')
    const addTodoValue = (event: KeyboardEvent): void => {
      if (event.keyCode === 13 && todoValue.value.length > 0) {
        addToDo(todoValue.value)
        todoValue.value = ''
      }
    }
    return {
      todoValue,
      addTodoValue
    }
  }
})
</script>
<style lang='scss' scoped>
</style>