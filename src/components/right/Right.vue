<template>
  <div class="right">
    <div class="value">{{count}}</div>
    <button type="danger" size="middle" @click="acDecrease(1)">减少</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("count", {
      count: "value"
    })
  },
  activated() {
    console.log(666666);
  },
  methods: {
    acDecrease: function() {
      console.log(this.$store.dispatch("count/acDecrease", 5));
    },
    ...mapActions({ decrease: "count/acDecrease" })
  }
};
</script>
<style scoped lang="less">
.right {
  .value {
    color: red;
    font-size: 20px;
  }
}
</style>
