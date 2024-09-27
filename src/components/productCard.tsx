import RatingStar from "@/components/ui/ratingStar"
import { Link } from "react-router-dom"

export default function ProductCard({data}:any){
    return(
        <div className="flex flex-col justify-between items-center py-4 px-4 gap-2 text-center border border-gray-400 rounded-lg hover:shadow-md hover:shadow-lightred ">
        
        <div className=" overflow-hidden rounded-2xl">
            <img src={data?.thumbnail} alt="thumbnail" width={150} height={150} />
        </div>
        <h2 className="text-xl">{data?.title}</h2>
    
    <div className="flex items-center gap-2">
    <RatingStar rating={data?.rating}/>
    <p className="text-secondary">({data?.rating})</p>
    </div>
    <p className="text-secondary">{data?.category}</p>
    <div className="flex items-center gap-3">
        <p className="text-lg text-red-600 font-semibold">${data?.price}</p>
        <p className="text-secondary line-through text-sm">${data?.price}</p>
    </div>
    <Link to={`/shop/productDetails/${data?._id}`} className="w-full rounded-lg text-white bg-lightred py-3 hover:bg-lightgreen transition-colors duration-300">View Details</Link>
        </div>
    )
    }