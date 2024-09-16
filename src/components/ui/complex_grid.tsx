import { topSelling,trending,recentlyAdded,topRated } from "../../../data"
import { SmallCard } from "./small_card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export function ComplexGrid(){
    gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(() => {
        gsap.fromTo(".gridItem",
            {y:function(index){return `-${(index%3)*100}%`}},
            {
                y:0,
                repeat:0,
                delay:0.5,
                duration:1.5,
                stagger:0.1,
                ease:"bounce.out",
                scrollTrigger:{
                    trigger:".gridItem",
                    start:"top center",
                    end:"bottom bottom",
                    toggleActions:"restart none  reverse none",
                }
            }
        )
    })
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-16 px-4 py-8">
            <div className="flex flex-col justify-between gap-8 space-y-8">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Top Selling</h2>
                {topSelling.map((card:any,index:number)=> <div className="gridItem" key={index}><SmallCard  data={card}/></div>)}   
            </div>
            <div className="flex flex-col justify-between  gap-8 space-y-8">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Trending</h2>
                {trending.map((card:any,index:number)=> <div className="gridItem"><SmallCard key={index} data={card}/></div>)}   
            </div>
            <div className="flex flex-col justify-between  gap-8 space-y-8">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Recently Added</h2>
                {recentlyAdded.map((card:any,index:number)=> <div className="gridItem" key={index}><SmallCard  data={card}/></div>)}   
            </div>
            <div className="flex flex-col justify-between gap-8 space-y-8">
                <h2 className="text-primary font-bold text-2xl underline underline-offset-[16px] decoration-green-300 decoration-3">Top Rated</h2>
                {topRated.map((card:any,index:number)=> <div className="gridItem" key={index}><SmallCard  data={card}/></div>)}   
            </div>
        </div>
    )
}