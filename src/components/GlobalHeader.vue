<template>
  <div id="globalHeader">
    <!--wrap指定是否换行-->
    <a-row :wrap="false">
      <a-col flex="160px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">用户中心</div>
        </div>
      </a-col>
      <a-col flex="auto"
        ><a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
        />
      </a-col>
      <a-col flex="100px"
        ><div class="user-login-status">
          <a-button type="primary" href="/users/login">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/user/login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/user/register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/admin/userManage",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
  {
    key: "others",
    label: h("a", { href: "/others", target: "_blank" }, "github"),
    title: "Github",
  },
]);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
