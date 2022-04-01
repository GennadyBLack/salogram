<template>
  <div class="errors-container" v-if="notices.length">
    <button class="delete-all-error-bnt" @click="deleteAllNotice">
      &#10006;
    </button>
    <!--если это уведомление о сообщении-->
    <template v-for="(notice, index) in notices">
      <div
        :key="notice.notice_message"
        :class="notice.type"
        v-if="notice?.type == 'message-notify'"
      >
        <button class="delete-error-bnt" @click="deleteNotice(index)">
          &#10006;
        </button>
        <router-link
          :to="{ name: 'current_chat', params: { id: notice.meta.chatId } }"
        >
          {{ notice.notice_message }}
        </router-link>
      </div>

      <div v-else :class="notice.type" :key="notice.notice_message">
        <button class="delete-error-bnt" @click="deleteNotice(index)">
          &#10006;
        </button>
        {{ notice.notice_message }}
      </div>
    </template>
    <!--если это уведомление-->
  </div>
</template>
<script setup>
import {
  notices,
  deleteAllNotice,
  deleteNotice,
} from '../../composables/ErrorsComposable/index'
</script>
