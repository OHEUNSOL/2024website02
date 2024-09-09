<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><i class="fa-solid fa-utensils"></i> 인천 맛집
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/user">찾으러 가기</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/userlist"
              >유저리스트</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
