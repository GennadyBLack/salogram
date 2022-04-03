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
      :class="extendClass"

    />
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  emits: ['update:modelValue'],
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
      type: [String, Number]
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
        this.$emit('update:modelValue', newValue)
      },
    },
  },
}
</script>
<style lang="scss" scoped>
textarea {
  padding-top: 10px !important;
}
label {
  color: #2c2c2c;
}
.input {
  border-radius: 0.4rem;
  width: 100%;
}
.underline {
  background: inherit;
  border: none;
  border-bottom: 2px solid $gray;

  &:active {
    outline: none;
    border: none !important;
    border-bottom: 2px solid $gray;
  }

  &:focus {
    border: none !important;
    outline: none;
    border-bottom: 2px solid $gray;
  }
}
.full {
  border-style: solid;
  border-width: 2px;
  border-color: $gray;
  padding: 1rem 1rem;
  &-blue {
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
}
.input-wrapper label {
  margin-right: 10px;
  color: #eee;
}

</style>
