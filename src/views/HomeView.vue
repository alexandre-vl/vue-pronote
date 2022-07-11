<template>
  <div class="home">
    <TextbookContainer />
  </div>
</template>

<script>

import TextbookContainer from "@/components/HomeContainers/TextbookContainer";
export default {
  name: "HomeView",
  components: {TextbookContainer}
};
</script>

<style scoped>
.home {
  padding: 0 20px
}

</style>
