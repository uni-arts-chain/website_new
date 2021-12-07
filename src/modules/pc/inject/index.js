import Element from "@/modules/pc/plugins/element";
import "@/modules/pc/plugins/scroll";

export default {
  install: async (vue) => {
    vue.use(Element);
  },
};
