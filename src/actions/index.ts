import { Product, ProductQuery } from "@/types";
import axios from "axios";
export const getQueryProducts = async (query:ProductQuery):Promise<QueryResult> => {
  const path = `${import.meta.env.VITE_BACKEND_URL}/api/products`
  console.log(path)
    const response = await axios.get(
        path,
        {
          params: query,
        }
      );
    return response.data
}


export type QueryResult = {
    products: Product[];
    count: number;
}

export const getWishlist = async (value:number) => {
    return `i fucked ${value} girls`
}
