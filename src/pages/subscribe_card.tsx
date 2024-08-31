export function SubscribeCard(){
    return(
        <div className="flex  items-center justify-between border border-red-500">
            <div className="flex flex-col gap-6 max-w-[450px]">
                    <p className="text-3xl font-bold text-primary">Stay home & get your daily needs from our shop</p>
                    <p className="text-secondary ">Start You'r Daily Shopping with <span className="text-lightgreen">Nest Mart</span></p>
                    <div className="flex items-center border rounded-full">
<input type="text" placeholder="Your email address" className="outline-none px-4 py-4 bg-transparent"/>
<button className="bg-lightred text-white px-8 py-4 rounded-full">Subscribe</button>
                    </div>
            </div>
            <img src="/subscribe.png" alt="subscribe" />
        </div>
    )
}