<template>
  <div class="wrap">
    <ul>
      <li v-for="(item, key) in list" :key="key">
        <p v-if="item.type === '文本框'">
          <input type="text"> <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </p>
        <p v-if="item.type === '下拉框'">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </p>
        <p v-if="item.type === '单选'">
          一<input type="radio" name="s">
          二<input type="radio" name="s"> <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </p>
        <p v-if="item.type === '多选'">
          一 <input type="checkbox" >
          二 <input type="checkbox" >
          三 <input type="checkbox" > <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </p>
        <p v-if="item.type === '多行文本'">
          <textarea cols="80" rows="4"></textarea> <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </p>
        <div v-if="item.type === '时间'">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker> <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </div>
        <p v-if="item.type === '上传'">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload> <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </p>
        <div v-if="item.type === '省市区'">
          <span class="demonstration">默认 click 触发子菜单</span>
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange">
          </el-cascader> <span class="iconfont icon-shanchu" @click="set(key)"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      fileList: []
    };
  },
  mounted() {
    bus.$on("types", data => {
      this.list = data;
    });
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    set(ind) {
      this.list.splice(ind, 1);
    }
  }
};
</script>

<style scoped>
</style>