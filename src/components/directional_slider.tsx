import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { useRef } from "react";
export function DirectionalSlider({
  background = "bg-white",
  color = "bg-green-500",
  children,
}: {
  background?: string;
  color?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP, Observer);
  useGSAP(() => {
    function change(side: string) {
      let x = "0%";
      let y = "0%";
      if (side === "left") {
        x = "-100%";
      }
      if (side === "right") {
        x = "100%";
      }
      if (side === "top") {
        y = "-100%";
      }
      if (side === "bottom") {
        y = "100%";
      }
      if (side === "topLeft") {
        x = "-100%";
        y = "-100%";
      }
      if (side === "topRight") {
        x = "100%";
        y = "-100%";
      }
      if (side === "bottomLeft") {
        x = "-100%";
        y = "100%";
      }
      if (side === "bottomRight") {
        x = "100%";
        y = "100%";
      }
      gsap.fromTo(
        sliderRef.current,
        {
          x: x,
          y: y,
          borderRadius: "50%",
          display: "block",
          ease: "power4.in",
        },
        {
          x: "0%",
          y: "0%",
          top: "0%",
          left: "0%",
          duration: 1,
        }
      );
      gsap.to(sliderRef.current, {
        borderRadius: "0%",
        duration: 0.7,
        delay: 0.3,
      });
    }
    Observer.create({
      target: containerRef.current,
      type: "pointer",
      onHover: (self) => {
        const x = (self?.event as any)?.offsetX;
        const y = (self?.event as any)?.offsetY;
        const width = (self?.event?.target as any)?.offsetWidth;
        const height = (self?.event?.target as any)?.offsetHeight;
        const top = y <= height / 3 && x > width / 4 && x <= (width * 3) / 4;
        const bot = y > (height * 2) / 3 && x > width / 4 && x <= (width * 3) / 4;
        const left = x <= width / 2 && y > height / 3 && y <= (height * 2) / 3;
        const right = x > width / 2 && y > height / 3 && y <= (height * 2) / 3;
        const topLeft = x <= width / 4 && y <= height / 3;
        const topRight = x > (width * 3) / 4 && y <= height / 3;
        const botLeft = x <= width / 4 && y > (height * 2) / 3;
        const botRight = x > (width * 3) / 4 && y > (height * 2) / 3;
        if (top) change("top");
        else if(bot) change("bottom");
        else if(left) change("left");
        else if (right) change("right");
        else if (topLeft) change("topLeft");
        else if (topRight) change("topRight");
        else if (botLeft) change("bottomLeft");
        else if (botRight) change("bottomRight");
      },
      onHoverEnd: () => {
        if (sliderRef.current) sliderRef.current.style.display = "none";
      },
    });
  });
  return (
    <div
      ref={containerRef}
      className="relative  overflow-hidden   bg-transparent"
    >
      {children}
      <div className={`w-full h-full   absolute   -z-20    ${background}`} />
      <div
        ref={sliderRef}
        className={`w-full h-full   absolute  hidden -z-10  ${color}`}
      />
    </div>
  );
}
