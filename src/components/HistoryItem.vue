<template>
  <div :key="historyItem.id" v-for="historyItem in historyItems">
    <h4>{{historyItem.textHis}}</h4>
    <p>{{historyItem.dayHis}}</p>
  </div>
</template>

<script>
    export default {
name: 'HistoryItem',
props: {
    historyItems: Array,
}

}
</script>

<style scoped>
div{
  border: 2px solid black;
  margin: 15px;
}

</style>
