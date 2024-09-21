import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {tags} from "../../../data"
export function Tags(){
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    if(mediaQuery.matches){
        gsap.registerPlugin(useGSAP,ScrollTrigger);
    }
    useGSAP(() => {
        if(!mediaQuery.matches) return
        gsap.fromTo(".slide",
            {x:"-100%"},
            {
                x:"100%",
                duration:15,
                ease:"none",
                repeat:-1,
                scrollTrigger:{
                    trigger:".slide",
                    toggleActions:"restart none  reverse none",
                }
            }
        )
        })
               

    return(
        <div className=" overflow-hidden">
        <div className="flex flex-row flex-nowrap  w-max gap-8 items-center   slide    justify-evenly   px-4 py-8  rounded-xl">
            {tags.map((tag,index)=>(
                <div key={index} className="flex flex-col text-center gap-4 items-center justify-between overflow-hidden shadow-lg  w-[250px] h-[160px] bg-white    item    px-4 py-4 rounded-2xl">
                    <img src={tag.image} alt="tag" className="w-12 h-12"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">{tag.title}</p>
                        <p className="text-neutral-700">{tag.tag}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}