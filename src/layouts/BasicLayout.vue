<script setup lang="ts"></script>

<template>
  <div id="basic-layout">
    <a-layout>
      <a-layout-header :style="headerStyle">Header</a-layout-header>
      <a-layout-content :style="contentStyle" class="content">
        <!--使用router-view，将布局的路由对应的组件动态替换到本区域-->
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="footerStyle" class="footer">
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
</style>
