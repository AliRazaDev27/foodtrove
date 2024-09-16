import { dailyBestProducts } from "../../../data"
import { DailyBestCard } from "./daily_best_card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function DailyBestSales(){
    gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(() => {
        gsap.fromTo(".bestProduct",
            {x:function(index){return `-${index*100}%`}},
            {
                x:0,
                repeat:0,
                delay:1,
                duration:2.5,
                stagger:-0.5,
                ease:"bounce.out",
                scrollTrigger:{
                    trigger:".bestProduct",
                    start:"top center",
                    toggleActions:"restart none  reverse none",
                }
            },
        )
    })
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
                <div className="col-span-1 md:col-span-3">
                <img src="/banner.png" alt="banner" className="bg-contain bg-left h-full" />
                </div>
                <div className="col-span-1 md:col-span-9  ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between ">
                           {dailyBestProducts.map((product,index)=>
                           <div key={index} className="bestProduct ">
                            <DailyBestCard  data={product}/>
                            </div>
                        )} 
                    </div>
                </div>
            </div>
        </div>
    )
}