
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]

  },
  {
    path: '/signIn',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SignIn.vue') },
      { path: 'verify', component: () => import('components/verifyAccountComponent.vue') },

    ]
  },
  {
    path: '/profile',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Profile.vue') }
    ],
    meta:{
      requiresAuth:false,
    }
  },
  {
    path: '/roommate',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Roommate/Roommate.vue') },
      { path: 'listARoom', component: () => import('pages/Roommate/ListARoom.vue') },
      { path: ':id', component: () => import('pages/Roommate/RoomDetails.vue') }
    ],
    meta:{
      requiresAuth:false,
    }
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
      { path: 'register', component: () => import('pages/Handyman/Register.vue') }
    ],
    meta:{
      requiresAuth:false,
    }
  },
  {
    path: '/enetewawek',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Entewawek/Enetewawek.vue') },
    ],
    meta:{
      requiresAuth:true,
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
