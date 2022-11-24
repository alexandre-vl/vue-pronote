<template>
  <nav class="z-50">
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
              class="w-12 h-12 object-cover rounded-full"
              src="https://dailynorthwestern.com/wp-content/uploads/2019/01/ABROAD-DavidLee-WEB.jpg"
            />
            <div class="flex flex-col justify-start items-start">
              <p class="text-sm font-semibold">LYCEE SIMONE VEIL</p>
              <p class="font-medium text-base text-gray-100">Hugo MARQUIS</p>
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

  <div class="w-full bg-white flex">
    <div class="fixed w-96 transition-all" v-bind:class = "(this.deployed)?'translate-x-0':'-translate-x-96'" ref="container_edt">
      <Timetable />
    </div>
    <div class="pt-24 w-full bg-primary" ref="myDiv">
      <div class="h-full rounded-tl-[50px] flex flex-col justify-start items-start bg-white transition-all" v-bind:class = "(this.deployed)?'ml-96':'ml-0'" id="slide-edt">
        <div class="overflow-auto">
          <a href="#" v-on:click="change_slide_edt()" id="deploy">
            <svg ref="true" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" style="width: 35px; margin-left: 30px; margin-top: 30px">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <svg ref="false" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" style="display:none; width: 30px; margin-left: 30px; margin-top: 30px">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
          <router-view />
          <div class="h-10 bg-red-400 w-10"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Timetable from "@/components/Timetable";

export default {
  components: {Timetable},
  data() {
    return {
      deployed: true
    }
  },
  methods: {
    change_slide_edt: function () {
      console.log(this.deployed, this.$refs.myDiv)
      if (this.deployed === false){
        this.deployed = true
        this.$refs.true.style.display = "block"
        return this.$refs.false.style.display = "none"
      }else {
        this.$refs.true.style.display = "none";
        this.$refs.false.style.display = "block";
        return this.deployed = false; }
    }
  }
};

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

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

/* body {
  overflow: hidden;
} */

a {
  text-decoration: none;
  color: #2c3e50;
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


@media screen and (max-width: 1315px) {
  .profile-content-text {
    display: none;
  }
}
</style>
