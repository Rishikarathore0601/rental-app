import Home from './home'
import * as Layouts from 'layouts'
import Products from './products'
import AboutUs from './aboutUs'
import ContactUs from './Contact'
import Login from './login'

const routes = [
  {
    path: '/home',
    Component: Home,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/products',
    Component: Products,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/aboutUs',
    Component: AboutUs,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/contact',
    Component: ContactUs,
    Super: Layouts.Home,
    auth: false
  },
  {
    path: '/login',
    Component: Login,
    Super: Layouts.Home,
    auth: false
  }
]

export default routes
