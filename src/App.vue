<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
      title="Task App"
    />
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer";
// import Home from "../src/views/Home.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    Footer,
    // Home
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    // Lib start
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    // Lib end
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>

<!-- when we are more generic it is possible to make more resuable componets -->
