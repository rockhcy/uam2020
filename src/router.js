import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/auth/Login.vue'
import User from './views/user/index.vue'
import Home from './views/home/index.vue'
import Layout from './layouts/index.vue'
import License from './views/license/index.vue'
import Android from './views/android/index.vue'
import Main from './views/main/index.vue'
import Host from './views/host/index'
import APP from './views/app/index'
import HostProgram from  './views/hostProgram/index'
import Role from './views/role/index'
import Session from './views/session/index'
import UnusualUser from './views/unusualUser/index'
import AdminUser from './views/adminUser/index'
import Group from './views/group/index'
import Mailbox from './views/mailbox/index'
import GraphChart from './views/graphChart/index'
import Log from './views/log/index'
import UpdateClient from './views/updateClient/index'
import SetupSystem from './views/setupSystem/index'
import ThirdParty from './views/thirdParty/index'
import File from './views/file/index'
import Conversation from './views/conversation/index'
import Management from './views/management/index'
import RemoteUser from './views/remoteUser/index'
import Journal from './views/journal/index'
import SystemLog from './views/systemLog/index'
import UpdateClientForm from './views/updateClient/form'
import Profile from './views/profile/index'
import AppGroup from  './views/appGroup/index'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '/home/index',
          name: '/home/index',
          component: Home,
        },
        {
          path: '/main/index',
          name: '/main/index',
          component: Main,
        },{
          path: '/user/index',
          name: '/user/index',
          component: User,
        },{
          path: '/host/index',
          name: '/host/index',
          component: Host,
        },
        {
          path: '/licence/index',
          name: '/licence/index',
          component: License,
        },
        {
          path: '/android/index',
          name: '/android/index',
          component: Android,
        },{
          path: '/app/index',
          name: '/app/index',
          component: APP,
        },{
          path: '/hostProgram/index',
          name: '/hostProgram/index',
          component: HostProgram,
        },{
          path: '/role/index',
          name: '/role/index',
          component: Role,
        },{
          path: '/session/index',
          name: '/session/index',
          component: Session,
        },{
          path: '/unusualUser/index',
          name: '/unusualUser/index',
          component: UnusualUser,
        },
        {
          path: '/adminUser/index',
          name: '/adminUser/index',
          component: AdminUser,
        },
        {
          path: '/group/index',
          name: '/group/index',
          component: Group,
        },{
          path: '/mailbox/index',
          name: '/mailbox/index',
          component: Mailbox,
        },{
          path: '/graphChart/index',
          name: '/graphChart/index',
          component: GraphChart,
        },{
          path: '/log/index',
          name: '/log/index',
          component: Log,
        },{
          path: '/updateClient/index',
          name: '/updateClient/index',
          component: UpdateClient,
        },{
          path: '/setupSystem/index',
          name: '/setupSystem/index',
          component: SetupSystem,
        },{
          path: '/thirdParty/index',
          name: '/thirdParty/index',
          component: ThirdParty,
        },{
          path: '/file/index',
          name: '/file/index',
          component: File,
        },{
          path: '/conversation/index',
          name: '/conversation/index',
          component: Conversation,
        },{
          path: '/management/index',
          name: '/management/index',
          component: Management,
        },{
          path: '/remoteUser/index',
          name: '/remoteUser/index',
          component: RemoteUser,
        },{
          path: '/journal/index',
          name: '/journal/index',
          component: Journal,
        },{
          path: '/systemLog/index',
          name: '/systemLog/index',
          component: SystemLog,
        },{
          path: '/updateClient/add',
          name: '/updateClient/add',
          component: UpdateClientForm,
          path: '/profile/index',
          name: '/profile/index',
          component: Profile,
        },{
          path: '/appGroup/index',
          name: '/appGroup/index',
          component: AppGroup,
        },

  ]}
  ]
})
