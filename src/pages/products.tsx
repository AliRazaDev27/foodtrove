import {
  useQuery,keepPreviousData
} from '@tanstack/react-query'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"
import { getQueryProducts } from "@/actions";
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const search = searchParams.get('search')
  const sortBy = searchParams.get('sortBy')
  const minPrice = Number(searchParams.get('minPrice'))
  const maxPrice = Number(searchParams.get('maxPrice'))
  const category = searchParams.get('category')
  const brand = searchParams.get('brand')
  const sortOption = useSelector((state:any)=>state.sort.sortBy)
  const dispatch = useDispatch()
  const [select, setSelect] = useState(sortOption);
  const {data,isLoading} = useQuery({
  queryKey:['products',page,search,sortBy,minPrice,maxPrice,category,brand,select],
  queryFn:()=>getQueryProducts({page:page,search:search,sortBy:select,minPrice:minPrice,maxPrice:maxPrice,category:category,brand:brand}),
  placeholderData:keepPreviousData,
})
//this can be improved
  useEffect(() => {
    dispatch(sort(select))
  },[select])
  const getNextPage = () => {
    gotoTop()
    const nextSearchParams: any = {
      page: ((Number(page) + 1).toString()),}
    if(search){
      nextSearchParams.search = search
    }
    if(sortBy){
      nextSearchParams.sortBy = sortBy
    }
    if(minPrice){
      nextSearchParams.minPrice = minPrice
    }
    if(maxPrice){
      nextSearchParams.maxPrice = maxPrice
    }
    if(category){
      nextSearchParams.category = category
    }
    if(brand){
      nextSearchParams.brand = brand
    } 
    setSearchParams(nextSearchParams);
  };
  const getPreviousPage = () => {
    gotoTop()
    const nextSearchParams: any = {
      page: ((Number(page) - 1).toString()),}
    if(search){
      nextSearchParams.search = search
    }
    if(sortBy){
      nextSearchParams.sortBy = sortBy
    }
    if(minPrice){
      nextSearchParams.minPrice = minPrice
    }
    if(maxPrice){
      nextSearchParams.maxPrice = maxPrice
    }
    if(category){
      nextSearchParams.category = category
    }
    if(brand){
      nextSearchParams.brand = brand
    }  
    setSearchParams(nextSearchParams);
  };
  //check for legal limits here
  const getPageAt = (index: number) =>{
    gotoTop()
    const nextSearchParams: any = {
      page: (index.toString()),}
    if(search){
      nextSearchParams.search = search
    }
    if(sortBy){
      nextSearchParams.sortBy = sortBy
    }
    if(minPrice){
      nextSearchParams.minPrice = minPrice
    }
    if(maxPrice){
      nextSearchParams.maxPrice = maxPrice
    }
    if(category){
      nextSearchParams.category = category
    }
    if(brand){
      nextSearchParams.brand = brand
    }  
    setSearchParams(nextSearchParams);
  }
  const gotoTop = () => {
    window.scrollTo({ top: 0, behavior:"auto" });
  }
  // apply proper state renders for error,loading and data
  if(isLoading){
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
      </div>
    )
  }
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
    <div><img src="/viewMode2.png" alt="grid" className="bg-cover" /></div>
        <div><img src="/viewMode1.png" alt="item" className="bg-cover" /></div>
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
        <Pagination>
      <PaginationContent>
        <PaginationItem>
        <button onClick={() => getPreviousPage()} className="hover:text-lightred font-medium px-2 mx-2" disabled={Number(page)===1}>Previous</button>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-lightred hover:bg-red-600 hover:text-white text-white">{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
        <button onClick={() => getPageAt((Number(page)+1))} className="hover:text-lightred font-medium px-3  border border-gray-400 rounded-md aspect-square">{(Number(page)+1)}</button>
        </PaginationItem>
        <PaginationItem>
        <button onClick={() => getPageAt((Number(page)+2))} className="hover:text-lightred font-medium px-3  border border-gray-400 rounded-md aspect-square">{(Number(page)+2)}</button>
        </PaginationItem>
       
        <PaginationItem>
          <button onClick={() => getNextPage()} className="hover:text-lightred font-medium px-2 mx-2" disabled={(Number(page)>=((data && (data?.count)/9 || 0)))}>Next</button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
        </div>
      </div>
  );
}
