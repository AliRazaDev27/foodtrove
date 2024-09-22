import { useSearchParams } from "react-router-dom"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"
export default function Paginator({count}:{count:number}) {
    const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const search = searchParams.get('search')
  const sortBy = searchParams.get('sortBy')
  const minPrice = Number(searchParams.get('minPrice'))
  const maxPrice = Number(searchParams.get('maxPrice'))
  const category = searchParams.get('category')
  const brand = searchParams.get('brand')
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
        window.scrollTo({ top: 0, behavior:"smooth" });
      }
    return(
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
          <button onClick={() => getNextPage()} className="hover:text-lightred font-medium px-2 mx-2" disabled={Number(page)>=count}>Next</button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    )
}