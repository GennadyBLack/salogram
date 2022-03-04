<template>
  <div :class="customClass">
    <slot
      name="activator"
      :toggle="toggle"
      :isShow="isShow"
      v-if="showActivator ? false : isShow ? false : true"
    >
    </slot>
    <slot name="content" v-if="isShow" :toggle="toggle"> </slot>
    <slot name="btn" v-if="isShow" :toggle="toggle"> </slot>
  </div>
</template>

<script>
export default {
  name: 'ToggleProvider',
  props: {
    customClass: { type: String, required: false },
    showActivator: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      isShow: false,
    }
  },
  computed: {},
  methods: {
    toggle() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style scoped></style>
