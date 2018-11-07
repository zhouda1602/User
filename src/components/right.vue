<template>
  <div class="wrap_right">
    <div class="top">
      自定义表单项
    </div>
    <div class="select">
      <h5>常用项</h5>
      <ul class="select_a">
        <li v-for="(item, key) in data" :key="key" @click="btn(item)" @mousedown="mouseDown($event,item)">
          {{item.type}}
        </li>
      </ul>
      <h5>自定义项</h5>
      <ul class="select_b">
        <li v-for="(item, key) in datas" :key="key" @click="btns(item)" @mousedown="mouseDowns($event,item)">
          <span class="iconfont icon-bianji1">{{item.type}}</span>
          <img :src="item.Logo" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { data, datas } from "../../static/data";
export default {
  data() {
    return {
      data: data,
      datas: datas,
      list: [],
      lists: [],
      t: 0,
      l: 0
    };
  },
  methods: {
    //通过点击事件触发
    btn(type) {
      this.list.push(type);
      bus.$emit("type", this.list);
    },
    //通过点击事件触发
    btns(type) {
      this.lists.push(type);
      bus.$emit("types", this.lists);
    },
    //通过拖拽事件触发
    mouseDown(e, item) {
      let type = Object(e.target.dataset.type);
      let newDOM = e.target.cloneNode(true);
      document.body.appendChild = newDOM;
      let x = e.offsetX;
      let y = e.offsetY;
      document.onmousemove = e => {
        this.t = e.clientX - x;
        this.l = e.clientY - y;
        newDOM.style.left = this.t + "px";
        newDOM.style.top = this.l + "px";
      };
      document.onmouseup = e => {
        if (this.t > 0 && this.t < 1050) {
          this.btn(item);
        }
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    //通过拖拽事件触发
    mouseDowns(e, item) {
      let type = Object(e.target.dataset.type);
      let newDOM = e.target.cloneNode(true);
      document.body.appendChild = newDOM;
      let x = e.offsetX;
      let y = e.offsetY;
      document.onmousemove = e => {
        this.t = e.clientX - x;
        this.l = e.clientY - y;
        newDOM.style.left = this.t + "px";
        newDOM.style.top = this.l + "px";
      };
      document.onmouseup = e => {
        if (this.t > 0 && this.t < 1050) {
          this.btns(item);
        }
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
};
</script>

<style scoped>
.wrap_right {
  width: 100%;
  height: 100%;
  padding-left: 20px;
}
.top {
  width: 100%;
  line-height: 3.8;
  padding-left: 10px;
  border-top: 5px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.select {
  padding-left: 10px;
}
.select h5 {
  line-height: 2.6;
}
.select_a {
  display: flex;
  flex-wrap: wrap;
}
.select_a li {
  width: 29%;
  text-align: center;
  background: #ecf1f4;
  padding: 6px 10px;
  margin: 6px;
  color: #666;
}
.select_a li:hover {
  background: blue;
  color: #fff;
}
.select_b li {
  display: flex;
  line-height: 2.6;
  justify-content: space-between;
  margin: 0 10px;
  background: #ecf1f4;
  margin-top: 10px;
}
.select_b li:hover {
  border: 1px solid blue;
}
</style>