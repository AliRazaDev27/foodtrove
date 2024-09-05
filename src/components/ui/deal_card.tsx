import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export function DealCard({data}:any){

    return(
        <div className="">
            <div>
            <img src={data.image} alt="deal" className="bg-cover"/>
            </div>
            <div className="relative w-[90%] flex flex-col gap-2 px-4 py-4 border border-neutral-400  mx-auto -top-[18%] bg-white rounded-xl">
                <h2 className="text-primary font-bold">{data.title}</h2>
                <div className="flex items-center gap-8">
                    <FaStar className="text-yellow-500"/>
                    <p className="text-secondary">({data.rating})</p>
                </div>
                <p className="text-secondary">By <span className="text-lightgreen">{data.manufacturer}</span></p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <p className="text-lightgreen text-lg font-bold">${data.disCountedPrice}</p>
                        <p className="text-secondary font-bold line-through">${data.price}</p>
                    </div>
                    <button className="bg-lightred text-white text-sm px-4 py-2 flex items-center gap-2 rounded-md">
                        <FiShoppingCart/>
                        <span>Add</span>
                        </button>
                </div>
            </div>
        </div>

    )
}