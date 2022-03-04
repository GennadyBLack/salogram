<template>
  <label>
    <input
      type="radio"
      :value="value"
      @change="$emit('update:modelValue', $event.target.value)"
      :checked="value === modelValue"
    />
    <slot />
  </label>
</template>

<script>
export default {
  name: 'RadioInput',
  props: {
    value: { type: [String, Boolean], default: null },
    modelValue: { type: [String, Boolean], default: null },
  },
}
</script>
