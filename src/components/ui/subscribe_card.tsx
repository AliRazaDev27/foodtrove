import { IoPaperPlaneOutline } from "react-icons/io5";
import { BackgroundSlider } from "../background_slider";
export function SubscribeCard(){
    return(
        <div className="flex  items-center justify-between border bg-cyan-200 mt-16 py-4 px-4">
            <div className="flex flex-col gap-6 max-w-[450px]">
                    <p className="text-2xl md:text-3xl font-bold text-primary">Stay home & get your daily needs from our shop</p>
                    <p className="text-secondary ">Start You'r Daily Shopping with <span className="text-lightgreen font-bold text-xl pacifico-regular">FoodTrove</span></p>
                    <div className="flex items-center border rounded-full bg-white w-max">
<input type="text" placeholder="Your email address" className="outline-none px-4 py-4 bg-transparent"/>
<BackgroundSlider background="bg-lightred" color="bg-lightgreen" rounded="rounded-e-full">
<button className="hidden md:block  text-white px-4 py-4 rounded-full">Subscribe</button>
</BackgroundSlider>
<button className="md:hidden -translate-x-4"><IoPaperPlaneOutline className="text-gray-700" /></button>
                    </div>
            </div>
            <div className="hidden md:block w-1/3 ">
            <img src="/subscribe.png" alt="subscribe" className="bg-cover"/>
            </div>
        </div>
    )
}