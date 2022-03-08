<template>
  <div>Direct{{ current_user.chats }}</div>
  <chat-window></chat-window>
</template>

<script setup>
import { current_user } from '../../composables/CurrentUserComposable/index'
import ChatWindow from "../../components/chat/ChatWindow";


</script>
