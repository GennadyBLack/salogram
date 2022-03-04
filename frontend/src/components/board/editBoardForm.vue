<template>
  <spiner v-if="!board" />
  <div class="form w-50" v-if="board">
    <v-input-field
      v-model="board.title.val"
      :rules="{ required: true }"
      :placeholder="'Название'"
      name="mail"
      :class="'form-field'"
      label="Название: "
    />
    <v-input-field
      v-model="board.description.val"
      :rules="{ required: true }"
      :placeholder="'Описание'"
      name="mail"
      :class="'form-field'"
      label="Описание: "
    />
    <v-input-field
      v-model="board.background.val"
      :rules="{ required: true }"
      :placeholder="'Фон'"
      name="mail"
      :class="' form-field'"
      label="Фон: "
    />
    <button class="btn save-btn" @click="saveBoardForm">Сохранить</button>
  </div>
</template>
<script setup>
import useEditBoard from '../../composables/boardComposables/useEditBoard'
const { board, saveBoardForm } = useEditBoard()
</script>
