<template>
  <div class="multiselect">
    <label>
      {{ label }}
    </label>
    <Multiselect
      :disabled="disabled"
      v-model="model"
      :label="label"
      :placeholder="placeholder"
      :options="mappedOptions"
      :classes="{
        container: 'my-select',
        singleLabel: 'my-select__text',
        caret: 'my-select__caret',
        caretOpen: 'my-select__caret--open',
        placeholder: 'my-select__placeholder',
      }"
      :searchable="searchable"
      :can-clear="false"
    >
      <template #noOptions> Нет данных </template>
    </Multiselect>
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'
import { Field } from 'vee-validate'

export default {
  emits: ['change'],
  name: 'SelectInput',
  components: {
    Multiselect,
    Field,
  },
  props: {
    placeholder: {
      type: String,
    },
    options: {
      type: Array,
    },
    value: {
      type: [String, Number, Object, Array],
    },
    label: {
      type: String,
    },
    searchable: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number, Object, Array],
    },
  },
  computed: {
    mappedOptions() {
      return this.options?.map((el) => {
        return {
          value: el.id,
          label: el.title,
        }
      })
    },
    model: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('change', newValue)
      },
    },
  },
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style>
.multiselect-search {
  width: 100%;
  height: 51px;
  background: #e1e9f380;
  border-radius: 16px;
  border: none;
}
.multiselect {
  border: none;
}
</style>
