import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { useRef } from "react";

export  function WaterFallBorder({px="2px",py="2px",borderColor="bg-lightgreen",bottomColor="bg-white",borderRadius="0%",durationTop=1,durationSide=1,durationBottom=1,delayTop=0,delaySide=0,delayBottom=0,children}:{px?:string,py?:string,borderColor?:string,bottomColor?:string,borderRadius?:string,durationTop?:number,durationSide?:number,durationBottom?:number,delayTop?:number,delaySide?:number,delayBottom?:number,children:React.ReactNode}) {
    const observerRef = useRef<HTMLDivElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(useGSAP, Observer);
    useGSAP(() => {
      const tl = gsap.timeline({ paused: true });
      const resetPosition = () => {
        gsap.set(borderRef.current, {
          top: 0,
          left: "50%",
          margin: "auto",
          x: "-50%",
          width: "0%",
          height: py,
          position: "absolute",
        });
      };
      tl.fromTo(
        borderRef.current,
        {
          top: 0,
          left: "50%",
          margin: "auto",
          x: "-50%",
          width: "0%",
          height: py,
          position: "absolute",
        },
        {
          width: "102%",
          duration: durationTop,
          delay:delayTop,
        }
      );
      tl.fromTo(
        borderRef.current,
        {
          top: 0,
          left: 0,
          x: "-1%",
          
        },
        {
          height: "102%",
          duration: durationSide,
          delay:delaySide,
        }
      );
      tl.fromTo(
          bottomRef.current,
          {
              position: "absolute",
              bottom: 0,
              left: "50%",
              x: "-50%",
              width: "100%",
              height:py,
          },        
          {
              width: "0%",
              duration: durationBottom,
              delay:delayBottom,
          },
      )
      Observer.create({
        target: observerRef.current,
        onHover: () => {
          if (tl.progress() === 0) {
              resetPosition();
              tl.restart();
          }
          else{
              tl.play();
          }
        },
        onHoverEnd: () => {
          gsap.set(borderRef.current, {
              left: "50%",
              x: "-50%",
          })
          tl.reverse();      
        },
      });
    });
    return (
      
        <div ref={observerRef} className={`relative overflow-hidden`} style={{paddingInline:px,paddingBlock:py,borderRadius:borderRadius}}>
          <div ref={borderRef} className={` -z-10 ${borderColor}`} />
          {children}
          <div ref={bottomRef} className={` ${bottomColor}`} />
        </div>
      
    );
  }