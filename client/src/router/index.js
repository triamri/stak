import Vue from 'vue'
import Router from 'vue-router'
import HomePublic from '@/components/public/HomePublic'
import QuestionDetail from '@/components/public/QuestionDetail'
import LoginUser from '@/components/login/LoginUser'
import RegisterUser from '@/components/login/RegisterUser'
import About from '@/components/userguide/About'
import CreateQuestion from '@/components/userguide/CreateQuestion'
import EditQuestion from '@/components/userguide/EditQuestion'
import AnswersList from '@/components/answerguide/AnswersList'
import DetailAnswer from '@/components/answerguide/DetailAnswer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home Public',
      component: HomePublic
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginUser
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterUser
    },
    {
      path: '/question/:id',
      name: 'Question',
      component: QuestionDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/create/question',
      name: 'Create',
      component: CreateQuestion
    },
    {
      path: '/edit/question/:id',
      name: 'Edit Question',
      component: EditQuestion
    },
    {
      path: '/answers',
      name: 'Answers',
      component: AnswersList
    },
    {
      path: '/detail/answer/:id',
      name: 'Detail Answer',
      component: DetailAnswer
    }
  ]
})
