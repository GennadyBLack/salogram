<template>
  <div class="messages-wrapper">{{ messages }}</div>
</template>

<script setup>
import useMeassages from '../../composables/chatComposable/useMesasges'
const { messages, fetchMessages } = useMeassages()
</script>
<style lang="scss">
.messages-wrapper {
  background: #eee;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
