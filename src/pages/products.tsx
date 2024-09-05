import axios from "axios";
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
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') || 1
  const search = searchParams.get('search')
  const sortBy = searchParams.get('sortBy')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const category = searchParams.get('category')
  const brand = searchParams.get('brand')
  console.log(category)
  const sortOption = useSelector((state:any)=>state.sort.sortBy)
  const dispatch = useDispatch()
  console.log(sort)
  
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(sortOption);
  useEffect(() => {
    const products = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/products",
        {
          params: {
            page: page,
            search: search,
            sortBy: select,
            minPrice: minPrice,
            maxPrice: maxPrice,
            category: category,
            brand: brand,
          },
        }
      );
      console.log(response.data)
      setData(response.data.products);
      setCount(response.data.count);
    };
    products();
  }, [page, search, sortBy, minPrice, maxPrice, category, brand,select]);
  useEffect(() => {
    dispatch(sort(select))
  },[select])
  const getNextPage = () => {
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
  const getPageAt = (index: number) =>{
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
  if(data.length === 0){
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
    <div>We found <span className="font-semibold">{count}</span> items for you</div>

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
          {data &&
            data.map((product, index) => (
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
          <button onClick={() => getNextPage()} className="hover:text-lightred font-medium px-2 mx-2" disabled={(Number(page)>=(count/9))}>Next</button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
        </div>
      </div>
  );
}
