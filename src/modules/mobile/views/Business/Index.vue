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
            <img height="180" src="@/modules/pc/assets/images/mobile-app1.png" />
          </div>

          <p>Payments</p>
          <span>Flat Money Payments Support</span>
        </div>
        <div class="item">
          <div class="pic">
            <img height="180" src="@/modules/pc/assets/images/mobile-app2.png" />
          </div>

          <p>NFT Store</p>
          <span>Crypto-Wallet Based NFT Store</span>
        </div>
        <div class="item">
          <div class="pic">
            <img height="180" src="@/modules/pc/assets/images/mobile-app3.png" />
          </div>

          <p>Mystery Box</p>
          <span>On-chain Mystery Box</span>
        </div>
      </div>
    </div>
    <div class="use-case">
      <!-- <div class="container">
        <div class="title">
          Use Case:<br />
          Onigiri Mikoshi
        </div>
        <p>
          Onigiri Mikoshi is a mobile NFT market place for IOS & Android built on
          UniArts mainnet support NFT trading with legal tender.
        </p>
      </div> -->
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
  width: 100%;
  background-color: black;
  .one-stop {
    height: 262px;
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
      margin-top: 50px;
      font-family: "04B_1";
      color: white;
      font-size: 20px;
    }
  }
}
.protocols {
  .title {
    background: black;
    padding-top: 11px;
    text-align: center;
    span {
      text-align: center;
      color: white;
      font-size: 15px;
      font-family: "04B_1";
    }
    img {
      margin-top: 10px;
      width: 100%;
      margin-bottom: -3px;
    }
  }
}
.protocols-body {
  display: flex;
  flex-direction: column;
  .left {
    width: 100%;
    background: #e64467;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .name {
      width: 100%;
      text-align: center;
      color: black;
      font-size: 39px;
      font-family: "04B_1";
    }
    .desc {
      margin: 0 auto;
      width: 337px;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      margin-top: 15px;
    }
  }
  .right {
    width: 100%;
    background: #57efec;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .name {
      width: 100%;
      text-align: center;
      color: black;
      font-size: 39px;
      font-family: "04B_1";
    }
    .desc {
      margin: 0 auto;
      width: 337px;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      margin-top: 15px;
    }
  }
}

.mobile-app {
  padding-top: 40px;
  padding-bottom: 40px;
  background: black;
  .title {
    text-align: center;
    color: white;
    font-size: 20px;
    font-family: "04B_1";
  }
  .app-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
      .pic {
        height: 180px;
        text-align: center;
        img {
          max-height: 100%;
        }
      }
      p {
        color: #a3a3a3;
        font-size: 15px;
        margin-top: 20px;
        font-family: "04B_1";
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
  height: 437px;
  background-image: url(~@/modules/mobile/assets/images/explorer-bottom.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  .title {
    width: 260px;
    padding-top: 50px;
    color: black;
    font-size: 24px;
    margin-bottom: 30px;
    font-family: "04B_1";
  }
  p {
    width: 270px;
    font-size: 13px;
    line-height: 18px;
    color: black;
  }
}
</style>
