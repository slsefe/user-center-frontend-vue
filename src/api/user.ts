import instance from "@/request";

/**
 * 用户注册
 * @param params
 */
export const userRegister = async (params: any) => {
  const res = await instance.request({
    url: "/api/users/register",
    method: "POST",
    data: params,
  });
  return res;
};

/**
 * 用户登录
 * @param params
 */
export const userLogin = async (params: any) => {
  const res = await instance.request({
    url: "/api/users/login",
    method: "POST",
    data: params,
  });
  return res;
};

/**
 * 获取当前用户
 */
export const getCurrentUser = async () => {
  const res = await instance.request({
    url: "/api/users/current",
    method: "GET",
  });
  return res;
};

/**
 * 用户登出
 */
export const userLogout = async () => {
  const res = await instance.request({
    url: "/api/users/logout",
    method: "POST",
  });
  return res;
};

/**
 * 查询用户列表
 */
export const searchUsers = async () => {
  const res = await instance.request({
    url: "/api/users",
    method: "GET",
  });
  return res;
};

/**
 * 删除用户
 */
export const deleteUser = async (userId: string) => {
  const res = await instance.request({
    url: "/api/users/" + userId,
    method: "DELETE",
  });
  return res;
};
