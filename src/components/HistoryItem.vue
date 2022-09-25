<template>
  <div :key="historyItem.id" v-for="historyItem in historyItems">
    <h4>{{}}</h4>
    <p></p>
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
