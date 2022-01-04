<template>
  <div class="home">
    <HelloWorld msg="Events" />
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from '@/components/Chat.vue'


export default {
  name: 'Chat',
  components: {
    Chat
  }
}
</script>