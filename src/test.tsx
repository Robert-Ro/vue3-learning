import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const string = 'test.tsx'
    return () => <p>{string}</p>
  },
})
