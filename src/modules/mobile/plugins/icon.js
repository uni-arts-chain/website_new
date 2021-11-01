import IconSvg from "@/modules/mobile/components/IconSvg";

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/modules/mobile/assets/icons", false, /\.svg$/);
requireAll(req);

export default {
  install: (vue) => {
    vue.component("icon-svg", IconSvg);
  },
};
