<template>
  <div id="userLoginPage">
    <h1 class="title">用户登录页面</h1>

    <a-form
      style="max-width: 480px; margin: 0 auto"
      :model="formState"
      name="basic"
      label-align="left"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="handleSubmit"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="账号"
        name="account"
        :rules="[{ required: true, message: '请输入账号!' }]"
      >
        <a-input v-model:value="formState.account" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[
          { required: true, message: '请输入密码!' },
          { min: 8, message: '账号不能小于8位' },
        ]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { userLogin } from "@/api/user";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import router from "@/router";
import { message } from "ant-design-vue";
import * as path from "node:path";

interface FormState {
  account: string;
  password: string;
}

const formState = reactive<FormState>({
  account: "",
  password: "",
});

const loginUserStore = useLoginUserStore();

/**
 * 提交登录表单
 * @param values
 */
const handleSubmit = async (values: any) => {
  const res = await userLogin(values);
  // 登陆成功之后，将用户登录态保存到全局状态中
  if (res.data.code === 20000 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success("登陆成功");
    // 成功登陆之后，跳转到首页
    await router.push({ path: "/", replace: true });
  }
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped>
#userLoginPage .title {
  text-align: center;
  margin-bottom: 16px;
}
</style>
