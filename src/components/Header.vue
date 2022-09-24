<template>
  <header>
    <h1>
      {{ title }}
    </h1>
    <!-- <Wrapper :items="{ -->

    <Button
    v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task 1'"
      :color="showAddTask ? 'red' : 'green'"
    />
    <!-- }"/> -->
  </header>
</template>

<script>
import Button from "./Button.vue";
import Wrapper from "./Wrapper.vue";

export default {
  name: "Header",

  props: 
  // ["title", "items", "showAddTask"],
  {
  title : String,
  items : Object,
  showAddTask: Boolean
  },
  emits: ["toggle-add-task"],
  //  props: {
  // title: String,
  // title: {
  //   type: String,
  //   default: "Hello World",
  // },
  //  }
  components: {
    Button,
    Wrapper,
  },
  computed: {
homePage(){
  if(this.$route.path === '/'){
    return true
  } else {
    return false
  }
}
  }
};
</script>

<!-- scoped means this is only for this -->
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>

<!-- <Button text='Add Task 2' color='red' />
<Button text='Add Task 3' color='pink' />
<Button text='Add Task 4' color='blue' /> -->
