<template>
  
    <AddTask v-show="showAddTask"  @add-task="addTask" />

  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return{
        tasks: []
    }
  },
  methods: {
    // CRUD routes start
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
      console.log(this.tasks);
    },
    async deleteTask(removedTask) {
      console.log(this.tasks);
      const res = await fetch(`api/tasks/${removedTask}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      // resetting the array to something else but not a direct edit
      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => task.id !== removedTask))
        : console.log("err");
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    // CRUD routes end
  },
     //on start grab all data to populate task app
    async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
