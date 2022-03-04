<template>
  <Field
    :name="name"
    v-slot="{ field, errorMessage }"
    :rules="{ ...rules }"
    :validateOnChange="true"
    :validateOnInput="true"
    v-model="model"
  >
    <DateInput
      v-bind="field"
      :label="label"
      :placeholder="name"
      v-model="model"
    />
    <div class="input-warning">{{ errorMessage }}</div>
  </Field>
</template>

<script>
import { Field } from 'vee-validate'
import DateInput from '../fields/DateInput'
export default {
  name: 'ValidationDateInputField',
  components: { DateInput, Field },
  props: {
    type: {
      type: [String],
    },
    nameError: {
      type: [String, Number],
    },
    rules: {
      type: [String, Object, Function],
    },
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number, Date],
    },
    placeholder: {
      type: String,
    },
  },
  computed: {
    name() {
      return this.placeholder || this.nameError
    },
    model: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>

<style scoped></style>
