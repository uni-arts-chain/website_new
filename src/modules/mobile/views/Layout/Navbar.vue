/** * Created by Lay Hunt on 2021-10-28 16:01:47. */
<template>
  <el-affix class="navbar">
    <nav class="container">
      <el-menu ref="elMenu" class="el-menu-vertical">
        <el-sub-menu>
          <template #title>
            <div class="menu-content">
              <div class="left-img">
                <img src="@/modules/mobile/assets/images/logo.png" />
              </div>
              <div class="center-img">
                <img src="@/modules/mobile/assets/images/logo-text.png" />
              </div>
              <div class="right-img">
                <img src="@/modules/mobile/assets/images/nav.png" />
              </div>
            </div>
          </template>
          <div class="nav-body">
            <ul>
              <li><router-link to="/" @click="onSelect">Gallery</router-link></li>
              <li><router-link to="/" @click="onSelect">Explorer</router-link></li>
              <li><router-link to="/" @click="onSelect">For Business</router-link></li>
              <li><router-link to="/" @click="onSelect">Token Economy</router-link></li>
              <li><router-link to="/" @click="onSelect">Blog</router-link></li>
              <li><router-link to="/" @click="onSelect">FAQs</router-link></li>
            </ul>
          </div>
        </el-sub-menu>
      </el-menu>
    </nav>
  </el-affix>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navbar",
  setup() {
    // TODO

    const elMenu = ref(null);
    const onSelect = () => {
      elMenu.value.close();
    };
    return {
      elMenu,
      onSelect,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  height: 68px;
  background-color: black;
}
nav {
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  padding-top: 15px;
  padding-bottom: 15px;
  z-index: 100;
}
.el-menu-vertical {
  border: none;
  background: transparent;
  :deep {
    .el-sub-menu__title:hover,
    .el-sub-menu__title:focus {
      background-color: transparent;
    }
    .el-sub-menu__title {
      cursor: pointer;
      color: white;
      line-height: 38px;
      height: 38px;
      padding: 0 !important;
    }
    .el-sub-menu__icon-arrow {
      display: none;
    }
    .el-menu {
      background-color: transparent;
    }
    .el-sub-menu {
    }
    .el-menu-item-group__title {
      color: white;
      padding: 0;
    }
    .el-menu-item {
      color: white;
    }
  }
}

.menu-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-img {
    width: 45px;
    img {
      width: 100%;
    }
  }
  .center-img {
    width: 80px;
    img {
      width: 100%;
    }
  }
  .right-img {
    width: 22px;
    text-align: right;
    img {
      width: 22px;
    }
  }
}
.nav-body {
  display: block;
  height: calc(100vh - 68px);
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    display: block;
    width: 100%;
  }
  li {
    margin-bottom: 20px;
    text-align: center;
    a {
      color: white;
    }
  }
}
</style>
