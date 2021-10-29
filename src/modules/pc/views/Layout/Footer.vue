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
        <div class="coryright">Copyright@2021 UniArts Network.</div>
      </div>
      <div class="right">
        <span class="join">Join the Communities</span>
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
        <div class="information">Get latest Information</div>
        <span class="information-desc">
          Join our mailing list to receive latest updates, new release, air drops, and tips and
          tricks
        </span>
      </div>
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
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
}
.left,
.right {
  width: 45%;
  display: flex;
  flex-direction: column;
}

.left {
  img.bottom-logo {
    width: 365px;
    height: 44px;
  }
  .desc {
    color: #ffffff;
    font-size: 17px;
    line-height: 32px;
    margin-top: 30px;
  }
  img.grant {
    width: 260px;
    margin-bottom: 40px;
    margin-top: 30px;
  }
  .coryright {
    color: #ffffff;
    font-size: 17px;
  }
}
.right {
  .join {
    color: #ffffff;
    font-size: 28px;
    text-transform: capitalize;
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
    margin-top: 30px;
    font-size: 28px;
    text-transform: capitalize;
  }
  .information-desc {
    color: #ffffff;
    font-size: 15px;
    margin: 10px 0;
  }
}
</style>
