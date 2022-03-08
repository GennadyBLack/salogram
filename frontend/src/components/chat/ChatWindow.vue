<template>
    <div class="main-window d-flex row m-auto">
        <div class="chats col-4">
            <ul>
                <li v-for="chat in chats" :key="chat.id" class="main-li">
                    <li v-for="user in chat.users" :key="user.id">{{user.username}}</li>
                </li>
            </ul>
        </div>
        <div class="dialog col-8">

        </div>
    </div>
</template>

<script setup>
   import userChats from "../../composables/chatComposable"
    const {chats} = userChats();
</script>

<style scoped>
    .main-window {
        width: 50vw;
    }w
    .main-li {
        border-bottom: 1px solid gray;
    }
    .chats, .dialog {
        min-height: 50vh;
        height: auto;
        border: 1px solid #16a149;
        background: white;
        color: black;
        padding: 1rem;
    }
</style>
