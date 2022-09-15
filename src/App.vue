<template>
  <div>
    vue3+typescript
    <todo-input />
    <todo-list :list="todoList" />
  </div>
</template>
<script>
import { computed, defineComponent, onMounted ,ref} from 'vue'
import TodoInput from '@/components/todoInput/index.vue'
import TodoList from '@/components/todoList/index.vue'
import { useToDo } from './hooks/useToDo'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  setup () {
    const store = useStore()
    const { setToDoList } = useToDo()
    const state = ref({name:'测试',age:11})
    console.log(state)
    console.log('setUp')
    onMounted(() => {
      setToDoList()
    })

    return {
      todoList: computed(() => store.state.list),

    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
