<template>
  <div class="back d-flex align-items-center">
    <div class="container bg-light">
      <div class="text-center py-3">
        <h4 class="text-muted">회원 등록</h4>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="아이디를 입력해 주세요."
          v-model="userdata.userid"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="비밀번호를 입력해 주세요."
          v-model="userdata.password"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="닉네임을 입력해 주세요."
          v-model="userdata.username"
        />
      </div>

      <div class="login d-flex justify-content-center">
        <div class="btn btn-success" @click="addUser">등록</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const userdata = ref({
  userid: null,
  password: null,
  username: null,
  image: null,
});

const clearform = () => {
  userdata.value.userid = null;
  userdata.value.password = null;
  userdata.value.username = null;
  userdata.value.image = null;
};

const addUser = () => {
  let uData = {
    userid: userdata.value.userid,
    password: userdata.value.password,
    username: userdata.value.username,
    image: userdata.value.image,
  };
  store.commit("addUser", uData);
  clearform();
};
</script>

<style lang="scss" scoped>
.back {
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  height: 100vh; /* Viewport Height: 화면의 100%를 차지 */
  background: url(../assets/images/food.jpg) no-repeat center center;
  background-size: cover;
  .container {
    width: 400px;
    height: 300px;
  }
}

.login {
  .btn {
    width: 150px;
  }
}
</style>
