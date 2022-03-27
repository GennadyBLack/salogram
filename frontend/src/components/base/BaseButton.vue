<template>
  <button v-if="!link" :class="extendClass">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="extendClass">
    <slot></slot>
  </router-link>
</template>

<script setup>
const props = defineProps({
  link: String,
  to: String,
  extendClass: String,
})
</script>

<style lang="scss" scoped>
button,
a {
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  /*height: 5rem;*/
  /*display: inline-flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}
.outline {
  background: transparent;

  &-blue {
    border: 2px solid $btn-blue-sec;
  }
  &-green {
    border: 2px solid $btn-green-sec;
  }
  &-yellow {
    border: 2px solid $btn-yellow-sec;
  }
  &:hover {
    filter: brightness(90%);
  }
}
.full {
  color: white;
  &-white {
    background: white;
    color: black;
  }
  &-blue {
    background: $btn-blue-pr;
  }
  &-green {
    background: $btn-green-pr;
  }
  &-yellow {
    background: $btn-yellow-pr;
    color: #656565;
  }
  &:hover {
    filter: brightness(90%);
  }
}

.lg {
  padding-left: 3rem;
  padding-right: 3rem;
}
.md {
  padding-left: 2rem;
  padding-right: 2rem;
}
.sm {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
