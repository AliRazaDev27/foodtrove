import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./store"


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path:"/",
    lazy:()=>import('./pages/root.tsx'),
    children:[
      {
        path:"/",
        lazy:()=>import('./pages/home.tsx'),
      },
      {
        path:"/test",
        lazy:()=>import('./pages/test.tsx'),
      },
      {
        path:"/shop",
        lazy:()=>import('./pages/shop_layout.tsx'),
        children:[
          {
            index:true,
            lazy:()=>import('./pages/products.tsx'),
            async loader({ request }: any) {
              let loader = await import('./actions/product_loader.ts')
              return loader.default({request})
            }
          },
          {
            path:"productDetails/:id",
            lazy:()=>import('./pages/product_details.tsx'),  
          }
        ]
      },
      {
        path:"/cart",
        lazy:()=>import('./pages/cart.tsx'),
      },
      {
        path:"/checkout",
        lazy:()=>import('./pages/checkout.tsx'),
      },
      {
        path:"/about",
        lazy:()=>import('./pages/about.tsx'),
      },
      {
        path:"/blog",
        lazy:()=>import('./pages/blog.tsx'),
      },
      {
        path:"/wishlist",
        lazy:()=>import('./pages/wishlist.tsx'),
      }
    ]
  },
  {
    path:"/login",
    lazy:()=>import('./pages/login.tsx'),
  },
  {
    path:"/register",
    lazy:()=>import('./pages/register.tsx'),
  },
]) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
