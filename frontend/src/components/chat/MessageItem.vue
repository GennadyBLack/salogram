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

<style lang="scss" scoped>
.message {
  width: auto;
  border: 1px solid gray;
  display: block;
  width: fit-content;
  padding: 0.3rem 0.7rem;
  margin: 0.3rem 0;
  border-radius: 7px;
  &-date {
    font-size: 0.8rem;
    color: #858585;
  }
}
.message.right {
  align-self: end;
  text-align: end;
  background-color: rgba(80, 121, 243, 0.99);
}
.message.left {
  background-color: rgba(122, 220, 158, 0.63);
}
</style>
