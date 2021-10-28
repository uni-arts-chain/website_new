const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/modules/mobile/views/Home/Index.vue"),
  },
];
export default routes;
