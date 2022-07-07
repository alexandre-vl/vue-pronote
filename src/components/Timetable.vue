<template>

  <div class="timetable">
    <div class="timetable-container">


      <div class="timetable-selection">
        <div class="timelable-selection-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timelable-selection-date">
          <p class="timelable-selection-date-text">Mercredi 17 Mai</p>
        </div>
        <div class="timelable-selection-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <div class="timetable-selection">
        </div>

        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Timetable',
  props: {
    msg: String
  }
}
</script>

<style scoped>

  .timetable {
    padding-top: 95px;
    width: 600px;
    height: 100vh;
    background-color: #17ab67;
  }
  .timetable-container {
    height: 100%;
    background-color: #17ab67;
  }

  .timetable-selection {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
  }

  .timelable-selection-arrow {
    width: 40px;
    color: #fff
  }

  .timelable-selection-date-text {
    font-size: 18px;
    color: #fff;
    text-align: center;
  }

</style>
