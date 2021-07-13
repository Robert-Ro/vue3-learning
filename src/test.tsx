import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const string = 'test.tsx'
    return () => <p>{string} just test for a test</p>
  },
})
