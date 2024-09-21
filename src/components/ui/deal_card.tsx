import { BackgroundSlider } from "../background_slider";

export function DealCard({data}:any){

    return(
        <div className="group relative">
            <div>
            <img src={data.image} alt="deal" className="bg-cover"/>
            </div>
            <div className="relative group-hover:translate-y-0  transition-transform duration-700  w-[90%] flex flex-col gap-2 px-4 py-4 border border-neutral-400  mx-auto -translate-y-1/2 bg-white rounded-xl">
                <h2 className="text-primary font-bold">{data.title}</h2>
                <div className="flex items-center gap-8">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <p className="text-secondary">({data.rating})</p>
                </div>
                <p className="text-secondary">By <span className="text-lightgreen">{data.manufacturer}</span></p>
                <div className="flex flex-wrap gap-2 justify-between items-center">
                    <div className="flex items-center gap-4">
                        <p className="text-lightgreen text-lg font-bold">${data.disCountedPrice}</p>
                        <p className="text-secondary font-bold line-through">${data.price}</p>
                    </div>
                    <BackgroundSlider rounded="rounded-lg" direction="top" background="bg-lightred" color="bg-lightgreen">
                    <button className=" text-white text-sm px-4 py-2 flex items-center gap-2 rounded-md">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span>Add</span>
                        </button>
                    </BackgroundSlider>
                </div>
            </div>
        </div>

    )
}