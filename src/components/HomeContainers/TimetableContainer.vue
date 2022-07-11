<template>
  <div class="timetable-view-container">
    <p class="timetable-view-container-title">Agenda</p>
    <div class="timetable-view-container-content">


    </div>
  </div>
</template>

<script>
export default {
  name: "TimetableContainer",
};
</script>

<style scoped>
.timetable-view-container {
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
  height: 600px;
}

.timetable-view-container-title {
  font-size: 20px;
  font-weight: bold;
}

.timetable-view-container-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

</style>
