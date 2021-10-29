/** * Created by Lay Hunt on 2021-10-28 16:01:47. */
<template>
  <nav>
    <el-affix>
      <div class="affix">
        <div class="container">
          <img class="logo" src="@/modules/pc/assets/images/logo.png" />
          <div class="menu">
            <li>
              <router-link to="/"><img src="@/modules/pc/assets/images/uniarts.png" /></router-link>
            </li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/explorer">Explorer</router-link></li>
            <li><router-link to="/business">For Business</router-link></li>
            <li><router-link to="/token">Token Economy</router-link></li>
            <li><a href="https://uniartsnetwork.medium.com/" target="_blank">Blog</a></li>
            <li><router-link to="/faqs">FAQs</router-link></li>
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
    margin: 0 15px;
  }
  li a {
    color: #aaaaaa;
    font-family: "ArialMT";
  }
}
</style>
