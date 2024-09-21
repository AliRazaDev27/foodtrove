import { BackgroundSlider } from "../background_slider";


export function PopularProductCard({product}:any){
    return(
        <div className="relative bg-white border border-gray-400  hover:shadow-2xl hover:shadow-current  rounded-3xl hover:scale-105 group transition-all duration-500 overflow-hidden">
            {
                product.tag !== "" && 
                <div className="absolute  top-0  md:group-hover:translate-x-[100%]  transition-all duration-1000  w-full   "><div className="bg-lightred md:group-hover:bg-lightgreen group-hover:font-bold text-white w-max px-6 py-3 rounded-tl-3xl rounded-br-3xl md:group-hover:rounded-none md:group-hover:rounded-tr-3xl md:group-hover:rounded-bl-3xl transition-all duration-1000 md:group-hover:-translate-x-[100%]">{product.tag}</div></div>
            }
            <div className="px-8 space-y-2 pb-3">
            <img src={product.image} alt="product" className="mx-auto" />
            <p className="text-sm font-normal text-secondary">{product.category}</p>
            <h2 className="text-wrap text-xl font-medium ">{product.title}</h2>
            <div className="flex gap-12 items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
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
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    <span>Add</span>
                </button>
                </BackgroundSlider>
            </div>
            </div>
        </div>

    )
}