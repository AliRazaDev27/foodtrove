import { BackgroundSlider } from "../background_slider";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function FeatureCard({ card }: any) {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  if(mediaQuery.matches){
    gsap.registerPlugin(useGSAP,ScrollTrigger);
  }
  useGSAP(
    () =>{
      if(!mediaQuery.matches) return
      gsap.fromTo(".item-drop",{y:"-100%"},{
        y:0,
        stagger:0.5,
        duration:1,
        ease:"bounce.out",
        scrollTrigger:{
        trigger:".item-drop",
        start:"bottom center", 
        end:"top center", 
        toggleActions:"restart none reverse none",
      }})
      
    } 
  )
  return (
    <div className="item-drop ">
      <div
      className="flex  flex-col justify-evenly md:justify-between  gap-4 px-4 py-2 md:py-8  bg-neutral-300  bg-cover bg-right rounded-xl aspect-[1.7] border border-gray-400  hover:rounded-3xl -skew-y-12  hover:skew-y-0  shadow-md hover:shadow hover:scale-105 shadow-lime-900  transition-all  duration-500"
      style={{ backgroundImage: `url(${card.imgage})` }}
    >
      <p className="md:w-[60%] text-primary text-2xl font-bold">{card.title}</p>
      <BackgroundSlider background="bg-lightred" color="bg-lightgreen" rounded="rounded-full" >
      <button className=" text-white text-sm font-bold w-max px-4 py-2 rounded-md">
        Shop Now
      </button>
      </BackgroundSlider>

    </div>
    </div>
  );
}
