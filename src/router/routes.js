
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/roommate',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Roommate/Roommate.vue') }
    ]
  },
  {
    path: '/newsfeed',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewsFeed/NewsFeed.vue') },
      { path: 'sport', component: () => import('pages/NewsFeed/Sport.vue') }
    ]
  },
  {
    path: '/handyman',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Handyman/Handyman.vue') },
    ]
  },  {
    path: '/entewawek',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Entewawek/Enetewawek.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
