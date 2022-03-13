<template>
    <button v-if="!link" :class="[mode, extendClass]">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="[mode, extendClass]">
        <slot></slot>
    </router-link>
</template>

<script setup>
    const props = defineProps({
        link: String,
        mode: String,
        to: String,
        extendClass: String,
    })
</script>

<style scoped>
    button,a {
        padding: 1rem 2rem;
        border: none;
        border-radius: .5rem;
        margin-right: 0.5rem;
        /*height: 5rem;*/
        /*display: inline-flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
    }
    .outline {
        background: transparent;
        border: 2px solid #708ab4;
    }
    .full {
        background: #6180b1;
        color: white;
    }
    .lg {
      padding-left: 3rem;
      padding-right:3rem;
    }
    .md {
        padding-left: 2rem;
        padding-right:2rem;
    }
    .sm {
        padding-left: 1rem;
        padding-right:1rem;
    }
</style>
