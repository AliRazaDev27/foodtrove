import { RxCross1 } from "react-icons/rx";
import { IoPaperPlaneOutline } from "react-icons/io5";
export function Hero(){
    return(
        <div className="relative flex flex-col-reverse md:flex-row  justify-evenly min-h-[90vh] items-center bg-gray-300">
                <div className="flex flex-col gap-4 py-2 px-2  md:w-1/2">
                    <p className="text-xl  font-bold leading-6 tracking-wider"><span className=" text-red-600 underline underline-offset-4 font-bold pr-1">100%</span> Organic Vegetables</p>
                    <p className="text-4xl md:text-5xl md:leading-[60px] font-[900]">The best way to
                    stuff your wallet.</p>
                    <p className="text-gray-500 text-[15px] font-[400] tracking-[0.48px] leading-[26px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    reiciendis beatae consequuntur.
                    </p>
                    <div className="flex items-center bg-white w-max rounded-full overflow-hidden">
                    <IoPaperPlaneOutline className="hidden md:block text-gray-700   translate-x-2" />
                        <input type="text" className="outline-none  px-4 py-2 md:px-8 md:py-4 bg-transparent" placeholder="Your email address"/>
                        
                        <button className="hidden md:block bg-green-600 text-white px-4 py:2 md:px-8 md:py-4 rounded-full">Subscribe</button>
                        <button className="md:hidden block">
                        <IoPaperPlaneOutline className=" text-gray-700   -translate-x-3" />
                        </button>
                    </div>
                </div>
                <div className="md:-translate-y-36 ">
                    <ul className="flex flex-wrap justify-center gap-2 ">
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">Shopping</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-neutral-700">Recipes</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">Kitchen</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">News</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">Food</span></li>
                        
                    </ul>
                </div>
               <div className="hidden md:block absolute right-0 bottom-0 w-1/3">
               <img src="/hero1.png" alt="hero" className="bg-cover"/>
               </div>
            </div>
    )
}