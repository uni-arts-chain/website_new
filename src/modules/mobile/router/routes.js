const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/modules/mobile/views/Home/Index.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "@/modules/mobile/views/Gallery/Index.vue"),
  },
  {
    path: "/explorer",
    name: "Explorer",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/modules/mobile/views/Explorer/Index.vue"),
  },
  {
    path: "/business",
    name: "Business",
    component: () =>
      import(/* webpackChunkName: "business" */ "@/modules/mobile/views/Business/Index.vue"),
  },
];
export default routes;
