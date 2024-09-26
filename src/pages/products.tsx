import { useEffect, useState,lazy,Suspense } from "react";
import { useLoaderData,Await,defer  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sort } from "@/store/features/sort/sortSlice";
import ProductCard from "../components/productCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { getQueryProducts } from "@/actions";
// import Paginator from "@/components/paginator";
const Paginator = lazy(()=>import('@/components/paginator'))
// const ProductCard = lazy(()=>import('../components/productCard'))
export async function loader({ request }: any) {
  console.log("loader",performance.now())
  const url = new URL(request.url)
  const page = Number(url.searchParams.get('page')) || 1
  const search = url.searchParams.get('search')
  const sortBy = url.searchParams.get('sortBy')
  const minPrice = Number(url.searchParams.get('minPrice'))
  const maxPrice = Number(url.searchParams.get('maxPrice'))
  const category = url.searchParams.get('category')
  const brand = url.searchParams.get('brand')
  const data =  getQueryProducts({page:page,search:search,sortBy:sortBy,minPrice:minPrice,maxPrice:maxPrice,category:category,brand:brand})
  // await preloadImages(data.products)
  console.log("loader promise returned in",performance.now())
  return defer({data})
}
export  function Component() {
  console.log("products", performance.now())
  const sortOption = useSelector((state:any)=>state.sort.sortBy)
  const dispatch = useDispatch()
  const [select, setSelect] = useState(sortOption);
  const data:any = useLoaderData()
  // sorting is currently not working, because data loading mechanism is changed from react query to router loader method, from fetch in render to render as you fetch.
  useEffect(() => {
    dispatch(sort(select))
  },[select])
  return (
      <div>
        <div className="flex flex-wrap gap-2 py-2  justify-between items-center">
        <div className="flex items-center gap-4">
    <div className="flex items-center gap-1">
    <div><img src="/viewMode2.webp" alt="grid" className="size-8" /></div>
        <div><img src="/viewMode1.webp" alt="item" className="size-8" /></div>
    </div>
    <Suspense>
      <Await resolve={data?.data}>
        {(data)=>(
          data.products.length > 0 && <div>We found <span className="font-semibold">{data?.count}</span> items for you</div>
        )}
      </Await>
    </Suspense>
</div>
<div>
<Select onValueChange={setSelect} value={select}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Sort By"/>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="default">Default</SelectItem>
    <SelectItem value="latest">Latest</SelectItem>
    <SelectItem value="rating_high">Rating: High</SelectItem>
    <SelectItem value="rating_low">Rating: Low</SelectItem>
    <SelectItem value="price_high">Price: High</SelectItem>
    <SelectItem value="price_low">Price: Low</SelectItem>
  </SelectContent>
</Select>
</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Suspense>
          <Await resolve={data?.data}>
            {(data)=>(
                data?.products.length > 0 ? data?.products?.map((product:any,index:number)=> <ProductCard key={index} data={product}/>):
                <div className="col-span-3 text-center"><div className="text-3xl font-semibold"><span className="text-lightred">Opps!</span> No Products Found.</div></div>
            )
            }
          </Await>
          </Suspense>
          </div>
        <div className="my-16">
        <Suspense>
          <Await resolve={data?.data}>
            {(data)=>(data.products.length > 0 && <Paginator count={data?.count}/>)}
          </Await>
        </Suspense>
        </div>
      </div>
  );
}

