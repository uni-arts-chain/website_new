import IconSvg from "@/modules/pc/components/IconSvg";

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const path = require("path");
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context(resolve("../assets/icons"), false, /\.svg$/);
requireAll(req);

export default {
  install: (vue) => {
    vue.component("icon-svg", IconSvg);
  },
};
