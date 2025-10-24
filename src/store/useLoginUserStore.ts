import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";

interface LoginUser {
  id: number;
  username: string;
  account: string;
}

export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<LoginUser>({
    id: 0,
    username: "未登录",
    account: "",
  });

  // 调用后端接口获取当前登录用户信息
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    if (res.data.success) {
      loginUser.value = res.data.data;
    }
  }

  // 设置当前用户信息
  function setLoginUser(user: LoginUser) {
    loginUser.value = user;
  }

  return { loginUser: loginUser, fetchLoginUser, setLoginUser };
});
