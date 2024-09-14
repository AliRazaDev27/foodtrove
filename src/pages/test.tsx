
import clsx from "clsx"
export default function Test() {
    return (
        <div className="h-[80vh] flex gap-4 justify-center items-center">
            {/* <div className="flex gap-4 transition-all *:rounded-3xl group">
                <div className="w-[150px] h-[200px] bg-red-500 translate-x-12 z-0 -rotate-[3deg] origin-center transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-0  "/>
                <div className="w-[150px] h-[200px] bg-green-500 z-20  -rotate-[3deg]  hover:scale-105  hover:z-50 origin-center  transition-all duration-500 group-hover:rotate-0 "/>
                <div className="w-[150px] h-[200px] bg-blue-500 z-30 -translate-x-12 rotate-[3deg] origin-center transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-0"/>
                <div className="w-[150px] h-[200px] bg-purple-500 z-40 -translate-x-24 rotate-[3deg] origin-center transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-0"/>
            </div> */}
<div>
    <ShuffleEffect>
       <div className="w-[150px] h-[200px] bg-red-500"/>
       <div className="w-[150px] h-[200px] bg-green-500"/>
       <div className="w-[150px] h-[200px] bg-blue-500"/>
       <div className="w-[150px] h-[200px] bg-yellow-500"/>
       <div className="w-[150px] h-[200px] bg-orange-500"/>
       <div className="w-[150px] h-[200px] bg-yellow-500"/>
    </ShuffleEffect>
</div>

{/* {Array(5).fill(0).map((_,index)=>{
    let rotate = ""
    // if(index===0) rotate = `rotate-[${index*10}deg]`
    // if(index===1) rotate = `rotate-[${index*10}deg]`
    // if(index===2) rotate = `rotate-[${index*10}deg]`
    // if(index===3) rotate = `rotate-[${index*10}deg]`
    // if(index===4) rotate = `rotate-[${index*10}deg]`

        return(
        <div className={clsx(`w-[150px] h-[200px] bg-green-500 ${rotate}`,rotate)}/>
    )
})} */}

            
        </div>
            
    )
}

export function ShuffleEffect({children}:any){ 
    console.log(children.length)
    if(children.length === 1){
        return children
    }
return(
    <div className="flex relative gap-4 transition-all group">
        {children.map((child:any,index:number)=> <ShuffleItem key={index} index={index+1} total={children.length}>{child}</ShuffleItem>)}
    </div>
)    
}
export function ShuffleItem({index,total,children}:any){
    // check if total is odd or even
    let rotate = ""
    let translate = ""
    let angle = 4

    if(total % 2 === 0){
        let middleRight = Math.floor(total/2)
        if(index>total/2){
            //right
            console.log("whore")
            rotate = `${(index-middleRight)*angle}`
            translate = `translate-x-[${index*50}px]`
        }
        else{
            //left
            console.log("bitch")
            rotate = `-${(middleRight-index+1)*angle}`
            translate = `-translate-x-[${index*100}px]`
        }
    }
    else{
        const middle = Math.floor(total/2)+1
        if(index<=Math.floor(total/2)){
            //left
            rotate = `-${(middle-index)*angle}`
        }
        else if(index>Math.floor(total/2)+1){
            //right
            console.log(total,index)
            rotate = `${(index-middle)*angle}`

        }
        else{
            rotate = "0"
        }
    }

    return(
        // check for more z-index values currently only 6.
        <div
          className={clsx(`border border-black transition-all duration-500  hover:scale-110 group-hover:rotate-0 group-hover:translate-x-0 z-${index*10}`)}
            style={{transform:`rotate(${rotate}deg)`}}
        >
            {children}
            </div>
    )
}
// style={{transform:`translateX(${(total-index)*30}px)`}}