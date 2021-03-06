import Vue from 'vue'
import Router from 'vue-router'

const Recommend = (resolve) => {
  import ('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import ('components/singer/singer').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import ('components/rank/rank').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import ('components/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import ('components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
