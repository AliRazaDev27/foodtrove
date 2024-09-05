export function DailyBestCard({data}:any){
    return(
        <div className="relative flex flex-col justify-between gap-1 px-2 py-2 border border-gray-400 rounded-2xl ">
            {data.tag !== "" && <div className="absolute top-0 left-0 bg-lightred text-white px-4 py-2 rounded-tl-2xl rounded-br-3xl">{data.tag}</div>}
            <div className="mt-4">
            <img src={data.image} alt="product" className="bg-cover"/>
            </div>
            <p className="text-secondary">{data.category}</p>
            <p className="text-primary text-lg font-bold">{data.title}</p>
            <div className="flex items-center gap-4">
                <p className="text-lightgreen font-bold text-xl">${data.disCountedPrice}</p>
                <p className="text-secondary font-bold *:line-through">${data.price}</p>
            </div>
            <div></div>
            <div className="text-sm">Sold {data.sold}/{data.goal}</div>
            <button className="bg-lightred w-full text-white py-2 text-center mt-2">Add to Cart</button>
        </div>
    )
}