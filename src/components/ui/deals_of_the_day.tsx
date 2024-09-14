import { deals } from "../../../data"
import { DealCard } from "./deal_card"
export function DealsOfTheDay(){
    return(
        <div className="py-8 px-4 md:mt-16">
            <div className="flex justify-between items-center">
                <h1 className="text-primary text-3xl font-bold">Deals Of The Day</h1>
                <p className="text-secondary">All Deals</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 ">
        {
            deals.map((deal,index)=> <DealCard key={index} data={deal}/>)
        }
            </div>
        </div>

    )
}