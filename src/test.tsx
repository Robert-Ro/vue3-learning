import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Test",
  setup() {
    const string: string = "test.tsx";
    return () => (
      <p>
        {string}
      </p>
    );
  },
});
