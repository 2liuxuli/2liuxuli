<template>
  <div>
    Table 组建
    {{ data }} 
    obj: {{ obj }}
    tempValue: {{ tempValue }}
    <button @click="handleBtn">
      按钮
    </button>
    <button @click="btn">
      处理 ref和 refs
    </button>

    <p>child.number {{ number }}</p>
    <teleport to="#some">
      <div>
        任意门
      </div>
    </teleport>
  </div>
</template>


<script setup>
import { defineProps, defineEmits, reactive, ref, toRef, toRefs, watch } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    defaule: [
      {name: '名字'}
    ]
  },
  number: Number
})
const emits = defineEmits(['handleBtn'])
const handleBtn = () => {
  console.log('点击按钮');
  emits('handleBtn')
}

const count = ref(0) // 动态的 默认会有 { value: T }
count.value = 3
console.log(count.value, 'count');


const obj = reactive({ name: '周星驰', age: 18 })
const tempValue1 = toRef(obj, 'name')
const tempValue = toRefs(obj)


const btn = () => {
  tempValue.name.value = '成龙'
  console.log(tempValue, 'name', tempValue1);
  console.log(obj, 'obj');
}

console.log(props.number, 'props.number');
watch(props.number, ((v1) => {
  console.log(v1, 'v1');
}))
// console.log(defineEmits, 'defineEmits');


</script>


<style>
</style>
