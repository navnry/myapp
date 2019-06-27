import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Messge = resolve => {
  import('@/components/Messge').then((module) => {
    resolve(module)
  })
}
const Friend = resolve => {
  import('@/components/Friend').then((module) => {
    resolve(module)
  })
}
const Find = resolve => {
  import('@/components/Find').then((module) => {
    resolve(module)
  })
}
const Film = resolve => {
  import('@/page/film/Film').then((module) => {
    resolve(module)
  })
}

const Music = resolve => {
  import('@/page/music/Music').then((module) => {
    resolve(module)
  })
}
const MusicRecommond = resolve => {
  import('@/page/music/Recommond').then((module) => {
    resolve(module)
  })
}

const MusicRank = resolve => {
  import('@/page/music/Rank').then((module) => {
    resolve(module)
  })
}
const MusicSearch = resolve => {
  import('@/page/music/Search').then((module) => {
    resolve(module)
  })
}
const Login = resolve => {
  import('@/page/login/Login').then((module) => {
    resolve(module)
  })
}


export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/messge',
      name: 'Messge',
      component: Messge
    },

    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/find',
      name: "Find",
      component: Find,
      children: [
        {
          path: '/find/film',
          component: Film
        },
        {
          path: '/find/music',
          component: Music,
          children: [
            {
              path: '/find/music/recommond',
              component: MusicRecommond,
            },
            {
              path: '/find/music/rank',
              component: MusicRank
            },
            {
              path: '/find/music/search',
              component: MusicSearch
            },
          ]
        }
      ]
    }
  ]
})
