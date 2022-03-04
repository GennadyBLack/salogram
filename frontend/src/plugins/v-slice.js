import formatNumber from '@/helpers/Utils/formatNumber'

const slice = {
  mounted(el, binding) {
    const index = binding.value.index
    const tLength = binding.value.text.length
    const formatText =
      binding.value.text.slice(0, index) + `${index < tLength ? '...' : ''}`
    el.prepend(formatText)
  },
  updated(el, binding) {
    const index = binding.value.index
    const tLength = binding.value.text.length
    const formatText =
      binding.value.text.slice(0, index) + `${index < tLength ? '...' : ''}`
    el.innerHTML = formatNumber(formatText)
  },
}

export default slice
