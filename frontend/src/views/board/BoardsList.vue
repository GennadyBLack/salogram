<template>
  <div class="boards-list">
    <div
      class="boards-list__item"
      v-for="board in current_user?.boards"
      :key="board.id"
      :style="{ background: board?.background }"
    >
      <router-link
        :to="{ name: 'board_edit', params: { id: board?.id } }"
        class="btn edit-board__btn"
      >
        &#9998;
      </router-link>
      <router-link
        :to="{ name: 'board', params: { id: board?.id } }"
        v-slice="{ text: board?.title, index: 11 }"
      >
      </router-link>
    </div>
    <router-link class="btn" :to="{ name: 'board_create' }">create</router-link>
  </div>
</template>
<script setup>
import { current_user } from '../../composables/CurrentUserComposable/index'
</script>
<style lang="scss">
.boards-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &__item {
    width: 10rem;
    height: 10rem;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 1rem;
    border-radius: 3px;
    position: relative;
    a {
      color: black;
      text-decoration: none;
    }
  }
}
.edit-board__btn {
  position: absolute;
  font-size: 30px;
  right: 10px;
  top: 10px;
}
</style>
