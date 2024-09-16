import { BackgroundSlider } from "../background_slider";

export function DailyBestCard({data}:any){
    return(
        <div className="relative  hover:shadow-2xl hover:shadow-black transition bg-white duration-500 ease-out flex flex-col h-full  items-center text-center  px-2 justify-between py-2 border border-gray-400 rounded-2xl ">
            {data.tag !== "" && <div className="absolute top-0 left-0 bg-lightred text-white px-4 py-2 rounded-tl-2xl rounded-br-3xl">{data.tag}</div>}
            <div className="mt-4">
            <img src={data.image} alt="product" className="bg-cover"/>
            </div>
            <p className="text-secondary">{data.category}</p>
            <p className="text-primary text-lg font-bold">{data.title}</p>
            <div className="flex items-center gap-4">
                <p className="text-lightgreen font-bold text-xl">${data.disCountedPrice}</p>
                <p className="text-secondary font-bold line-through">${data.price}</p>
            </div>
            <div></div>
            <div className="text-sm font-semibold">Sold {data.sold}/{data.goal}</div>
            <div className="mx-auto">
            <BackgroundSlider background="bg-lightred" color="bg-lightgreen" direction="bottom" rounded="rounded-lg">
            <button className="w-full text-white py-2 px-4 text-center">Add to Cart</button>
            </BackgroundSlider>
            </div>
        </div>
    )
}