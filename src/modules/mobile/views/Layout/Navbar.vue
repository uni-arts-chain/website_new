/** * Created by Lay Hunt on 2021-10-28 16:01:47. */
<template>
  <el-affix class="navbar">
    <nav class="container">
      <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
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
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </nav>
  </el-affix>
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
  background: rgba(0, 0, 0, 0.85);
  padding-top: 15px;
  padding-bottom: 15px;
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
</style>
