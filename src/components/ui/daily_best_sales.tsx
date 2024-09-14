import { dailyBestProducts } from "../../../data"
import { DailyBestCard } from "./daily_best_card"
export function DailyBestSales(){

    return (
        <div className="px-4 md:my-8">
            <div className="flex justify-between py-8 md:my-4">
                <h1 className="text-3xl text-primary font-bold">Daily Best Sells</h1>
                <ul className="hidden md:flex  gap-5">
                    <li className="text-lightgreen">Featured</li>
                    <li>Popular</li>
                    <li>New added</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 ">
                <div className="col-span-1 md:col-span-2">
                <img src="/banner.png" alt="banner" className="bg-contain bg-left h-full" />
                </div>
                <div className="col-span-1 md:col-span-10  ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                           {dailyBestProducts.map((product,index)=>
                           <DailyBestCard key={index} data={product}/>
                        )} 
                    </div>
                </div>
            </div>
        </div>
    )
}