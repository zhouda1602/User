<template>
<div>
  <div class="con" ref="content">
      <div v-for="(item, key) in list" :key="key">
        <div v-if="item.type === '性别'">
          男 <input type="radio" name="s">
          女 <input type="radio" name="s">
          <span>
            <i  class="iconfont icon-shezhi1" @click="set(item, key)"></i>
            <i  class="iconfont icon-shanchu" @click="remove(key)"></i>
          </span>
        </div>
        <div v-if="item.type !== '性别'" class="info">
        <span class="type">{{item.type}}: </span>
        <input :type="item.input" :placeholder="item.placeholder">
        <span>
          <i  class="iconfont icon-shezhi1" @click="set(item, key)"></i>
          <i  class="iconfont icon-shanchu" @click="remove(key)"></i>
        </span>
        </div>
      </div>
    </div>
    <masks v-show="mask" :setData="setData" :ind="ind"></masks>
</div>
</template>

<script>
import masks from "../common/mask.vue";
export default {
  data() {
    return {
      hidd_left: false,
      list: [],
      mask: false,
      setData: [],
      ind: 0
    };
  },
  components: {
    masks
  },
  mounted() {
    bus.$on("type", data => {
      this.list = data;
    });
    bus.$on("shows", data => {
      this.mask = data;
    });
    bus.$on("sure", data => {
      this.list[data.id].type = data.type;
      this.list[data.id].placeholder = data.placeholder;
    });
  },
  methods: {
    remove(ind) {
      this.list.splice(ind, 1);
    },
    set(item, ind) {
      this.ind = ind;
      this.setData = item;
      bus.$emit("shows", true);
    }
  }
};
</script>

<style scoped>
.con {
  width: 100%;
  text-align: center;
}
.type {
  display: inline-block;
  width: 80px;
  text-align: left;
  font-size: 16px;
}
.info input {
  width: 60%;
  line-height: 2.6;
  margin-top: 10px;
  padding-left: 15px;
}
</style>