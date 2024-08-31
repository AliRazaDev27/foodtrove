import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";


export function PopularProductCard({product}){
    return(
        <div className="relative border rounded-3xl">
            {
                product.tag !== "" && 
                <div className="absolute top-0 left-0 bg-lightred text-white w-max px-6 py-3 rounded-tl-3xl rounded-br-3xl ">{product.tag}</div>
            }
            <div className="px-8 space-y-2 pb-3">
            <img src={product.image} alt="product" className="mx-auto" />
            <p className="text-sm font-normal text-secondary">{product.category}</p>
            <h2 className="text-wrap font-medium ">{product.title}</h2>
            <div className="flex gap-12 items-center">
                <FaStar className="text-yellow-500"/>
                <p>({product.rating})</p>
            </div>
            <p className="text-secondary">By <span className="text-lightred">{product.manufacturer}</span></p>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <p className="text-lightgreen text-lg font-bold">{product.disCountedPrice}</p>
                    <p className="text-secondary line-through font-bold">{product.price}</p>
                    
                </div>
                <button className="flex items-center gap-2 bg-lightred hover:bg-red-600 text-white px-5 py-3 rounded-lg font-bold">
                    <MdOutlineShoppingCart/>
                    <span>Add</span>
                </button>
            </div>
            </div>
        </div>

    )
}