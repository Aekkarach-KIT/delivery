const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "DeliveryHistory",
        component: () => import("pages/DeliveryHistory.vue"),
      },
      {
        path: "Custmap",
        component: () => import("pages/custmap.vue"),
      },
      {
        path: "InvoiceIgnored",
        component: () => import("pages/InvoiceIgnored.vue"),
      },
      {
        path: "ReportCommission",
        component: () => import("pages/ReportCommission.vue"),
      },
      {
        path: "SumDlvHistory",
        component: () => import("pages/SumDlvHistory.vue"),
      },

    ],
  },
  {
    path: "/Login",
    component: () => import("layouts/Login.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
