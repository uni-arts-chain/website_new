/** * Created by Lay Hunt on 2021-10-28 16:01:47. */
<template>
  <footer>
    <div class="container">
      <div class="left">
        <img class="bottom-logo" src="@/modules/pc/assets/images/footer-logo.png" />
        <div class="desc">
          UniArts is a multi-network NFT ecosystem with substrate developed main-net as well as EVMs
          based smart contracts for NFT infrastructures, it also provides crowd voting incentives,
          DAO curation and art grant to help better achieve democratization of art.
        </div>
        <img class="grant" src="@/modules/pc/assets/images/grant.webp" />
      </div>
      <div class="right">
        <span class="join">Join the Communities</span>
        <div class="icon-group">
          <a href="https://twitter.com/UniartsNetwork" target="_blank" class="medium">
            <img src="@/modules/pc/assets/images/f1.png" />
            <span>Twitter</span>
          </a>
          <a href="https://github.com/uni-arts-chain" target="_blank" class="medium">
            <img src="@/modules/pc/assets/images/f2.png" />
            <span>Github</span>
          </a>
          <a href="https://t.me/uniarts" target="_blank" class="medium">
            <img src="@/modules/pc/assets/images/f3.png" />
            <span>Telegram</span>
          </a>
          <a href="https://uniartsnetwork.medium.com" target="_blank" class="medium">
            <img src="@/modules/pc/assets/images/f4.png" />
            <span>Medium</span>
          </a>
          <a href="https://discord.com/invite/ujZeGvX" target="_blank" class="medium">
            <img style="height: 14px; margin-left: 3px" src="@/modules/pc/assets/images/f5.png" />
            <span style="margin-left: 23px">Discord</span>
          </a>
        </div>
        <div class="information">Get latest Information</div>
        <span class="information-desc">
          Join our mailing list to receive latest updates, new release, air drops, and tips and
          tricks
        </span>
      </div>
      <div class="coryright">Copyright@2021 UniArts Network.</div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "footerbar",
  setup() {
    // TODO

    return {};
  },
});
</script>

<style lang="scss" scoped>
footer {
  flex: 0 0 auto;
  background: black;
}
.container {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
}

.left {
  img.bottom-logo {
    width: 183px;
  }
  .desc {
    color: #ffffff;
    font-size: 14px;
    line-height: 25px;
    margin-top: 20px;
  }
  img.grant {
    width: 260px;
    margin-bottom: 40px;
    margin-top: 30px;
  }
}
.right {
  margin-top: 20px;
  .join {
    color: #ffffff;
    font-size: 17px;
    text-transform: capitalize;
  }
  .icon-group {
    display: flex;
    flex-direction: column;
  }
  .medium {
    width: 100%;
    align-items: center;
    display: flex;
    margin-top: 33px;
    cursor: pointer;
    span {
      color: #ffffff;
      font-size: 15px;
      margin-left: 20px;
    }
  }
  .information {
    color: #ffffff;
    margin-top: 25px;
    font-size: 17px;
    text-transform: capitalize;
  }
  .information-desc {
    display: block;
    color: #ffffff;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 20px;
  }
}
.coryright {
  color: #ffffff;
  font-size: 17px;
  margin-top: 20px;
}
</style>
