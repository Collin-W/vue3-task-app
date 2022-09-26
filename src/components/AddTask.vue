<template>
  <form @submit="onSubmit" action="" class="add-form">
    <div class="form-control">
      <label for="">Task</label>
      <input v-model="text" type="text" name="text" placeholder="Add Task" />
    </div>
    {{ text }}
    <div class="form-control">
      <label>Day & Time</label>
      <input
        v-model="day"
        type="text"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input v-model="reminder" type="checkbox" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",

  // data from the form
  // default for form
  //  v-model lets us bind this data
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
      textHis: "",
      dayHis: "",
      reminderHis: false,
    };
  },
  // emits: ['add-task', 'add-history'],
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a task");
        return;
      }
      // code will not be super dry but it is a test
      const newTask = {
        // id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      const newTaskHis = {
        // id: Math.floor(Math.random() * 100000),
        textHis: this.text,
        dayHis: this.day,
        reminderHis: this.reminder,
      };
      
      this.$emit('add-task', newTask)
      this.$emit('add-history', newTaskHis)
      
      this.text = "",
      this.day = "",
      this.reminder = false,    
      this.textHis = "",
      this.dayHis = "",
      this.reminderHis = false
    },
  },
  
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
