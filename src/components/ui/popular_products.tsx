import {popularProducts} from "../../../data/index"
import { PopularProductCard } from "./popular_product_card"
export function PopularProducts(){
    return(
        <div className="px-4 md:my-16">
            <div className="flex justify-between md:my-8">
                <h1 className="text-3xl text-gray-300 font-bold ">Popular Products</h1>
                {/* convert to dropdown menu */}
                <ul className="hidden md:flex gap-4 text-neutral-400">
                    <li className="text-lightgreen flex items-center hover:text-white hover:bg-lightgreen rounded-3xl px-3 py-2 transition-all duration-500">All</li>
                    <li className="flex items-center hover:text-white hover:bg-lightgreen rounded-3xl px-3 py-2 transition-all duration-500">Milk & Dairies</li>
                    <li className="flex items-center hover:text-white hover:bg-lightgreen rounded-3xl px-3 py-2 transition-all duration-500">Coffe & Tea</li>
                    <li className="flex items-center hover:text-white hover:bg-lightgreen rounded-3xl px-3 py-2 transition-all duration-500">Pet Foods</li>
                    <li className="flex items-center hover:text-white hover:bg-lightgreen rounded-3xl px-3 py-2 transition-all duration-500">Meats</li>
                    <li className="flex items-center hover:text-white hover:bg-lightgreen rounded-3xl px-3 py-2 transition-all duration-500">Vegetables</li>
                    <li className="flex items-center hover:text-white hover:bg-lightgreen rounded-3xl px-3 py-2 transition-all duration-500">Fruits</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-x-4 gap-y-8 py-8">
                {
                    popularProducts.map((product,index)=>{
                        return <PopularProductCard key={index} product={product}/>
                    })
                }
            </div>

        </div>
    )
}