export function FeatureCard({card}:any){
    return(
        <div  className="flex flex-col justify-between gap-4 ps-8 pb-8 pt-16 bg-neutral-300  bg-cover rounded-xl aspect-[1.7]" style={{backgroundImage: `url(${card.imgage})`}}>
<p className="w-[60%] text-primary text-2xl font-bold">{card.title}</p>
<button className="bg-lightred  text-white text-sm font-bold w-max px-4 py-2 rounded-md">Shop Now</button>
                </div>
    )
}