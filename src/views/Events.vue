<template>
  <div class="home">
    <HelloWorld msg="Events" />
  </div>
</template>

<script>
// @ is an alias to /src
import Events from '@/components/Events.vue'

export default {
  name: 'Events',
  components: {
    Events
  }
}
</script>