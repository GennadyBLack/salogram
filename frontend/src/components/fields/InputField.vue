<template>
  <div class="input-wrapper">
    <label :for="id">
      {{ label }}
    </label>
    <textarea
      v-if="textarea"
      v-model="model"
      :id="id"
      class="input"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :style="{ height: `${col * 51}px` }"
      :class="extendClass"
    ></textarea>
    <!-- v-maska="maska" -->
    <input
      v-else
      v-model="model"
      :id="id"
      class="input-field"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :class="[mode,extendClass]"

    />
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  emits: ['input:modelValue'],
  name: 'InputField',
  data() {
    return {
      id: null,
    }
  },
  props: {
    type: {
      type: [String],
    },
    extendClass: {
      type: [String],
    },
    mode: {
      type: [String],
    },
    name: {
      type: [String, Number],
      required: true,
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
    },
    modelValue: {
      type: [String, Number, Array],
    },
    disabled: {
      type: [Boolean],
    },
    size: {
      type: String,
      default: 'sm',
    },
    col: {
      type: Number,
      default: 1,
    },
    textarea: { type: Boolean, default: false },
  },
  mounted() {
    this.id = getCurrentInstance().uid
  },
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('input:modelValue', newValue)
      },
    },
  },
}
</script>
<style>
textarea {
  padding-top: 10px !important;
}
label {
  color: #2c2c2c;
}
.input {
  border-radius: 0.4rem;
}
.underline {
  background: inherit;
  border: none;
  border-bottom: 1px solid #eee;
}
.input-wrapper label {
  margin-right: 10px;
  color: #eee;
}

</style>
