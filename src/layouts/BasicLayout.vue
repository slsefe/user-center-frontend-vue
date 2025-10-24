<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<template>
  <div id="basic-layout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <!--使用router-view，将布局的路由对应的组件动态替换到本区域-->
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a
          href="https://github.com/slsefe/user-management-system"
          target="_blank"
          >github</a
        >
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basic-layout .footer {
  background-color: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basic-layout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
}

#basic-layout .header {
  background: #ffffff;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
