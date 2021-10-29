const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const productionGzipExtensions = ["js", "css", "png", "webp"];

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html-index").tap((options) => {
      options[0].title = process.env.VUE_APP_NAME;
      return options;
    });
    config.plugin("html-mobile").tap((options) => {
      options[0].title = process.env.VUE_APP_NAME;
      return options;
    });
    config.module.rule("svg").exclude.add(resolve("src/modules/pc/assets/icons")).end();
    config.module
      .rule("svgSpriteLoader")
      .test(/\.svg$/)
      .include.add(resolve("src/modules/pc/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
    config.module.rule("svg").exclude.add(resolve("src/modules/mobile/assets/icons")).end();
    config.module
      .rule("svgSpriteLoader")
      .test(/\.svg$/)
      .include.add(resolve("src/modules/mobile/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
    config.module
      .rule("mjs")
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type("javascript/auto")
      .end();
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 生产环境 开启gzip
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
        })
      );
      // 添加source map
      config.devtool = "cheap-module-source-map";
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ["console.log"],
              },
              ie8: true,
              safari10: true,
            },
          }),
        ],
      };
    }
  },
  pages: {
    index: {
      entry: "src/modules/pc/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
    mobile: {
      entry: "src/modules/mobile/main.js",
      template: "public/mobile.html",
      filename: "mobile.html",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/var.scss";`,
      },
    },
  },
};
