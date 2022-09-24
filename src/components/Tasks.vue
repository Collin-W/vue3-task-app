<template>
  <div :key="task.id" v-for="task in tasks">
    <!-- emit lets us pass custom events from child to parent, emit == send -->
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)"  @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder']
};
</script>
<!-- @45:51  https://youtu.be/qZXt1Aom3Cs?t=2751-->
