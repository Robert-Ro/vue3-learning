import { defineComponent } from 'vue'
import helloworld from './helloworld.vue'

export default defineComponent({
  name: 'App',
  components: { helloworld },
  setup() {
    const string = 'hello world ->.tsx'
    return () => (
      <p>
        {string}
        <helloworld />
      </p>
    )
  },
})
