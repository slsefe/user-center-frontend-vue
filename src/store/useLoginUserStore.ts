import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";

export const useLoginUserStore = defineStore("loginUser", () => {
  const logiUser = ref<any>({
    username: "未登录",
  });

  // 调用后端接口获取档期啊登录用户信息
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    if (res.data.code === 0 && res.data.data) {
      logiUser.value = res.data.data;
    }
  }

  // 设置当前用户信息
  function setLoginUser(user: any) {
    logiUser.value = user;
  }

  return { logiUser, fetchLoginUser, setLoginUser };
});
