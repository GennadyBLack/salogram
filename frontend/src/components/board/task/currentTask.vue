<template>
  <div id="modal-background">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-header__title">
          {{ editTaskForm?.title }}
        </div>
        <button @click.stop.prevent="toggle" class="modal-delete__btn">
          &#215;
        </button>
      </div>
      <div class="modal-container">
        <div class="modal-container__title">
          {{ editTaskForm?.title }}
        </div>
        <div class="modal-container__description">
          {{ editTaskForm?.description ?? '-' }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import editTask from '@/composables/TasksComposable/editTaskComp'
const props = defineProps({ id: Number, toggle: Function })
const { editTaskForm } = editTask(props.id)
</script>
<style lang="scss">
.modal {
  box-shadow: 1px 3px 6px 3px black;
  border-radius: 3px;
  display: block;
  position: absolute;
  // background: #cec9c9;
  top: 12%;
  height: 38rem;
  width: 30rem;
  left: 40%;
  z-index: 10;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  // filter: blur(4px);
  &-header__title {
    font-size: 20px;
    font-weight: bold;
  }
  &-delete__btn {
    border: none;
    font-size: 23px;
    background: inherit;
    margin-left: auto;
  }
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    &__title {
    }
    &__description {
    }
  }
}
#app {
  max-height: 100vh !important;
}
</style>
