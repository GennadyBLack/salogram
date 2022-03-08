import { ref, computed, onMounted } from 'vue'
import chat from "../../api/chat"

export default () => {
    const chats = ref(null);

    const fetchChat = async () => {
        chats.value = (await chat.getAllUserChat({})).data
    }

    onMounted(async () => {
        await fetchChat();
    })
    return {chats, fetchChat}
}
