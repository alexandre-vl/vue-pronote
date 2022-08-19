<template>
  <div class="home">
    <TextbookContainer />
    <ResultsContainer />
    <EvaluationsContainer />
    <TimetableContainer />
  </div>
</template>

<script>

import TextbookContainer from "@/components/HomeContainers/TextbookContainer";
import ResultsContainer from "@/components/HomeContainers/ResultsContainer";
import EvaluationsContainer from "@/components/HomeContainers/EvaluationsContainer";
import TimetableContainer from "@/components/HomeContainers/TimetableContainer";
export default {
  name: "HomeView",
  components: {TimetableContainer, EvaluationsContainer, ResultsContainer, TextbookContainer}
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 20px;
}

.home>* {
  flex: 1 1 300px;
}

</style>
