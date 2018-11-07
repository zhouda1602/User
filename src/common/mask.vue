<template>
  <div class="wrap">
    <div class="info">
      <h2>修改内容</h2><span class="shows" @click="shows">×</span>
      <p><span>标题：</span><input type="text" name="" id="" :value="setData.type" ref="type"></p>
      <p><span>提示信息：</span><input type="text" name="" id="" :value="setData.placeholder" ref="placeholder"></p>
      <button @click="sure">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["setData", "ind"],
  methods: {
    shows() {
      bus.$emit("shows", false);
    },
    sure() {
      bus.$emit("sure", {
        type: this.$refs.type.value,
        placeholder: this.$refs.placeholder.value,
        id: this.ind
      });
      bus.$emit("shows", false);
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
}
.info {
  width: 480px;
  height: 210px;
  background: #fff;
  border-radius: 20px;
  margin: 100px auto;
  position: relative;
}
.info p {
  width: 80%;
  line-height: 2.6;
  text-align: center;
}
.info p span {
  display: inline-block;
  width: 80px;
  text-align: left;
}
.info h2 {
  line-height: 3.6;
  padding-left: 25px;
  border-bottom: 1px solid #ccc;
}
button {
  width: 80px;
  height: 36px;
  background: #008000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  position: absolute;
  bottom: 35px;
  left: 25px;
}
.shows {
  text-align: right;
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 28px;
}
</style