<template>
  <div class="user-container">
    <div class="user-list">
      <div
        v-for="(item, i) in $store.state.userData"
        :key="i"
        class="user-card d-flex flex-column gap-2 border rounded p-3 mb-3"
      >
        <div class="avata">
          <img :src="item.image" alt="" />
        </div>
        <div>
          <h5 class="mb-0 text-center">{{ item.userid }}</h5>
          <p class="mb-0 text-center">{{ item.username }}</p>
        </div>
        <div class="d-flex gap-2">
          <button
            class="btn btn-primary w-100"
            @click="deleteUser(item.userid)"
          >
            삭제
          </button>
          <button class="btn btn-primary w-100" @click="editUser(item)">
            수정
          </button>
        </div>
      </div>
    </div>

    <!-- 수정폼 -->
    <div v-if="editingUser" class="edit-form">
      <h4>유저 수정</h4>
      <input type="text" v-model="editUserData.userid" placeholder="아이디" />
      <input type="text" v-model="editUserData.username" placeholder="이름" />
      <input
        type="password"
        v-model="editUserData.password"
        placeholder="비밀번호"
      />
      <button class="btn btn-primary" @click="updateUser">등록</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const editingUser = ref(false);
const editUserData = ref({});

// 삭제
const deleteUser = (userid) => {
  store.commit("deleteUser", userid);
};

const editUser = (user) => {
  editUserData.value = { ...user, oldUserid: user.userid }; // 데이터를 수정 폼에 복사, 기존 userid 저장
  editingUser.value = true;
};

// 수정된 유저 업데이트
const updateUser = () => {
  store.commit("updateUser", editUserData.value); // 스토어에서 유저 데이터 업데이트
  editingUser.value = false; // 수정 모드 비활성화
};
</script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 83px;
}

.user-container {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  position: relative;
}

.user-list {
  height: 400px;
  overflow-y: scroll;
  padding-right: 10px;
  width: 280px;
}

.user-card {
  width: 250px;
}

.d-flex {
  display: flex;
  flex-direction: column;
}

.d-flex button {
  margin-top: 10px;
}

.edit-form {
  position: absolute;
  left: 300px;
  top: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.edit-form input {
  margin-bottom: 10px;
}

.edit-form button {
  align-self: flex-start;
}
</style>
