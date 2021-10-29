/** * Created by Lay Hunt on 2021-10-28 16:01:47. */
<template>
  <nav>
    <el-affix>
      <div class="affix">
        <div class="container">
          <img class="logo" src="@/modules/pc/assets/images/logo.png" />
          <div class="menu">
            <li>
              <a href=""><img src="@/modules/pc/assets/images/uniarts.png" /></a>
            </li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Explorer</a></li>
            <li><a href="">For Business</a></li>
            <li><a href="">Token Economy</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">FAQs</a></li>
          </div>
        </div>
      </div>
    </el-affix>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "navbar",
  setup() {
    // TODO

    return {};
  },
});
</script>

<style lang="scss" scoped>
nav {
  flex: 0 0 auto;
  background: black;
}
.affix {
  background: black;
  opacity: 0.85;
}
.container {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu {
  display: flex;
  align-items: center;
  li {
    margin: 0 10px;
  }
  li a {
    color: #aaaaaa;
    font-family: "ArialMT";
  }
}
</style>
