<template>
  <el-row type="flex" class="header">
    <!--    左侧logo start-->
    <el-col :span="6" class="flex items-center">
      <div class="logo"></div>
      <h3 class="font-semibold">H5低代码</h3>
    </el-col>
    <!--    左侧logo end-->
    <!--    中间操作页面部分 start-->
    <el-col class="flex items-center" :span="12">
      <template v-for="(toolItem, toolIndex) in tools" :key="toolIndex">
        <div :class="[`w-1/${tools.length}`]" class="w-1/9">
          <div
            class="tool-item flex flex-col items-center cursor-pointer"
            @click="toolItem.onClick"
          >
            <el-icon>
              <component :is="toolItem.icon" />
            </el-icon>
            <div class="title">{{ toolItem.title }}</div>
          </div>
        </div>
      </template>
    </el-col>
    <!--    中间操作页面部分 end-->
    <!--    右侧工具栏 start-->
    <!-- @click="runPreview" -->
    <el-col :span="6" class="right-tools flex flex-row-reverse items-center">
      <el-tooltip class="item" effect="dark" content="运行" placement="bottom">
        <el-button
          type="primary"
          :icon="VideoPlay"
          size="large"
          circle
          class="flex-shrink-0 !p-6px"
        />
      </el-tooltip>
    </el-col>
    <!--    右侧工具栏 end-->
  </el-row>
  <!-- <preview v-model:visible="isShowH5Preview" /> -->
</template>

<script lang="ts" setup>
// import Preview from "./preview.vue";
// import { useVisualData, localKey } from "@/visual-editor/hooks/useVisualData";
// import { useTools } from './useTools';
import { VideoPlay } from "@element-plus/icons-vue";
import { ref } from "vue";

const isShowH5Preview = ref(false);

const tools = [
  {
    title: "预览",
    icon: "",
    onClick: () => {
      isShowH5Preview.value = true;
    },
  },
];

// const { jsonData } = useVisualData();

// const runPreview = () => {
//   sessionStorage.setItem(localKey, JSON.stringify(jsonData));
//   localStorage.setItem(localKey, JSON.stringify(jsonData));
//   isShowH5Preview.value = true;
// };
</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  .logo {
    width: 60px;
    height: 60px;
    background-image: url("@/assets/logo.png");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .tool-item {
    .title {
      margin-top: 4px;
      font-size: 12px;
    }
  }

  .el-button {
    font-size: 22px;
  }

  .right-tools > * {
    margin-left: 8px;
  }
}
</style>
