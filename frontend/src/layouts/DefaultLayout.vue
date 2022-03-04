<template>
  <div class="default-layout">
    <main-menu />
    <div class="default-container container-fluid">
      <div class="main-content"><router-view /></div>
    </div>
  </div>
</template>
<script setup>
import { current_user } from '@/composables/CurrentUserComposable/index'
import MainMenu from '../components/transitions/MainMenu.vue'
</script>
<style scoped>
.default-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.main-content {
  width: 100%;
}
.left-menu {
  background: rgb(219, 205, 205);
  font-size: 10px;
  min-width: 40px;
  display: flex;
  flex-direction: column;
}
</style>
