/** * Created by Lay Hunt on 2021-10-28 16:01:47. */
<template>
  <el-affix class="navbar">
    <nav class="container">
      <div class="menu-content">
        <div class="left-img">
          <img src="@/modules/mobile/assets/images/logo.png" />
        </div>
        <router-link to="/" @click="goHome" class="center-img">
          <img src="@/modules/mobile/assets/images/logo-text.png" />
        </router-link>
        <div class="right-img" @click="onSelect">
          <img src="@/modules/mobile/assets/images/nav.png" />
        </div>
      </div>
      <el-menu ref="elMenu" class="el-menu-vertical">
        <el-sub-menu :popper-append-to-body="true">
          <div class="nav-body">
            <ul>
              <li><router-link to="/gallery" @click="onSelect">Gallery</router-link></li>
              <li><router-link to="/explorer" @click="onSelect">Explorer</router-link></li>
              <li><router-link to="/game" @click="onSelect">Game</router-link></li>
              <li><router-link to="/token" @click="onSelect">Token Economy</router-link></li>
              <li><a href="https://uniartsnetwork.medium.com/" target="_blank">Blog</a></li>
              <li><router-link to="/faqs" @click="onSelect">FAQs</router-link></li>
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
    const isOpen = ref(false);
    const onSelect = () => {
      isOpen.value = !isOpen.value;
      isOpen.value ? elMenu.value.open() : elMenu.value.close();
    };

    const goHome = () => {
      elMenu.value.close();
    };
    return {
      elMenu,
      onSelect,
      goHome,
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
      line-height: 0px;
      height: 0px;
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
    display: block;
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
  height: calc(100vh - 53px);
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
