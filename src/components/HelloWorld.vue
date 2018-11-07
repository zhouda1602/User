<template>
  <div class="wrap">
    <div class="left" ref="left">
      <left @hidd="hidd" :hidds="hidds"></left>
    </div>
    <div class="right" v-show="hidds">
      <right></right>
    </div>
  </div>
</template>

<script>
import left from "./left";
import right from "./right";
export default {
  data() {
    return {
      hidds: true
    };
  },
  components: {
    left,
    right
  },
  methods: {
    hidd(data) {
      this.hidds = data;
      if (data === false) {
        this.$refs.left.style.width = "100%";
      } else {
        this.$refs.left.style.width = "75%";
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.left {
  width: 75%;
  float: left;
}
.right {
  width: 25%;
  float: left;
}
</style>