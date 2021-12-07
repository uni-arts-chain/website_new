import Element from "@/modules/mobile/plugins/element";
import "@/modules/pc/plugins/scroll";

export default {
  install: async (vue) => {
    vue.use(Element);
  },
};
