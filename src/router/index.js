import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/login'
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
                import ('@/components/Friend')
        },
        {
            path: '/find',
            name: "Find",
            component: () =>
                import ('@/components/Find'),
            children: [{
                    path: '/find/film',
                    component: () =>
                        import ('@/page/film/Film')
                },
                {
                    path: '/find/music',
                    component: () =>
                        import ('@/page/music/Music'),
                    children: [{
                            path: '/find/music/recommond',
                            component: () =>
                                import ('@/page/music/Recommond'),
                        },
                        {
                            path: '/find/music/rank',
                            component: () =>
                                import ('@/page/music/Rank')
                        },
                        {
                            path: '/find/music/search',
                            component: () =>
                                import ('@/page/music/Search')
                        },
                    ]
                }
            ]
        }
    ]
})