<!--  -->
<template>
  <div>
    <Item v-for="item in list"
          :key="item.id"
          :item="item"
          @removeToDo="removeToDo"
          @setStatus="setStatus"
          @setDoing="setDoing" />
  </div>
</template>

<script lang="ts">
import { useToDo } from '@/hooks/useToDo'
import { ITodoItem } from '@/typings'
import { defineComponent, PropType } from 'vue'
import Item from './item.vue'
export default defineComponent({
  name: 'todoList',
  components: { Item },
  props: {
    list: {
      type: Array as PropType<ITodoItem[]>
    }
  },
  setup() {
    const { removeToDo, setStatus, setDoing } = useToDo()
    return {
      removeToDo,
      setStatus,
      setDoing
    }
  }
})
</script>
<style lang='scss' scoped>
</style>