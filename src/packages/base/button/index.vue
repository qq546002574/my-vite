<template>
  <div :style="styles">
    <Button :type="type" :text="text" :size="size" :color="color" :icon="icon" :props="props"></Button>
  </div>
</template>

<script lang="ts">
import { Button, ButtonType } from 'vant';
import { defineComponent, ref, reactive, PropType } from "vue";

export default defineComponent({
  name: "HyButton",
  components: {
    Button
  },
  props: {
    text: {
      type: String,
      default: "Button",
    },
    size: {
      type: String as PropType<'large' | 'mini' | 'small'>,
      default: 'small',
    },
    type: {
      type: String as PropType<ButtonType> | undefined,
      default: "primary",
    },
    color: {
      type: String,
      default: "#555555",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const block = reactive({
      _vid: "",
      _ref: null,
    });
    const styles = ref({
      backgroundColor: "#eee",
      padding: "2px 4px",
      borderRadius: "4px",
      color: "#304455",
    });
    console.log(12345)

    return {
      props,
      styles,
      block,
    };
  },
});
</script>
