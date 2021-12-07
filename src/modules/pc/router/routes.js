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
  {
    path: "/game",
    name: "Game",
    component: () =>
      import(/* webpackChunkName: "business" */ "@/modules/pc/views/Business/Index.vue"),
  },
  {
    path: "/token",
    name: "Token",
    component: () => import(/* webpackChunkName: "token" */ "@/modules/pc/views/Token/Index.vue"),
  },
  {
    path: "/faqs",
    name: "FAQs",
    component: () => import(/* webpackChunkName: "faqs" */ "@/modules/pc/views/FAQs/Index.vue"),
  },
];
export default routes;
