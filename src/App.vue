<script lang="ts">
import { defineComponent, ref } from "vue";
import { HyButton, HyCheckbox } from "./packages/base";
import Draggable from "vuedraggable";
export default defineComponent({
  components: {
    HyButton,
    HyCheckbox,
    Draggable,
  },
  setup() {
    const clone = (item: any) => {
      console.log(item);
      return JSON.parse(JSON.stringify(item));
    };
    let isDrag = true;
    const addPeople = () => {};
    const myArray = [
      {
        id: 1,
        name: "张三",
        age: 18,
      },
    ];
    return {
      clone,
      isDrag,
      addPeople,
      myArray
      // ...
    };
  },
});
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HyButton text="测试按钮" size="small" />
  <HyCheckbox text="text" />
  <Draggable
    v-model="myArray"
    clone="clone"
    @start="isDrag = true"
    @end="isDrag = false"
  >
    <template #item="item">
      <div
        :class="{ 'item-drag': item.element.draggable }"
        :data-el="item.element.draggable"
      >
        <slot name="item" v-bind="item"> </slot>
      </div>
    </template>
  </Draggable>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
