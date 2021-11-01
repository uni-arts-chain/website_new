import IconSvg from "@/modules/mobile/components/IconSvg";
import path from "path";

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context(resolve("../assets/icons"), false, /\.svg$/);
requireAll(req);

export default {
  install: (vue) => {
    vue.component("icon-svg", IconSvg);
  },
};
