<template>
    <div class="card" :class="extendClass">
        <slot></slot>
    </div>
</template>

<script setup>
   const props = defineProps({
       extendClass: String,
   })
</script>

<style scoped>
    .card {
        border-radius: 10px;
        padding: 3rem;
        z-index: 10;
        margin: 10% auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Параметры тени */
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(8px);
        max-width: 70rem;
    }
</style>
