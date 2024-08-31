import { RxCross1 } from "react-icons/rx";
import { IoPaperPlaneOutline } from "react-icons/io5";
export function Hero(){
    return(
        <div className="relative flex flex-col-reverse md:flex-row  justify-evenly min-h-[90vh] items-center bg-gray-200">
                <div className="flex flex-col gap-4 py-2 w-[550px]">
                    <p className="text-[20px] font-[700] leading-[24px] tracking-[0.48px]"><span className=" text-red-600 underline underline-offset-4 font-bold pr-1">100%</span> Organic Vegetables</p>
                    <p className="text-[55px] leading-[68px] font-[900]">The best way to
                    stuff your wallet.</p>
                    <p className="text-gray-500 text-[15px] font-[400] tracking-[0.48px] leading-[26px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    reiciendis beatae consequuntur.
                    </p>
                    <div className="flex items-center bg-white w-max rounded-full overflow-hidden">
                    <IoPaperPlaneOutline className="text-gray-700 border  translate-x-2" />
                        <input type="text" className="outline-none px-4 py-4 bg-transparent" placeholder="Your email address"/>
                        
                        <button className="bg-green-600 text-white px-8 py-4 rounded-full">Subscribe</button>
                    </div>
                </div>
                <div className="md:-translate-y-36">
                    <ul className="flex gap-2">
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">Shopping</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-neutral-700">Recipes</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">Kitchen</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">News</span></li>
                        <li className="flex gap-1 items-center   bg-white px-4 py-2 rounded-full"><RxCross1 className="text-gray-400"/> <span className="text-green-600">Food</span></li>
                        
                    </ul>
                </div>
                <img src="/hero1.png" alt="hero" className="w-[400px] absolute right-0 bottom-0"/>
            </div>
    )
}