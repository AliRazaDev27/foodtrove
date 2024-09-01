import { topSelling,trending,recentlyAdded,topRated } from "../../../data"
import { SmallCard } from "./small_card"
export function ComplexGrid(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-4 px-4 ">
            <div className="flex flex-col gap-8 ">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Top Selling</h2>
                {topSelling.map((card:any,index:number)=> <SmallCard key={index} data={card}/>)}   
            </div>
            <div className="flex flex-col gap-8 ">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Trending</h2>
                {trending.map((card:any,index:number)=> <SmallCard key={index} data={card}/>)}   
            </div>
            <div className="flex flex-col gap-8 ">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Recently Added</h2>
                {recentlyAdded.map((card:any,index:number)=> <SmallCard key={index} data={card}/>)}   
            </div>
            <div className="flex flex-col gap-8 ">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Top Rated</h2>
                {topRated.map((card:any,index:number)=> <SmallCard key={index} data={card}/>)}   
            </div>
        </div>
    )
}