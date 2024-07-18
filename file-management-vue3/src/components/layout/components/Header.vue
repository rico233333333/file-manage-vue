<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0">
      <RouterLink to="/" style="height: 100%;">
        <img style="height: 100%;" src="../../../../src/images/svg/logo.svg" alt="Hello Files Logo" />
      </RouterLink>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1"><el-switch v-model="isDark" :active-icon="Moon" :inactive-icon="Sunny" inline-prompt
        @change="toggleDark" />
    </el-menu-item>
    <el-menu-item index="2">Processing Center</el-menu-item>
    <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
<el-menu-item index="2-1">item one</el-menu-item>
<el-menu-item index="2-2">item two</el-menu-item>
<el-menu-item index="2-3">item three</el-menu-item>
<el-sub-menu index="2-4">
  <template #title>item four</template>
  <el-menu-item index="2-4-1">item one</el-menu-item>
  <el-menu-item index="2-4-2">item two</el-menu-item>
  <el-menu-item index="2-4-3">item three</el-menu-item>
</el-sub-menu>
</el-sub-menu> -->
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { Sunny, Moon } from "@element-plus/icons-vue";

import { useDark, useToggle } from "@vueuse/core";


const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const props = defineProps({
  msg: String,
});
const isDark = useDark();
 
const toggleDark = useToggle(isDark);



</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>