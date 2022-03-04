<template>
  <div class="errors-container" v-if="notices.length">
    <button class="delete-all-error-bnt" @click="deleteAllNotice">
      &#10006;
    </button>
    <div
      :class="notice.type"
      v-for="(notice, index) in notices"
      :key="notice.notice_message"
    >
      <button class="delete-error-bnt" @click="deleteNotice(index)">
        &#10006;
      </button>
      {{ notice.notice_message }}
    </div>
  </div>
</template>
<script setup>
import {
  notices,
  deleteAllNotice,
  deleteNotice,
} from '../../composables/ErrorsComposable/index'
</script>
