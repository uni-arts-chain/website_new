const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/modules/pc/views/Home/Index.vue"),
  },
];
export default routes;
