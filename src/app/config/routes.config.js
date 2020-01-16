export default [
  {
    label: 'Home',
    path: '/',
    component: 'Home',
    exact: true
  },
  {
    label: 'Bocbang',
    path: '/feature',
    component: 'Feature'
  },
  {
    label: 'Streaming',
    path: '/streaming',
    component: 'Streaming'
  },
  {
    label: 'Session',
    path: '/session/:id',
    component: 'Session',
    exact: true
  },
  {
    label: 'MeetingPart',
    path: '/part/:id',
    component: 'Part',
    exact: true
  }
  // {
  //   label: 'RedirectSession',
  //   to: '/',
  //   path: '/session',
  //   exact: false,
  //   redirect: true
  // }
  // {
  //   label: 'Login',
  //   path: '/login',
  //   component: 'Login'
  // },
  // {
  //   label: 'My Account',
  //   path: '/my-account',
  //   component: 'MyAccount',
  //   isPrivate: true
  // }
]
