import { deals } from "../../../data"
import { DealCard } from "./deal_card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export function DealsOfTheDay(){
    gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(() => {
        gsap.fromTo(".deal",{x:function(index,_,targets){
            if(index<targets.length/2){ return `-100vw`;}
            else{return `100vw`;}}},
            {
                x:0,
                duration:4,
                ease:"bounce.out",
                repeat:0,
                scrollTrigger:{
                    trigger:'.deal',
                    start:"center 70%",
                    toggleActions:"play none none none",
                }

            })
    })
    return(
        <div className="py-8 px-4 md:mt-16 overflow-hidden">
            <div className="flex justify-between items-center">
                <h1 className="text-neutral-300 text-3xl font-bold">Deals Of The Day</h1>
                <p className="text-neutral-400 hover:bg-lightgreen hover:text-white px-4 py-2 rounded-3xl transition-all duration-500">All Deals</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 ">
        {
            deals.map((deal,index)=> <div key={index} className="deal"><DealCard  data={deal}/></div>)
        }
            </div>
        </div>

    )
}