<template>
  <div class="evaluations-view-container">
    <p class="evaluations-view-container-title">Dernières évaluations</p>
    <div class="evaluations-view-container-content">


    </div>
    <div class="button-evaluations-view-case">
      <router-link to="/results/evaluations" class="button-evaluations-view">
        Consulter les évaluations
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "EvaluationsContainer",
};
</script>

<style scoped>
.evaluations-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  text-align: start;
  margin: 20px;
  background-color: #d8fad6;
  border-radius: 20px;
  padding: 30px 20px;
  width: 340px;
  height: 300px;
}

.evaluations-view-container-title {
  font-size: 20px;
  font-weight: bold;
}

.evaluations-view-container-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.button-evaluations-view-case {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-evaluations-view {
  height: 100%;
  width: 100%;
  padding: 12px 0;
  border-radius: 10px;
  border: solid 1px transparent;
  background-color: #6fba65;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
</style>
