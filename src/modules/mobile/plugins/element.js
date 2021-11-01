import { ElLoading, ElAffix, ElMenu } from "element-plus";
import "element-plus/dist/index.css";

export default {
  install: (vue) => {
    vue.use(ElLoading);
    vue.use(ElAffix);
    vue.use(ElMenu);
  },
};
