<template>



   <HistoryItem :historyItems="historyItems" />
</template>

<script>
import HistoryItem from "../components/HistoryItem.vue";

export default {
  props: {

  },
  components: {
    HistoryItem,
  },
  data() {
    return{
        historyItems: []
    }
  },
  
};
</script>
