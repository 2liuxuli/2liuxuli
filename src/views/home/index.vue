<template>
  <div class="home">
    Home 页面
    <button @click="number++">增加 number </button>
    {{ number }}
    <Table :data="childData" :number="number" @handleBtn="handleBtn" />
  </div>
</template>


<script>
import { reactive, watch, toRefs, ref } from 'vue'
import Table from '@/components/table.vue' // 组件首字母必须大写
export default {
  components: {
    Table
  },
  setup(content) {
    console.log(content, 'content');
    const state = reactive({
      color: 'red',
      num: 11,
      number: 0,
      childData: [
        {
          name: '哈哈哈'
        }
      ]
    })
    
    const handleBtn = () => {
      console.log('触发');
    }

    return {
      ...toRefs(state),
      handleBtn,

    }
  }
}

</script>


<style>
h1{
  color: v-bind('color');
}
.aa{
  backface-visibility: hidden;
}
</style>
