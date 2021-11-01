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
      import(/* webpackChunkName: "explorer" */ "@/modules/mobile/views/Explorer/Index.vue"),
  },
  {
    path: "/business",
    name: "Business",
    component: () =>
      import(/* webpackChunkName: "business" */ "@/modules/mobile/views/Business/Index.vue"),
  },
  {
    path: "/token",
    name: "Token",
    component: () =>
      import(/* webpackChunkName: "token" */ "@/modules/mobile/views/Token/Index.vue"),
  },
  {
    path: "/faqs",
    name: "FAQs",
    component: () => import(/* webpackChunkName: "faqs" */ "@/modules/mobile/views/FAQs/Index.vue"),
  },
];
export default routes;
