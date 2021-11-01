import Icon from "@/modules/mobile/plugins/icon";
import Element from "@/modules/mobile/plugins/element";

export default {
  install: async (vue) => {
    vue.use(Icon);
    vue.use(Element);
  },
};
