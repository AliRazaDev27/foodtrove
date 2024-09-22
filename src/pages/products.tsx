import { useEffect, useState,lazy,Suspense } from "react";
import { useLoaderData,  } from "react-router-dom";
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

import { getQueryProducts, QueryResult } from "@/actions";
// import Paginator from "@/components/paginator";
const Paginator = lazy(()=>import('@/components/paginator'))
// const ProductCard = lazy(()=>import('../components/productCard'))
const preloadImages = async (products: any[]) => {
  await Promise.all(products.map((product) => {
    const img = new Image();
    img.src = product.thumbnail;
  }));
};
export async function loader({ request }: any) {
  const url = new URL(request.url)
  const page = Number(url.searchParams.get('page')) || 1
  const search = url.searchParams.get('search')
  const sortBy = url.searchParams.get('sortBy')
  const minPrice = Number(url.searchParams.get('minPrice'))
  const maxPrice = Number(url.searchParams.get('maxPrice'))
  const category = url.searchParams.get('category')
  const brand = url.searchParams.get('brand')
  const data:QueryResult = await getQueryProducts({page:page,search:search,sortBy:sortBy,minPrice:minPrice,maxPrice:maxPrice,category:category,brand:brand})
  await preloadImages(data.products)
  console.log(performance.now())
  return data

}

export  function Component() {
  
  const sortOption = useSelector((state:any)=>state.sort.sortBy)
  const dispatch = useDispatch()
  const [select, setSelect] = useState(sortOption);
  const data = useLoaderData() as QueryResult
  // sorting is currently not working, because data loading mechanism is changed from react query to router loader method, from fetch in render to render as you fetch.
  useEffect(() => {
    dispatch(sort(select))
  },[select])
  
 
  
  if(data?.products?.length === 0){
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="text-3xl font-semibold"><span className="text-lightred">Opps!</span> No Products Found.</div>
      </div>
    )
  }
  
  return (
      <div>
        <div className="flex flex-wrap gap-2 py-2  justify-between items-center">
        <div className="flex items-center gap-4">
    <div className="flex items-center gap-1">
    <div><img src="/viewMode2.webp" alt="grid" className="size-8" /></div>
        <div><img src="/viewMode1.webp" alt="item" className="size-8" /></div>
    </div>
    <div>We found <span className="font-semibold">{data?.count}</span> items for you</div>

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
          {data?.products &&
            data.products.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
        </div>
        <div className="my-16">
        <Suspense>
        <Paginator count={data?.count}/>
        </Suspense>
        </div>
      </div>
  );
}

