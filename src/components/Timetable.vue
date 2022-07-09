<template>
  <div class="timetable">
    <div class="timetable-container">
      <div class="timetable-selection">
        <div class="timelable-selection-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="timelable-selection-date">
          <p class="timelable-selection-date-text">Mercredi 17 Mai</p>
        </div>
        <div class="timelable-selection-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="timetable-tables">
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">8h</p>
          </div>
          <div class="timetable-table-box table-none"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">9h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">10h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">11h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">12h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">13h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">14h30</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">15h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">16h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">17h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">18h</p>
          </div>
          <div class="timetable-table-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timetable",
  props: {
    msg: String,
  },
};
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
  padding-top: 0px;
  padding-left: 30px;
}

.timelable-selection-arrow {
  width: 30px;
  color: #fff;
}

.timelable-selection-date-text {
  font-size: 18px;
  color: #fff;
  text-align: center;
}

.timetable-tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 20px 30px;
}

.timetable-table {
  display: flex;
  flex-direction: row;
}

.timetable-table-box {
  height: 50px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
}

.timetable-table-time {
  margin-right: 10px;
  width: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.timetable-table-time-text {
  font-size: 13px;
  font-weight: 600;
  color: #1b7249;
}

.table-none {
  background-color: #1b7249;
}
</style>
