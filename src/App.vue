<script setup></script>

<template>
  <nav>
    <router-link to="/">Light</router-link>
    <router-link to="/profile-dark">Dark</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  height: 40px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
}

nav > a {
  color: black;
  border: 1px solid;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
}

nav > a:first-child {
  background-color: white;
  color: black;
}

nav > a:first-child:hover {
  background-color: black;
  color: white;
}

nav > a:last-child {
  background-color: black;
  color: white;
}

nav > a:last-child:hover {
  background-color: white;
  color: black;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
