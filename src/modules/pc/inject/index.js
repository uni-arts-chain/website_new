import Icon from "@/plugins/icon";
import Element from "@/modules/pc/plugins/element";

export default {
  install: async (vue) => {
    vue.use(Icon);
    vue.use(Element);
  },
};
