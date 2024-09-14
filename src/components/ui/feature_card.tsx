import { BackgroundSlider } from "../background_slider";

export function FeatureCard({ card }: any) {
  return (
    <div
      className="flex flex-col justify-evenly md:justify-between  gap-4 px-4 py-2 md:py-8  bg-neutral-300  bg-cover bg-right rounded-xl aspect-[1.7] border border-gray-400  hover:rounded-3xl -skew-y-12  hover:skew-y-0  shadow-2xl hover:shadow hover:scale-105 shadow-gray-600  transition-all  duration-500"
      style={{ backgroundImage: `url(${card.imgage})` }}
    >
      <p className="md:w-[60%] text-primary text-2xl font-bold">{card.title}</p>
      <BackgroundSlider background="bg-lightred" color="bg-lightgreen" rounded="rounded-full" >
      <button className=" text-white text-sm font-bold w-max px-4 py-2 rounded-md">
        Shop Now
      </button>
      </BackgroundSlider>

    </div>
  );
}
