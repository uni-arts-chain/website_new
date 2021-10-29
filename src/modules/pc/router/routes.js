const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/modules/pc/views/Home/Index.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "@/modules/pc/views/Gallery/Index.vue"),
  },
  {
    path: "/explorer",
    name: "Explorer",
    component: () =>
      import(/* webpackChunkName: "explorer" */ "@/modules/pc/views/Explorer/Index.vue"),
  },
];
export default routes;
