export function BackgroundSlider({direction,rounded,background,color,duration,delay,ease,children}:{direction?:'left'|'right'|'top'|'bottom',rounded?:string,background?:string,color?:string,duration?:number,delay?:string,ease?:string,children:React.ReactNode}) {
    let animate = ""
    if(direction){
        console.log("wtf")
        if(direction === "left"){
            animate = "top-0 right-[100%] peer-hover:translate-x-[100%]"
        }
        if(direction === "right"){
            animate = "top-0 left-[100%] peer-hover:-translate-x-[100%]"
        }
        if(direction === "top"){
            animate = "bottom-[100%] right-0 peer-hover:translate-y-[100%]"
        }
        if(direction === "bottom"){
            animate = "top-[100%] right-0 peer-hover:-translate-y-[100%]"
        }
    }
    else{
        animate = "top-0 right-[100%] peer-hover:translate-x-[100%]"
    }
    return(
        <div className={`relative w-max border overflow-hidden  ${background ? background : "bg-white"}  ${rounded}`}>
        <div className="relative  peer z-10">
        {children}
        </div>
        <div
         className=
         {`absolute   -z-0 ${ease}  transition-transform ${duration ? `duration-${duration}` : "duration-500"} ${delay} ${animate} ${color ? color : "bg-red-500" } w-full h-full`}/>
    </div>
    )
}