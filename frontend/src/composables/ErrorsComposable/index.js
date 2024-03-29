import { ref } from 'vue'

export const notices = ref([])

export const setNotice = (massage, type = 'error-message', meta) => {
  notices.value.push({
    notice_message: massage,
    type,
    meta,
  })
  setTimeout(deleteAllNotice, 5000)
}

export const deleteNotice = (ind) => {
  notices.value = notices.value.filter((el, index) => index !== ind)
}
export const deleteAllNotice = () => {
  notices.value = []
}
