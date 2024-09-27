import { defer } from "react-router-dom";
import { getQueryProducts } from "@/actions";
export default async function loader({ request }: any) {
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page')) || 1
    const search = url.searchParams.get('search')
    const sortBy = url.searchParams.get('sortBy')
    const minPrice = Number(url.searchParams.get('minPrice'))
    const maxPrice = Number(url.searchParams.get('maxPrice'))
    const category = url.searchParams.get('category')
    const brand = url.searchParams.get('brand')
    const data =  getQueryProducts({page:page,search:search,sortBy:sortBy,minPrice:minPrice,maxPrice:maxPrice,category:category,brand:brand})
    return defer({data})
  }