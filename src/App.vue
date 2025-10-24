<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style></style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useLoginUserStore } from "@/store/useLoginUserStore";

// 调用后端接口获取当前登录用户信息
const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();
</script>
