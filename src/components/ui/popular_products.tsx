import {popularProducts} from "../../../data/index"
import { PopularProductCard } from "./popular_product_card"
export function PopularProducts(){
    console.log(popularProducts)
    return(
        <div className="px-4 md:my-16">
            <div className="flex justify-between md:my-8">
                <h1 className="text-3xl text-primary font-bold ">Popular Products</h1>
                {/* convert to dropdown menu */}
                <ul className="hidden md:flex gap-4">
                    <li className="text-lightgreen">All</li>
                    <li>Milk & Dairies</li>
                    <li>Coffe & Tea</li>
                    <li>Pet Foods</li>
                    <li>Meats</li>
                    <li>Vegetables</li>
                    <li>Fruits</li>
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