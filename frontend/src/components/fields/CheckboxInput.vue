<template>
  <div>
    <input
      :id="value"
      :name="value"
      type="checkbox"
      :value="value"
      :checked="modelValue.includes(value)"
      @change="(evt) => onChange(evt.target.value)"
    />
    <label :for="value">
      <span class="main-checkbox__text">{{ value }}</span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  props: {
    value: { type: String, default: null },
    modelValue: { type: Array, default: () => [] },
    id: { type: Number },
  },
  methods: {
    onChange(value) {
      if (this.modelValue.includes(this.value)) {
        this.$emit(
          'update:modelValue',
          this.modelValue.filter((cv) => cv !== value)
        )
      } else {
        this.$emit('update:modelValue', this.modelValue.concat(value))
      }
    },
  },
}
</script>
<style>
input[type='checkbox']:checked,
input[type='checkbox']:not(:checked) {
  position: absolute;
  left: -9999px;
}

input[type='checkbox']:checked + label,
input[type='checkbox']:not(:checked) + label,
input[type='radio']:checked + label,
input[type='radio']:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 40px;
  line-height: 20px;
  cursor: pointer;
}

input[type='checkbox']:checked + label:before,
input[type='checkbox']:not(:checked) + label:before,
input[type='radio']:checked + label:before,
input[type='radio']:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #20a4ff;
}

input[type='checkbox']:checked + label:before,
input[type='checkbox']:not(:checked) + label:before {
  border-radius: 2px;
}

input[type='checkbox']:checked + label:after,
input[type='checkbox']:not(:checked) + label:after,
input[type='radio']:checked + label:after,
input[type='radio']:not(:checked) + label:after {
  content: '';
  position: absolute;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

input[type='checkbox']:checked + label:after,
input[type='checkbox']:not(:checked) + label:after {
  left: 6px;
  top: 7px;
  width: 17px;
  height: 11px;
  border-radius: 1px;
  border-left: 3px solid #20a4ff;
  border-bottom: 3px solid #20a4ff;
  transform: rotate(-45deg);
}

input[type='checkbox']:not(:checked) + label:after,
input[type='radio']:not(:checked) + label:after {
  opacity: 0;
}

input[type='checkbox']:checked + label:after,
input[type='radio']:checked + label:after {
  opacity: 1;
}
input[type='checkbox']:checked + label:before,
input[type='checkbox']:not(:checked) + label:before {
  border-radius: 8px;
}
input[type='checkbox']:not(:checked) + label:before {
  border: none;
}
</style>
