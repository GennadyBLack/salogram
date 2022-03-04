<template>
  <Datepicker
    inputClassName="date-input placeholder"
    :enableTimePicker="false"
    :placeholder="placeholder"
    autoApply
    inputFormat="dd"
    v-model="model"
    locale="ru"
    :format="'dd.MM.yyyy'"
  />
</template>

<script>
import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'
import moment from 'moment'
export default {
  emits: ['update:modelValue'],
  name: 'DateInput',
  components: {
    Datepicker,
  },
  props: ['placeholder', 'modelValue'],
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        console.log(moment(newValue).format('yyy-MM-DD hh:mm:ss'), 'date')
        this.$emit(
          'update:modelValue',
          moment(newValue).format('yyy-MM-DD hh:mm:ss')
        )
      },
    },
  },
}
</script>

<style>
.date-input {
  width: 100%;
  height: 51px;
  background: rgba(225, 233, 243, 0.5) url('/img/date-input-bg.svg') right
    center no-repeat;
  border-radius: 16px;
  border: none;
  padding: 0px 20px;
  color: rgba(28, 54, 72, 1);
  font-family: 'Lato-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  box-sizing: border-box;
  background-origin: content-box;
}
.dp__input_icons {
  display: none;
}
</style>
