<template>
  <VeeForm v-slot="{ handleSubmit, validate, handleReset }" as="div">
    <slot
      :validate="validate"
      :reset="handleReset"
      :handleSubmit="handleSubmit"
    >
    </slot>
  </VeeForm>
</template>
<script>
import { Form as VeeForm } from 'vee-validate'
export default {
  name: 'VForm',
  components: { VeeForm },
  props: {
    handleSubmit: { type: Function },
  },
}
</script>
