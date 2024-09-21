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
<button className="md:hidden -translate-x-4">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m53.12 199.94 400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06zM460 52 227 285"></path></svg>
</button>
                    </div>
            </div>
            <div className="hidden md:block w-1/3 ">
            <img src="/subscribe.webp" alt="subscribe"/>
            </div>
        </div>
    )
}