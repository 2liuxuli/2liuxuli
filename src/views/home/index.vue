<template>
  <transition>
    <div>
      Home 页面
      <Table @handleBtn="handleBtn" />

      <p style="" />
    </div>
  </transition>
</template>


<script setup>
import Table from '@/components/table.vue' // 组件首字母必须大写

const color = 'red'

console.log(process.env, 'process');

const handleBtn = () => {
  console.log('触发');
}

const str = '哈哈哈'
const str1 = '哈哈哈'
const str2 = "哈哈哈'哦哦哦哦'"



const data=[
  {name: '啊上课吗可怜'}
]
</script>


<style>
h1{
  color: v-bind('color');
}
</style>
