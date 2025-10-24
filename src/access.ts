import router from "@/router";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { message } from "ant-design-vue";

/**
 * 全局权限校验
 */
router.beforeEach((to, from, next) => {
  const loginUserStore = useLoginUserStore();
  const loginUser = loginUserStore.loginUser;
  const targetUrl = to.fullPath;
  if (targetUrl.startsWith("/admin")) {
    if (!loginUser || loginUser.role !== 1) {
      message.error("当前用户无权限访问");
      // 跳转到登录页面，登陆之后重定向会此页面
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
  }
  // 如果当前页面不需要权限，或者当前用户拥有权限，则直接跳转
  next();
});
