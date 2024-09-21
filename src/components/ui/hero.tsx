import { BackgroundSlider } from "../background_slider";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function Hero(){
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  if(mediaQuery.matches){
    gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger);
  }
 useGSAP(() => {
  if(mediaQuery.matches){
    gsap.to(textRef.current, {
      text: {
        value:"The best way to stuff your wallet.",
        newClass: "",
      },
      duration: 2,
      delay:1,
      ease: "power1.inOut",
    })
    gsap.fromTo(containerRef.current,{
        rotateX:10
    },{
        rotateX:0,
        scrollTrigger:{
            trigger:containerRef.current,
            start:"top 30%",
            end:"bottom 100%",
            scrub:true,
            toggleActions:"restart none  reverse none",
        }
    })
  }     
 })

    return(
        <div className="overflow-hidden  md:mt-[100px] " style={{perspective:"200px"}}>
        <div ref={containerRef} className="relative  flex flex-col-reverse leading md:flex-row  justify-evenly min-h-[90vh] items-center bg-gray-300">
                <div className="flex   flex-col items-center gap-4 py-2 px-2  md:w-1/2">
                    <p className="text-lg sm:text-xl  font-bold leading-6 tracking-wider"><span className=" text-red-600 underline underline-offset-4 font-bold pr-1">100%</span> Organic Vegetables</p>
                    <div ref={textRef} className="text-3xl md:text-5xl pacifico-regular md:leading-[60px] font-extrabold  w-[75%] text-center  mx-auto "><p className="md:hidden">The best way to stuff your wallet.</p></div>
                    <p className="text-gray-500 leading-6 w-[75%] text-center sm:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    reiciendis beatae consequuntur.
                    </p>
                    <div className="flex items-center justify-between bg-white border   sm:w-max rounded-full overflow-hidden">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" hidden md:block text-gray-700   translate-x-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m53.12 199.94 400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06zM460 52 227 285"></path></svg>
                        <input type="text" className="outline-none w-[90%] sm:w-full p-2 md:px-8 md:py-4 bg-transparent" placeholder="Your email address"/>
                        <div>
                        <BackgroundSlider background="bg-lightred" color="bg-lightgreen" rounded="rounded-e-full"><button className="px-4 sm:block hidden py-4 text-white">Subscribe</button></BackgroundSlider>
                        </div>
                        <button className="sm:hidden block  py-3 px-4  bg-lightred">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" text-gray-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m53.12 199.94 400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06zM460 52 227 285"></path></svg>
                        </button>
                    </div>
                </div>
                <div className="md:-translate-y-36">
                    <ul className="flex flex-wrap justify-center gap-2 ">
                        <li
                          className="hover:translate-y-6  hover:-rotate-[6deg]  transition-transform duration-1000  text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1/> <span className="font-bold">Shopping</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000  text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1/> <span className="font-bold">Recipes</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000  text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1/> <span className="font-bold">Kitchen</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000 text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1/> <span className="font-bold">News</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000 text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1/> <span className="font-bold">Food</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                    </ul>
                </div>
               <div className="hidden md:block absolute right-0 bottom-0 w-1/3">
               <img src="/hero1.webp" alt="hero" className="bg-cover"/>
               </div>
            </div>
            </div> 
    )
}

const RxCross1 = ()=>{
  return(
    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" className="text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor"></path></svg>
  )
}