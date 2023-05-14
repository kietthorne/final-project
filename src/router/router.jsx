import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import PageHome from '../pages/Home/PageHome';
import PageProducts from '../pages/PageProducts/PageProducts';
import PageProductDetails from '../pages/PageProductDetails/PageProductDetails';
import MainMenu from '../layout/MainMenu/MainMenu';


export const routes = [
  { title: 'Home', path: '/', component: PageHome, isShowMenu: true },
  { title: 'Products', path: '/products', component: PageProducts, isShowMenu: true },
  { title: 'Details Product', path: '/product/:id', component: PageProductDetails, isShowMenu: false },
  
]

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainMenu />}>
    {routes.map(i =>
      <Route key={i.path} path={i.path} element={<i.component />} />)
    }
  </Route>
), { basename: "/final-project" });


export { router }