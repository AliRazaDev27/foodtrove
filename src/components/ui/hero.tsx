import { RxCross1 } from "react-icons/rx";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BackgroundSlider } from "../background_slider";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero(){
 gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger);
 
 useGSAP(() => {
    gsap.to("#textDiv", {
      text: {
        value:"The best way to stuff your wallet.",
        newClass: "",
      },
      duration: 2,
      delay:0.5,
      ease: "power1.in",
    })
    gsap.fromTo(".item",{
        rotateX:15
    },{
        rotateX:0,
        scrollTrigger:{
            trigger:".item",
            start:"top 30%",
            end:"bottom 100%",
            scrub:true,
            toggleActions:"restart none  reverse none",
        }
    })     
 })

    return(
        <div className="overflow-hidden  mt-[100px] " style={{perspective:"200px"}}>
        <div className="relative item flex flex-col-reverse leading md:flex-row  justify-evenly min-h-[90vh] items-center bg-gray-300">
                <div className="flex   flex-col items-center gap-4 py-2 px-2  md:w-1/2">
                    <p className="text-lg sm:text-xl  font-bold leading-6 tracking-wider"><span className=" text-red-600 underline underline-offset-4 font-bold pr-1">100%</span> Organic Vegetables</p>
                    <div id="textDiv" className="text-3xl md:text-4xl md:leading-[60px] font-extrabold  w-[75%] text-center  mx-auto "></div>
                    <p className="text-gray-500 leading-6 w-[75%] text-center sm:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    reiciendis beatae consequuntur.
                    </p>
                    <div className="flex items-center justify-between bg-white border   sm:w-max rounded-full overflow-hidden">
                    <IoPaperPlaneOutline className="hidden md:block text-gray-700   translate-x-2" />
                        <input type="text" className="outline-none w-[90%] sm:w-full p-2 md:px-8 md:py-4 bg-transparent" placeholder="Your email address"/>
                        <div>
                        <BackgroundSlider background="bg-lightred" color="bg-lightgreen" rounded="rounded-e-full"><button className="px-4 sm:block hidden py-4 text-white">Subscribe</button></BackgroundSlider>
                        </div>
                        <button className="sm:hidden block  py-3 px-4  bg-lightred">
                        <IoPaperPlaneOutline className=" text-gray-100" />
                        </button>
                    </div>
                </div>
                <div className="md:-translate-y-36">
                    <ul className="flex flex-wrap justify-center gap-2 ">
                        <li
                          className="hover:translate-y-6  hover:-rotate-[6deg]  transition-transform duration-1000  text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1 className="text-gray-600"/> <span className="font-bold">Shopping</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000  text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1 className="text-gray-600"/> <span className="font-bold">Recipes</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000  text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1 className="text-gray-600"/> <span className="font-bold">Kitchen</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000 text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1 className="text-gray-600"/> <span className="font-bold">News</span>
                            </div>
                            </BackgroundSlider>
                            </li>
                            <li
                          className="hover:translate-y-6 hover:-rotate-[6deg]  transition-transform duration-1000 text-lightgreen hover:text-white" >
                            <BackgroundSlider rounded="rounded-full" direction="right" color="bg-lightgreen" delay={"delay-200"} ease="ease-in" duration={1000}>
                            <div className="flex items-center gap-1 px-4 py-2">
                            <RxCross1 className="text-gray-600"/> <span className="font-bold">Food</span>
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