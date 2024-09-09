<template>
  <div class="container-fluid p-0">
    <div class="mapview">
      <MapView />
    </div>

    <div class="user-option">
      <UserOptionView />
    </div>
  </div>
</template>

<script setup>
import UserOptionView from "../components/user/UserOptionView.vue";
import MapView from "../components/user/MapView.vue";
</script>

<style lang="scss" scoped>
.mapview {
  position: absolute;
  top: 0;
  left: 0px;
  // width: 100%;
  // height: 100vh; /* 뷰포트 높이를 100%로 설정하여 전체 화면을 덮음 */
  z-index: 0; /* 맨 뒤로 배치 */
}

/* UserOptionView를 화면의 왼쪽 상단에 고정하고 가장 앞에 배치 */
.user-option {
  position: fixed;
  top: 80px;
  left: 25px;
  width: 300px; /* 원하는 고정된 크기 설정 */
  height: 400px; /* 세로로 화면을 꽉 채움 */
  z-index: 1; /* 맨 앞에 배치 */
  background-color: rgba(255, 255, 255, 0.9); /* 약간의 투명 배경 설정 */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* 약간의 그림자 추가 */
}
</style>
