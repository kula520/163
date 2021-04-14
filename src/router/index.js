import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import("../view/home/index.vue");
const Login = () => import("../view/login/login.vue");

//帮助中心
const Help = () => import("../view/help/help.vue");
//新闻
const News = () => import("../view/news/news.vue");
//分页
const Pages = () => import("../view/pages/pages.vue");
//京东右侧
const Jdright = () => import("../view/jdright/jdright.vue");
//相册
const PhotoPic = () => import("../view/photopic/photo.vue");
//弹幕
const Bulletchat = () => import("../view/bulletchat/bulletchat.vue");
//图片放大镜
const MagnMifier = () => import("../view/picmagnifier/magnifier.vue");
//无缝滚动
const Seamlessrolling = () => import("../view/seamlessrolling/seamlessrolling.vue");
//手风琴
const Accordion = () => import("../view/accordion/accordion.vue");
//全选
const Allcheck = () => import("../view/allcheck/allcheck.vue");
//滑动特效
const Hoverpic = () => import("../view/hoverpic/hoverpic.vue");
//表单验证
const Verification = () => import("../view/verification/verification.vue");
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/pages',
      name: 'pages',
      component: Pages
    },
    {
      path: '/jdright',
      name: 'jdright',
      component: Jdright
    },
    {
      path: '/photopic',
      name: 'photopic',
      component: PhotoPic
    },
    {
      path: '/bulletchat',
      name: 'bulletchat',
      component: Bulletchat
    },
    {
      path: '/magnMifier',
      name: 'magnMifier',
      component: MagnMifier
    },
    {
      path: '/seamlessrolling',
      name: 'seamlessrolling',
      component: Seamlessrolling
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: Accordion
    },
    {
      path: '/allcheck',
      name: 'allcheck',
      component: Allcheck
    },
    {
      path: '/hoverpic',
      name: 'hoverpic',
      component: Hoverpic
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification
    }
  ]
})
