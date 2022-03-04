<template>
  <div class="auth-layout">
    <main-menu />
    <div class="auth-form">
      <div class="main-content"><router-view /></div>
    </div>
  </div>
</template>
<script setup>
import MainMenu from '../components/transitions/MainMenu.vue'
</script>
<style></style>
