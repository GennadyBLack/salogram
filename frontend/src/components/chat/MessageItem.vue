<template>
  <div class="message" :class="[`${side}`]">
    <div class="message-text">{{ message.text }}</div>
    <span class="message-date">{{ created_at }}</span>
  </div>
</template>
<script setup>
import moment from 'moment'
import { computed } from 'vue'
const props = defineProps({
  side: String,
  message: Object,
})
const created_at = computed(() =>
  moment(props?.message?.createdAt).format('hh.mm.ss')
)
</script>

<style lang="scss" scoped></style>
