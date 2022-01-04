<template>
  <div class="home">
    <HelloWorld msg="Events" />
  </div>
</template>

<script>
// @ is an alias to /src
import Connect from '@/components/Connect.vue'

export default {
  name: 'Home',
  components: {
    Connect
  }
}
</script>
