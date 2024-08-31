import { FaStar } from "react-icons/fa";

export function SmallCard({data}){
    return(
        <div className="flex items-center gap-2">
            <img src={data.image} alt="card" />
            <div>
                <p className="text-primary font-bold">{data.title}</p>
                <div className="flex items-center gap-8">
                    <FaStar className="text-yellow-500" />
                    <p className="text-secondary">({data.rating})</p>  
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-lightgreen font-bold text-lg">${data.disCountedPrice}</p>
                    <p className="text-secondary line-through font-bold">${data.price}</p>
                </div>
            </div>
        </div>

    )
}