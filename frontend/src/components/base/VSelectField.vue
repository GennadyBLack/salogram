<template>
  <Field
    :name="name"
    v-slot="{ field, errorMessage }"
    :rules="{ ...rules }"
    :validateOnChange="true"
    :validateOnInput="true"
    v-model="model"
  >
    <SelectInput
      :searchable="searchable"
      v-bind="field"
      :label="label"
      :placeholder="name"
      :options="options"
      v-model="model"
      :disabled="disabled"
    />
    <div class="input-warning">{{ errorMessage }}</div>
  </Field>
</template>

<script>
import { Field } from 'vee-validate'
import SelectInput from '../fields/SelectField.vue'
export default {
  name: 'ValidationSelectInputField',
  emits: ['update:modelValue'],
  components: {
    SelectInput,
    Field,
  },
  props: {
    placeholder: {
      type: String,
    },
    options: {
      type: Array,
    },
    rules: {
      type: Object,
    },
    modelValue: {
      type: [String, Number, Object, Array],
    },
    label: {
      type: String,
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
    },
  },
  computed: {
    name() {
      return this.placeholder
    },
    model: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue)
      },
    },
  },
}
</script>

<style scoped></style>
