<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <!-- 카테고리 메뉴 (고정된 4개의 항목) -->
      <div class="col-md-6 menu">
        <h4 class="mb-3">menu</h4>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="category1"
            v-model="selectedCategories"
            value="한식"
          />
          <label class="form-check-label" for="category1">한식</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="category2"
            v-model="selectedCategories"
            value="중식"
          />
          <label class="form-check-label" for="category2">중식</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="category3"
            v-model="selectedCategories"
            value="일식"
          />
          <label class="form-check-label" for="category3">일식</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="category4"
            v-model="selectedCategories"
            value="양식"
          />
          <label class="form-check-label" for="category4">양식</label>
        </div>
      </div>

      <!-- 구역 선택 (고정된 4개의 항목) -->
      <div class="col-md-6 place">
        <h4 class="mb-3">place</h4>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="district1"
            v-model="selectedDistricts"
            value="부평구"
          />
          <label class="form-check-label" for="district1">부평구</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="district2"
            v-model="selectedDistricts"
            value="계양구"
          />
          <label class="form-check-label" for="district2">계양구</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="district3"
            v-model="selectedDistricts"
            value="중구"
          />
          <label class="form-check-label" for="district3">중구</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="district4"
            v-model="selectedDistricts"
            value="미추홀구"
          />
          <label class="form-check-label" for="district4">미추홀구</label>
        </div>
      </div>
    </div>

    <!-- search 버튼 -->
    <div class="d-flex justify-content-center">
      <div
        class="btn btn-primary mt-5 d-flex align-items-center justify-content-center"
        @click="applyFilters"
      >
        search
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 선택된 카테고리와 구역을 저장할 배열
const selectedCategories = ref([]);
const selectedDistricts = ref([]);

// 필터 적용 함수
const applyFilters = () => {
  store.commit("setCategoryFilter", selectedCategories.value);
  store.commit("setDistrictFilter", selectedDistricts.value);
};
</script>

<style lang="scss" scoped>
.btn {
  width: 250px;
  height: 50px;
}
</style>
