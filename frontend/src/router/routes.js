export const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "/",
        name: "HomeRedirect",
        component: () => import("@/pages/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    // component: () => import("@/pages/[...error].vue"),
  },
];
