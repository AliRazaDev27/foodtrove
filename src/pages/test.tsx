import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Observer } from "gsap/Observer";

export default function Test() {  
    gsap.registerPlugin(useGSAP,Observer);
    useGSAP(() => {
        function change(side:string){
            let x = "0%"
            side === "left" ? x="-100%" : x="100%"
            gsap.fromTo(".obj",{x:x,scale:1,borderRadius:"50%",display:"block",ease:"power4.out",delay:1},{
                x:"0%",
                scale:2,
                borderRadius:"0%",
                duration:2,
            })
        }
       Observer.create({
           target:'.test',
           type:'pointer',
           onHover:(self)=>{
            const x = (self?.event as any)?.offsetX
            // const y = self?.event?.offsetY
            const width = (self?.target as any)?.offsetWidth
            if(x<width/2){
               change("left")
            }
            else{
                change("right")
            }
           }
           
       })
    })
    return (
        <div className=" flex h-[100vh] gap-4 justify-center items-center overflow-hidden " >
<div className=" flex justify-center items-center  relative border overflow-hidden   border-black">
<div className="w-[200px] test  aspect-square bg-transparent border border-red-500"/>
<div className="w-[100px] obj absolute hidden -z-10 aspect-[1/1]   bg-green-600 rounded-full"/>

</div>
        </div>
            
    )
}

