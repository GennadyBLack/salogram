<template>
    <div class="item-body">
        <div class="item-info">
            <div class="item-img">
                <img v-if="imgSrc" :src="imgSrc" alt="">
                <img v-else src="../../../public/img/male-profile.jpg" alt="">
            </div>

            <slot name="text">
                <p>{{itemText}}</p>
            </slot>
            </div>
        <div class="controls">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        itemText: null,
        itemImg: null,
    })
</script>

<style lang="scss" scoped>
    .item-body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 1rem;
        margin: 0 0 1rem 0;
        height: 9rem;
    }
    .item-info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 48%
    }
    .item-img {
        width: 5rem;
        height: 100%;
        margin: 0 1rem 0 0;
    }
    img {
        height: 100%;
        object-fit: contain;
    }
    .controls {
        justify-content: flex-end;
        width: 48%
    }
</style>
