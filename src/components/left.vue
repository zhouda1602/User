<template>
  <div class="wrap_left">
    <div class="top">
      <p>拖拽/点击右侧表单项到此处</p>
      <p>
        <span @click="content">复制代码</span>
        <span @click="hidd">预览</span>
      </p>
    </div>
    <div ref=con>
      <content_a></content_a>
      <content_b></content_b>
    </div>
  </div>
</template>

<script>
import content_a from "./content_a";
import content_b from "./content_b";
export default {
  components: {
    content_a,
    content_b
  },
  methods: {
    //预览
    hidd() {
      this.hidd_left = !this.hidd_left;
      this.$emit("hidd", this.hidd_left);
    },
    //复制代码
    content() {
      alert(this.$refs.con.innerHTML);
    }
  }
};
</script>

<style scoped>
.wrap_left {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 3.8;
  border-top: 5px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.top p {
  margin: 0 20px;
}
.top span:nth-of-type(1) {
  background: orange;
  color: #fff;
  border-radius: 5px;
  padding: 6px 15px;
}
.top span:nth-of-type(2) {
  background: #ccc;
  color: #888;
  border-radius: 5px;
  padding: 6px 20px;
}
</style>