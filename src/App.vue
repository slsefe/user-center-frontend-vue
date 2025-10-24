<template>
  <div id="app">
    <BasicLayout />
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style></style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useLoginUserStore } from "@/store/useLoginUserStore";

// 调用后端接口获取当前登录用户信息
const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();
</script>
