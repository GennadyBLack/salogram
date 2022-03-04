import formatNumber from '@/helpers/Utils/formatNumber'

const number = {
  mounted(el, binding) {
    el.prepend(formatNumber(Math.trunc(binding.value.number)))
  },
  updated(el, binding) {
    el.innerHTML = formatNumber(Math.trunc(binding.value.number))
  },
}

export default number
