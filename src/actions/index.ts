import { Product, ProductQuery } from "@/types";
import axios from "axios";
export const getQueryProducts = async (query:ProductQuery):Promise<QueryResult> => {
  // await new Promise(resolve => setTimeout(resolve, 5000))
  const path = `${import.meta.env.VITE_BACKEND_URL}/api/products`
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
