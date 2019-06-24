import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Movie = resolve => {
  import('@/components/Movie').then((module) => {
    resolve(module)
  })
}
const Music = resolve => {
  import('@/components/Music').then((module) => {
    resolve(module)
  })
}
const Find = resolve => {
  import('@/components/Find').then((module) => {
    resolve(module)
  })
}


export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/find',
      name: "Find",
      component: Find
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
})
