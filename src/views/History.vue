<template>

    <h2>
      All History: 
    </h2>
    <HistoryItem :historyItems="historyItems" />
  
</template>

<script>
import HistoryItem from "../components/HistoryItem.vue";

export default {

  components: {
    HistoryItem,
  },
  data() {
    return{
        historyItems: []
    }

  },

  methods:{
    async fetchHistory() {
      console.log('entered history fetch on history.vue')
      const res = await fetch("api/history");
      const data = await res.json();

      console.log(data)
      return data;


    },
  
  },
  async mounted() {
      console.log('created history ')
      this.historyItems = await this.fetchHistory();
  //    // add to history route start
  // async addHistory(task) {
  //     const res = await fetch("api/history", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(task),
  //     });
  //     const data = await res.json();
  //     this.tasks = [...this.tasks, data];
  //     console.log(this.tasks);
  //   },
  // add to history route end
  }

};
</script>

<style scoped>

H2{
  margin-bottom: 20px;
}

</style>