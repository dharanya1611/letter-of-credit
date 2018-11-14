import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Login from 'src/components/Login.vue'
import SignUp from 'src/components/SignUp.vue'
import profile from 'src/components/profile.vue'
import form from 'src/components/form.vue'
import fill from 'src/components/fill.vue'
import goods from 'src/components/goods.vue'
import lading from 'src/components/lading.vue'
import approval from 'src/components/approval.vue'
import details from 'src/components/details.vue'
import product from 'src/components/product.vue'
import application from 'src/components/application.vue'
import bill from 'src/components/bill.vue'

import ship from 'src/components/ship.vue'
import issuse from 'src/components/issuse.vue'

const routes = [
  {
    path: '/',
    component: SignUp,
    redirect: '/signUp'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
 
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'profile',
        name: 'profile',
        component: profile
      },
      {
        path: 'product',
        name: 'product',
        component: product
      },
      {
        path: 'form',
        name: 'form',
        component: form
      },
      {
        path: 'details',
        name: 'details',
        component: details
      },
      {
        path: 'ship',
        name: 'ship',
        component: ship
      },
      {
        path: 'bill',
        name: 'bill',
        component: bill
      },
      {
        path: 'issuse',
        name: 'issuse',
        component: issuse
      },
      {
        path: 'application',
        name: 'application',
        component: application
      },
      {
        path: 'approval',
        name: 'approval',
        component: approval
      },
      {
        path: 'fill',
        name: 'fill',
     
        component: fill
      },
      {
        path: 'lading',
        name: 'lading',
     
        component: lading
      },
      {
        path: 'goods',
        name: 'goods',
     
        component: goods
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
