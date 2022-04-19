<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ msg }}</h1>
  <button @click="count++">{{ count }}</button>
  <HelloWorld/> -->
  <!-- <div id="some" /> -->
  <div>
    <button @click="pathClick">跳转 home 页</button>
    <router-view v-slot="{ Component }">
      <transition>
          <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'
  export default {
    setup() {
      const router = useRouter()
      const state = reactive({
        num: 1
      })
      
      const pathClick = () => {
        router.push({
          path: '/home',
          query: {
            name: '啦啦啦'
          }
        })
      }
      return {
        ...toRefs(state),
        pathClick
      }
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
