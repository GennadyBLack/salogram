<template>
  <div>Direct{{ current_user.chats }}</div>
</template>

<script setup>
import { current_user } from '../../composables/CurrentUserComposable/index'
</script>
