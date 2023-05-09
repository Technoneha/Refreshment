
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/NewChart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewChart.vue') }
    ]
  },
  {
    path: '/Table',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Table.vue') }
    ]
  },
  {
    path: '/flipkart',
    component: () => import('layouts/FlipkartLayout.vue'),
    children: [
      { path: '', component: () => import('pages/flipkart.vue') }
    ]
  },

  {
    path: '/ajio',
    component: () => import('layouts/AjioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ajio.vue') }
    ]
  },




  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
