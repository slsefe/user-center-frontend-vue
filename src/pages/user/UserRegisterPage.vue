<template>
  <div id="userRegisterPage">
    <h1 class="title">用户注册</h1>

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
        :rules="[
          { required: true, message: '请输入账号!' },
          { min: 6, max: 20, message: '账户名称长度必须在6到20位之间' },
        ]"
      >
        <a-input v-model:value="formState.account" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[
          { required: true, message: '请输入密码!' },
          { min: 8, max: 30, message: '密码长度必须在8到30位之间' },
        ]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        label="确认密码"
        name="checkPassword"
        :rules="[
          { required: true, message: '请输入确认密码!' },
          { min: 8, max: 30, message: '密码长度必须在8到30位之间' },
        ]"
      >
        <a-input-password v-model:value="formState.checkPassword" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { userRegister } from "@/api/user";
import router from "@/router";
import { message } from "ant-design-vue";

interface FormState {
  account: string;
  password: string;
  checkPassword: string;
}

const formState = reactive<FormState>({
  account: "",
  password: "",
  checkPassword: "",
});

/**
 * 提交注册表单
 * @param values
 */
const handleSubmit = async (values: FormState) => {
  // 判断两次输入的密码是否一致
  if (values.password !== values.checkPassword) {
    message.error("两次输入的密码不一致");
    return;
  }

  const res = await userRegister(values);
  // 注册成功之后，跳转到登录页面
  if (res.data.success) {
    message.success("注册成功");
    await router.push({ path: "/user/login", replace: true });
  } else {
    message.error(res.data.message ?? res.data.description);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped>
#userRegisterPage .title {
  text-align: center;
  margin-bottom: 16px;
}
</style>
