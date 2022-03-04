<template>
  <div v-if="current_user?.boards.length > 0">
    <!-- /** ==================== start of draggable COLUMN */ -->

    <draggable
      class="drop-zone__wrapper"
      :list="board?.columns"
      ghost-class="ghost"
      group="collumn"
      @change="log"
      itemKey="id"
      @end="end"
      @start="start"
    >
      <template #header>
        <button class="btn create-btn" @click="createColunm">Колонка</button>
      </template>
      <template #item="{ element }">
        <div class="drop-zone">
          <div class="drop-zone__title">
            {{ element.title }} {{ element?.id }}
          </div>
          <!-- /** ========================!start of draggable TASK */ -->
          <draggable
            class="drop-zone__column__wrapper"
            :list="element?.tasks"
            group="task"
            @change="log"
            itemKey="id"
            @end="end"
            @start="start"
            ghost-class="ghost"
          >
            <template #item="{ element }">
              <div class="drag-el">
                <!-- MODAL TASK FORM START -->
                <ToggleProvider>
                  <template #activator="{ toggle }">
                    <div @click="toggle">
                      {{ element.title }} {{ element?.id }}
                    </div>
                  </template>
                  <template #content="{ toggle }">
                    <currentTask :toggle="toggle" :id="element?.id" />
                  </template>
                </ToggleProvider>
                <!-- MODAL TASK FORM END -->
              </div>
            </template>
            <template #footer>
              <!-- CREATE TASK FORM START -->
              <ToggleProvider>
                <template #activator="{ toggle }">
                  <button @click="toggle" class="create-tack-btn">
                    Добавить задачу
                  </button>
                </template>
                <template #content="{ toggle }">
                  <createTastForm
                    @blur="toggle"
                    :id="element?.id"
                    :update="fetchBoard"
                  />
                </template>
                <template #btn="{ toggle }">
                  <button @click="toggle" class="create-tack-btn">
                    Сохранить
                  </button>
                </template>
              </ToggleProvider>
              <!-- CREATE TASK FORM END -->
            </template>
          </draggable>
        </div>
      </template>

      /**========== column footer */
    </draggable>

    <!-- TEST -->
  </div>
  <div v-else>
    <h1>Sorry, you dont have any boards</h1>
    <div></div>
  </div>
</template>
<script setup>
import { current_user } from '../../composables/CurrentUserComposable/index'
import ToggleProvider from '../../components/common/ToggleProvider.vue'
import createTastForm from '../../components/board/task/createTaskForm.vue'
import currentTask from '../../components/board/task/currentTask.vue'
import draggable from 'vuedraggable'
import useBoard from '@/composables/boardComposables/useBoardComp'
const { board, id, createUserBoard, createColunm, createTask, fetchBoard } =
  useBoard()
</script>
<script>
export default {
  methods: {
    start(e) {
      e.clone.classList.add('rotated')
      console.log(e, 'START')
    },
    end(e) {
      console.log(e, 'END')
    },
    log(item) {
      console.log(item, 'args')
    },
    startDrag(evt, item) {
      console.log(evt, item)
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
    onDragOver(evt) {
      console.log(evt, 'DRAG OVER')
    },
    onDragEnter(evt) {
      console.log(evt, 'DRAG ENTER')
    },
  },
}
</script>
<style scoped lang="scss">
.ghost {
  background: rgb(160, 116, 116);
}
.drop-zone__wrapper {
  height: 90vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
.drop-zone {
  min-height: 6rem;
  height: fit-content;
  border-radius: 5px;
  margin: 0.2rem;
  min-width: 17rem;
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
  overflow-y: scroll;
  max-height: 87vh;
  /* height: fit-content; */
  &__title {
    padding: 10px;
    font-size: 15px;
    font-weight: bold;
  }
}

.drag-el {
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 8px;
  padding: 5px;
}
.ghost {
  background: rgba(53, 14, 14, 0.274);
}
.rotated {
  transform: rotate(45deg); /* Equal to rotateZ(45deg) */
  background-color: pink;
}
</style>
