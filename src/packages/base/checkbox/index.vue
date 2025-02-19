<template>
  <CheckboxGroup :modelValue="modelValue" :direction="direction">
    <Checkbox name="1" shape="square">
      one
    </Checkbox>
    <Checkbox name="2" shape="square">
      two
    </Checkbox>
  </CheckboxGroup>
</template>

<script lang="ts">
import { Checkbox, CheckboxGroup } from 'vant'
import { defineComponent, ref, reactive, PropType } from "vue";

export default defineComponent({
  name: "HyCheckbox",
  components: {
    Checkbox, CheckboxGroup
  },
  props: {
    modelValue: {
      type: Array as PropType<unknown[]>,
      default: () => [],
    },
    direction: {
      type: String as PropType<'horizontal' | 'vertical'> | undefined,
    },
  },
  setup(props, { emit }) {
    return {
      props,
    };
  },
});
</script>
