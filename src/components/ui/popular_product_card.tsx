import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BackgroundSlider } from "../background_slider";


export function PopularProductCard({product}:any){
    return(
        <div className="relative border border-gray-400  hover:shadow-2xl hover:shadow-current  rounded-3xl hover:scale-105 group transition-all duration-500 overflow-hidden">
            {
                product.tag !== "" && 
                <div className="absolute  top-0  group-hover:translate-x-[100%]  transition-all duration-1000  w-full   "><div className="bg-lightred group-hover:bg-lightgreen group-hover:font-bold text-white w-max px-6 py-3 rounded-tl-3xl rounded-br-3xl group-hover:rounded-none group-hover:rounded-tr-3xl group-hover:rounded-bl-3xl transition-all duration-1000 group-hover:-translate-x-[100%]">{product.tag}</div></div>
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
                    <p className="text-lightgreen text-lg font-bold">${product.disCountedPrice}</p>
                    <p className="text-secondary line-through font-bold">${product.price}</p>
                    
                </div>
                <BackgroundSlider background="bg-lightred" color="bg-lightgreen" direction="top" rounded="rounded-xl">
                <button className="flex items-center gap-2   text-white px-4 py-2 rounded-lg font-bold">
                    <MdOutlineShoppingCart/>
                    <span>Add</span>
                </button>
                </BackgroundSlider>
            </div>
            </div>
        </div>

    )
}