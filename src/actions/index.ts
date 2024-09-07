import { Product, ProductQuery } from "@/types";
import axios from "axios";
export const getQueryProducts = async (query:ProductQuery):Promise<QueryResult> => {
    const response = await axios.get(
        "http://localhost:3000/api/products",
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