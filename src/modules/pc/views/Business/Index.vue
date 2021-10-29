/** * Created by Lay Hunt on 2021-10-29 20:35:02. */
<template>
  <div class="index">
    <div class="one-stop">
      <video
        loop
        mute
        autoplay
        src="https://assets-jl.oss-cn-beijing.aliyuncs.com/videos/60e3d2b440b23.m4v"
      ></video>
      <div class="info container">
        <div class="title">One-stop<br />NFT Solution</div>
      </div>
    </div>
    <div class="protocols">
      <div class="title">
        <span>NFT Protocols</span>
        <img src="@/modules/pc/assets/images/bg.png" />
      </div>
      <div class="protocols-body">
        <div class="left">
          <div class="name">UIP-722</div>
          <div class="desc">
            To allow NFT creators to define royalties payable for each NFT transfer. To allow NFT
            DAPP store smart contracts to define royalties payable as a percentage of deal prices.
          </div>
        </div>
        <div class="right">
          <div class="name">UIP-1156</div>
          <div class="desc">
            To allow batch NFTs creation for the same metadata, and each NFT created maintains
            independent interoperability.
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-app">
      <div class="title">Mobile APP</div>
      <div class="app-body">
        <div class="item">
          <div class="pic">
            <img width="180" height="285" src="@/modules/pc/assets/images/mobile-app1.png" />
          </div>

          <p>Payments</p>
          <span>Flat Money Payments Support</span>
        </div>
        <div class="item">
          <div class="pic">
            <img width="266" height="199" src="@/modules/pc/assets/images/mobile-app2.png" />
          </div>

          <p>NFT Store</p>
          <span>Crypto-Wallet Based NFT Store</span>
        </div>
        <div class="item">
          <div class="pic">
            <img width="245" height="215" src="@/modules/pc/assets/images/mobile-app3.png" />
          </div>

          <p>Mystery Box</p>
          <span>On-chain Mystery Box</span>
        </div>
      </div>
    </div>
    <div class="use-case">
      <div class="container">
        <div class="title">
          Use Case:<br />
          Onigiri Mikoshi
        </div>
        <p>
          Onigiri Mikoshi is a mobile NFT market place for IOS & Android built on<br />
          UniArts mainnet support NFT trading with legal tender.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "index",
  setup() {
    // TODO

    return {};
  },
});
</script>

<style lang="scss" scoped>
.index {
  background-color: black;
  .one-stop {
    height: 658px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  video {
    width: 100%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .info {
    position: relative;
    z-index: 1;
    .title {
      margin-top: 100px;
      font-family: "04B_1";
      color: white;
      font-size: 44px;
    }
  }
}
.protocols {
  .title {
    background: black;
    padding-top: 40px;
    text-align: center;
    span {
      text-align: center;
      color: white;
      font-size: 41px;
      font-family: "04B_1";
    }
    img {
      margin-top: 40px;
      width: 100%;
      margin-bottom: -3px;
    }
  }
}
.protocols-body {
  display: flex;
  .left {
    width: 50%;
    background: #e64467;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .name {
      width: 365px;
      text-align: center;
      color: black;
      font-size: 40px;
      font-family: "04B_1";
      margin-right: 40px;
    }
    .desc {
      width: 365px;
      text-align: center;
      font-size: 24px;
      line-height: 36px;
      margin-top: 40px;
      margin-right: 40px;
    }
  }
  .right {
    width: 50%;
    background: #57efec;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .name {
      width: 365px;
      text-align: center;
      color: black;
      font-size: 40px;
      font-family: "04B_1";
      margin-left: 40px;
    }
    .desc {
      width: 365px;
      text-align: center;
      font-size: 24px;
      line-height: 36px;
      margin-top: 40px;
      margin-left: 40px;
    }
  }
}

.mobile-app {
  padding-top: 80px;
  padding-bottom: 80px;
  background: black;
  .title {
    text-align: center;
    color: white;
    font-size: 40px;
    font-family: "04B_1";
  }
  .app-body {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    .item {
      width: 265px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 30px;
      .pic {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      p {
        color: #a3a3a3;
        font-size: 24px;
        margin-top: 40px;
      }
      span {
        color: #a3a3a3;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
}

.use-case {
  height: 971px;
  background-image: url(~@/modules/pc/assets/images/use-case.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  .title {
    padding-top: 150px;
    color: black;
    font-size: 51px;
    margin-bottom: 30px;
    font-family: "04B_1";
  }
  p {
    font-size: 24px;
    color: black;
    line-height: 30px;
  }
}

@media screen and (max-width: 1170px) {
  .index video {
    width: auto;
    height: 100%;
  }
}

@media screen and (min-width: 1910px) {
  .use-case {
    background-size: 100% auto;
  }
}
</style>
