export function SmallCard({data}:any){
    return(
        <div className="flex justify-between overflow-hidden hover:scale-110 bg-white shadow-2xl shadow-neutral-600   skew-y-12 hover:skew-y-0 transition-transform duration-500 hover:shadow-2xl hover:shadow-black px-2 py-2 rounded-2xl border border-gray-400  items-center gap-2">
            <img src={data.image} alt="card" />
            <div>
                <p className="text-primary font-bold">{data.title}</p>
                <div className="flex items-center gap-8">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-yellow-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
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