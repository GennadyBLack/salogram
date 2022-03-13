<template>
  <div class="input">
    <Field
      :name="name"
      v-slot="{ field, errorMessage }"
      :rules="{ ...rules }"
      :validateOnChange="true"
      :validateOnInput="true"
      v-model="model"
    >
      <InputField
        :col="col"
        :disabled="disabled"
        v-model="model"
        v-bind="field"
        :label="label"
        :placeholder="name"
        :type="type"
        :maska="maska"
        :modelValue="model"
        :textarea="textarea"
        :extend-class="extendClass"
        :mode="mode"
      />
      <div class="input-warning">{{ errorMessage }}</div>
    </Field>
  </div>
</template>

<script>
import { Field } from 'vee-validate'
import InputField from '../fields/InputField'
export default {
  name: 'VInputField',
  components: {
    InputField,
    Field,
  },
  props: {
    type: {
      type: [String],
      default: 'text',
    },
    mode: {
      type: [String],
    },
    nameError: {
      type: [String, Number],
    },
    extendClass: {
      type: [String],
    },
    rules: {
      type: [String, Object, Function],
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    maska: {
      type: [String, Array],
      required: false,
    },
    modelValue: {
      type: [String, Number],
    },
    disabled: {
      type: [Boolean],
      default: false,
    },
    col: { type: Number },
    textarea: { type: Boolean, default: false },
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
        this.$emit('update:modelValue', newValue)
      },
    },
  },
}
</script>

<style scoped>
.validation_input {
  margin-top: 10px;
}


</style>
