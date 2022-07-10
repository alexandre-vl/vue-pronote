<template>
  <nav>
    <router-link to="/">
      <div class="navbar-logo">
        <img class="img-logo" src="./assets/pronote-logo.png" />
      </div>
    </router-link>

    <div class="navbar-container">
      <div class="navbar-items">
        <router-link to="/textbook">
          <div class="navbar-item">Cahier de textes</div>
        </router-link>
        <router-link to="/results">
          <div class="navbar-item">Résultats</div>
        </router-link>
        <router-link to="/timetable">
          <div class="navbar-item">Vie scolaire</div>
        </router-link>
        <router-link to="/communication">
          <div class="navbar-item">Communication</div>
        </router-link>
        <router-link to="/about">
          <div class="profile-container">
            <img
              class="profile-content-img"
              src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg"
            />
            <div class="profile-content-text">
              <p class="profile-content-etab">LYCEE SIMONE VEIL</p>
              <p class="profile-content-name">Hugo MARQUIS</p>
            </div>
            <div class="profile-content-svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="profile-content-arrow"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </nav>

  <div class="container">
    <Timetable />
    <div class="vuespace">
      <div class="vuespace-container">
        <router-view />
      </div>
    </div>
  </div>

</template>

<script>
import Timetable from "@/components/Timetable";

export default {
  components: {Timetable}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #17ab67;
}

a {
  text-decoration: none;
}

.img-logo {
  width: 120px;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  position: fixed;
  background-color: #17ab67;
}

.navbar-items {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.navbar-container {
  display: flex;
  align-items: center;
}

.navbar-logo {
  margin-left: 1rem;
}

.navbar-item,
.navbar-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.navbar-item {
  margin: 10px 1rem;
  padding: 5px 20px;
  height: 45px;
  width: auto;
  background-color: #ffffff;
  border-radius: 999px;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 10px;
}

.profile-content-img {
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.profile-content-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.profile-content-etab {
  font-size: 12px;
  color: #2b2b2b;
}

.profile-content-name {
  font-size: 17px;
  font-weight: 400;
  color: #ffffff;
}

.profile-content-svg-container {
  width: 30px;
}

nav a.router-link-exact-active {
  color: #4bb462;
}

nav a {
  font-size: 15px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.vuespace {
  padding-top: 95px;
  width: 100%;
  height: 100vh;
  background-color: #17ab67;
}

.vuespace-container {
  height: 100%;
  background-color: #ffffff;
  border-top-left-radius: 50px;
}

.container {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 1315px) {
  .profile-content-text {
    display: none;
  }
}
</style>
