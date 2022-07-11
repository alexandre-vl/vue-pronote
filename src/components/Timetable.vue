<template>
  <div class="timetable" >
    <div class="timetable-container">
      <div class="timetable-selection-container">
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
      </div>
      <div class="timetable-tables">
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">8h</p>
          </div>
          <div class="timetable-table-box table-none table-one"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">9h</p>
          </div>
          <div class="timetable-table-box table-two">
            <div
              class="timetable-bar-colored"
              style="background-color: coral;"
            ></div>
            <div class="timetable-content">
              <div class="timetable-content-subject">EPS</div>
              <div class="timetable-content-subtext">
                <p class="timetable-content-prof">Haby R.</p>
                <p class="timetable-content-classroom">GYM</p>
              </div>
            </div>
          </div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">11h</p>
          </div>
          <div class="timetable-table-box table-one">
            <div
              class="timetable-bar-colored"
              style="background-color: aqua;"
            ></div>
            <div class="timetable-content">
              <div class="timetable-content-subject">FRANÇAIS</div>
              <div class="timetable-content-subtext">
                <p class="timetable-content-prof">Falcou F.</p>
                <p class="timetable-content-classroom">B323</p>
              </div>
            </div>
          </div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">12h</p>
          </div>
          <div class="timetable-table-box table-two table-none"></div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">14h</p>
          </div>
          <div class="timetable-table-box table-one">
            <div
              class="timetable-bar-colored"
              style="background-color: blueviolet;"
            ></div>
            <div class="timetable-content">
              <div class="timetable-content-subject">MATHEMATIQUES</div>
              <div class="timetable-content-subtext">
                <p class="timetable-content-prof">Pourrier V.</p>
                <p class="timetable-content-classroom">B211</p>
              </div>
            </div>
          </div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">15h</p>
          </div>
          <div class="timetable-table-box table-two">
            <div
              class="timetable-bar-colored"
              style="background-color: chartreuse;"
            ></div>
            <div class="timetable-content">
              <div class="timetable-content-subject">HISTOIRE-GEO</div>
              <div class="timetable-content-subtext">
                <p class="timetable-content-prof">Capolongo A.</p>
                <p class="timetable-content-classroom">B319</p>
              </div>
            </div>
          </div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">17h</p>
          </div>
          <div class="timetable-table-box table-one">
            <div
              class="timetable-bar-colored"
              style="background-color: grey;"
            ></div>
            <div class="timetable-content">
              <div class="timetable-content-subject">PHYSIQUE-CHIMIE</div>
              <div class="timetable-content-subtext">
                <p class="timetable-content-prof">Ducos B.</p>
                <p class="timetable-content-classroom">B215</p>
              </div>
            </div>
          </div>
        </div>
        <div class="timetable-table">
          <div class="timetable-table-time">
            <p class="timetable-table-time-text">18h</p>
          </div>
          <div class="timetable-table-box table-one">
            <div
              class="timetable-bar-colored"
              style="background-color: darkkhaki;"
            ></div>
            <div class="timetable-content">
              <div class="timetable-content-subject">TECHNOLOGIE</div>
              <div class="timetable-content-subtext">
                <p class="timetable-content-prof">Andres C.</p>
                <p class="timetable-content-classroom">B320</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="button-edt-container">
        <router-link to="/timetable" class="button-edt">
          Voir l'emploi du temps complet
        </router-link>
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
  padding-left: 67px;
  padding-right: 30px;
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
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.timetable-content {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 18px;
}

.timetable-content-subject {
  font-weight: 600;
  font-size: 15px;
  color: #185c3c;
}

.timetable-content-subtext {
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #268a5b;
  font-size: 14px;
  font-weight: 400;
}

.timetable-content-prof {
  letter-spacing: 0.6px;
}

.timetable-content-classroom {
  letter-spacing: 0.6px;
}

.table-two {
  height: 100px;
}
.table-none {
  background-color: #1f7c51;
}

.table-one {
  height: 60px;
}

.timetable-bar-colored {
  height: 100%;
  width: 8px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
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

.button-edt-container {
  padding: 20px 30px 20px 76px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-edt {
  height: 100%;
  width: 100%;
  padding: 12px 0;
  border-radius: 10px;
  border: solid 1px transparent;
  background-color: #e68b7f;
  color: #fff;
  font-size: 16px;
}

@media screen and (max-width: 1350px) {
  .button-edt {
    padding: 12px 0px;
  }
}
</style>
