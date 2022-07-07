<template>
  <div className="home">
    <Timetable />
    <VueSpace />
  </div>
</template>

<script>

import Timetable from '@/components/Timetable.vue'
import VueSpace from '@/components/VueSpace.vue'

export default {
  name: 'HomeView',
  components: {
    Timetable,
    VueSpace
  }
}

</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  background-color: #17ab67;
}
</style>
