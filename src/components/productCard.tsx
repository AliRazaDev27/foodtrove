import RatingStar from "@/components/ui/ratingStar"
import { Link } from "react-router-dom"

export default function ProductCard({data}:any){
    console.log(performance.now())
    return(
        <div className="flex flex-col justify-between items-center py-4 px-4 gap-5 text-center border border-gray-400 rounded-2xl ">
        
        <div className="border border-gray-400 overflow-hidden rounded-2xl">
            <img src={data.thumbnail} alt="thumbnail" width={150} height={150} />
        </div>
    <p className="text-secondary">{data.category}</p>
    <div className="flex items-center gap-2">
    
    <RatingStar rating={data.rating}/>
    <p className="text-secondary">({data?.rating})</p>
    </div>
    <Link to={`/shop/productDetails/${data._id}`}><h2 className="text-xl">{data.title}</h2></Link>
    <div className="flex items-center gap-3">
        <p className="text-lg text-red-600 font-semibold">${data.price}</p>
        <p className="text-secondary line-through text-sm">${data.price}</p>
    </div>
        </div>
    )
    }