<script setup lang="ts"></script>

<template>
  <div id="userManagePage">
    <h1>用户管理页面</h1>
    <a-input-search
      style="width: 300px; margin-bottom: 16px"
      v-model:value="searchValue"
      placeholder="输入用户名"
      enter-button="搜索"
      size="large"
      @search="onSearch"
    />

    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'avatarUrl'">
          <a-image :src="record.avatarUrl" :width="120"></a-image>
        </template>
        <template v-else-if="column.dataIndex === 'role'">
          <div v-if="record.role === 1">
            <a-tag color="green">管理员</a-tag>
          </div>
          <div v-else><a-tag color="blue">普通用户</a-tag></div>
        </template>
        <template v-else-if="column.dataIndex === 'createTime'">
          {{ dayjs(record.createTime).format("YYYY-MM-DD HH:mm:ss") }}
        </template>
        <template v-else-if="column.dataIndex === 'updateTime'">
          {{ dayjs(record.updateTime).format("YYYY-MM-DD HH:mm:ss") }}
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button danger @click="doDelete(record.id)">删除</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { deleteUser, searchUsers } from "@/api/user";
import { message } from "ant-design-vue";
import { ref } from "vue";
import dayjs from "dayjs";

const searchValue = ref("");

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "账号",
    dataIndex: "account",
  },
  {
    title: "头像",
    dataIndex: "avatarUrl",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
  },
  {
    title: "角色",
    dataIndex: "role",
  },
  {
    title: "操作",
    key: "action",
  },
];

const data = ref();

const fetchData = async (username = "") => {
  const res = await searchUsers(username);
  if (res.data.success) {
    data.value = res.data.data;
  } else {
    message.error(res.data.message ?? res.data.description);
  }
};

const onSearch = () => {
  fetchData(searchValue.value);
};

const doDelete = async (id: string) => {
  const res = await deleteUser(id);
  if (res.data.success) {
    message.success("删除成功");
  } else {
    message.error(res.data.message ?? res.data.description);
  }
  fetchData();
};

fetchData();
</script>

<style scoped>
#userManagePage {
}
</style>
