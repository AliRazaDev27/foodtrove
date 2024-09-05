import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/root.tsx'
import Home from './pages/home.tsx'
import Register from './pages/register.tsx'
import {Provider} from "react-redux"
import store from "./store"
import Login from './pages/login.tsx'
import Seed from './pages/seed.tsx'
import Products from './pages/products.tsx'
import ProductDetails from './components/product_details.tsx'
import ShopLayout from './pages/shop_layout.tsx'
import Cart from './components/cart.tsx'
import Checkout from './pages/checkout.tsx'
import About from './pages/about.tsx'
import Blog from './pages/blog.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<ShopLayout/>,
        children:[
          {
            index:true,
            element:<Products/>
          },
          {
            path:"productDetails/:id",
            element:<ProductDetails/>
          }
        ]
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/blog",
        element:<Blog/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/seed",
    element:<Seed/>
  }
]) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
