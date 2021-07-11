<template>
  <p>{{ content }}</p>
  <Test />
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import Test from './test'

export default defineComponent({
  name: 'HelloWorld',
  components: { Test },
  setup() {
    const content = ref<string>('hello world ->.vue')
    return {
      content,
    }
  },
})
</script>
