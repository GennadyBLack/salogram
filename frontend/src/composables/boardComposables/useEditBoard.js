import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getBoardById, updateBoard, createBoard } from '@/api/board'
import { setNotice } from '../ErrorsComposable'
import { current_user } from '../CurrentUserComposable/index'
import board from '../../models/board'
import {
  mappedEditForm,
  mappedSaveForm,
} from '../../helpers/Utils/mappetEditForm'

export default () => {
  const route = useRoute()
  const boardForm = ref(null)
  const id = computed(() => route?.params?.id)

  const fetchBoard = async () => {
    try {
      // если есть id значит - редактирование
      if (id?.value) {
        boardForm.value = mappedEditForm((await getBoardById(id?.value)).data)
        //иначе это создание
      } else {
        boardForm.value = mappedEditForm(board)
      }
    } catch (error) {
      console.log(error, 'FROM BOARD COMPOSABLE')
    }
  }
  const saveBoardForm = async () => {
    if (id.value) {
      await updateBoard(id.value, mappedSaveForm(boardForm.value))
    } else {
      await createBoard(current_user.value.id, mappedSaveForm(boardForm.value))
    }
  }

  watch(
    [id],
    (value) => {
      fetchBoard()
    },
    { deep: true }
  )

  onMounted(() => {
    fetchBoard()
  })

  return {
    board: computed(() => boardForm.value),
    fetchBoard,
    id,
    saveBoardForm,
  }
}
