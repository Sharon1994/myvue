import Vue from 'vue'
import Router from 'vue-router'

import Book from "../page/book/book.vue"
import Home from '../page/home/home.vue'
import Group from '../page/group/group.vue'
import Mine from '../page/mine/mine.vue'
import Video from '../page/video/video.vue'

import Movie from "../page/booksecond/movie.vue"
import Music from "../page/booksecond/music.vue"
import Read from "../page/booksecond/read.vue"
import Tc from "../page/booksecond/tc.vue"
import Tv from "../page/booksecond/tv.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'Book',
      component: Book,
      children:[
        {path:'movie',component:Movie},
        {path:'music',component:Music},
        {path:'read',component:Read},
        {path:'tc',component:Tc},
        {path:'tv',component:Tv},
        {path:'',component:Movie},
      ]
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
