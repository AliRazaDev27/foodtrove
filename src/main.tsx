import './index.css'
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./store"

const Root = lazy(()=>import('./pages/root.tsx'))
const Home = lazy(()=>import('./pages/home.tsx'))
const Register = lazy(()=>import('./pages/register.tsx'))
const Login = lazy(()=>import('./pages/login.tsx'))
const Seed = lazy(()=>import('./pages/seed.tsx'))
const Products = lazy(()=>import('./pages/products.tsx'))
const ProductDetails = lazy(()=>import('./pages/product_details.tsx'))
const ShopLayout = lazy(()=>import('./pages/shop_layout.tsx'))
const Cart = lazy(()=>import('./pages/cart.tsx'))
const Checkout = lazy(()=>import('./pages/checkout.tsx'))
const About = lazy(()=>import('./pages/about.tsx'))
const Blog = lazy(()=>import('./pages/blog.tsx'))
const Wishlist = lazy(()=>import('./pages/wishlist.tsx'))
const Test = lazy(()=>import('./pages/test.tsx'))

const queryClient = new QueryClient()

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
        path:"/test",
        element:<Test/>
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
            element:<ProductDetails/>,
            loader:async({params})=>{
              const id = params.id
              console.log(id)
              const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products/details/${id}`)
              return response.json()
            },
            
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
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
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
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Suspense fallback={null}>
    <RouterProvider router={router}/>
    </Suspense>
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
