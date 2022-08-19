<template>
  <div class="textbook-view-container">
    <p class="textbook-view-container-title">Travail à faire</p>
    <div class="textbook-view-container-content">

      <div class="textbook-view-container-box">
        <p class="textbook-view-container-box-date">Pour le mardi 5 janvier.</p>
        <div class="textbook-view-container-homeworks">
          <div class="textbook-view-container-homeworks-item">
            <div class="textbook-view-container-homeworks-item-title">
              <label class="control control--checkbox">Allemand
                <input type="checkbox"/>
                <div class="control__indicator"></div>
              </label>
            </div>
            <p class="textbook-view-container-homeworks-item-desc">Finir l'exercice "Um Zu"</p>
          </div>
          <div class="textbook-view-container-homeworks-item">
            <div class="textbook-item-line"><div class="textbook-item-line-color"></div></div>
            <div class="textbook-view-container-homeworks-item-title">
              <label class="control control--checkbox">Français
                <input type="checkbox"/>
                <div class="control__indicator"></div>
              </label>
            </div>
            <p class="textbook-view-container-homeworks-item-desc">Lire le livre "La vague"</p>
          </div>
          <div class="textbook-view-container-homeworks-item">
            <div class="textbook-item-line"><div class="textbook-item-line-color"></div></div>
            <div class="textbook-view-container-homeworks-item-title">
              <label class="control control--checkbox">Mathématiques
                <input type="checkbox"/>
                <div class="control__indicator"></div>
              </label>
            </div>
            <p class="textbook-view-container-homeworks-item-desc">Exo 11 et 12 p.125 du manuel</p>
          </div>
          <div class="textbook-view-container-homeworks-item">
            <div class="textbook-item-line"><div class="textbook-item-line-color"></div></div>
            <div class="textbook-view-container-homeworks-item-title">
              <label class="control control--checkbox">Mathématiques
                <input type="checkbox"/>
                <div class="control__indicator"></div>
              </label>
            </div>
            <p class="textbook-view-container-homeworks-item-desc">Exo 11 et 12 p.125 du manuel</p>
          </div>
        </div>
      </div>
      <div class="textbook-view-container-box">
        <p class="textbook-view-container-box-date">Pour le mardi 5 janvier.</p>
        <div class="textbook-view-container-homeworks">
          <div class="textbook-view-container-homeworks-item">
            <div class="textbook-view-container-homeworks-item-title">
              <label class="control control--checkbox">Allemand
                <input type="checkbox"/>
                <div class="control__indicator"></div>
              </label>
            </div>
            <p class="textbook-view-container-homeworks-item-desc">Finir l'exercice "Um Zu"</p>
          </div>
          <div class="textbook-view-container-homeworks-item">
            <div class="textbook-item-line"><div class="textbook-item-line-color"></div></div>
            <div class="textbook-view-container-homeworks-item-title">
              <div data="checkbox-check">
                <label class="control control--checkbox">Français
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                </label>
              </div>
            </div>
            <p class="textbook-view-container-homeworks-item-desc">Lire le livre "La vague"</p>
          </div>
        </div>
      </div>
    </div>
    <div class="button-textbook-view-case">
      <router-link to="/textbook" class="button-textbook-view">
        Consulter les devoirs
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "TextbookContainer",
};
</script>

<style scoped>

.textbook-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  text-align: start;
  margin: 20px;
  background-color: #d8fad6;
  border-radius: 20px;
  padding: 30px 20px;
  width: 400px;
}

.textbook-view-container-title {
  font-size: 20px;
  font-weight: bold;
}

.textbook-view-container-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.textbook-view-container-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.textbook-view-container-box-date {
  font-weight: 600;
  font-size: 15px;
  color: #1b7249;
}

.textbook-view-container-homeworks {
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  border-radius: 10px;
  padding: 5px 5px;
}

.textbook-view-container-homeworks-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 10px 5px;
}

.control {
  font-size: 15px;
  color: #17ab67;
  font-weight: bold;
  position: relative;
  display: block;
  margin-bottom: 4px;
  padding-left: 30px;
  cursor: pointer;
}

.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  width: 20px;
  height: 20px;
  background: #e6e6e6;
  border-radius: 5px;
}

.control--radio .control__indicator {
  border-radius: 50%;
}

/* Hover and focus states */
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: #ccc;
}

/* Checked state */
.control input:checked ~ .control__indicator {
  background: #2aa1c0;
}

/* Hover state whilst checked */
.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: #0e647d;
}

/* Disabled state */
.control input:disabled ~ .control__indicator {
  pointer-events: none;
  opacity: .6;
  background: #e6e6e6;
}

/* Check mark */
.control__indicator:after {
  position: absolute;
  display: none;
  content: '';
}

/* Show check mark */
.control input:checked ~ .control__indicator:after {
  display: block;
}

/* Checkbox tick */
.control--checkbox .control__indicator:after {
  top: 4px;
  left: 8px;
  width: 3px;
  height: 8px;
  transform: rotate(45deg);
  border: solid #fff;
  border-width: 0 2px 2px 0;
}

/* Disabled tick colour */
.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}

/* Radio button inner circle */
.control--radio .control__indicator:after {
  top: 7px;
  left: 7px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
}

/* Disabled circle colour */
.control--radio input:disabled ~ .control__indicator:after {
  background: #7b7b7b;
}

.textbook-view-container-homeworks-item-desc {
  font-size: 13px;
  font-weight: 600;
  padding-left: 30px;
  color: black;
}

.textbook-item-line {
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.textbook-item-line-color {
  height: 2px;
  background-color: #f4f4f4;
}

.button-textbook-view-case {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-textbook-view {
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
