import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/messge'
  },
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import ("@/page/login/Login"),
        meta: {
        isLogin: false
      }
    },

    {
      path: '/regist',
      name: 'Regist',
      component: () =>
        import ("@/page/regist/Regist"),
        meta: {
        isLogin: false
      }
    },
    {
      path: '/messge',
      name: 'Messge',
      component: () =>
        import ('@/components/Messge'),
        meta: {
        isLogin: true
      }
    },

    {
      path: '/friend',
      name: 'Friend',
      component: () =>
        import ('@/components/Friend'),
        meta: {
        isLogin: true
      }
    },
    {
      path: '/find',
      name: "Find",
      component: () =>
        import ('@/components/Find'),
        meta: {
        isLogin: true
      },
      children: [{
        path: '/find/film',
        component: () =>
          import ('@/page/film/Film'),
          meta: {
          isLogin: true
        },
      },
        {
          path: '/find/music',
          component: () =>
            import ('@/page/music/Music'),
            meta: {
            isLogin: true
          },
          children: [{
            path: '/find/music/recommond',
            component: () =>
              import ('@/page/music/Recommond'),
              meta: {
              isLogin: true
            },
          },
            {
              path: '/find/music/rank',
              component: () =>
                import ('@/page/music/Rank'),
                meta: {
                isLogin: true
              },
            },
            {
              path: '/find/music/search',
              component: () =>
                import ('@/page/music/Search'),
                meta: {
                isLogin: true
              },
            },
          ]
        }
      ]
    }
  ]
})
